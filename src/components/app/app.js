import React from 'react';
import BudgetsContainer from './budgets/budgets-container';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';
import Navbar from './navbar/navbar';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      {/*<Route path='/' exact component={BudgetsContainer}/>*/}
      <BudgetsContainer />git status
    </div>
    </Router>
  )
}

export default App;
