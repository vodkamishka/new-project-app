const WINDOW_NEW_BUBGET_TOGGLE = 'WINDOW_NEW_BUBGET_TOGGLE'; // open window for create new budget
const SHOW_HIDE_COLUMN_BUDGETS = 'SHOW_HIDE_COLUMN_BUDGETS'; // hide or show columns of table with budgets
const ICON_VIEW_SETTINGS_TOGGLE = 'ICON_VIEW_SETTINGS_TOGGLE'; // open window view-settings (right-top of table with budgets)


const newBudgetToggled = () => {
    return {
        type: WINDOW_NEW_BUBGET_TOGGLE
    }
}
const showHideColumnBudgetsToggled = id => {
    return {
        type: SHOW_HIDE_COLUMN_BUDGETS,
        payload: id
    }
}
const iconSettingsToggled = () => {
    return {
        type: ICON_VIEW_SETTINGS_TOGGLE
    }
}

export {
    newBudgetToggled, showHideColumnBudgetsToggled, iconSettingsToggled 
}