import React from "react";
import "./skills2.scss";

const ProgressBar = (props) => {
    const { name, bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '80%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 40,
      
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      
    }
  
    const labelStyles = {
      padding: 0,
      color: 'white',
      margin: 10,
      
    }
  
    return (
      <div className="bars" style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${name} ${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;