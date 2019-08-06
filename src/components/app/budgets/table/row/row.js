import React, { Component } from 'react';

import './row.css';

export default class Row extends Component {
    state = {
        showProjets: false
    }
    showProjectsTogled = () => {
        this.setState({
            showProjets: !this.state.showProjets
        })
    }
    render() {
        const { el, columns } = this.props;
        const { showProjets } = this.state;
        
        const styleRow = { 
            
           
            
         };
        const styleCol6 = { 
            whiteSpace: showProjets ? 'normal' : 'nowrap',
            textDecoration: showProjets ? 'underline' : 'none'
        }
        return (
            <div
                className='tr'
                key={el.id}
                style={styleRow}
            >
                <div className={columns.col1 ? 'hide' : 'col1'}>
                    <div className='col-title'>Budget name</div>
                    <div className='underline'>{el.title}</div>
                </div>
                <div className={columns.col2 ? 'hide' : 'col2'}>
                    <div className='col-title'>PO number</div>
                    <div>{el.po_number}</div>
                </div>
                <div className={columns.col3 ? 'hide' : 'col3'}>
                    <div className='col-title title3'>Amount total</div>
                    <div>$ {el.amount}</div>
                </div>
                <div className={columns.col4 ? 'hide' : 'col4'}>
                    <div className='col-title'>Amount remaining</div>
                    <div>$ {el.amount_remaining}</div>
                </div>
                <div className={columns.col5 ? 'hide' : 'col5'}>
                    <div className='col-title'>Created date</div>
                    <div>{new Date(el.created_at).toDateString()}</div>
                </div>

                <div className={columns.col6 ? 'hide' : 'col6'}
                 style = {styleCol6}
                >
                    <div className='col-title'>{el.projects.length === 0 ? '' : 'Projects'}</div>
                    <div
                   
                    >{el.projects.map(element => <span key={element.id}> {element.title}</span>)}</div>
                </div>

                <div className={columns.col7 ? 'hide' : 'col7'}>
                    <div className='budgets-table-projects'>
                        <div>{el.projects.length} {el.projects.length === 1 ? 'project' : 'projects'}</div>
                        <div><img 
                        src='images/icons-png/shevron.png' 
                        alt='shevron' 
                        onClick = {this.showProjectsTogled}
                        /></div>
                    </div>
                </div>

                <div className='col8'>
                    <div>
                        <img src='images/icons/line-menu.svg' alt='menu-secondary' />
                    </div>
                </div>
            </div>
        )
    }
}