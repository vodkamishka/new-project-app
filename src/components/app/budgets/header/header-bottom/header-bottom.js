import React from 'react';
import './header-bottom.css'
import Sort from './sort/sort';
import RightSide from './right-side/right-side';

export default function HeaderBottom() {
    return (
        <div className = 'budgets__header_header-bottom'>
            <Sort />
            <RightSide />
        </div>
    )
}
