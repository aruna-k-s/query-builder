import { saveQueryDataError, saveQueryDataSuccess } from "../actions/SaveQueryActions";
import { SaveQueryAPI } from "../apis/SaveQueryApi";
import { saving_query } from "../constants/actionsTypes";
import { call, put, takeEvery } from 'redux-saga/effects';

function* SaveQueryData(action) {
    try {
        const saveQuery = yield call(SaveQueryAPI, action);
        if (saveQuery.code) {
            if (saveQuery.code === 401) {
                // logout the user
            } else {
                yield put(saveQueryDataError(saveQuery));
            }
        } else {
            yield put(saveQueryDataSuccess(saveQuery));
        }

    } catch (e) {
        yield put(saveQueryDataError(e));
    }
}

export default function* SaveQuerySaga() {
    yield takeEvery(saving_query, SaveQueryData);
}