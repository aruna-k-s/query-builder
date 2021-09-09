import { combineReducers } from 'redux'
import { QueryReduer } from './QueryReducer'
import { QueryReducers } from './QueryReducers';
import { SaveReducer } from './SaveReducer';

const rootReducer = combineReducers({
    queryReducer: QueryReduer,
    queryReducers: QueryReducers,
    saveQuery: SaveReducer
})

export default rootReducer;