import React from 'react';
import './middle-elements.css';

export default function MiddleElements () {
    return (
        <div className = 'middle-elements'>
            <div className = 'dashport-non-active'><img src = 'images/icons/dashport-non-active.svg' alt='dashport-non-active' /></div>
            <div className = 'projects-non-active'><img src = 'images/icons/projects-non-active.svg' alt='projects-non-active' /></div>
            <div className ='budgets-active'><img src = 'images/icons/budgets-active.svg' alt='budgets-active' /></div>
        </div>
    )
}
