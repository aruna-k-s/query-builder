import {
    saveQuery,
    fieldArea,
    conditionArea,
    criteriaArea,
    deleteQuery,
    addRules,
    addGroups,
    updateInput,
    deleteRule,
    deleteGroup
} from "../constants/actionsTypes";

export function savingQuery() {
    return {
        type: saveQuery
    };
}

export function fieldAreaFun(field) {
    return {
        type: fieldArea,
        payload: field
    };
}

export function conditionAreaFun(condition) {
    return {
        type: conditionArea,
        payload: condition
    };
}

export function criteriaAreaFun(criteria) {
    return {
        type: criteriaArea,
        payload: criteria
    };
}

export function deleteQueryFun(index) {
    return {
        type: deleteQuery,
        payload: index
    };
}


export function addRule(payload) {
    return {
        type: addRules,
        payload
    }
}

export function addGroup(payload) {
    return {
        type : addGroups,
        payload
    }
}

export function updateInp(payload) {
    return {
        type : updateInput,
        payload
    }
}

export function deleteRules(payload) {
    return {
        type : deleteRule ,
        payload
    }
}

export function deleteGroups(payload) {
    return {
        type : deleteGroup ,
        payload
    }
}