import React from 'react';

import Header from './header/header';
import './budgets.css';
import Table from './table/table';
import WindowNewBudget from './window-new-budget/window-new-budget';

const Budgets = ({data, showNewBudget, newBudgetToggled }) => {
    
    return (
        <div className='budgets'>
            {showNewBudget? <WindowNewBudget newBudgetToggled = { newBudgetToggled }/> : null}
            <Header newBudgetToggled  = { newBudgetToggled  }/>
            <Table data ={data}/>
        </div>
    )

}

export default Budgets;