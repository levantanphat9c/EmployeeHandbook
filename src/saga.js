import { call, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { getFolderEmployeeHandbook } from './services/FolderServices';

function* loadFolder(action) {
    try {        
        let res = yield call(getFolderEmployeeHandbook, action.payload)
        yield put({ type: "LOAD_FOLDER_SUCCESS", payload: res.data.data });
    } catch (e) {
        yield put({ type: "LOAD_FOLDER_FAILED", payload: e.message });
    }
}

function* mySaga() {
    yield takeEvery("LOAD_FOLDER", loadFolder);
}

export default mySaga;