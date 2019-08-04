import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { dataBudgetsLoaded, termDataTableUpdated } from '../../../actions/loaded-actions';
import { newBudgetToggled, showHideColumnBudgetsToggled, iconSettingsToggled } from '../../../actions/modal-actions';
import { inBudgetsSeached } from '../../../actions/functional-actions';


import withApiDataService from '../../hoc/withApiDataService';
import { budgetsAPI } from '../../../api/api';

import Budgets from './budgets';

class BudgetsContainer extends Component {

    componentDidMount () {
        /*let dataBudgets;
        budgetsAPI.getBudgets()
        .then(data => dataBudgets = data.data[0])
        .then(() => console.log(dataBudgets))*/
        const { apiDataService, dataBudgetsLoaded, termDataTableUpdated} = this.props;
        let budgets = apiDataService.getData();
        
        let promise = new Promise(resolve => {
            dataBudgetsLoaded(budgets);
            resolve();
        })
        promise.then(() => {
            termDataTableUpdated();
        })
        
    }

    render() {
        let {
            termDataTable, showNewBudget,newBudgetToggled,
            
            showIconViewSettingsWindow,
            showHideColumnBudgetsToggled, columns,iconSettingsToggled,
            
            inBudgetsSeached, termDataTableUpdated,
        } = this.props;
        const columnsNames = this.props.apiDataService.getColumnsNames();
        
        return (
            <Budgets 

            data = {termDataTable}
            showNewBudget = {showNewBudget}
            newBudgetToggled = {newBudgetToggled}

            columnsNames = {columnsNames}
            showHideColumnBudgetsToggled = {showHideColumnBudgetsToggled}
            columns = {columns}
            iconSettingsToggled = {iconSettingsToggled}
            showIconViewSettingsWindow = {showIconViewSettingsWindow}

            inBudgetsSeached = {inBudgetsSeached}
            termDataTableUpdated = {termDataTableUpdated}
            />
        )
    }

}

const mapStateToProps = ({data, windows}) => {
    return {
        data: data.data,
        termDataTable: data.termDataTable,

        showNewBudget: windows.showNewBudget,
        columns: windows.columns,
        showIconViewSettingsWindow: windows.showIconViewSettingsWindow
    }
}

const mapDispatchToProps = {
    dataBudgetsLoaded,
    termDataTableUpdated,

    newBudgetToggled,
    showHideColumnBudgetsToggled,
    iconSettingsToggled,
    inBudgetsSeached  
}

export default compose(
    withApiDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BudgetsContainer)