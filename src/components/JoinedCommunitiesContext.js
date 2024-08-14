import React, { createContext, useState, useContext } from 'react';

// Create a context for joined communities
const JoinedCommunitiesContext = createContext();

// Provider component
export const JoinedCommunitiesProvider = ({ children }) => {
  const [joinedCommunities, setJoinedCommunities] = useState([]);

  // Function to add a community to the list
  const addCommunity = (community) => {
    setJoinedCommunities(prevCommunities => [...prevCommunities, community]);
  };

  return (
    <JoinedCommunitiesContext.Provider value={{ joinedCommunities, addCommunity }}>
      {children}
    </JoinedCommunitiesContext.Provider>
  );
};

// Custom hook to use the JoinedCommunitiesContext
export const useJoinedCommunities = () => useContext(JoinedCommunitiesContext);
