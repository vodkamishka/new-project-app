import React from 'react';
import './table.css';

const columnsName = [
    { id: 1, name: 'Budget name' },
    { id: 2, name: 'PO number' },
    { id: 3, name: 'Amount total, $' },
    { id: 4, name: 'Amount remaining, $' },
    { id: 5, name: 'Created at' },
    { id: 6, name: 'Projects' },
]

const data = [
    { id: 1, budgetName: 'For transition operation', POnumber: '9846-12-3254', amountTotal: 1500.00, amountRemaining: 1487.00, createdAt: '10 jul 2019, 16:48', projects: [{ id: 345, name: 'Project 2345 - manual translation' }, { id: 346, name: 'Project 1128 - ubersetzung' }] },
    { id: 2, budgetName: 'New budgets for all primary tasks', POnumber: '6548947515', amountTotal: 20680.00, amountRemaining: 21946.65, createdAt: '8 mar 2018, 14:02', projects: [{ id: 347, name: 'Project 295 - manual translation' }, { id: 348, name: 'Project 1504 - ubersetzung' }] },
    { id: 3, budgetName: 'Documents and secure data budget', POnumber: '9546877-3246', amountTotal: 9150.00, amountRemaining: 3546.33, createdAt: '12 apr 2019, 8:32', projects: [{ id: 350, name: 'Project 1365 - manual translation' }] },
    { id: 4, budgetName: 'Exelltable with marceting', POnumber: '234566-12-3254', amountTotal: 37890.00, amountRemaining: 15000.00, createdAt: '18 dec 1982, 01:48', projects: [{ id: 351, name: 'Project 1111 - manual translation' }, { id: 352, name: 'Project 1790 - der himel' }] },
    { id: 5, budgetName: 'Plutarc pliniy mladshiy iosif flaviy', POnumber: '456677', amountTotal: 25180.00, amountRemaining: 111.60, createdAt: '18 may 2018, 02:01', projects: [{ id: 353, name: 'Project 12 - manual transaction' }, { id: 354, name: 'Project 3333 - ahtung' }] }
]

export default function Table() {
    return (
        <div className='budgets__table'>
            <table>
                <tbody>
                    {data.map(el => {
                        return (
                            <tr key={el.id}>
                                <td className='col1'>
                                    <div className='col-title'>Budget name</div>
                                    <div className='underline'>{el.budgetName}</div>
                                </td>
                                <td className='col2'>
                                    <div className='col-title'>PO number</div>
                                    <div>{el.POnumber}</div>
                                </td>
                                <td className='col3'>
                                    <div className='col-title title3'>Amount total</div>
                                    <div>$ {el.amountTotal}</div>
                                </td>
                                <td className='col4'>
                                    <div className='col-title'>Amount remaining</div>
                                    <div>$ {el.amountRemaining}</div>
                                </td>
                                <td className='col5'>
                                    <div className='col-title'>Created date</div>
                                    <div>{el.createdAt}</div>
                                </td>
                                <td className='col6'>
                                    <div className='col-title'>Projects</div>
                                    <div>{el.projects.map(element => <span key={element.id}> {element.name}</span>)}</div>
                                </td>
                                <td className='col7'>Projects</td>
                                <td className='col8'>
                                    <div>
                                        <img src='images/icons-png/menu-secondary.png' alt='menu-secondary' />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
