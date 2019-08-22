import React from 'react';
import './filters-window.css';
import InputDate from './input-date/input-date';
import InputProject from './input-project/input-project';
import InputSlider from './input-slider/input-slider';
import FiltersButtons from './filters-buttons/filters-buttons';
import AmountRemaining from './amount-remaining/amount-remaining';

export default function FiltersWindow (props) {
   
        return (
            <div className='filters-window'>

               <FiltersButtons {...props} />

                <div className='filters-group'>

                    <InputDate {...props} />

                    <InputProject {...props}/>

                    <InputSlider {...props}/>

                    <AmountRemaining {...props} />

                </div>
            </div>
        )
    }
