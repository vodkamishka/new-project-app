import React, { Component } from 'react';
import './search.css'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Search in budgets...'
        }
        this.handleChange = this.handleChange.bind(this);
        this.clearInput = this.clearInput.bind(this)
    }
    handleChange(event) {
        let p = new Promise(resolve => {
            this.setState({
                value: event.target.value
            })
            resolve()
        })
        
        p.then(()=> {
            this.props.budgetsSearched(this.state.value)
        })  
    }
    clearInput () {
        if (this.state.value === 'Search in budgets...')
        this.setState({
            value: ''
        })
    }
    render() {
        return (
            <div className='search-in-budgets'>

               <img src='images/icons/search.svg' alt='search'/>

               <input 
                    type='search'
                    value={this.state.value}
                    onChange={this.handleChange}
                    onClick = {this.clearInput}
                />

            </div>
        )
    }
}
