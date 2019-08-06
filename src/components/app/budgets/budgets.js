import React, {Component} from 'react';

import Header from './header/header';
import './budgets.css';
import Table from './table/table';
import WindowNewBudget from './window-new-budget/window-new-budget';
import ViewSettingsWindow from './view-settings-window/view-settings-window';
import FiltersWindow from './filters-window/filters-window';
import DivTable from './table/div-table';

class Budgets extends Component {

    state = {
        showNewBudget: true,
        showIconViewSettingsWindow: false,
        showFiltersWindow: true,
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
            showNewBudget: !this.state.showNewBudget   
        })
    }
    iconSettingsToggled = () => {
        this.setState({
            showIconViewSettingsWindow: !this.state.showIconViewSettingsWindow   
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
            showFiltersWindow: !this.state.showFiltersWindow
        })
    }
    render() {
    const { data, 
        columnsNames,
        inBudgetsSeached, termDataTableUpdated
    } = this.props;
    const { showNewBudget, showIconViewSettingsWindow, columns, showFiltersWindow } = this.state;
    return (
        <div className='budgets'>

            {showNewBudget ? <WindowNewBudget newBudgetToggled={this.newBudgetToggled} /> : null}

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
            />

        </div>
    )

}
}
export default Budgets;