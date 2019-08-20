import React, { Component } from 'react';
import './input-slider.css';
import SliderComponent from './slider';

export default class InputSlider extends Component {
    render() {
        const {slider, range, handleValuesChange, handleRangeChange, changeRangeLeft, changeRangeRight} = this.props;
        let styleSlider = {
            marginLeft: slider / 147 + 'px'
        }
        let styleRange = {
            marginLeft: range / 147 + 'px'
        }
   
        return (
            <div className='amount-total-range'>
                <span>Amount total range, $</span>
                <div className='filter-plus-minus twix1'>
                    <div><img src='images/icons/plus-black.svg' alt='plus' /></div>
                    <div><img src='images/icons/minus.svg' alt='minus' /></div>
                </div>
                <div className='slider-container'>

                <SliderComponent  handleValuesChange = {handleValuesChange}
                />

                   
                </div>
                <div className='filters_line'></div>
                <div className='filter-plus-minus twix2'>
                    <div><img
                        src='images/icons/plus-black.svg'
                        alt='plus'
                        onClick={changeRangeRight}
                    /></div>
                    <div><img src='images/icons/minus.svg'
                        alt='minus'
                        onClick={changeRangeLeft}
                    /></div>
                </div>
            </div>
        )
    }
}