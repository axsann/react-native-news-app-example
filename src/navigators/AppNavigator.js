// @flow

import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation'

import Articles from '../containers/Articles/Articles.container'
import TagSearch from '../containers/TagSearch/TagSearch.container'
import ArticleWeb from '../components/ArticleWeb/ArticleWeb.screen'
import FilteredArticles from '../containers/FilteredArticles/FilteredArticles.container'

export const AppNavigator = StackNavigator({
  Main: { screen: Articles },
  ArticleWeb: { screen: ArticleWeb },
  TagSearch: { screen: TagSearch },
  FilteredArticles: { screen: FilteredArticles },
})

const DEBOUNCE_TIME = 1000

class AppWithNavigationState extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props

    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())

    return true
  };
  render() {
    const { dispatch, nav } = this.props

    return (
      <AppNavigator
        navigation={_addNavigationHelpers({ dispatch, state: nav })}
      />
    )
  }
}

// ボタンの連打で遷移が二重に行われるのを防ぐ。
// this.props.navigation.navigate の代わりに this.props.navigation.navigateWithDebounce を使用する。
const _addNavigationHelpers = navigation => {
  const original = addNavigationHelpers(navigation)
  let debounce = null

  return {
    ...original,
    navigateWithDebounce: (routeName, params, action) => {
      const func = () => {
        if (debounce) {
          return
        }

        navigation.dispatch(NavigationActions.navigate({
          routeName,
          params,
          action,
        }))

        debounce = setTimeout(() => {
          debounce = 0
        }, DEBOUNCE_TIME)
      }

      return func()
    },
  }
}

export default connect(
  state => ({
    nav: state.nav,
  })
)(AppWithNavigationState)
