import React from 'react';
import './Button.css';

export default function Button({ className, children }) {
  return (
    <button className={className}>
        {children}
    </button>
  )
}
