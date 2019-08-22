
const initialState = {
    data: [],
    termDataTable: [],
    editData: {},
    amount: null
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
        case 'EDIT_DATA':
            return {
                ...state,
                editData: action.payload
            }
        case 'LOAD_AMOUNT':
            return {
                ...state,
                amount: action.payload
            }
        case 'CHANGE_ROW': {
            const { title, po_number, amount, id } = action.payload;
            let index = state.data.findIndex(el => el.id === id)
            return {
                ...state,
                data: [
                    ...state.data.slice(0, index),
                    {
                        ...state.data[index],
                        title,
                        po_number,
                        amount
                    },
                    ...state.data.slice(index + 1)
                ]
            }
        }
        default: return state;
    }
}

export default reducer;