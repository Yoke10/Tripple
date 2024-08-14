package com.example.Trippleback;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "http://localhost:3000")  // Adjust according to your frontend URL
public class MessageController {
    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping
    public List<Message> getMessages() {
        return messageRepository.findAll(); // Retrieve all messages
    }

    @PostMapping
    public Message sendMessage(@RequestBody Message message) {
        message.setReply(false); // Ensure sent messages are not replies
        return messageRepository.save(message);
    }

    @PostMapping("/reply")
    public Message sendReply(@RequestBody Message message) {
        message.setReply(true); // Mark as a reply
        return messageRepository.save(message);
    }

    @PutMapping("/{id}")
    public Message updateMessage(@PathVariable Long id, @RequestBody Message updatedMessage) {
        Optional<Message> optionalMessage = messageRepository.findById(id);

        if (optionalMessage.isPresent()) {
            Message existingMessage = optionalMessage.get();
            existingMessage.setText(updatedMessage.getText());
            existingMessage.setSender(updatedMessage.getSender());
            existingMessage.setReply(updatedMessage.isReply());
            return messageRepository.save(existingMessage);
        } else {
            // Handle the case where the message with the given id does not exist
            throw new RuntimeException("Message with id " + id + " not found");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        messageRepository.deleteById(id);
    }
}
