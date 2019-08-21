import React from 'react';
import './filters-window.css';
import InputDate from './input-date/input-date';
import InputProject from './input-project/input-project';
import InputSlider from './input-slider/input-slider';
import FiltersButtons from './filters-buttons/filters-buttons';

export default function FiltersWindow (props) {
   
        return (
            <div className='filters-window'>

               <FiltersButtons {...props} />

                <div className='filters-group'>

                    <InputDate {...props} />

                    <InputProject {...props}/>

                    <InputSlider {...props}/>

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
