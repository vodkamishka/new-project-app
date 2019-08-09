import React, { Component } from 'react';
import './sort.css';

export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Created at'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        let promise = new Promise (resolve => {
            this.setState({
                value: event.target.value
            
            });
            resolve();
        })
        promise.then(()=> {
            let key = this.state.value;
            if ( key === 'Budget name' ) { key = 'title' }
            if ( key === 'PO number' ) { key = 'po_number' }
            if ( key === 'Amount total, $' ) { key = 'amount' }
            if ( key === 'Amount remaining, $' ) { key = 'amount_remaining' }
            if ( key === 'Created at' ) { key = 'created_at' }
            if ( key === 'Projects' ) { key = 'projects' }
            
            this.props.budgetsSorted(key)
            
         
        })
    }
    
    render() {
        const { columnsNames } = this.props;
       
        return (
            <div className='sort'>
               
                <div className='sort-by'><span className='sort-by-title'>Sort by:</span></div>
                <div className='created-at'>
                    <select
                    value={this.state.value}
                    onChange={ this.handleChange}
                    >
                        {columnsNames.map(el => <option key={el.id}>{el.name}</option>)}
                    </select>
                </div>
            </div>
        )
    }
}
