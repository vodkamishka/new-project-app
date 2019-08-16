import React, { Component } from 'react';
import './sort.css';
import Select from 'react-select';

const options = [
  {value: 'Budget name', label: 'budget name' },
  {value: 'PO number', label: 'po number' },
  {value: 'Amount total, $', label: 'amount total, $' },
  {value: 'Amount remaining, $', label: 'amount remaining, $' },
  {value: 'Created at', label: 'created at' },
  {value: 'Projects', label: 'projects' }
   ]

export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(selectedOption) {
       
        let promise = new Promise(resolve => {
            this.setState({
                selectedOption: selectedOption
            });
            resolve();
        })
        promise.then(() => {
            let key = this.state.selectedOption.value;
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
        const {closeMainWindows} = this.props;
        
        return (
            <div className='sort'
            onClick={closeMainWindows}
            >
                <div className='sort-by'><span className='sort-by-title'>Sort by:</span></div>
                <div className='created-at'>
                    <Select
                        
                        onChange={this.handleChange}
                        options={options}
                        labelKey="label"
                        placeholder='created at'

                        theme={theme => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                  ...theme.colors,
                                  primary25: '#ECECEC',
                                  primary: 'white',
                                },
                              })}
                             />
                </div>
            </div>
        )
    }
}

