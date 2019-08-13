import React from 'react';
import './window-edit-budget.css';
import EditBudget from './edit-budget/edit-budget';

export default function WindowEditBudget({ editWindowToggled, budgetId, idBudgetGetted, editData, idBudgetEdit, length  }) {
    let h = (length-9)*72;
    const style = {height: length > 10 ? `calc(100vh + ${h}px + 50px)` : `100vh`}
    return (
        <div className = 'window-edit-budget'
        style={style}
        >
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
