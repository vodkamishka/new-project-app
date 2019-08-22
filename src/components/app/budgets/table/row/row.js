import React, { Component } from 'react';

import './row.css';
import WindowDeleteBudget from './row-windows/window-delete-budget/window-delete-budget';

export default class Row extends Component {
    state = {
        showProjets: false
    }
    showProjectsTogled = () => {
        this.setState({
            showProjets: !this.state.showProjets
        })
    }
    returnLengthLetersprojects = (projects) => {
        let length = 0;
        projects.forEach(el => {
            length += el.title.length
        })
        return length
    }
   
    render() {

        const { el, columns, deleteWindowsToggled, mainDeleteWindowToggle,
            showDeleteWindows, editWindowToggled, idSelected, closeMainWindows,
            budgetIdSetted} = this.props;
        const { showProjets} = this.state;
        let lettersLength = this.returnLengthLetersprojects(el.projects)

        const styleGradient = { zIndex: showProjets ? '0' : '500' }
        const styleImgage = { transform: showProjets ? 'rotate(90deg)' : 'rotate(270deg)' };
        const styleCol6 = {
            whiteSpace: showProjets ? 'normal' : 'nowrap',
            cursor: showProjets ? 'pointer' : 'default'
        }
        const styleDiv = {
            textDecoration: lettersLength < 40 ? 'underline' : showProjets ? 'underline' : 'none',
            cursor: lettersLength < 40 ? 'pointer' : showProjets ? 'pointer' : 'default',
        }
        return (

            <div className='tr'
                key={el.id}
            >
                <div className={columns[0]['col1'] ? 'hide' : 'col1'}>
                    <div className='col-title'>Budget name</div>
                    <div className='underline'
                        onClick={() => {
                            editWindowToggled()
                            budgetIdSetted(el.id, el.projects.length)
                        }}
                    >{el.title}</div>
                </div>
                <div className={columns[1]['col2'] ? 'hide' : 'col2'}>
                    <div className='col-title'>PO number</div>
                    <div>{el.po_number}</div>
                </div>
                <div className={columns[2]['col3'] ? 'hide' : 'col3'}>
                    <div className='col-title title3'>Amount total</div>
                    <div>$ {el.amount}</div>
                </div>
                <div className={columns[3]['col4'] ? 'hide' : el.amount_remaining >= el.amount ? 'col4 red' : el.amount_remaining > 0.8 * el.amount && el.amount_remaining < el.amount ? 'col4 orange' : 'col4'}>
                    <div className='col-title'>Amount remaining</div>
                    <div>$ {el.amount_remaining}</div>
                </div>
                <div className={columns[4]['col5'] ? 'hide' : 'col5'}>
                    <div className='col-title'>Created date</div>
                    <div>{(el.created_at).slice(0, 16)}</div>
                </div>

                <div className={columns[5]['col6'] ? 'hide' : 'col6'}
                    style={styleCol6}
                >
                   <div
                        className='col6-gradient'
                        style={styleGradient}
                    ></div>
                    <div className='col-title'>Projects</div>
                    <div

                    >  {el.projects.length === 0 ? 'No projects applied to with budget now.' : el.projects.map(element => <div style={styleDiv} key={element.id}> {element.title} </div>)}</div>
                </div>

                <div className={columns.col7 ? 'hide' : 'col7'}>
                    <div className='budgets-table-projects'>
                        <div>{el.projects.length} {el.projects.length === 1 ? 'project' : 'projects'}</div>
                        <div className='img-container'
                        onClick={closeMainWindows}
                        >
                            {lettersLength > 45 ?
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
                            mainDeleteWindowToggle={mainDeleteWindowToggle}
                            id={el.id}
                            showDeleteWindows={showDeleteWindows}
                            deleteWindowsToggled={deleteWindowsToggled}
                            editWindowToggled={editWindowToggled}
                            projectsQuantity={el.projects.length}
                        />
                        <img
                            src='images/icons/line-menu.svg'
                            alt='menu-secondary'
                            onClick={
                                () => {
                                        idSelected(el.id)
                                        deleteWindowsToggled(el.id) 
                                        budgetIdSetted(el.id, el.projects.length)
                                }
                            }
                        />

                    </div>
                </div>
            </div>

        )
    }
}