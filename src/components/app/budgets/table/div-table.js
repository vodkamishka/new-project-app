import React from 'react';

import Row from './row/row';

export default function DivTable({data, columns, deleteBudget}) {
    return (
        <div className='budgets__table'>
            <div className ='table'>
                    {data.map(el => <Row 
                    key = {el.id}
                    el = {el}
                    columns = {columns}
                    deleteBudget ={deleteBudget}
                    />)}
                
            </div>
        </div>
    )
}
