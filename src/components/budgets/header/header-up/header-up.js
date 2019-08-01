import React from 'react';
import './header-up.css';

export default function HeaderUp() {
    return (
        <div className = 'budgets__header_header-up'>
           <div className = 'title-budgets'>Budgets</div>
           <div><button className = 'new-budgets'>+ New budget</button></div>
        </div>
    )
}
