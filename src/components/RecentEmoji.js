import React from 'react';

const RecentEmojis = ({ recentEmojis }) => {
  return (
    <div>
      <h2>Recently searched emojis</h2>
      <ul>
        {recentEmojis.map((emoji, index) => (
          <li key={index}>{emoji}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentEmojis;
