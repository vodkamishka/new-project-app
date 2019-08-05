import React, { Component } from 'react';
import './search.css'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Search in budgets...'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let promise = new Promise(resolve => {
            this.setState({
                value: event.target.value
            })
            resolve()
        })
        promise
        .then(()=> this.props.inBudgetsSeached(this.state.value))
        .then(()=> this.props.termDataTableUpdated() )
    }
    render() {
        
        return (
            <div className='search-in-budgets'>

               <img src='images/icons/search.svg' alt='search'/>

               <input
                    type='search'
                    value={this.state.value}
                    onChange={this.handleChange}
                    
                />

            </div>
        )
    }
}
