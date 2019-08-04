import React from 'react';
import './header.css';
import HeaderUp from './header-up/header-up';
import HeaderBottom from './header-bottom/header-bottom';

export default function Header({newBudgetToggled, iconSettingsToggled, inBudgetsSeached, termDataTableUpdated, columnsNames }) {
    return (
        <div className = 'budgets__header'>
            <HeaderUp newBudgetToggled  = {newBudgetToggled }/>
            <HeaderBottom 
            iconSettingsToggled = {iconSettingsToggled}

            inBudgetsSeached = {inBudgetsSeached}
            termDataTableUpdated = {termDataTableUpdated}

            columnsNames={columnsNames}
            />
            <div className = 'at-this-week'>
                At this week
            </div>
        </div>
    )
}
