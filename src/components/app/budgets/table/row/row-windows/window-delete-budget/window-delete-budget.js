import React from 'react';
import './window-delete-budget.css';


export default function WindowDeleteBudget ({deleteWindowsToggled, mainDeleteWindowToggle, showDeleteWindows, id, editWindowToggled, projectsQuantity}) {
    
    const style = {cursor: projectsQuantity > 0 ? 'default' : 'pointer'}
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
            }}
            >Open</div>
            <div 
            style={style}
            onClick = { () => {
                if (projectsQuantity === 0) mainDeleteWindowToggle()
            }}
            className ={projectsQuantity > 0 ? 'delete-delete pale' : 'delete-delete red'}>Delete</div>
        </div>
    )
        
    
}