import React, { Component } from 'react';

import './row.css';
import WindowDeleteBudget from './window-delete-budget/window-delete-budget';
import MainDeleteWindow from './main-delete-window/main-delete-window';

export default class Row extends Component {
    state = {
        showProjets: false,
        selectId: null,
        showMainDeleteWindow: false
    }
    showProjectsTogled = () => {
        this.setState({
            showProjets: !this.state.showProjets
        })
    }
    idSelected = id => {
        this.setState({
            selectId: id
        })
    }
    mainDeleteWindowToggle = () => {
        this.setState({
            showMainDeleteWindow: !this.state.showMainDeleteWindow
        })
    }
    render() {
        
        const { el, columns, deleteBudget, deleteWindowsToggled, showDeleteWindows, rowDeleted} = this.props;
        const { showProjets,  showMainDeleteWindow, selectId } = this.state;
           
        const styleGradient = {zIndex: showProjets ? '0' : '500'}
        const styleImgage = { transform: showProjets ? 'rotate(90deg)' : 'rotate(270deg)' };
        const styleCol6 = {
            whiteSpace: showProjets ? 'normal' : 'nowrap',
            cursor: showProjets ? 'pointer' : 'default'
        }
        const styleSpan = { textDecoration: showProjets ? 'underline' : 'none' }
        return (
            <>
                {showMainDeleteWindow ? <MainDeleteWindow
                    mainDeleteWindowToggle={this.mainDeleteWindowToggle}
                    selectId={selectId}
                    deleteBudget={deleteBudget}
                    idSelected={this.idSelected}
                    rowDeleted={rowDeleted}
                    
                /> : null}
                <div
                    className='tr'
                    key={el.id}
                >
                    <div className={columns[0]['col1'] ? 'hide' : 'col1'}>
                        <div className='col-title'>Budget name</div>
                        <div className='underline'>{el.title}</div>
                    </div>
                    <div className={columns[1]['col2'] ? 'hide' : 'col2'}>
                        <div className='col-title'>PO number</div>
                        <div>{el.po_number}</div>
                    </div>
                    <div className={columns[2]['col3'] ? 'hide' : 'col3'}>
                        <div className='col-title title3'>Amount total</div>
                        <div>$ {el.amount}</div>
                    </div>
                    <div className={columns[3]['col4'] ? 'hide' : el.amount_remaining < el.amount ? 'col4 red' :  el.amount_remaining > 0.8*el.amount ? 'col4 orange' : 'col4'}>
                        <div className='col-title'>Amount remaining</div>
                        <div>$ {el.amount_remaining}</div>
                    </div>
                    <div className={columns[4]['col5'] ? 'hide' : 'col5'}>
                        <div className='col-title'>Created date</div>
                        <div>{new Date(el.created_at).toDateString()}</div>
                    </div>

                    <div className={columns[5]['col6'] ? 'hide' : 'col6'}
                        style={styleCol6}
                    >   
                        <div 
                        className = 'col6-gradient'
                        style = {styleGradient}
                        ></div>
                        <div className='col-title'>{el.projects.length === 0 ? '' : 'Projects'}</div>
                        <div

                        >{el.projects.map(element => <span style={styleSpan} key={element.id}> {element.title} </span>)}</div>
                    </div>

                    <div className={columns.col7 ? 'hide' : 'col7'}>
                        <div className='budgets-table-projects'>
                            <div>{el.projects.length} {el.projects.length === 1 ? 'project' : 'projects'}</div>
                            <div>
                                {el.projects.length > 2 ?
                                    <img
                                        src='images/icons/shevron-left.svg'
                                        alt='shevron'
                                        style={styleImgage}
                                        onClick={this.showProjectsTogled}
                                    /> : null} </div>
                        </div>
                    </div>

                    <div className='col8'>
                        <div>
                            
                            <WindowDeleteBudget
                                showWindowDeleteToggle={this.showWindowDeleteToggle}
                                mainDeleteWindowToggle={this.mainDeleteWindowToggle}
                                idSelected={this.idSelected}
                                id={el.id}
                                showDeleteWindows={showDeleteWindows}
                                deleteWindowsToggled={deleteWindowsToggled}
                            /> 
                            <img
                                src='images/icons/line-menu.svg'
                                alt='menu-secondary'
                                onClick={
                                    () => { 
                                                this.idSelected(el.id)
                                                deleteWindowsToggled(el.id)
                                    }
                                }
                            />

                        </div>
                    </div>
                </div>
            </>
        )
    }
}