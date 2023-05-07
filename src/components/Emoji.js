import React from 'react';
import emojiList from './EmojiList';

const Emoji = ({ searchTerm }) => {
  const filteredEmojis = emojiList.filter((emoji) => {
    return emoji.markup.includes(searchTerm);
  });

  if (filteredEmojis.length > 0) {
    return <div>{filteredEmojis[0].emoji}</div>;
  } else {
    return <div>No emoji found</div>;
  }
};

export default Emoji;
