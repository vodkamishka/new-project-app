
const initialState = {
    data: [],
    termDataTable: []
}

const reducerDataLoaded = (state = initialState, action) => {

    switch (action.type) {
        case 'DATA_BUDGETS_FROM_API_LOADED':
            return {
                ...state,
                data: action.payload
            }
        case 'TERM_DATA_TABLE_UPDATE':
              
            let termDataTable = state.termDataTable;
            if (termDataTable.length === 0) { termDataTable = [...state.data] }

            return {
                ...state,
                termDataTable: termDataTable
            }
        case 'SEARCH_IN_BUDGETS':
                
            let value = action.payload.toLowerCase();
            
            if (value.length === 0) {
                return {
                    ...state,
                    termDataTable: state.data
                }
            }
            return {
                ...state,
                termDataTable: [...state.termDataTable.filter(el => el.title.toLowerCase().indexOf(value) > -1)]
            }
        default: return state;
    }
}

export default reducerDataLoaded;