import React from 'react';
import Budgets from './components/budgets/budgets';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';

function App() {
  return (
    <Router>
    <div className="app">
       <Route path='/' exact component={Budgets}/>
    </div>
    </Router>
  )
}

export default App;
