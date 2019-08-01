const DATA_BUDGETS_FROM_API_LOADED = 'DATA_BUDGETS_FROM_API_LOADED';

const dataBudgetsLoaded = data => {
    return {
        type: DATA_BUDGETS_FROM_API_LOADED,
        payload: data
    }
}

export {
    dataBudgetsLoaded
}