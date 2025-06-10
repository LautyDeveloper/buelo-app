import React, { useState } from 'react';
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper';
import './expandable-section-example.css';

const ExpandableSectionExample = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="expandable-section-container">
      <button onClick={toggleContentVisibility} className="expandable-header">
        {isContentVisible ? 'Collapse Section' : 'Expand Section'}
      </button>
      <AnimatedWrapper isVisible={isContentVisible} animationType="fade">
        <div className="expandable-content">
          <h4>Expandable Content</h4>
          <p>
            This is some placeholder text within an expandable section.
            It uses the AnimatedWrapper component to smoothly fade in and out.
            You can put any content you like here, such as text, images, or other components.
          </p>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default ExpandableSectionExample;
