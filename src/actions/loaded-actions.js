import { authAPI, budgetsAPI } from "../services/api/api";

const DATA_BUDGETS_FROM_API_LOADED = 'DATA_BUDGETS_FROM_API_LOADED';
const TERM_DATA_TABLE_UPDATE = 'TERM_DATA_TABLE_UPDATE';


const dataBudgetsLoaded = data => {
    return {
        type: DATA_BUDGETS_FROM_API_LOADED,
        payload: data
    }
}
const termDataTableUpdated = () => {
    return {
        type: TERM_DATA_TABLE_UPDATE
    }
}

const dataBudgetsApiLoaded = () => {

    return dispatch => {
        authAPI.getToken()
        .then(() =>  budgetsAPI.getBudgets())
        .then(response => {
            dispatch(dataBudgetsLoaded(response.data.data))})
        .then(() => dispatch(termDataTableUpdated()))
        
}
}

const createBudgets = (title, po_number, amount) => {
    return dispatch => {
        budgetsAPI.createBudget(title, po_number, amount)
        .then(() =>  budgetsAPI.getBudgets())
        .then(response => {
            console.log(response.data.data)
            dispatch(dataBudgetsLoaded(response.data.data))})
        .then(() => dispatch(termDataTableUpdated()))
    }
}

const deleteBudget = id => {
    return dispatch => {
        budgetsAPI.deleteBudget(id)    
    }
}

export {
    dataBudgetsLoaded, termDataTableUpdated, dataBudgetsApiLoaded, createBudgets, deleteBudget
}