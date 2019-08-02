import React, { Component } from 'react'
import Header from './header/header';
import './budgets.css';
import Table from './table/table';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { dataBudgetsLoaded } from '../../../actions';
import { newBudgetToggled } from '../../../actions/modal-actions';

import withApiDataService from '../../hoc/withApiDataService';

import { budgetsAPI } from '../../../api/api';
import WindowNewBudget from './window-new-budget/window-new-budget';

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
        console.log(data)
        return (
            <Budgets 
            data = {data}
            showNewBudget = {showNewBudget}
            newBudgetToggled = {newBudgetToggled}
            />
        )
    }

}

const Budgets = ({data, showNewBudget, newBudgetToggled }) => {
    
        return (
            <div className='budgets'>
                {showNewBudget? <WindowNewBudget /> : null}
                <Header newBudgetToggled  = { newBudgetToggled  }/>
                <Table data ={data}/>
            </div>
        )
    
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