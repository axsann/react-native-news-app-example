// @flow

import { combineReducers } from 'redux'
import articlesReducer from './modules/Articles.redux'
import navigatorReducer from './modules/Navigator.redux'

export default combineReducers({
  articles: articlesReducer,
  nav: navigatorReducer,
})
