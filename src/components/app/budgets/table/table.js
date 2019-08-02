import React from 'react';
import './table.css';

export default function Table({data}) {
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
                                        <img src='images/icons/line-menu.svg' alt='menu-secondary' />
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
