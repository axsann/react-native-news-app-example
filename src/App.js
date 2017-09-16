// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/Store'
import AppWithNavigationState from './navigators/AppNavigator'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }

}
