import { all } from '@redux-saga/core/effects';
import SaveQuerySaga from './SaveQuerySaga';

export default function* rootSaga() {
    yield all([
        SaveQuerySaga()
    ]);
}