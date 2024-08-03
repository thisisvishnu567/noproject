import React, { useState } from 'react';
import './Pl.css';

const Plans = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setInputValue(value);
  };

  return (
    <div className="buttons-input-container">
      
      <h1 className="recharge">Recharge or pay bills</h1>

      <div className="button-group">
        <button className="button">Prepaid</button>
        <button className="button">Postpaid</button>
        <button className="button">DTH</button>
        <button className="button">Fiber</button>
        <button className="button">Airtel Black</button>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter mobile number"
        className="input-field"
      />
    </div>
  );
};

export default Plans;
