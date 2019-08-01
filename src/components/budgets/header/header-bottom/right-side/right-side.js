import React from 'react';
import './right-side.css';
import Search from './search/search';
import Icons from './icons/icons';

export default function RightSide() {
    return (
        <div className='right-side'>
            <Search />
            <Icons /> 
        </div>
    )
}
