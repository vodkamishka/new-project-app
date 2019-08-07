import React from 'react';
import './main-delete-window.css';
import Warning from './warning/warning';

export default function MainDeleteWindow ({mainDeleteWindowToggle, selectId, deleteBudget }) {

    return (
        <div className = 'main-delete-window'>
            <Warning 
            mainDeleteWindowToggle={mainDeleteWindowToggle}
            selectId={selectId}
            deleteBudget ={deleteBudget }
            />
        </div>
    )

}