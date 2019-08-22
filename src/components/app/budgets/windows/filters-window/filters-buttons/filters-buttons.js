import React from 'react';
import './filters-buttons.css';

export default function FiltersButtons ({ values, selectedOption, budgetsFiltered, filterCleared, filtersWindowToggled, startDate}) {
    return (
        <div className='filters-buttons' >
                    <span>Filters</span>
                    <button className='button clear'
                        onClick={() => {
                            let promise = new Promise(resolve => {
                                resolve()
                                filterCleared()
                            })
                            promise.then(() => {
                                budgetsFiltered('', undefined, values[0], values[1])
                            })
                        }}
                    >Clear</button>
                    <button
                        className='button apply'
                        onClick={() => {
                            budgetsFiltered(startDate, selectedOption.id, values[0], values[1]);
                            filtersWindowToggled()
                        }}
                    >Apply</button>
                </div>
    )
}