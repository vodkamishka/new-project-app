import React from 'react';
import './header-bottom.css';

import Sort from './sort/sort';
import Search from './search/search';
import Icons from './icons/icons';


export default function HeaderBottom({iconSettingsToggled, inBudgetsSeached, termDataTableUpdated, columnsNames }) {
    return (
        <div className = 'budgets__header_header-bottom'>
            <Sort 
            columnsNames={columnsNames}
            />
            <Search 
            inBudgetsSeached = {inBudgetsSeached}
            termDataTableUpdated = {termDataTableUpdated}
            />
            <Icons iconSettingsToggled={iconSettingsToggled}/>
        </div>
    )
}
