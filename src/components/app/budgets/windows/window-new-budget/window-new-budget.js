import React from 'react';
import './window-new-budget.css';
import NewBudget from './new-budget/new-budget';

export default function WindowNewBudget({newBudgetToggled, createBudget, length}) {
    let h = (length-9)*72;
    const style = {height: length > 10 ? `calc(100vh + ${h}px + 50px)` : `100vh`}
    return (
        <div className = 'window-new-budget'
        style = {style}
        >
           <NewBudget 
           newBudgetToggled = {newBudgetToggled} 
           createBudget = {createBudget}
           length = {length}
           /> 
        </div>
    )
}
