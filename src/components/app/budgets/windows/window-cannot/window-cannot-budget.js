import React from 'react';
import './window-cannot-budget.css';
import CannotBudget from './cannot-budget/cannot-budget';

export default function WindowCannotBudget({length, cannotEditDeleteToggled}) {
    let h = (length-9)*72;
    const style = {height: length > 10 ? `calc(100vh + ${h}px + 50px)` : `100vh`}
    return (
        <div className = 'window-cannot-budget'
        style={style}
        >
           <CannotBudget 
            cannotEditDeleteToggled = {cannotEditDeleteToggled}
           /> 
        </div>
    )
}
