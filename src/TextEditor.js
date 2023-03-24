import React from 'react';
import '../src/css/KeyBoard.css';
import {virtualKeys} from '../src/KeyBords.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isEngKeyBoard: true,
      isEmojiKeyboard: false,
      isCapsLockOn:false,
    };

    

    this.emojiKeys = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎'];

    this.hebrewKeys = ['פ', 'ם', 'ן', 'ו', 'ה', 'ד', 'ג', 'ב', 'א', 'ש', 'ס', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'צ', 'ק', 'ר', 'ת', 'ף'];

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
    this.handleKeyboardChange = this.handleKeyboardChange.bind(this);
  }

  handleKeyPress(key) {
    let newText = this.state.text;

    switch (key) {
      case 'backspace':
        newText = newText.slice(0, -1);
        break;
      case 'enter':
        newText += '\n';
        break;
      case 'tab':
        newText += '  ';
        break;
      case 'capsLock':
        this.setState({isCapsLockOn:!this.state.isCapsLockOn});
        
        break;
      case 'shift':
        // do nothing
        break;
      case 'space':
        newText += ' ';
        break;
      default:
        if(this.state.isCapsLockOn){ newText+=key.toUpperCase();}
         else newText += key;
       
    }

    this.setState({
      text: newText,
    });
  }

  handleEmojiClick(emoji) {
    const newText = this.state.text + emoji;
    this.setState({
      text: newText,
    });
  }

  handleKeyboardChange() {
    const isEngKeyBoard = !this.state.isEngKeyBoard;
    const isEmojiKeyboard = !this.state.isEmojiKeyboard;

    this.setState({
      isEngKeyBoard: isEngKeyBoard,
      isEmojiKeyboard: isEmojiKeyboard,
    });
  }

  render() {
    return (
      <div className="App">
        <textarea className="text-editor" autofocus  value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}></textarea>
<div className="keyboard">
{this.state.isEmojiKeyboard ? (
<div className="emoji-keyboard">
{this.emojiKeys.map((emoji) => (
<button key={emoji} onClick={() => this.handleEmojiClick(emoji)}>
{emoji}
</button>
))}
</div>
) : (
<div className={this.state.isEngKeyBoard ? 'english-keyboard' : 'hebrew-keyboard'}>
{virtualKeys.map((keyRow, rowIndex) => (
<div key={rowIndex} className="key-row">
{keyRow.map((key) => (
<button key={key} onClick={() => this.handleKeyPress(key)}>
{key}
</button>
))}
</div>
))}
</div>
)}
<div className="keyboard-toggle" onClick={this.handleKeyboardChange}>
{this.state.isEmojiKeyboard ? 'ABC' : this.state.isEngKeyBoard ? 'עבר' : 'ABC'}
</div>
</div>
</div>
);
}
}

export default App;
