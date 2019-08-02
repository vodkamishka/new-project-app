import React from 'react';
import Budgets from './budgets/budgets';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';
import Navbar from './navbar/navbar';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <Route path='/' exact component={Budgets}/>
    </div>
    </Router>
  )
}

export default App;
