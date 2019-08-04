const SEARCH_IN_BUDGETS = 'SEARCH_IN_BUDGETS';

const inBudgetsSeached = value => {
    return {
        type: SEARCH_IN_BUDGETS,
        payload: value
    }
}

export { inBudgetsSeached }