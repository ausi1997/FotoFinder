import React from "react";
import './App.css';
import Search from "./components/search/search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
function App() {
  return (
    <MuiThemeProvider>
    <div>
   <Search></Search>
   </div>
   </MuiThemeProvider>
  );
}

export default App;
