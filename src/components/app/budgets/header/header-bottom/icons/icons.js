import React from 'react';
import './icons.css';

export default function Icons({iconSettingsToggled, filtersWindowToggled}) {
    return (
        <div className= 'icons'>
          <div className='filters'><img
            src='images/icons/filters.svg' 
            alt='filters' 
            onClick = {filtersWindowToggled}
            /></div>
            <div className='view-settings'><img 
            src='images/icons/parameters.svg' 
            alt='view-settings'
            onClick = {iconSettingsToggled}
            /></div> 
        </div>
    )
}
