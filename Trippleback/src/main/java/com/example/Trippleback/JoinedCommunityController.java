package com.example.Trippleback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class JoinedCommunityController {

    @Autowired
    private JoinedCommunityService joinedCommunityService;

    @GetMapping("/joined-communities")
    public ResponseEntity<List<Community>> getJoinedCommunities() {
        List<Community> communities = joinedCommunityService.getAllJoinedCommunities();
        return ResponseEntity.ok(communities);
    }
}

