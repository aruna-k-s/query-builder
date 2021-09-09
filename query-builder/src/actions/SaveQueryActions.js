import {
    save_query_error,
    save_query_success,
    saving_query
} from "../constants/actionsTypes";

export function savingQueryData(queryPayload) {
    return {
        type: saving_query,
        payload: queryPayload
    };
}

export function saveQueryDataSuccess(address) {
    return {
        type: save_query_success,
        payload: address
    };
}

export function saveQueryDataError(error) {
    return {
        type: save_query_error,
        payload: error
    };
}