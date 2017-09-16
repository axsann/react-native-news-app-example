import { fork, take, put, call } from 'redux-saga/effects'
import * as devicesActions from './Articles.redux'
import { fetchItems } from '../../services/Api.js'

function* fetchItemsAsync() {
  while (true) {
    const action = yield take(devicesActions.FETCH_ITEMS)
    // action.payloadは今は意味ない。引数を渡すときは意味ある
    const { payload, error } = yield call(fetchItems, action.payload)

    if (payload && !error) {
      yield put(devicesActions.fetchItemsSuccess(payload))
    } else {
      yield put(devicesActions.fetchItemsFail(error))
    }
  }
}

export default function* rootSaga() {
  yield fork(fetchItemsAsync)
}
