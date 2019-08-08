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
        columns: {
            col1: false,
            col2: false,
            col3: false,
            col4: false,
            col5: false,
            col6: false
        }
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
        columns['col'+ id] = !columns['col'+ id]
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
        createBudgets, deleteBudget
    } = this.props;
    const { showNewBudget, showIconViewSettingsWindow, columns, showFiltersWindow, showMainDeleteWindow } = this.state;
    return (
        <div className='budgets'>
            
            {showNewBudget ? <WindowNewBudget 
            newBudgetToggled={this.newBudgetToggled} 
            createBudgets={createBudgets}
          
            /> : null}

            {showFiltersWindow ? <FiltersWindow /> : null}

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