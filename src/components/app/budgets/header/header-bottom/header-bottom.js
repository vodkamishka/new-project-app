import React from 'react';
import './header-bottom.css';

import Sort from './sort/sort';
import Search from './search/search';
import Icons from './icons/icons';


export default function HeaderBottom({iconSettingsToggled, columnsNames, filtersWindowToggled, budgetsSorted, budgetsSearched, showFiltersWindow, showIconViewSettingsWindow}) {
    return (
        <div className = 'budgets__header_header-bottom'>
            <Sort 
            columnsNames = {columnsNames}
            budgetsSorted = {budgetsSorted}

            showFiltersWindow={showFiltersWindow}
            showIconViewSettingsWindow={showIconViewSettingsWindow}
            iconSettingsToggled={iconSettingsToggled}
            filtersWindowToggled={filtersWindowToggled}
            />
            <Search 
            budgetsSearched = {budgetsSearched}

            showFiltersWindow={showFiltersWindow}
            showIconViewSettingsWindow={showIconViewSettingsWindow}
            iconSettingsToggled={iconSettingsToggled}
            filtersWindowToggled={filtersWindowToggled}

            />
            <Icons iconSettingsToggled = {iconSettingsToggled}
            filtersWindowToggled = {filtersWindowToggled}
            />
        </div>
    )
}
