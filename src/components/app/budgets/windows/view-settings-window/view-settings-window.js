import React from 'react';
import './view-settings-window.css';

export default function ViewSettingsWindow({ columnsNames, showHideColumnToggled, columns }) {
    return (
        <div className='view-settings-window'>

            <ul>
                {columnsNames.map(el => {

                    return (
                        <li
                            key={el.id}
                        >
                            <img
                                onClick={() => {
                                    showHideColumnToggled(el.id)
                                }}
                                src={columns['col' + el.id] ? 
                                'images/icons-png/checkbox-enable.png' : 
                                'images/icons-png/checkbox-applyed.png'}
                                alt='checkbox-applyed' />
                            <span>{el.name}</span>


                        </li>

                    )
                }

                )}
            </ul>

        </div>
    )
}
