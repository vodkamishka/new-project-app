import React from 'react';
import './input-date.css';
import Picker from './date-picker';

export default function InputDate (props) {
  
        return (
            <div className='created-date'>
                <span>Created date</span>
                <Picker  {...props}/>
                {/*<input
                    type='date'
                    className='datetime-local'
                    value={props.startDate}
                    onChange={event => props.handleStartDateChange(event)}
                />*/}
                <div className='filters_line'></div>
            </div>
        )
    }
