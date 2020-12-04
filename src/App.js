import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Root from './Root';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Provider store={ store }>
      <div className="App">
        <Router>
          <NavBar></NavBar>
          <Root></Root>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
