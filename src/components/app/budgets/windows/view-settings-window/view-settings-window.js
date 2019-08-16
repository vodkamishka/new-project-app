import React, {Component} from 'react';
import './view-settings-window.css';

export default class ViewSettingsWindow extends Component {
    state = {
        count: 0
    }
    countColumns () {
         let count = this.state.count;
         let columns = this.props.columns;
         columns.forEach(el => {
             if (el['col' + el.id] === true) count+=1
         });
         return count;
    }
    render() {
        const { columnsNames, showHideColumnToggled, columns } = this.props;
    return (
        <div className='view-settings-window'>
            <ul>
                {columnsNames.map(el => {
                    return (
                        <li key={el.id}>
                            <img
                                onClick={() => {
                                    let count = this.countColumns();
                                    if (count === 4 && columns[el.id-1]['col' + el.id] === false)  return;
                                    showHideColumnToggled(el.id)
                                }}
                                src={columns[el.id-1]['col' + el.id] ? 
                                'images/icons/check-box-empty.svg' : 
                                'images/icons/check-box-checked.svg'}
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
}