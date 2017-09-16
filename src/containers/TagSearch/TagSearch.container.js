import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import TagSearchScreen from '../../components/TagSearch/TagSearch.screen'
import * as articlesActions from '../../redux/modules/Articles.redux'
import { connect } from 'react-redux'

type Props = {
  articles: Array<any>,
  navigation: Object,
  actions: Object,
}

class TagSearchContainer extends Component {
  props: Props

  static navigationOptions = {
    title: 'タグで検索',
  }

  render() {
    const { articles, navigation, actions } = this.props

    return (
      <TagSearchScreen
        navigation={navigation}
        tagList={articles.tagList}
        isFetching={articles.isFetching}
        fetchSucceeded={articles.fetchSucceeded}
        {...actions} />
    )
  }
}

export default connect(
  state => ({
    articles: state.articles,
  }),
  dispatch => ({
    actions: {
      articlesActions: bindActionCreators(articlesActions, dispatch),
    },
  })
)(TagSearchContainer)
