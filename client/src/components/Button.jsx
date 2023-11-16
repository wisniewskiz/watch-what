import React from 'react';
import './Button.css';

export default function Button({ className, children }) {
  const handleClick = () => {
  }
  return (
    <button className={className} onClick={handleClick}>
        {children}
    </button>
  )
}
