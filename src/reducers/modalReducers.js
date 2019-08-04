
const initialState = {
    showNewBudget: false,
    showIconViewSettingsWindow: false,
    columns: {
        col1: false,
        col2: false,
        col3: false,
        col4: false,
        col5: false,
        col6: false
    },
}

const showModalWindows = (state = initialState, action) => {

    switch (action.type) {
        case 'WINDOW_NEW_BUBGET_TOGGLE':
            return {
                ...state,
                showNewBudget: !state.showNewBudget
            }
        case 'SHOW_HIDE_COLUMN_BUDGETS':
            return {
                ...state,
                columns: {
                    ...state.columns,
                    ['col' + action.payload]: !state.columns['col' + action.payload]
                }
            }
        case 'ICON_VIEW_SETTINGS_TOGGLE':
            return {
                ...state,
                showIconViewSettingsWindow: !state.showIconViewSettingsWindow
            }
        default: return state;
    }
}

export default showModalWindows;