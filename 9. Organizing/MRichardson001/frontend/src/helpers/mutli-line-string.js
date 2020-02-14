import React from "react";

const MultiLineString = (text) => {
  if (!text) {
    return null;
  }
  return text.split('\n').map((item, i) => <span style={{marginBottom: '0px', display: 'block'}} key={i}>{item}</span>)
}

export default MultiLineString;
