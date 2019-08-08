import React, {Component} from 'react';

import Header from './header/header';
import './budgets.css';
import WindowNewBudget from './windows/window-new-budget/window-new-budget';
import ViewSettingsWindow from './windows/view-settings-window/view-settings-window';
import FiltersWindow from './windows/filters-window/filters-window';

import DivTable from './table/div-table';


class Budgets extends Component {

    state = {
        showNewBudget: false,
        showIconViewSettingsWindow: false,
        showFiltersWindow: false,
        columns: [
            {col1: false, id: 1},
            {col2: false, id: 2},
            {col3: false, id: 3},
            {col4: false, id: 4},
            {col5: false, id: 5},
            {col6: false, id: 6}
        ]
    }
    
    newBudgetToggled = () => {
        this.setState({
            showNewBudget: !this.state.showNewBudget,
            showIconViewSettingsWindow: false, 
            showFiltersWindow: false  
        })
    }
    iconSettingsToggled = () => {
        this.setState({
            showIconViewSettingsWindow: !this.state.showIconViewSettingsWindow,
            showFiltersWindow: false   
        })
    }
    showHideColumnToggled = id => {
        let columns = this.state.columns;
        columns[id-1]['col'+ id] = !columns[id-1]['col'+ id]
        this.setState({
            columns: columns
        })
    }
    filtersWindowToggled = () => {
        this.setState({
            showFiltersWindow: !this.state.showFiltersWindow,
            showIconViewSettingsWindow: false
        })
    }
   
    render() {
    const { data, 
        columnsNames,
        inBudgetsSeached, termDataTableUpdated,
        createBudgets, deleteBudget, budgetsSorted, dataBudgetsApiLoaded, 
    } = this.props;
    const { showNewBudget, showIconViewSettingsWindow, columns, showFiltersWindow, showMainDeleteWindow } = this.state;
    
    return (
        <div className='budgets'>
            
            {showNewBudget ? <WindowNewBudget 
            newBudgetToggled={this.newBudgetToggled} 
            createBudgets={createBudgets}
          
            /> : null}

            {showFiltersWindow ? <FiltersWindow data={data}/> : null}

            {showIconViewSettingsWindow ?
                <ViewSettingsWindow 
                    columnsNames={columnsNames}
                    showHideColumnToggled={this.showHideColumnToggled}
                    columns={columns}
                /> : null}

            <Header 
            newBudgetToggled={this.newBudgetToggled} 
            iconSettingsToggled={this.iconSettingsToggled}
            filtersWindowToggled={this.filtersWindowToggled}

            inBudgetsSeached = {inBudgetsSeached}
            termDataTableUpdated = {termDataTableUpdated}

            columnsNames={columnsNames}
            budgetsSorted={budgetsSorted}
            />
            
            <DivTable
            data = {data}
            columns = {columns}
            deleteBudget={deleteBudget}
            mainDeleteWindowToggle = {this.mainDeleteWindowToggle }
            />

        </div>
    )

}
}
export default Budgets;