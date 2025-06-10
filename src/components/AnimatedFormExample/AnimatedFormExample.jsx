import React, { useState } from 'react';
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper';
import './animated-form-example.css';

const AnimatedFormExample = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="animated-form-example-container">
      <button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Hide Form' : 'Show Form'}
      </button>
      <AnimatedWrapper isVisible={isFormVisible} animationType="slideDown">
        <form className="animated-form">
          <h3>Animated Form</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </AnimatedWrapper>
    </div>
  );
};

export default AnimatedFormExample;
