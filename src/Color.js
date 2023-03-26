import React, { Component } from "react";
import '../src/css/color.css'

 export class TextColorPicker extends Component {
    
    handleColorChange = (color) => {
        this.props.onTextColorChange(color);
      }
    
      selectTextColor(color) {
        this.setState({ textColor: color }, () => {
          this.props.onTextColorSelected(this.state.textColor);
        });
      }
    
      render() {
        return (
          <div className="textColorSelector">
             <h4>Select Text Color:</h4>
             <button className="textColorButton black" onClick={() => this.handleColorChange('black')}>Black</button>
<button className="textColorButton red" onClick={() => this.handleColorChange('red')}>Red</button>
<button className="textColorButton green" onClick={() => this.handleColorChange('green')}>Green</button>
<button className="textColorButton blue" onClick={() => this.handleColorChange('blue')}>Blue</button>
          </div>
        );
      }
    }
    
    
    



