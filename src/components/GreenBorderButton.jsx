import React from 'react';
import './GreenBorderButton.css';

const GreenBorderButton = ({ text, onClick }) => {
  return (
    <button className="green-border-button" onClick={onClick}>
      {text} <span className="arrow-icon">→</span>
    </button>
  );
};

export default GreenBorderButton;
