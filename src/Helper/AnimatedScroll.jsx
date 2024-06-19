import React from 'react';
import Lottie from 'lottie-react';
import animationData from './animationData.json';

const AnimatedScroll = () => {
  return (
    <div className='animatedScroll'>
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
};

export default AnimatedScroll;
