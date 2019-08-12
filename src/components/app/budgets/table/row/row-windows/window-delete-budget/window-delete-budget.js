import React from 'react';
import './window-delete-budget.css';


export default function WindowDeleteBudget ({deleteWindowsToggled, mainDeleteWindowToggle, showDeleteWindows, id, editWindowToggled, budgetIdSetted }) {
    
    return (
        <div className={showDeleteWindows === id ? 'window-delete-budget': 'window-delete-budget hide'}>
            <div className ='delete-close-modal'>
                <img 
            onClick = {()=> deleteWindowsToggled(id)}
            src='images/icons/close-modals.svg' 
            alt = 'close-modals'
            /></div>
            <div className='delete-open'
            onClick = { () => {
                editWindowToggled()
                budgetIdSetted(id)
            }}
            >Open</div>
            <div 
            onClick = { () => {
                mainDeleteWindowToggle()
            }}
            className = ' delete-delete'>Delete</div>
        </div>
    )
        
    
}