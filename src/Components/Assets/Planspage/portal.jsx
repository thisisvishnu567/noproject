import React, { useState, useEffect } from 'react';
import './Portal.css';

// Function to fetch and parse data
const fetchData = async () => {
  try {
    const response = await fetch('/plandata.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return {};
  }
};

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [category, setCategory] = useState('Prepaid');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadPlans = async () => {
      const data = await fetchData();
      if (data[category]) {
        setPlans(data[category]);
      }
    };
    loadPlans();
  }, [category]);

  useEffect(() => {
    const filteredPlans = plans.filter(plan =>
      plan.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPlans(filteredPlans);
  }, [searchQuery]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <span>9791473136 <a href="/change">Change</a></span>
        <div>
          <input
            type="text"
            placeholder="Search for a pack or add-ons"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="content">
        <h2>Recharge Packs</h2>
        <div className="category-buttons">
          <button onClick={() => handleCategoryChange('Prepaid')}>Prepaid</button>
          <button onClick={() => handleCategoryChange('Postpaid')}>Postpaid</button>
          <button onClick={() => handleCategoryChange('DTH')}>DTH</button>
          <button onClick={() => handleCategoryChange('Fiber')}>Fiber</button>
          <button onClick={() => handleCategoryChange('AirtelBlack')}>Airtel Black</button>
        </div>
        <div className="recharge-packs">
          {plans.map((plan, index) => (
            <div className="pack" key={index}>
              <div className="pack-header">
                <span className="pack-price">{plan.price}</span>
                <span className="pack-details">
                  {plan.data ? `${plan.data} | ${plan.validity}` : `${plan.channels ? plan.channels : plan.speed} | ${plan.validity}`}
                </span>
              </div>
              <a href="/details" className="view-details">VIEW DETAILS</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
