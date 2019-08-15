import React from 'react';
import './overlay.css';

export default function WindowNewBudget({length, closeMainWindows}) {
    let h = (length-9)*72;
    const style = {height: length > 10 ? `calc(100vh + ${h}px + 50px)` : `100vh`}
    return (
        <div 
        className = 'overlay'
        onClick = {closeMainWindows}
        style = {style}
        >
        </div>
    )
}
