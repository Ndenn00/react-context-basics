import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

// this uses the context consumer - can be used on functional components
// provider still needs to wrap the component

// render is not a function errors happen often here
// cosumers only have one child, 
// there are no spaces allowed in between the context and the function 
const BookList = props => {
 
  return ( 
    <ThemeContext.Consumer>{context => {
      const {isLightTheme, light, dark} = context;
      const theme = isLightTheme ? light : dark; 
      return (
        <div 
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
        >
          <ul>
            <li style={{ background: theme.ui }}>the way of kings</li>
            <li style={{ background: theme.ui }}>the name of the wind</li>
            <li style={{ background: theme.ui }}>the final empire</li>
          </ul>
        </div>
      )
    }}
    </ThemeContext.Consumer>
  );
};
 
export default BookList;