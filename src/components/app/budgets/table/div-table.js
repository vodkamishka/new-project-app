import React from 'react';

import Row from './row/row';

export default function DivTable({data, columns, deleteBudget, mainDeleteWindowToggle, deleteWindowsToggled, showDeleteWindows, rowDeleted,  editWindowToggled, budgetIdSetted, cannotEditDeleteToggled, idSelected}) {
    return (
        <div className='budgets__table'>
            <div className ='table'>
                    {data.map(el => <Row 
                    
                    key = {el.id}
                    el = {el}
                    columns = {columns}
                    deleteBudget = {deleteBudget}
                    rowDeleted = {rowDeleted}
                    mainDeleteWindowToggle  = {mainDeleteWindowToggle}

                    deleteWindowsToggled = {deleteWindowsToggled}
                    showDeleteWindows = {showDeleteWindows}
                    editWindowToggled = {editWindowToggled}
                    budgetIdSetted = {budgetIdSetted}
                    cannotEditDeleteToggled = {cannotEditDeleteToggled}
                   
                    idSelected={idSelected}
                    />)}
                
            </div>
        </div>
    )
}
