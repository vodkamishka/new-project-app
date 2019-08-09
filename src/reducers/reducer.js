
const initialState = {
    data: [],
    termDataTable: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'DATA_BUDGETS_FROM_API_LOADED':
            return {
                ...state,
                data: action.payload
            }
        case 'DELETE_ROW': 
             let id = action.payload;
             let index = state.data.findIndex(el => el.id === id)
             return {
                 ...state,
                 data: [ 
                    ...state.data.slice(0, index),
                    ...state.data.slice(index + 1)
                ]
             }
        
       
        default: return state;
    }
}

export default reducer;