import React, { Component } from 'react';
import './input-slider.css';

export default class InputSlider extends Component {
    render() {
        const {slider, range, handleSliderChange, handleRangeChange, changeRangeLeft, changeRangeRight} = this.props;
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

                    <input
                        type='range'
                        className='slider'
                        min='0'
                        max='50000'
                        value={slider}
                        onChange={event => handleSliderChange(event)}
                    />
                    <div className='slider-observer'
                        style={styleSlider}
                    >{slider}</div>

                    <input
                        type='range'
                        className='slider'
                        min='0'
                        max='50000'
                        value={range}
                        onChange={event => handleRangeChange(event)}
                    />
                    <div className='slider-observer'
                        style={styleRange}
                    >{range}</div>
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