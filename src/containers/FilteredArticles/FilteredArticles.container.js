import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import ArticlesScreen from '../../components/Articles/Articles.screen'
import * as articlesActions from '../../redux/modules/Articles.redux'
import { connect } from 'react-redux'

type Props = {
  articles: Array<any>,
  navigation: Object,
  actions: Object,
}

class ArticlesContainer extends Component {
  props: Props

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.tag,
  })

  render() {
    const { articles, navigation, actions } = this.props

    return (
      <ArticlesScreen
        disableRefresh={true}
        navigation={navigation}
        articlesDevidedBy6={articles.filteredArticlesDevidedBy6}
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
)(ArticlesContainer)
