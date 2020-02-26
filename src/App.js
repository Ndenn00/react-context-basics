import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleButton from './components/ToggleButton';

// firsty the provider wraps the children
// this allows the children access to the context
// context needs to be defined inside the children for use
// either through a provider, or the context itself

function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ToggleButton/>
        </ThemeContextProvider>
      </header>
    </div>
  );
}

export default App;
