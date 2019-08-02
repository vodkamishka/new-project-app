import React, { Component } from 'react';
import './sort.css';

export default class Sort extends Component {
    render() {
        return (
            <div className='sort'>
            <div className='sort-by'>Sort by:</div>
            <div className='created-at'>
                <select>
                    <option>Created at:</option>
                    <option>Number:</option>
                </select>
            </div> 
            </div>
        )
    }
}
