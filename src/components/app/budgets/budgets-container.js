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
        const columnsNames = this.props.apiDataService.getColumnsNames();
        return <Budgets {...this.props} columnsNames={columnsNames}/>
        
    }
}
const mapStateToProps = ({data}) => {
    return {
        data: data.data,
        termDataTable: data.termDataTable,
        editData: data.editData, 
        amount: data.amount
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
    idBudgetEdit,
}
export default compose(
    withApiDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BudgetsContainer)