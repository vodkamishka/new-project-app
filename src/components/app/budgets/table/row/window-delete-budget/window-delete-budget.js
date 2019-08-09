import React from 'react';
import './window-delete-budget.css';


export default function WindowDeleteBudget ({deleteWindowsToggled, mainDeleteWindowToggle, showDeleteWindows, id }) {
    
    return (
        <div className={showDeleteWindows === id ? 'window-delete-budget': 'window-delete-budget hide'}>
            <div className ='delete-close-modal'>
                <img 
            onClick = {()=> deleteWindowsToggled(id)}
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