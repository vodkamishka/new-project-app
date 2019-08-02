
const initialState = {
    showNewBudget: false
}

const showModalWindows = (state = initialState, action) => {

   switch (action.type) {
       case 'WINDOW_NEW_BUBGET_TOGGLE':
           return {
               ...state,
               showNewBudget: !state.showNewBudget
           }
           default: return state;
   }
}

export default showModalWindows;