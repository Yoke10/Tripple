package com.example.Trippleback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JoinedCommunityService {

    @Autowired
    private JoinedCommunityRepository joinedCommunityRepository;

    public List<Community> getAllJoinedCommunities() {
        return joinedCommunityRepository.findAll();
    }
}
