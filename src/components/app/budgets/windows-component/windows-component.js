import React, {Component} from 'react';
import ViewSettingsWindowModal from 'react-modal';
import './view-settings-window.css';

ViewSettingsWindowModal.setAppElement('#root');

export default class WindowsComponent extends Component {
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
        const {showIconViewSettingsWindow, iconSettingsToggled, columnsNames, showHideColumnToggled, columns } = this.props;
    return (
        <div>
            <ViewSettingsWindowModal
             isOpen={showIconViewSettingsWindow}
             onRequestClose={iconSettingsToggled}
             style = {{
                overlay: {
                    width: '227px',
                    height: '260px',  
                },
                content: {
                    width: '227px',
                    height: '260px',
                position: 'absolute',
                right: '48px',
                top: '190px',
                borderRadius: '10px',
                background: 'white',
                boxShadow: '0 1px 5px rgba(0,0,0,0.25)',
                display: 'flex',
                zIndex: '2000',
                fontSize: '14px' 
             }
               
            }}
            >
            <div className='view-settings-window'>

<ul>
    {columnsNames.map(el => {

        return (
            <li
                key={el.id}
            >
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


            </ViewSettingsWindowModal>
                        
                    
        </div>
    )
}
}