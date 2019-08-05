import React, { Component } from 'react';
import './sort.css';

export default class Sort extends Component {
    render() {
        const { columnsNames } = this.props;
        return (
            <div className='sort'>
            <div className='sort-by'><span className='sort-by-title'>Sort by:</span></div>
            <div className='created-at'>
                <select>
                    {columnsNames.map(el => <option key  = {el.id}>{el.name}</option>)}
                </select>
            </div> 
            </div>
        )
    }
}
