import React from 'react';
import './main-delete-window.css';
import Warning from './warning/warning';

export default function MainDeleteWindow ({mainDeleteWindowToggle, selectId, deleteBudget, rowDeleted, length}) {

    let h = (length-9)*72;
    const style = {height: length > 10 ? `calc(100vh + ${h}px + 50px)` : `100vh`}
    return (
        <div className = 'main-delete-window'
        style={style}
        >
            <Warning 
            mainDeleteWindowToggle = {mainDeleteWindowToggle}
            selectId = {selectId}
            deleteBudget = {deleteBudget }
            rowDeleted = {rowDeleted}
            />
        </div>
    )

}