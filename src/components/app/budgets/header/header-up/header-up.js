import React from 'react';
import './header-up.css';

export default function HeaderUp({ newBudgetToggled}) {
    return (
        <div className='budgets__header_header-up'>
            <div className='title-budgets'>Budgets</div>
            <div>
                <button 
                className='new-budgets'
                onClick = {() => {
                    newBudgetToggled ()
                }} 
                >
                    <span className='button_plus'>+</span>
                    <span>New budget</span>
                </button>
            </div>
        </div>
    )
}
