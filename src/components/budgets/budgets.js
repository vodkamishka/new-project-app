import React, { Component } from 'react'
import Navbar from './navbar/navbar';
import Header from './header/header';
import './budgets.css';
import Table from './table/table';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { dataBudgetsLoaded } from '../../actions';

class Budgets extends Component {

    componentDidMount () {
        const data = [
            { id: 1, budgetName: 'For transition operation', POnumber: '9846-12-3254', amountTotal: 1500.00, amountRemaining: 1487.00, createdAt: '10 jul 2019, 16:48', projects: [{ id: 345, name: 'Project 2345 - manual translation' }, { id: 346, name: 'Project 1128 - ubersetzung' }] },
            { id: 2, budgetName: 'New budgets for all primary tasks', POnumber: '6548947515', amountTotal: 20680.00, amountRemaining: 21946.65, createdAt: '8 mar 2018, 14:02', projects: [{ id: 347, name: 'Project 295 - manual translation' }, { id: 348, name: 'Project 1504 - ubersetzung' }] },
            { id: 3, budgetName: 'Documents and secure data budget', POnumber: '9546877-3246', amountTotal: 9150.00, amountRemaining: 3546.33, createdAt: '12 apr 2019, 8:32', projects: [{ id: 350, name: 'Project 1365 - manual translation' }] },
            { id: 4, budgetName: 'Exelltable with marceting', POnumber: '234566-12-3254', amountTotal: 37890.00, amountRemaining: 15000.00, createdAt: '18 dec 1982, 01:48', projects: [{ id: 351, name: 'Project 1111 - manual translation' }, { id: 352, name: 'Project 1790 - der himel' }] },
            { id: 5, budgetName: 'Plutarc pliniy mladshiy iosif flaviy', POnumber: '456677', amountTotal: 25180.00, amountRemaining: 111.60, createdAt: '18 may 2018, 02:01', projects: [{ id: 353, name: 'Project 12 - manual transaction' }, { id: 354, name: 'Project 3333 - ahtung' }] }
        ]
        this.props.dataBudgetsLoaded(data);
    }

    render() {
        let {data} = this.props;
        return (
            <div className='budgets'>
                <Header />
                <Navbar />
                <Table data ={data}/>
            </div>
        )
    }
}

const mapStateToProps = ({data}) => {
    return {
        data: data.data
    }
}

const mapDispatchToProps = {
    dataBudgetsLoaded
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Budgets)