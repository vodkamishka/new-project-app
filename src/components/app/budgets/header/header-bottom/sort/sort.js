import React, { Component } from 'react';
import './sort.css';

export default class Sort extends Component {
    render() {
        const { columnsNames } = this.props;
        return (
            <div className='sort'>
            <div className='sort-by'>Sort by:</div>
            <div className='created-at'>
                <select>
                    {columnsNames.map(el => <option key  = {el.id}>{el.name}</option>)}
                </select>
            </div> 
            </div>
        )
    }
}
