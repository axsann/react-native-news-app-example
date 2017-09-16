// @flow

import { AppNavigator } from '../../navigators/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('Main')
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
)

export default (state: ?Object = initialNavState, action: Object) => {
  let nextState = null

  switch (action.type) {

    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
