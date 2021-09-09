import {
    save_query_error,
    save_query_success,
    saving_query,
} from "../constants/actionsTypes";

const initialState = {
    saveQueryLoading: false,
    saveQuerySuccess: {},
    saveQueryError: null
}

export function SaveReducer(state = initialState, action) {
    switch (action.type) {
        case saving_query:
            return {
                ...state,
                saveQueryLoading: true
            }

        case save_query_success:
            return {
                ...state,
                saveQuerySuccess: action.payload,
                saveQueryLoading: false
            }
        case save_query_error:
            return {
                ...state,
                saveQueryLoading: false,
                saveQueryError: action.payload
            }

        default:
          return state
    }
}