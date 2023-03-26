
import React from 'react';
import {KeyBoardEBE} from './KeyBoardFull.js'
import {TextColorPicker} from '../src/Color.js'
 export default class  TextEditorFull extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          textColor: 'black'
        }
        
      }
      handleTextColorChange = (color) => {
        this.setState({
          textColor: color
        });
      }
    render() {
        return(
           <div>

           
<KeyBoardEBE textColorProp={this.state.textColor}></KeyBoardEBE>
          <div> <h1>tryyyy</h1></div>
          <TextColorPicker onTextColorChange={this.handleTextColorChange}></TextColorPicker>
          </div> 
                
            
        )

        
        
    }
}
//export default TextEditorFull ;