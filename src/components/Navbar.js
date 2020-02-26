import React, { Component } from 'react';

import { ThemeContext} from '../contexts/ThemeContext';

// uses context in the class component style
// bring in the context only, not the context provider

class Navbar extends Component {
  static contextType = ThemeContext; 

  
  render() { 
    // all context is accessible from 'context' 
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark; 

    return ( 
      <nav style={{background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;