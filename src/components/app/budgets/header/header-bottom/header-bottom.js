import React from 'react';
import './header-bottom.css';

import Sort from './sort/sort';
import Search from './search/search';
import Icons from './icons/icons';

export default function HeaderBottom(props) {
    return (
        <div className = 'budgets__header_header-bottom'>
            <Sort {...props}/>
            <Search {...props}/>
            <Icons {...props}/>
        </div>
    )
}
