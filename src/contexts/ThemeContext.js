import React, {createContext, Component} from 'react'; 

export const ThemeContext = createContext(); 


// context.provider is defined at thsi part
// but the use of the provider, which informs the children 
// is in app, which uses the class ThemeContextProvider
// Context.Provider vs ContextProvider
export default class ThemeContextProvider extends Component {

  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }

  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }

  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
