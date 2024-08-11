import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import plansData from './plandata.json';
import './Pl.css';
import { initializePointerTracking } from './pointerTracking';

const Plans = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setActiveCategory((prevCategory) => (prevCategory === category ? '' : category));
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setInputValue(value);
  };

  useEffect(() => {
    if (inputValue.length === 10) {
      navigate('/portal');
    }
  }, [inputValue, navigate]);

  useEffect(() => {
    initializePointerTracking();
  }, [activeCategory]);

  return (
    <div className="buttons-input-container">
      <h1 className="recharge">Recharge or pay bills</h1>

      <div className="button-group">
        {Object.keys(plansData).map((category) => (
          <button
            key={category}
            className={`button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter mobile number"
        className="input-field"
      />

      {activeCategory && (
        <div className="plans-display" key={activeCategory}>
          {plansData[activeCategory].map((plan, index) => (
            <div key={index} className="plan-item" style={{ '--i': index }}>
              <h2>{plan.name}</h2>
              <p>Price: {plan.price}</p>
              <p>{plan.data ? `Data: ${plan.data}` : null}</p>
              <p>{plan.speed ? `Speed: ${plan.speed}` : null}</p>
              <p>{plan.channels ? `Channels: ${plan.channels}` : null}</p>
              <p>{plan.benefits ? `Benefits: ${plan.benefits}` : null}</p>
              <p>Validity: {plan.validity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Plans;
