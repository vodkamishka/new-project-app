import React, { Component } from 'react';
import './search.css'

export default class Search extends Component {
    render() {
        return (
            <div className='search-in-budgets'>

               <img src='images/icons-png/search.png' />

               <input
                    type='search'
                    placeholder='Search in budgets...'
                /> 
            </div>
        )
    }
}
