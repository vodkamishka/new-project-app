import React from 'react';
import './cannot-budget.css';


export default function CannotBudget ({cannotEditDeleteToggled}) {

    return (
        <div className='cannot-budget'>
            <div className='cannot-budget-title'>
              Excuse me
            </div>
            <div className='cannot-budget-text'>
            You cannot edit or delete this budget line, because it contains projects
            </div>

            <button className='cannot-thank-btn'
            onClick={cannotEditDeleteToggled}
            ><span>Thank you</span></button>
        </div>

    )
}

