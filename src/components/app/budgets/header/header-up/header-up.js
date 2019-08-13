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
                    <div className='button_plus'>
                    <div><img src='images/icons/plus.svg' alt='plus' /></div>
                    <div>New budget</div>
                    </div>
                </button>
            </div>
        </div>
    )
}
