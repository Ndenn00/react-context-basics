import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// use context in a stateless functional component

const ToggleButton = () => {
  const context = useContext(ThemeContext);
  return (
    <button onClick={context.toggleTheme}>Toggle Theme</button>
  );
};

export default ToggleButton;