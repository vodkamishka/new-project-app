import React from 'react';
import './div-table.css';

import Projects from './projects/projects';

export default function DivTable({data, columns}) {
    return (
        <div className='budgets__table'>
            <div className ='table'>
                    {data.map(el => {
                        return (
                            <div className= 'tr' key={el.id}>
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
                                    <div>{el.created_at}</div>
                                </div>
                                <div className={columns.col6 ? 'hide' : 'col6'}>
                                    <div className='col-title'>{el.projects.length === 0 ? '' : 'Projects'}</div>
                                    <div>{el.projects.map(element => <span key={element.id}> {element.title}</span>)}</div>
                                </div>
                                <div className='col7'><Projects projectsCount = {el.projects.length} /></div>
                                <div className='col8'>
                                    <div>
                                        <img src='images/icons/line-menu.svg' alt='menu-secondary' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    )
}
