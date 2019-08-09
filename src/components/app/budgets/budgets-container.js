import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import {dataBudgetsApiLoaded, createBudget, deleteBudget, budgetsSorted, budgetsSearched, budgetsFiltered, rowDeleted} from '../../../actions/actions';
import withApiDataService from '../../hoc/withApiDataService';

import Budgets from './budgets';

class BudgetsContainer extends Component {
    componentDidMount () {
        this.props.dataBudgetsApiLoaded()   
    }
    render() {
        let {data,
            budgetsSearched, budgetsFiltered, rowDeleted,
            createBudget, deleteBudget, budgetsSorted, dataBudgetsApiLoaded 
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
    
            />

        )
    }

}
const mapStateToProps = ({data}) => {
    return {
        data: data.data,
        termDataTable: data.termDataTable,
    }
}
const mapDispatchToProps = {
    
    dataBudgetsApiLoaded,
    createBudget,
    deleteBudget,
    budgetsSorted,
    budgetsSearched,
    budgetsFiltered,
    rowDeleted
}
export default compose(
    withApiDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BudgetsContainer)