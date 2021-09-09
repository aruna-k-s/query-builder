import {
    saveQuery,
    fieldArea,
    conditionArea,
    criteriaArea,
    deleteQuery
} from '../constants/actionsTypes'

const initialState = {
    query: [],
    field: '',
    condition: '',
    criteria: '',
}

const queryPush = (state) => {
    state.query.push(
        {
            id: state.query.length + 1,
            queryStr: state.field + state.condition + state.criteria
        })
    return state.query;
}

const deleteQueryFun = (state,action) => {
    return state.query.filter(ele => (ele.id !== action.payload + 1));
}

export function QueryReduer(state = initialState, action) {
    switch (action.type) {
        // case saveQuery:
        //     return {
        //         ...state,
        //         field: '',
        //         condition: '',
        //         criteria: '',
        //         query: queryPush(state)
        //     }
        case fieldArea:
            return {
                ...state,
                field: action.payload
            }
        case conditionArea:
            return {
                ...state,
                condition: action.payload
            }
        case criteriaArea:
            return {
                ...state,
                criteria: action.payload
            }
        case deleteQuery:
            return {
                ...state,
                query: deleteQueryFun(state,action)
            }

        default:
            return state;
    }
}