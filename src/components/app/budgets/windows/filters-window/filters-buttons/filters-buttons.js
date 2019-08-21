import React from 'react';
import './filters-buttons.css';

export default function FiltersButtons ({date, values, selectedOption, budgetsFiltered, filterCleared, filtersWindowToggled}) {
    return (
        <div className='filters-buttons' >
                    <span>Filters</span>
                    <button className='button clear'
                        onClick={() => {
                            let promise = new Promise(resolve => {
                                resolve()
                            })
                            promise.then(() => {
                                budgetsFiltered(date, undefined, values[0], values[1])
                                filterCleared()
                            })
                        }}
                    >Clear</button>
                    <button
                        className='button apply'
                        onClick={() => {
                            budgetsFiltered(date, selectedOption.id, values[0], values[1]);
                            filtersWindowToggled()
                        }}
                    >Apply</button>
                </div>
    )
}