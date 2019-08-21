import React from 'react';
import './input-slider.css';
import SliderComponent from './slider';

export default function InputSlider (props) {
       
        return (
            <div className='amount-total-range'>
                <span>Amount total range, $</span>
                <div className='filter-plus-minus twix1'>
                    <div><img 
                    src='images/icons/plus-black.svg'
                    alt='plus' 
                    onClick={()=> props.shiftLeftButtons(props.amount.max/50)}
                     /></div>
                    <div><img 
                    src='images/icons/minus.svg' 
                    alt='minus'
                    onClick={()=> props.shiftLeftButtons(-props.amount.max/50)} 
                    /></div>
                </div>
                <div className='slider-container'>

                <SliderComponent  {...props}/>
                   
                </div>
                <div className='filters_line'></div>
                <div className='filter-plus-minus twix2'>
                    <div><img
                        src='images/icons/plus-black.svg'
                        alt='plus'
                        onClick={()=>props.shiftRightButtons(props.amount.max/50)}
                    /></div>
                    <div><img src='images/icons/minus.svg'
                        alt='minus'
                        onClick={()=>props.shiftRightButtons(-props.amount.max/50)}
                    /></div>
                </div>
            </div>
        )
    }
