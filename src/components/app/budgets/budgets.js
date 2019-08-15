import React, { Component } from 'react';

import Header from './header/header';
import './budgets.css';
import WindowNewBudget from './windows/window-new-budget/window-new-budget';
import ViewSettingsWindow from './windows/view-settings-window/view-settings-window';
import FiltersWindow from './windows/filters-window/filters-window-select';
import WindowEditBudget from './windows/window-edit-budget/window-edit-budget';
import DivTable from './table/div-table';
import WindowCannotBudget from './windows/window-cannot/window-cannot-budget';
import MainDeleteWindow from './windows/main-delete-window/main-delete-window';


class Budgets extends Component {

    state = {
        showNewBudget: false,
        showIconViewSettingsWindow: false,
        showFiltersWindow: false,
        showDeleteWindows: -1,
        showEditBudget: false,
        projectsNumber: -1,
        cannotEditDelete: false,
        showMainDeleteWindow: false,
        columns: [
            { col1: false, id: 1 },
            { col2: false, id: 2 },
            { col3: false, id: 3 },
            { col4: false, id: 4 },
            { col5: false, id: 5 },
            { col6: false, id: 6 }
        ],
        budgetId: null,
        selectId: null
    }
    newBudgetToggled = () => {
        this.setState({
            showNewBudget: !this.state.showNewBudget,
            showIconViewSettingsWindow: false,
            showFiltersWindow: false,
            showDeleteWindows: -1
        })
    }
    iconSettingsToggled = () => {
        this.setState({
            showIconViewSettingsWindow: !this.state.showIconViewSettingsWindow,
            showFiltersWindow: false,
            showDeleteWindows: -1
        })
    }
    showHideColumnToggled = id => {
        let columns = this.state.columns;
        columns[id - 1]['col' + id] = !columns[id - 1]['col' + id]
        this.setState({
            columns: columns
        })
    }
    filtersWindowToggled = () => {
        this.setState({
            showFiltersWindow: !this.state.showFiltersWindow,
            showIconViewSettingsWindow: false,
            showDeleteWindows: -1
        })
    }
    deleteWindowsToggled = id => {
        if (id === this.state.showDeleteWindows) id = -1
        this.setState({
            showDeleteWindows: id,
            showIconViewSettingsWindow: false,
            showFiltersWindow: false
        })
    }
    editWindowToggled = () => {
        this.setState({
            showEditBudget: !this.state.showEditBudget,
            showIconViewSettingsWindow: false,
            showFiltersWindow: false,
            showDeleteWindows: -1,
        })
    }
    cannotEditDeleteToggled = () => {
        this.setState({
            showNewBudget: false,
            showIconViewSettingsWindow: false,
            showFiltersWindow: false,
            cannotEditDelete: !this.state.cannotEditDelete
        })
    }
    budgetIdSetted = (id, projectsLength) => {
        this.setState({
            budgetId: id,
            projectsNumber: projectsLength
        })
    }
    mainDeleteWindowToggle = () => {
        this.setState({
            showMainDeleteWindow: !this.state.showMainDeleteWindow,
            showDeleteWindows: -1
        })
    }
    idSelected = id => {
        this.setState({
            selectId: id
        })
    }
    closeMainWindows = () => {
        const {showIconViewSettingsWindow, showFiltersWindow, showDeleteWindows} = this.state;
        if (showIconViewSettingsWindow === true){this.iconSettingsToggled()}
        if (showFiltersWindow === true){this.filtersWindowToggled()}
        if (showDeleteWindows !== -1){this.deleteWindowsToggled()} 
    }
    render() {
        const { data,
            columnsNames, rowDeleted,
            createBudget, deleteBudget, budgetsSorted, budgetsSearched, budgetsFiltered, idBudgetGetted, editData, idBudgetEdit
        } = this.props;
        const { showNewBudget, showIconViewSettingsWindow, columns, selectId, 
            showFiltersWindow, showDeleteWindows, showEditBudget, 
            budgetId, projectsNumber, cannotEditDelete, showMainDeleteWindow } = this.state;
        return (
            <div className='budgets'>

                {showMainDeleteWindow ? <MainDeleteWindow
                    mainDeleteWindowToggle={this.mainDeleteWindowToggle}
                    selectId={selectId}
                    deleteBudget={deleteBudget}
                    rowDeleted={rowDeleted}
                    length={data.length}

                /> : null}

                {cannotEditDelete && projectsNumber > 0 ? <WindowCannotBudget
                    length={data.length}
                    cannotEditDeleteToggled={this.cannotEditDeleteToggled}
                /> : null}

                {showNewBudget ? <WindowNewBudget
                    newBudgetToggled={this.newBudgetToggled}
                    createBudget={createBudget}
                    length={data.length}

                /> : null}
                {showEditBudget && projectsNumber < 1 ? <WindowEditBudget
                    editWindowToggled={this.editWindowToggled}
                    idBudgetGetted={idBudgetGetted}
                    budgetId={budgetId}
                    editData={editData}
                    idBudgetEdit={idBudgetEdit}
                    length={data.length}
                /> : null}

                {showFiltersWindow ? <FiltersWindow
                    data={data}
                    budgetsFiltered={budgetsFiltered}
                    filtersWindowToggled={this.filtersWindowToggled}
                /> : null}

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

                    columnsNames={columnsNames}
                    budgetsSorted={budgetsSorted}
                    budgetsSearched={budgetsSearched}

                    showFiltersWindow={showFiltersWindow}
                    showIconViewSettingsWindow={showIconViewSettingsWindow}
                    closeMainWindows={this.closeMainWindows}
                />

                <DivTable

                    data={data}
                    columns={columns}
                    deleteBudget={deleteBudget}
                    rowDeleted={rowDeleted}
                    mainDeleteWindowToggle={this.mainDeleteWindowToggle}

                    deleteWindowsToggled={this.deleteWindowsToggled}
                    showDeleteWindows={showDeleteWindows}
                    showEditBudget={showEditBudget}
                    editWindowToggled={this.editWindowToggled}
                    budgetIdSetted={this.budgetIdSetted}
                    cannotEditDeleteToggled={this.cannotEditDeleteToggled}

                    idSelected={this.idSelected}
                />

            </div>
        )

    }
}
export default Budgets;