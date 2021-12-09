import axios from 'axios'
import {FETCH_EMPLOYEE} from'./ActionsTypes'



export const fetchEmployee = emp => {
    
    return {
        type: FETCH_EMPLOYEE,
        payload: emp
    }
}