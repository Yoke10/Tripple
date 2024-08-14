package com.example.Trippleback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommunityService {

    @Autowired
    private CommunityRepository communityRepository;

    public void addCommunity(Community community) {
        communityRepository.save(community);
    }
}
