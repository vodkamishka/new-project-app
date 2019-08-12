import React from 'react';
import './window-edit-budget.css';
import EditBudget from './edit-budget/edit-budget';

export default function WindowEditBudget({ editWindowToggled, budgetId, idBudgetGetted, editData, idBudgetEdit  }) {
    return (
        <div className = 'window-new-budget'>
           <EditBudget 
            editWindowToggled = {editWindowToggled}
            budgetId = {budgetId}
            idBudgetGetted  = {idBudgetGetted}
            editData = {editData}
            idBudgetEdit={idBudgetEdit}
           /> 
        </div>
    )
}
