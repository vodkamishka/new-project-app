import React, { Component } from 'react';

import './row.css';
import WindowDeleteBudget from './window-delete-budget/window-delete-budget';
import MainDeleteWindow from './main-delete-window/main-delete-window';

export default class Row extends Component {
    state = {
        showProjets: false,
        showWindowDeleteBudget: false,
        showMainDeleteWindow: false,
        selectId: 4
    }
    showProjectsTogled = () => {
        this.setState({
            showProjets: !this.state.showProjets
        })
    }
    showWindowDeleteToggle = () => {
        this.setState({
            showWindowDeleteBudget: !this.state.showWindowDeleteBudget
        })
    }
    mainDeleteWindowToggle = () => {
        this.setState({
            showMainDeleteWindow: !this.state.showMainDeleteWindow
        })
    }
    idSelected = id => {
        this.setState({
            selectId: id
        })
    }
    render() {
        const { el, columns, deleteBudget } = this.props;
        const { showProjets, showWindowDeleteBudget, showMainDeleteWindow, selectId } = this.state;


        const styleImgage = { transform: showProjets ? 'rotate(270deg)' : 'rotate(90deg)' };
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
                /> : null}
                <div
                    className='tr'
                    key={el.id}
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
                        style={styleCol6}
                    >
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
                            
                            {showWindowDeleteBudget ? <WindowDeleteBudget
                                showWindowDeleteToggle={this.showWindowDeleteToggle}
                                mainDeleteWindowToggle={this.mainDeleteWindowToggle}
                            /> : null}
                            <img
                                src='images/icons/line-menu.svg'
                                alt='menu-secondary'
                                onClick={
                                    () => {
                                        this.idSelected(el.id)
                                        this.showWindowDeleteToggle();
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