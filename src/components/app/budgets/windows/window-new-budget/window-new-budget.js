import React from 'react';
import './window-new-budget.css';
import NewBudget from './new-budget/new-budget';

export default function WindowNewBudget({newBudgetToggled, createBudgets}) {
    return (
        <div className = 'window-new-budget'>
           <NewBudget 
           newBudgetToggled = { newBudgetToggled } 
           createBudgets = { createBudgets }
    
           /> 
        </div>
    )
}
