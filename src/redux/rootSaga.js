import { all, call } from 'redux-saga/effects'

import { weatherSagas } from './weather/weatherSagas'
import { autoCompleteSagas } from './autoComplete/autoCompleteSagas'

export default function* rootSaga() {
  yield all([call(weatherSagas), call(autoCompleteSagas)])
}
