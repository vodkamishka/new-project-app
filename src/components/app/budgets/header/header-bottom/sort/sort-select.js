import React, { Component } from 'react';
import './sort.css';
import Select from 'react-select';



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
            let key = this.state.selectedOption.value;
            if (key === 'Budget name') { key = 'title' }
            if (key === 'PO number') { key = 'po_number' }
            if (key === 'Amount total, $') { key = 'amount' }
            if (key === 'Amount remaining, $') { key = 'amount_remaining' }
            if (key === 'Created at') { key = 'created_at' }
            if (key === 'Projects') { key = 'projects' }

            this.props.budgetsSorted(key)

        })
    }
    render() {
        const { columnsNames, closeMainWindows } = this.props;
        const {selectedOption} = this.state;
        const value  = selectedOption && selectedOption.value;
        const customStyles = {
            container: (base, state) => ({
              ...base,
              border: state.isFocused ? null : null,
              transition:
                "border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease",
              "&:hover": {
                boxShadow: "0 2px 4px 0 rgba(41, 56, 78, 0.1)"
              }
            }),
            control: (base, state) => ({
              ...base,
              background: "#bada55"
            }),
            valueContainer: (base, state) => ({
              ...base,
              background: "pink"
            }),
            multiValue: (base, state) => ({
              ...base,
              background: "lightYellow",
              maxWidth: "100px"
            })
          };
        return (
            <div className='sort'>

                <div className='sort-by'><span className='sort-by-title'>Sort by:</span></div>
                <div className='created-at'>
                    <Select
                        value={value}
                        onChange={this.handleChange}
                        onClick={closeMainWindows}
                        style={customStyles}
                        options={[
                            {value: 'Budget name', label: 'Budget name' },
                            {value: 'PO number', label: 'PO number' },
                            {value: 'Amount total, $', label: 'Amount total, $' },
                            {value: 'Amount remaining, $', label: 'Amount remaining, $' },
                            {value: 'Created at', label: 'Created at' },
                            {value: 'Projects', label: 'Projects' }
                             ]}
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
