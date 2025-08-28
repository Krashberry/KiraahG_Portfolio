import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import TheDev from '../assets/images/thedev.JPG';

const SpringDrop = () => {
  const springs = useSpring({
    from: { x: -100 },
    to: { x: 687 },
  });
  return (
    <animated.div
      style={{
        width: 500,
        height: 500,
        marginTop: 150,
        background: '#ffff',
        borderRadius: 8,
        ...springs,
      }}
    >
      <img
        src={TheDev}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </animated.div>
  );
};

export default SpringDrop;
