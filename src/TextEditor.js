import React, { useState } from 'react';
import '../src/css/KeyBoard.css';

const App = () => {
  const [text, setText] = useState('');
  const [isEmojiKeyboard, setIsEmojiKeyboard] = useState(false);

  const handleKeyPress = (key) => {
    setText(text + key);
  };

  const handleBackspace = () => {
    setText(text.slice(0, -1));
  };

  const handleEnter = () => {
    setText(text + '\n');
  };

  const handleSpace = () => {
    setText(text + ' ');
  };

  const handleEmojiClick = (emoji) => {
    setText(text + emoji);
  };

  const toggleKeyboard = () => {
    setIsEmojiKeyboard(!isEmojiKeyboard);
  };

  const virtualKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const emojiKeys = ['😀', '😂', '😍', '👍', '👎', '💩', '🍔', '🍕', '🍟', '🌮', '🍣', '🍩', '❤️', '👀', '🌞', '🌈', '🚀', '🎉', '🎁'];

  return (
    <div className="App">
      <textarea className="text-editor" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div className="keyboard">
        {isEmojiKeyboard ?
          emojiKeys.map((emoji) => (
            <button key={emoji} onClick={() => handleEmojiClick(emoji)}>
              {emoji}
            </button>
          )) :
          virtualKeys.map((key) => (
            <button key={key} onClick={() => handleKeyPress(key)}>
              {key}
            </button>
          ))
        }
        <button onClick={handleBackspace}>Delete</button>
        <button onClick={handleEnter}>Enter</button>
        <button onClick={handleSpace}>Space</button>
        <button onClick={toggleKeyboard}>{isEmojiKeyboard ? 'Virtual Keyboard' : 'Emoji Keyboard'}</button>
      </div>
    </div>
  );
};

export default App;
