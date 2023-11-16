import React from 'react'
import './Input.css';

export default function Input({ name, className, placeholder}) {
  return (
    <input type="text" name={name} className={className} placeholder={placeholder}/>
  )
}
