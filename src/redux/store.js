import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getFromStorage } from './helper/localStorage'
import { weatherReducer } from './weather/weatherReducers'
import { autoCompleteReducer } from './autoComplete/autoCompleteReducers'
import { themeReducer } from './theme/themeReducers'
import rootSaga from './rootSaga'

const reducer = combineReducers({
  weather: weatherReducer,
  autoComplete: autoCompleteReducer,
  themeToggle: themeReducer,
})



const themeFromStorage = getFromStorage('theme') || false

const initialState = {
  themeToggle: { theme: themeFromStorage },
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
