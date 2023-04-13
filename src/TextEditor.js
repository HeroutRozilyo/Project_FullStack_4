import React, { Component } from "react";
import Toolbar from './ToolBar.js';
import ToolBarAll from "./ToolBarALl.js";
import { KeyBoardEBE } from './KeyBoardFull.js';
import './css/TextEditor.css'

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isEmoji:false,
      spans: [], // Store spans with different styles
      selectedStyle: {
        fontSize: "16px",
        color:"rgb(0, 0, 0)",
        fontStyle: "normal",
        fontWeight: "normal",
        textDecorationLine: "none",
        backgroundColor:  "rgb(249, 249, 249)",
        fontFamily:"Ariel",
       
        
      },
      
    };
    this.editorRef = React.createRef();
  }

  handleBlur = (e) => {
    const text = e.target.innerHTML;
    this.updateSpans(text);
  }

  handleFormatChange = (styleKey, value, all) => {
    this.setState({ selectedStyle: { ...this.state.selectedStyle, [styleKey]: value } }, () => {
        if (all) {
          this.setState(prevState => {
            const updatedSpans = prevState.spans.map(span => {
              span.style[styleKey] = value; // Update the style property based on styleKey
              return span;
            });
            return { spans: updatedSpans };
          });
        }
      });
  };
  

  updateSpans = (text) => {
    const { spans, selectedStyle } = this.state;
    const div = this.editorRef.current;
    const lastSpan = spans[spans.length - 1];
    let lastCharacter;
    
    // Extract the last character from the text
    if(/^[\uD800-\uDFFF]$/.test(text.slice(-1))){
        lastCharacter =text.slice(text.length - 2)
    }
    else
     lastCharacter = text.slice(-1);
  
    // If no spans exist or the style has changed, create a new span
    if (!lastSpan || ((!this.areStylesEqual(lastSpan.style, selectedStyle))&&(lastSpan.textContent.length<=text.length))) {
      // Create a new span and set its style properties
     
      const span = document.createElement("span");
      // List of style properties to assign
const styleProperties = ['fontSize','color','fontStyle','fontWeight','textDecorationLine','fontFamily','backgroundColor' ];
  // Loop through styleProperties and assign values to span.style
  styleProperties.forEach(styleProp => {
    span.style[styleProp] = selectedStyle[styleProp];
  });
      // Append the last character to the new span
     span.textContent = lastCharacter;
      // Append the new span to the div
      div.appendChild(span);
      // Store the new span in the spans array
      this.setState({ spans: [...spans, span] },()=>{ const lastSpanNew = this.state.spans[this.state.spans.length - 1];
        if (lastSpanNew.textContent === "") {this.delteSpan();}});
    } else {
        lastSpan.textContent = text;
      if(lastSpan.textContent==="")this.delteSpan()
    }
  };
  
  delteSpan(){
    const { spans } = this.state;
    const div = this.editorRef.current;
    
    if (spans.length > 0) {
      const lastSpan = spans[spans.length - 1];
      
      // Remove the last span from the DOM
      div.removeChild(lastSpan);
      
      // Remove the last span from the spans array in the state
      this.setState({ spans: spans.slice(0, spans.length - 1) },()=>{ if(this.state.spans.length-1>0)
        this.updateLastStayle(this.state.spans[this.state.spans.length-1].style)
        else 
        this.updateLastStayle("normal")});
     
    }
  }
  updateLastStayle=(style)=>{
    if(style!=="normal"){
      this.setState({selectedStyle:style})
  }
  else
  {
    const newStyle= {
        fontSize: "16px",
        color:"rgb(0, 0, 0)",
        fontStyle: "normal",
        fontWeight: "normal",
        textDecorationLine: "none",
        backgroundColor:  "rgb(249, 249, 249)",
        fontFamily:"Ariel",
    }
    this.setState({selectedStyle:newStyle})
  }
}
  areStylesEqual = (style1, style2) => {
    return (
      style1.fontSize === style2.fontSize &&
      style1.color === style2.color &&
      style1.fontStyle === style2.fontStyle &&
      style1.fontWeight === style2.fontWeight &&
      style1.textDecorationLine === style2.textDecorationLine &&
      style1.fontFamily === style2.fontFamily &&
      style1.backgroundColor === style2.backgroundColor 
      
    );
  };
  
  
  

  handleKeyPress = (text) => {
    this.updateSpans(text);
  }

  makeTextUppercase=(spansNew)=>{
    this.setState({spans:spansNew});
  }
  deleteAll=(spansNew)=>{
    
    this.setState({spans:spansNew});
    this.updateLastStayle("normal")
  }

  render() {
    return (
      <div className="text-editor-container"> {/* Apply a class to the parent div */}
        <Toolbar
          selectedStyle={this.state.selectedStyle}
          onFormat={this.handleFormatChange}
          className="toolbar"
        />
        
        <div className="DivAllAndText">
        <div
          ref={this.editorRef}
          contentEditable={true}
          onInput={this.handleBlur}
          className="editor-content" // Apply a class to the editor content div
        />
        <ToolBarAll 
        spans={this.state.spans} 
        makeTextUppercase={this.makeTextUppercase}
        deleteAll={this.deleteAll}
        className="toolbar-all"
        selectedStyle={this.state.selectedStyle}
        />
        </div>
        
        <KeyBoardEBE
          editorRef={this.editorRef}
          handleKeyPress={this.handleKeyPress}
          spans={this.state.spans} 
          className="keyboard-content" // Apply a class to the keyboard div
        />
      </div>
    );
  }
}

export default TextEditor;