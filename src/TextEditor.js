import React from 'react';
import '../src/css/KeyBoard.css';
import {EnglishKey,HebrewKeys,EmojiKeys} from '../src/KeyBords.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isEngKeyBoard: true,
      isEmojiKeyboard: false,
      isCapsLockOn:false,
      virtualKeys:EnglishKey,
      direction: 'ltr' // or 'rtl'
    };

    

    

    this.handleKeyPress = this.handleKeyPress.bind(this);
    
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
        case 'Hebrew':
           this.setState({virtualKeys:HebrewKeys});
            this.setState({isEngKeyBoard:!this.state.isEngKeyBoard});
            if(this.state.isEmojiKeyboard){
                this.setState({isEmojiKeyboard:!this.state.isEmojiKeyboard});
            }
            break;
        
        case 'English':
            this.setState({virtualKeys:EnglishKey});
            this.setState({
                isEngKeyBoard:!this.state.isEngKeyBoard
                });
                if(this.state.isEmojiKeyboard){
                    this.setState({isEmojiKeyboard:!this.state.isEmojiKeyboard});
                }
            break;
        
        case '😀':
            this.setState({isEmojiKeyboard:!this.state.isEmojiKeyboard});
            break;
        case '←':
            this.setState({direction:'rtl'});
            break;
        case '→':
            this.setState({direction:'ltr'});
            break;

      default:
        if(this.state.isCapsLockOn){ newText+=key.toUpperCase();}
         else newText += key;
       
    }

    this.setState({
      text: newText,
    });
  }

  

  render() {
    return (
      <div className="App">
        <textarea className="text-editor" dir={this.state.direction}  value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}></textarea>
<div className="keyboard">
{this.state.isEmojiKeyboard ? (
<div className="emoji-keyboard">
{EmojiKeys.map((keyRow,rowIndex)=><div key={rowIndex} className="key-row">
    {keyRow.map((emoji) => (
<button key={emoji} onClick={() => this.handleKeyPress(emoji)}>
{emoji}
</button>
))}
</div>
)}
</div>) : (
<div className={this.state.isEngKeyBoard ? 'english-keyboard' : 'hebrew-keyboard'}>
{this.state.virtualKeys.map((keyRow, rowIndex) => (
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

</div>
</div>

);
}
}

export default App;
