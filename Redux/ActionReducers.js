import {FETCH_EMPLOYEE} from './ActionsTypes'

const initialState = {
    emp_details:[],
}    

const actionReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_EMPLOYEE:
            return{
                ...state,
                emp_details:action.payload
            }
            
                  
        default: return state
    }
}

export default actionReducer