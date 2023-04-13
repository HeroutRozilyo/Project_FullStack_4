// Toolbar.js
import React, { Component } from "react";
import './css/color.css'

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeForAll: false,
      selectedStyle: {
        // initialize the selected style with default values
        fontWeight: "normal",
        fontStyle: "normal",
        textDecorationLine: "none",
        color: "black",
        backgroundColor: "white",
        fontSize: "16px",
        fontFamily: "Arial"
      }
    };
  }

  handleStyleChange = (styleKey, value) => {
    const { onFormat } = this.props;
      onFormat(styleKey, value, this.state.changeForAll); // Pass styleKey, value, and null as range to the onFormat function
    
    // Update the selected style in the state
    this.setState(prevState => ({
      selectedStyle: {
        ...prevState.selectedStyle,
        [styleKey]: value
      }
    }));
  };

  handleCheckboxChange = (event) => {
    this.setState({ changeForAll: event.target.checked });
  };

  render() {
    const { selectedStyle } = this.props;
    const { fontWeight, fontStyle, textDecorationLine, color, backgroundColor, fontSize, fontFamily } = selectedStyle;
    const { changeForAll } = this.state;
    return (
      <div className="toolbar">
        <button
          className={fontWeight === "bold" ? "selected" : ""}
          onClick={() => this.handleStyleChange("fontWeight", fontWeight === "bold" ? "normal" : "bold")}
        >
          <strong>B</strong>
        </button>
        <button
          className={fontStyle === "italic" ? "selected" : ""}
          onClick={() => this.handleStyleChange("fontStyle", fontStyle === "italic" ? "normal" : "italic")}
        >
          <em>I</em>
        </button>
        <button
          className={textDecorationLine === "underline" ? "selected" : ""}
          onClick={() =>
            this.handleStyleChange("textDecorationLine", textDecorationLine === "underline" ? "none" : "underline")
          }
        >
          <u>U</u>
        </button>
        <select
          value={color}
          onChange={(e) => this.handleStyleChange("color", e.target.value)}
        >
         <option value="black" style={{ color: 'black' }}>Black</option>
  <option value="red" style={{ color: 'red' }}>Red</option>
  <option value="blue" style={{ color: 'blue' }}>Blue</option>
  <option value="green" style={{ color: 'green' }}>Green</option>
  <option value="white" style={{ color: 'white', backgroundColor: 'black' }}>White</option>
  <option value="yellow" style={{ color: 'yellow', backgroundColor: 'black' }}>Yellow</option>
  <option value="lightblue" style={{ color: 'lightblue', backgroundColor: 'black' }}>Light Blue</option>
  <option value="lightgreen" style={{ color: 'lightgreen', backgroundColor: 'black' }}>Light Green</option>
        </select>
        <select
          value={backgroundColor}
          onChange={(e) => this.handleStyleChange("backgroundColor", e.target.value)}
        >
          <option value="black" style={{ backgroundColor: 'black', color:'white' }}>Black</option>
  <option value="red" style={{ backgroundColor: 'red' }}>Red</option>
  <option value="blue" style={{ backgroundColor: 'blue' }}>Blue</option>
  <option value="green" style={{ backgroundColor: 'green' }}>Green</option>
  <option value="white" style={{ backgroundColor: 'white', color: 'black' }}>White</option>
  <option value="yellow" style={{ backgroundColor: 'yellow'}}>Yellow</option>
  <option value="lightblue" style={{ backgroundColor: 'lightblue'}}>Light Blue</option>
  <option value="lightgreen" style={{ backgroundColor: 'lightgreen'}}>Light Green</option>
        </select>
        <select
          value={fontSize}
          onChange={(e) => this.handleStyleChange("fontSize", e.target.value)}
        >
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="22px">22px</option>
          <option value="24px">24px</option>
          <option value="28px">28px</option>
          <option value="32px">32px</option>
          <option value="70px">70px</option>
        </select>
        <select
          value={fontFamily}
          onChange={(e) => this.handleStyleChange("fontFamily", e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="David">David</option>
          <option value="Arial Hebrew">Arial Hebrew</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={changeForAll}
            onChange={this.handleCheckboxChange}
          />
          Change for all
        </label>
      </div>
    );
  }
  
}
export default Toolbar