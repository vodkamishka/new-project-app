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

   const customStyles = {
    container: (provided) => ({
        ...provided,
        width: '175px',
        height: '36px',
        outline: 'none',
    }),
    control: (provided, state) => ({
        ...provided,
        width: '175px',
        border: 'none',
        position: 'absolute',
        left: '0',
        background: 'none',
        fontSize: '14px',
        boxShadow: state.isSelected ? 'none' : 'none',
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? '#ECECEC' : 'white',
        width: '175px',
        height: '36px',
        color: '#1C1A1A',
        fontSize: '14px',
        cursor: 'pointer'
    }),

    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition};
    },
    indicatorsContainer: (provided) => ({
        ...provided,
        height: '36px',
        backgroundImage: 'none',
        background: 'url(images/icons/dropdown-list-arrow-down.svg) center no-repeat',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        width: '0',
    }),
    loadingIndicator: (provided) => ({
        ...provided,
        width: '0',
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: '100',
    }),
    placeholder: (provided) => ({
        ...provided,
        fontSize: '14px',
    }),
}

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
                        placeholder='created at'
                        styles={customStyles}
                             />
                </div>
            </div>
        )
    }
}

