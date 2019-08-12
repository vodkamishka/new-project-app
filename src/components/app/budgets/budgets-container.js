import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import {dataBudgetsApiLoaded, createBudget, deleteBudget, budgetsSorted, budgetsSearched, budgetsFiltered, rowDeleted, idBudgetGetted, idBudgetEdit } from '../../../actions/actions';
import withApiDataService from '../../hoc/withApiDataService';

import Budgets from './budgets';

class BudgetsContainer extends Component {
    componentDidMount () {
        this.props.dataBudgetsApiLoaded()
        
    }
    render() {
        let {data,
            budgetsSearched, budgetsFiltered, rowDeleted, idBudgetEdit,
            createBudget, deleteBudget, budgetsSorted, dataBudgetsApiLoaded, idBudgetGetted, editData  
        } = this.props;
        
        const columnsNames = this.props.apiDataService.getColumnsNames();
        return (

            <Budgets 

            data = {data}
            
            columnsNames = {columnsNames}

            createBudget = {createBudget}
            deleteBudget = {deleteBudget}
            budgetsSorted = {budgetsSorted}
            dataBudgetsApiLoaded = {dataBudgetsApiLoaded}
            budgetsSearched = {budgetsSearched}
            budgetsFiltered = {budgetsFiltered}

            rowDeleted={rowDeleted}
            idBudgetGetted ={idBudgetGetted}
            editData={editData}
            idBudgetEdit={idBudgetEdit}
            />

        )
    }

}
const mapStateToProps = ({data}) => {
    return {
        data: data.data,
        termDataTable: data.termDataTable,
        editData: data.editData
    }
}
const mapDispatchToProps = {
    
    dataBudgetsApiLoaded,
    createBudget,
    deleteBudget,
    budgetsSorted,
    budgetsSearched,
    budgetsFiltered,
    rowDeleted,
    idBudgetGetted,
    idBudgetEdit 
}
export default compose(
    withApiDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BudgetsContainer)