import React from 'react';
import './header-bottom.css';

import Sort from './sort/sort';
import Search from './search/search';
import Icons from './icons/icons';


export default function HeaderBottom({iconSettingsToggled, columnsNames, filtersWindowToggled, budgetsSorted, budgetsSearched, closeMainWindows}) {
    return (
        <div className = 'budgets__header_header-bottom'>
            <Sort 
            columnsNames = {columnsNames}
            budgetsSorted = {budgetsSorted}
            closeMainWindows = {closeMainWindows}
            />
            <Search 
            budgetsSearched = {budgetsSearched}
            closeMainWindows = {closeMainWindows}

            />
            <Icons iconSettingsToggled = {iconSettingsToggled}
            filtersWindowToggled = {filtersWindowToggled}
            />
        </div>
    )
}
