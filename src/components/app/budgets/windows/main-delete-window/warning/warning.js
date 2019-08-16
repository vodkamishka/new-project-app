import React from 'react';
import './warning.css';

export default function Warning ({mainDeleteWindowToggle, selectId, deleteBudget, rowDeleted }) {
    
    return (
        <div className = 'warning'>
            <div className = 'red-warning'>Warning</div>
            <div className = 'are'>Are you sure to want delete this budget?</div>
            <div className = 'if'>If you remind, pree the Decline button</div>
            <button 
            className  = 'warning-delete-progect-btn'
            onClick={()=>{
                deleteBudget(selectId)
                mainDeleteWindowToggle()
                /*rowDeleted(selectId)*/
            }}
            >Delete project</button>
            <button 
            className = 'warning-decline-progect-btn'
            onClick={mainDeleteWindowToggle}
            >Decline</button>
        </div>
    )

}