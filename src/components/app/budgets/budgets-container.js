import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { dataBudgetsLoaded } from '../../../actions';
import { newBudgetToggled } from '../../../actions/modal-actions';

import withApiDataService from '../../hoc/withApiDataService';
import { budgetsAPI } from '../../../api/api';

import Budgets from './budgets';

class BudgetsContainer extends Component {

    componentDidMount () {
        let dataBudgets;
        budgetsAPI.getBudgets()
        .then(data => dataBudgets = data.data[0])
        .then(() => console.log(dataBudgets))
        let budgets = this.props.apiDataService;
        this.props.dataBudgetsLoaded(budgets);
    }

    render() {
        let {
            data, 
            showNewBudget,
            newBudgetToggled 
        } = this.props;
       
        return (
            <Budgets 
            data = {data}
            showNewBudget = {showNewBudget}
            newBudgetToggled = {newBudgetToggled}
            />
        )
    }

}

const mapStateToProps = ({data, windows}) => {
    return {
        data: data.data,
        showNewBudget: windows.showNewBudget
    }
}

const mapDispatchToProps = {
    dataBudgetsLoaded,
    newBudgetToggled  
}

export default compose(
    withApiDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BudgetsContainer)