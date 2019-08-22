import React, { Component } from 'react';

import Header from './header/header';
import './budgets.css';
import WindowNewBudget from './windows/window-new-budget/window-new-budget';
import ViewSettingsWindow from './windows/view-settings-window/view-settings-window';
import FiltersWindow from './windows/filters-window/filters-window';
import WindowEditBudget from './windows/window-edit-budget/window-edit-budget';
import DivTable from './table/div-table';
import MainDeleteWindow from './windows/main-delete-window/main-delete-window';
import Overlay from './windows/overlay/overlay';


class Budgets extends Component {

    state = {
        showNewBudget: false,
        showIconViewSettingsWindow: false,
        showFiltersWindow: false,
        showDeleteWindows: -1,
        showEditBudget: false,
        cannotEditDelete: false,
        showMainDeleteWindow: false,
        selectedOption: '',
        columns: [
            { col1: false, id: 1 },
            { col2: false, id: 2 },
            { col3: false, id: 3 },
            { col4: false, id: 4 },
            { col5: false, id: 5 },
            { col6: false, id: 6 }
        ],
        budgetId: null,
        selectId: null,
        values: [0,50000],
        domain: [0,50000],
        startDate: new Date()
    }
    componentDidUpdate(prevProps){
        if (prevProps.amount !== this.props.amount)
            this.setState({
                values: [this.props.amount.min, this.props.amount.max],
                domain: [this.props.amount.min, this.props.amount.max] 
            })
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
    deleteWindowsToggled = (id = -1) => {
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
    handleProjectChange = (selectedOption) => {
        this.setState({ selectedOption })
    }
    closeMainWindows = () => {
        const { showIconViewSettingsWindow, showFiltersWindow, showDeleteWindows } = this.state;
        if (showIconViewSettingsWindow === true) { this.iconSettingsToggled() }
        if (showFiltersWindow === true) { this.filtersWindowToggled() }
        if (showDeleteWindows !== -1) { this.deleteWindowsToggled() }
    }
    filterCleared = () => {
        this.setState({
            selectedOption: '',
            values: [this.props.amount.min, this.props.amount.max],
            domain: [this.props.amount.min, this.props.amount.max],
            startDate: ''
        })
    }
    onChange = values => {
        this.setState({ values })
    }
    handleStartDateChange = date => {
        this.setState({
            startDate: date
          });;
    }
    shiftRightButtons = number => {
        if (this.state.values[1] <= this.state.domain[1])
        this.setState({
            values: [this.state.values[0], this.state.values[1] + number]
        })
    }
    shiftLeftButtons = number => {
        if (this.state.values[0] >= this.state.domain[0])
        this.setState({
            values: [this.state.values[0] + number, this.state.values[1]]
        })
    }
    render() {
        let { data, columnsNames, createBudget} = this.props;
        const { showNewBudget, showIconViewSettingsWindow, columns, selectId,
            showFiltersWindow, showDeleteWindows, showEditBudget, selectedOption,
            budgetId, showMainDeleteWindow, values, domain, startDate } = this.state;
       
        return (
            <div className='budgets'>

        {showFiltersWindow || showIconViewSettingsWindow || showDeleteWindows !== -1 ? 
        <Overlay length={data.length} closeMainWindows={this.closeMainWindows} /> : null}

        {showMainDeleteWindow ? <MainDeleteWindow 
        mainDeleteWindowToggle={this.mainDeleteWindowToggle} selectId={selectId} length={data.length} {...this.props} /> : null}

        {showNewBudget ? <WindowNewBudget 
        newBudgetToggled={this.newBudgetToggled} createBudget={createBudget} length={data.length} /> : null}

        {showEditBudget ? <WindowEditBudget 
        editWindowToggled={this.editWindowToggled} budgetId={budgetId} length={data.length} {...this.props} /> : null}

        {showFiltersWindow ? <FiltersWindow 
        filtersWindowToggled={this.filtersWindowToggled} 
        handleProjectChange={this.handleProjectChange} 
        selectedOption={selectedOption} 
        filterCleared={this.filterCleared} 
        onChange={this.onChange}
        values={values}
        domain={domain}
        startDate={startDate}
        handleStartDateChange={this.handleStartDateChange}
        shiftRightButtons={this.shiftRightButtons}
        shiftLeftButtons={this.shiftLeftButtons}
        {...this.props}
        /> : null}

        {showIconViewSettingsWindow ? <ViewSettingsWindow 
        columnsNames={columnsNames} showHideColumnToggled={this.showHideColumnToggled} columns={columns} /> : null}

                <Header 
                    newBudgetToggled={this.newBudgetToggled} 
                    iconSettingsToggled={this.iconSettingsToggled} 
                    filtersWindowToggled={this.filtersWindowToggled}
                    showFiltersWindow={showFiltersWindow}
                    showIconViewSettingsWindow={showIconViewSettingsWindow}
                    closeMainWindows={this.closeMainWindows}
                    {...this.props}
                />

                <DivTable

                    columns={columns}
                    mainDeleteWindowToggle={this.mainDeleteWindowToggle}
                    deleteWindowsToggled={this.deleteWindowsToggled}
                    showDeleteWindows={showDeleteWindows}
                    showEditBudget={showEditBudget}
                    editWindowToggled={this.editWindowToggled}
                    budgetIdSetted={this.budgetIdSetted}
                    idSelected={this.idSelected}
                    closeMainWindows={this.closeMainWindows}
                    {...this.props}
                />

            </div>
        )
    }
}
export default Budgets;