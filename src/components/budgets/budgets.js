import React, { Component } from 'react'
import Navbar from './navbar/navbar';
import Header from './header/header';
import './budgets.css';
import Table from './table/table';

export default class Budgets extends Component {
    render() {
        return (
            <div className='budgets'>
                <Header />
                <Navbar />
                <Table />
            </div>
        )
    }
}
