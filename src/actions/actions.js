import { authAPI, budgetsAPI } from "../services/api/api";

const DATA_BUDGETS_FROM_API_LOADED = 'DATA_BUDGETS_FROM_API_LOADED';
const DELETE_ROW = 'DELETE_ROW';
const EDIT_DATA = 'EDIT_DATA';
const CHANGE_ROW = 'CHANGE_ROW';
const LOAD_AMOUNT = 'LOAD_AMOUNT';

const dataBudgetsLoaded = data => ({type: DATA_BUDGETS_FROM_API_LOADED, payload: data})
const rowDeleted = id => ({type: DELETE_ROW, payload: id})
const dataEdited = (title, po_number, amount) => ({type: EDIT_DATA,payload: {title, po_number, amount}})
const rowChanged = (title, po_number, amount, id) => ({type: CHANGE_ROW, payload: {title, po_number, amount, id}})
const amountLoaded = amount => ({type: LOAD_AMOUNT, payload: amount})




const dataBudgetsApiLoaded = () => {
    return dispatch => {
        authAPI.getToken()
            .then(() => budgetsAPI.getBudgets())
            .then(response => {
                dispatch(dataBudgetsLoaded(response.data.data))
            })
            .then(()=> budgetsAPI.getAmount())
            .then(response =>  dispatch(amountLoaded(response.data.data)))
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
        budgetsAPI.deleteBudget(id)
        .then(response => {
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
const budgetsFiltered = (date, projectId, minValue, maxValue) => {
    console.log(date, projectId, minValue, maxValue)
    
    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }

    if (date !== '') {date = convert(date)};

    return dispatch => {
        budgetsAPI.getFilter(date, projectId, minValue, maxValue)
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