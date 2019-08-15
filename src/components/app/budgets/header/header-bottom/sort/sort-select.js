import React, { Component } from 'react';
import './sort.css';
import Select from 'react-select';

const options = [
  {value: 'Budget name', label: 'title' },
  {value: 'PO number', label: 'po_number' },
  {value: 'Amount total, $', label: 'amount' },
  {value: 'Amount remaining, $', label: 'amount_remaining' },
  {value: 'Created at', label: 'created_at' },
  {value: 'Projects', label: 'projects' }
   ]

export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'Created at'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(selectedOption) {
       
        let promise = new Promise(resolve => {
            this.setState({
                selectedOption
            });
            resolve();
        })
        promise.then(() => {
            let key = this.state.selectedOption.label;
            this.props.budgetsSorted(key)

        })
    }
    render() {
        const {closeMainWindows} = this.props;
        const {selectedOption} = this.state;
        const value  = selectedOption && selectedOption.value;
        
        return (
            <div className='sort'>

                <div className='sort-by'><span className='sort-by-title'>Sort by:</span></div>
                <div className='created-at'>
                    <Select
                        value={value}
                        onChange={this.handleChange}
                        onClick={closeMainWindows}
                        options={options}
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
