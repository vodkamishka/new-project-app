import React, { Component } from 'react';
import './filters-window.css';
import InputDate from './input-date/input-date';
import InputProject from './input-project/input-project';
import InputSlider from './input-slider/input-slider-v2';



export default class FiltersWindow extends Component {
    constructor(props) {
        super();
        this.state = {
            value: '',
            selectedOption: '',
            slider: 0,
            range: 50000,
            highestPrice: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);

        this.clear = this.clear.bind(this);
        this.changeRangeRight= this.changeRangeRight.bind(this);
        this.changeRangeLeft= this.changeRangeLeft.bind(this);
        
       
    }
   
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleProjectChange(selectedOption) {
        this.setState({ selectedOption})
    }
    
    changeRangeRight() {
        if (this.state.range < 50000) {
        this.setState({
            range: this.state.range + 1000
        })}
    }
    changeRangeLeft() {
        if (this.state.range > 0) {
        this.setState({
            range: this.state.range - 1000
        })}
    }
    clear() {
        this.setState({
            value: '',
            project: '',
            slider: 0,
            range: 50000
        })
    }
    render() {
       
        const { value, selectedOption, range, slider, values } = this.state;
        const { budgetsFiltered, filtersWindowToggled, data} = this.props;
        console.log(values)
           
        return (
            <div className='filters-window'>

                {/* title filters and buttons clear and apply */}

                <div className='filters-buttons' >
                    <span>Filters</span>
                    <button className='button clear'
                        onClick={() => {
                            let promise = new Promise(resolve => {
                                this.clear()
                                resolve()
                            })
                            promise.then(() => budgetsFiltered(value,  undefined,  70000000 ))
                        }}
                    >Clear</button>
                    <button 
                    className='button apply'
                    onClick = {() => {
                        budgetsFiltered(value,  selectedOption.id, range);
                        filtersWindowToggled()
                    }}
                    >Apply</button>
                </div>

                <div className='filters-group'>

                    {/* Created Date*/}

                   <InputDate 
                   handleChange={this.handleChange}
                   value={value}
                   />

                    {/* Related project*/}

                    <InputProject 
                    data={data}
                    handleProjectChange={this.handleProjectChange}
                    />

                    {/* Amount total range*/}

                    <InputSlider 
                   
                    handleValuesChange = {this.handleValuesChange}
                    changeRangeRight={this.changeRangeRight}
                    changeRangeLeft={this.changeRangeLeft}
                    data={data}
                    />


                    {/* Amount remaining is*/}

                    <div className='amount-remaining-is'>
                        <span>Amount remaining is:</span>
                        <div className='img-span-span1'><img
                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Enough</span></div>
                        <div className='img-span-span2'><img

                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Exceeded</span></div>
                        <div className='img-span-span3'><img

                            src='images/icons/check-box-checked.svg'
                            alt='checkbox-applyed' /><span>Close to the end</span></div>
                    </div>
                </div>
            </div>
        )
    }
}