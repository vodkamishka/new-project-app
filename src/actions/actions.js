import { authAPI, budgetsAPI } from "../services/api/api";

const DATA_BUDGETS_FROM_API_LOADED = 'DATA_BUDGETS_FROM_API_LOADED';
const DELETE_ROW = 'DELETE_ROW';
const EDIT_DATA = 'EDIT_DATA';
const CHANGE_ROW = 'CHANGE_ROW';

const dataBudgetsLoaded = data => {
    return {
        type: DATA_BUDGETS_FROM_API_LOADED,
        payload: data
    }
}
const rowDeleted = id => {
    return {
        type: DELETE_ROW,
        payload: id
    }
}
const dataEdited = (title, po_number, amount) => {
    return {
        type: EDIT_DATA,
        payload: {title, po_number, amount}
    }
}

const rowChanged = (title, po_number, amount, id) => {
    return {
        type: CHANGE_ROW,
        payload: {title, po_number, amount, id}
    }
}

const dataBudgetsApiLoaded = () => {
    return dispatch => {
        authAPI.getToken()
            .then(() => budgetsAPI.getBudgets())
            .then(response => {
                console.log(response.data.data)
                dispatch(dataBudgetsLoaded(response.data.data))
            })
    }
}
const createBudget = (title, po_number, amount) => {
    return dispatch => {
        budgetsAPI.createBudget(title, po_number, amount)
            .then(() => budgetsAPI.getBudgets())
            .then(response => {
                dispatch(dataBudgetsLoaded(response.data.data))
            })
    }
}
const deleteBudget = id => {
    return dispatch => {
        budgetsAPI.deleteBudget(id).
        then(response => {
            if (response.data.data === undefined) dispatch(rowDeleted(id))
        })
    }
}
const budgetsSorted = key => {
    return dispatch => {
        budgetsAPI.getSort(key)
            .then(response => {
                dispatch(dataBudgetsLoaded(response.data.data))
            })
    }
}
const budgetsSearched = title => {
    return dispatch => {
        budgetsAPI.getSearch(title)
            .then(response => {
                dispatch(dataBudgetsLoaded(response.data.data))
            })
    }
}
const budgetsFiltered = (date, projectId, amount) => {
    return dispatch => {
        budgetsAPI.getFilter(date, projectId, amount)
        .then(response => {
            dispatch(dataBudgetsLoaded(response.data.data))
        })
    }
}

const idBudgetGetted = id => {
    return dispatch => {
        budgetsAPI.getBudgetId(id)
        .then(response => {
            const {title, po_number, amount} = response.data.data;
            dispatch(dataEdited(title, po_number, amount))
        })
    }
}

const idBudgetEdit = (title, po_number, amount, id) => {
  
    return dispatch => {
        console.log(title, po_number, amount, id)
        budgetsAPI.editBudget(title, po_number, amount, id)
        .then(response => {
            const {title, po_number, amount, id} = response.data.data;
            dispatch(rowChanged(title, po_number, amount, id))
        })
    }
}


export {
    dataBudgetsApiLoaded,
    createBudget,
    deleteBudget,
    budgetsSorted,
    budgetsSearched,
    budgetsFiltered,
    rowDeleted,
    idBudgetGetted,
    idBudgetEdit 
}