import React from 'react';
import './header.css';
import HeaderUp from './header-up/header-up';
import HeaderBottom from './header-bottom/header-bottom';

export default function Header() {
    return (
        <div className = 'budgets__header'>
            <HeaderUp />
            <HeaderBottom />
            <div className = 'at-this-week'>
                At this week
            </div>
        </div>
    )
}
