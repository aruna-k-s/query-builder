import {
    addRules,
    addGroups,
    updateInput,
    deleteRule,
    deleteGroup
} from '../constants/actionsTypes';

const initialState = {
    groupRule: [{
        id: 0,
        rule: [{
            id: 0,
            field: '',
            condition: '',
            criteria: '',
            conditionSymbol: ''
        }]
    }]
}

const addGroupToState = (state, action) => {
    state.groupRule.push(action.payload)
    return state.groupRule
}

const addRuleInGroup = (state, action) => {
    let indexOfGroup = state.groupRule.findIndex((groupObj => groupObj.id == action.payload.groupId));
    state.groupRule[indexOfGroup].rule.push(...action.payload.rule);
    return state.groupRule
}

const updateInputs = (state, action) => {
    let indexOfGroup = state.groupRule.findIndex((groupObj => groupObj.id == action.payload.groupId));
    let indexOfRule = state.groupRule[indexOfGroup].rule.findIndex(ruleObj => ruleObj.id == action.payload.ruleId)
    state.groupRule[indexOfGroup].rule[indexOfRule] = action.payload.rule
    return state.groupRule
}

const deleteRuleinGroup = (state, action) => {
    let indexOfGroup = state.groupRule.findIndex((groupObj => groupObj.id == action.payload.groupId));
    state.groupRule[indexOfGroup].rule = state.groupRule[indexOfGroup].rule.filter(ruleObj => ruleObj.id !== action.payload.ruleId);
    return state.groupRule
}

const deleteGroupFun = (state, action) => {
    let groupArr = state.groupRule.filter((groupObj => groupObj.id !== action.payload.groupId));
    state.groupRule = groupArr;
    return state.groupRule;
}


export function QueryReducers(state = initialState, action) {
    switch (action.type) {

        case addGroups:
            return { groupRule: addGroupToState(state, action) }

        case addRules:
            return { groupRule: addRuleInGroup(state, action) }

        case updateInput:
            return { groupRule: updateInputs(state, action) }

        case deleteRule:
            return { groupRule: deleteRuleinGroup(state, action) }

        case deleteGroup:
            return { groupRule: deleteGroupFun(state, action) }
        

        default: return state

    }
}