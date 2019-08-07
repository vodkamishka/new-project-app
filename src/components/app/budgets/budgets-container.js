import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { dataBudgetsLoaded, termDataTableUpdated, dataBudgetsApiLoaded, createBudgets, deleteBudget } from '../../../actions/loaded-actions';
import { inBudgetsSeached } from '../../../actions/functional-actions';

import withApiDataService from '../../hoc/withApiDataService';


import Budgets from './budgets';
import { budgetsAPI } from '../../../services/api/api';

class BudgetsContainer extends Component {

    

    componentDidMount () {
        /*let dataBudgets;
        budgetsAPI.getBudgets()
        .then(data => dataBudgets = data.data[0])
        .then(() => console.log(dataBudgets))*/
        
        
        const { apiDataService, dataBudgetsLoaded, termDataTableUpdated, dataBudgetsApiLoaded} = this.props;
        let budgets = apiDataService.getData();
        
        /*let promise = new Promise(resolve => {
            dataBudgetsLoaded(budgets);
            resolve();
        })
        promise.then(() => {
            
            termDataTableUpdated();
        })*/
       
        dataBudgetsApiLoaded()
       
       
        
    }
    
    render() {
        let {
            termDataTable,
            inBudgetsSeached, termDataTableUpdated, 
            createBudgets, deleteBudget
        } = this.props;
        console.log(termDataTable)
        const columnsNames = this.props.apiDataService.getColumnsNames();
        return (
            <Budgets 
            data = {termDataTable}
            
            columnsNames = {columnsNames}
          
            inBudgetsSeached = {inBudgetsSeached}
            termDataTableUpdated = {termDataTableUpdated}

            createBudgets={createBudgets}
            deleteBudget={deleteBudget}
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
    dataBudgetsLoaded,
    termDataTableUpdated,
    inBudgetsSeached,
    dataBudgetsApiLoaded,
    createBudgets,
    deleteBudget
}

export default compose(
    withApiDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BudgetsContainer)