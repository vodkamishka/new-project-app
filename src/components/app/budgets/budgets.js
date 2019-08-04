import React from 'react';

import Header from './header/header';
import './budgets.css';
import Table from './table/table';
import WindowNewBudget from './window-new-budget/window-new-budget';
import ViewSettingsWindow from './view-settings-window/view-settings-window';

const Budgets = ({ data, showNewBudget, newBudgetToggled,
    iconSettingsToggled,
    showIconViewSettingsWindow,
    columns, columnsNames, showHideColumnBudgetsToggled,
    inBudgetsSeached, termDataTableUpdated
}) => {
    
    return (
        <div className='budgets'>

            {showNewBudget ? <WindowNewBudget newBudgetToggled={newBudgetToggled} /> : null}

            {showIconViewSettingsWindow ?
                <ViewSettingsWindow 
                    columnsNames={columnsNames}
                    showHideColumnBudgetsToggled={showHideColumnBudgetsToggled}
                    columns={columns}
                /> : null}

            <Header 
            newBudgetToggled={newBudgetToggled} 
            iconSettingsToggled={iconSettingsToggled}

            inBudgetsSeached = {inBudgetsSeached}
            termDataTableUpdated = {termDataTableUpdated}

            columnsNames={columnsNames}
            />

            <Table 
            data = {data}
            columns = {columns}
            />

        </div>
    )

}

export default Budgets;