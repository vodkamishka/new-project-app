import React, { Component } from 'react';
import './input-date.css';

export default class InputDate extends Component {
    render() {
        return (
            <div className='created-date'>
                <span>Created date</span>
                <input
                    type='date'
                    className='datetime-local'
                    value={this.props.value}
                    onChange={event => this.props.handleChange(event)}
                />
                <div className='filters_line'></div>
            </div>
        )
    }
}