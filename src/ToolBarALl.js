import React, { Component } from "react";
import './css/ToolBarAll.css'
class TollBarAll extends Component {
  
    constructor(props) {
        super(props);
        
        };
      
    
    
      makeTextUppercase = () => {
        const { spans } = this.props;
        
      
        spans.forEach(span => {
          const text = span.textContent;
          span.textContent = text.toUpperCase();
        });
        this.props.makeTextUppercase(spans);
      };

      makeTextLowercase = () => {
        const { spans } = this.props;
        
      
        spans.forEach(span => {
          const text = span.textContent;
          span.textContent = text.toLowerCase();
        });
        this.props.makeTextUppercase(spans);
      };

      DeleteAll = () => {
        
        const { spans } = this.props;

        spans.forEach(span => {
          span.textContent ="";
         
        });
        this.props.deleteAll([]);
      };

      
  
    
  

 

  render() {
   
    return (
      <div className="toolbar-all-container"> 
      <button onClick={this.makeTextUppercase}>Upper All</button>
      <button onClick={this.makeTextLowercase}>Lower All</button>
      <button onClick={this.DeleteAll}>Clear All</button>
      
        
    </div>
    );
  }
}
export default TollBarAll

