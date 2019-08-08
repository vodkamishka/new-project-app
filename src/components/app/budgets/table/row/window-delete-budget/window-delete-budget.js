import React from 'react';
import './window-delete-budget.css';


export default function WindowDeleteBudget ({showWindowDeleteToggle, mainDeleteWindowToggle }) {
    return (
        <div className='window-delete-budget'>
            <div className ='delete-close-modal'>
                <img 
            onClick = {showWindowDeleteToggle}
            src='images/icons/close-modals.svg' 
            alt = 'close-modals'
            /></div>
            <div className='delete-open'>Open</div>
            <div className = 'delete-edit'>
                <div>Edit <span>(request a right)</span></div>
                <div><img src='images/icons/request.svg' alt='close-modals'/></div>
                </div>
            <div 
            onClick = { () => {
                mainDeleteWindowToggle()
                
            }}
            className = ' delete-delete'>Delete</div>
        </div>
    )
        
    
}