import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { dataBudgetsLoaded, termDataTableUpdated, dataBudgetsApiLoaded } from '../../../actions/loaded-actions';
import { inBudgetsSeached } from '../../../actions/functional-actions';

import withApiDataService from '../../hoc/withApiDataService';
import { authAPI } from '../../../services/api/api';

import Budgets from './budgets';

class BudgetsContainer extends Component {

    componentDidMount () {
        /*let dataBudgets;
        budgetsAPI.getBudgets()
        .then(data => dataBudgets = data.data[0])
        .then(() => console.log(dataBudgets))*/
        this.props.dataBudgetsApiLoaded();
        
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
            termDataTable, 
            inBudgetsSeached, termDataTableUpdated,
        } = this.props;
        const columnsNames = this.props.apiDataService.getColumnsNames();
        
        return (
            <Budgets 
            data = {termDataTable}
            
            columnsNames = {columnsNames}
          
            inBudgetsSeached = {inBudgetsSeached}
            termDataTableUpdated = {termDataTableUpdated}
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
    dataBudgetsApiLoaded  
}

export default compose(
    withApiDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BudgetsContainer)