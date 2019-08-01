
const initialState = {
     data: []
}

const reducerDataLoaded = (state = initialState, action) => {

    switch (action.type) {
        case 'DATA_BUDGETS_FROM_API_LOADED':
            return {
                ...state,
                data: action.payload
            }
            default: return state;
    }
}

export default reducerDataLoaded;