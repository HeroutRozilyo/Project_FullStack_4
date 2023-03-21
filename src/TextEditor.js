import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleKeyPress = (char) => {
    setText(text + char);
  };

  const handleBackspaceClick = () => {
    setText(text.slice(0, -1));
  };

  const handleEmojiClick = (emoji) => {
    setText(text + emoji);
  };

  const hebrewKeyboardLayout = [
    ['ק', 'ו', 'א', 'ה', 'ד', 'ג', 'כ', 'י', 'ט', 'ח'],
    ['ש', 'ז', 'ס', 'ב', 'הּ', 'נ', 'מ', 'צ', 'ת', 'ץ'],
    ['פ', 'ע', 'ר', 'כּ', 'ל', 'ך', 'ף', 'ן', 'ם', ','],
    ['-', '_', '!', '?', "'", '"', '(', ')', ' '],
  ];

  const emojiKeyboardLayout = [
    ['😀', '😊', '😂', '😍', '👍', '❤️', '🤔', '🤷', '💩', '🎉'],
    ['🐶', '🐱', '🐼', '🦁', '🦄', '🐙', '🐳', '🍔', '🍕', '🍰'],
    ['🍎', '🍇', '🍌', '🍉', '🍓', '🍆', '🍅', '🍟', '🍿', '🍺'],
    ['🌞', '🌈', '🌹', '🌺', '🌻', '🍁', '🍂', '🍃', '🎃', '🎄'],
  ];

  return (
    <div>
      <div>
        {hebrewKeyboardLayout.map((row, index) => (
          <div key={index}>
            {row.map((char, index) => (
              <button key={index} onClick={() => handleKeyPress(char)}>{char}</button>
            ))}
          </div>
        ))}
        <button onClick={handleBackspaceClick}>Backspace</button>
      </div>
      <div>
        {emojiKeyboardLayout.map((row, index) => (
          <div key={index}>
            {row.map((emoji, index) => (
              <button key={index} onClick={() => handleEmojiClick(emoji)}>{emoji}</button>
            ))}
          </div>
        ))}
      </div>
      <div>{text}</div>
    </div>
  );
}

export default App;
