import React from 'react';
import './css/KeyBoard.css'
import { EnglishKey, HebrewKeys, EmojiKeys } from '../src/KeyBords.js';

export class KeyBoardEBE extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        text:"",
      isEngKeyBoard: true,
      isEmojiKeyboard: false,
      isCapsLockOn: false,
      virtualKeys: EnglishKey,
      
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    
  }

  handleKeyPress = (key,stateKey) => {
    const  handleKeyPress  = this.props.handleKeyPress;
    const  spans  = this.props.spans;
    let textLastSpans="";
    if (spans.length > 0) 
    textLastSpans = spans[spans.length - 1].textContent;
    

  this.setState(
    prevState => {
    //  let newText = prevState.text; // Get text from previous state
     
      switch (key) {
        case 'backspace':
          if (textLastSpans.length > 0 && /^[\uD800-\uDFFF]$/.test(textLastSpans.slice(-1))) {
            textLastSpans = textLastSpans.slice(0, -2);
          } else {
            textLastSpans = textLastSpans.slice(0, -1);
          }
          break;
        case 'enter':
            textLastSpans += '\n';
          break;
        case 'tab':
            textLastSpans += '  ';
          break;
        case 'capsLock':
          this.setState({ isCapsLockOn: !this.state.isCapsLockOn });
          break;
        case 'shift':
          // do nothing
          break;
        case 'space':
            textLastSpans += ' ';
          break;
        case 'Hebrew':
         
          this.setState({ virtualKeys: HebrewKeys });
          this.setState({ isEngKeyBoard: !this.state.isEngKeyBoard });
          if (this.state.isEmojiKeyboard) {
            this.setState({ isEmojiKeyboard: !this.state.isEmojiKeyboard });
          }
          break;
        case 'English':
          
          this.setState({ virtualKeys: EnglishKey });
          this.setState({ isEngKeyBoard: !this.state.isEngKeyBoard });
          if (this.state.isEmojiKeyboard) {
            this.setState({ isEmojiKeyboard: !this.state.isEmojiKeyboard });
          }
          break;
        case '😀':
         
          this.setState({ isEmojiKeyboard: !this.state.isEmojiKeyboard });
          break;
        
        default:
          if (this.state.isCapsLockOn) {
            textLastSpans += key.toUpperCase();}

          else if(stateKey==="EmojiKey")
          {textLastSpans+=key;}
          else {
            textLastSpans += key;
          }
      }

      return { text: textLastSpans }; // Update text in the state
    },
    () => {
      handleKeyPress(this.state.text); // Call the callback function to update text in parent component
    }
    
  );
}

  

render() {
  return (
    <div className="App">
      <div className="keyboard">
        {this.state.isEmojiKeyboard ? (
          <div className="emoji-keyboard">
            {EmojiKeys.map((keyRow, rowIndex) => (
              <div key={rowIndex} className="key-row">
                {keyRow.map((emoji) => (
                  <button key={emoji} onClick={() => this.handleKeyPress(emoji,"EmojiKey")} className="emoji-button">
                    {emoji}
                  </button>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className={this.state.isEngKeyBoard ? 'english-keyboard' : 'hebrew-keyboard'}>
            {this.state.virtualKeys.map((keyRow, rowIndex) => (
              <div key={rowIndex} className="key-row">
                {keyRow.map((key) => (
                  <button key={key} onClick={() => this.handleKeyPress(key,this.state.isEngKeyBoard ? 'EnglishKey' : 'HebrewKeys')} className="keyboard-button">
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
              
                