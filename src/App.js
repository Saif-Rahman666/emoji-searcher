import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import Emoji from './components/Emoji';
import RecentEmojis from './components/RecentEmoji';
import emojiList from './components/EmojiList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentEmojis, setRecentEmojis] = useState([]);

  useEffect(() => {
    const recentEmojisString = window.localStorage.getItem('recentEmojis');

    if (recentEmojisString) {
      const recentEmojisArray = JSON.parse(recentEmojisString);
      setRecentEmojis(recentEmojisArray);
    }
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("hello");
    const matchingEmoji = emojiList.find((emoji) => {
      return emoji.markup === searchTerm;
    });
    console.log("log", matchingEmoji);
    if (matchingEmoji) {
      
      const newRecentEmojis = [matchingEmoji.emoji, ...recentEmojis.slice(0, 4)];
      setRecentEmojis(newRecentEmojis);
      
      if (window !== undefined) {
        window.localStorage.setItem('recentEmojis', JSON.stringify(newRecentEmojis));
      }
      
    }
    

    setSearchTerm('');
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/recent">Recently searched</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route exact path="/"
            element = {<SearchEmo 
              searchTerm={searchTerm} 
              onSearchTermChange={handleSearchTermChange}
              onSearchSubmit={handleSearchSubmit}
              />}
        />

          
          <Route path="/recent"
            element = {<RecentEmojis recentEmojis={recentEmojis}/>}
          />
  
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;

const SearchEmo = ({
  searchTerm, onSearchTermChange, onSearchSubmit
}) => {
  return  (
    <div>
            <SearchBox
              searchTerm={searchTerm}
              onSearchTermChange={onSearchTermChange}
              onSearchSubmit={onSearchSubmit}
            />
            <Emoji searchTerm={searchTerm} />
    </div>
  )
  
    
}

