import React from 'react';

const Input = (title, valueGuy, func) => {
  return (
    <div className="input">
      <input value={valueGuy} onChange={func} />
      <label>{title}</label>
    </div>
  )
}

export default Input;
