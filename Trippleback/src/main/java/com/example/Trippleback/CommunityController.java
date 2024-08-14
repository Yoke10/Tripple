package com.example.Trippleback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CommunityController {

    @Autowired
    private CommunityService communityService;

    @PostMapping("/join-community")
    public ResponseEntity<?> joinCommunity(@RequestBody Community community) {
        communityService.addCommunity(community);
        return ResponseEntity.ok().build();
    }
}
