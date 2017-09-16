import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import ArticlesScreen from '../../components/Articles/Articles.screen'
import * as articlesActions from '../../redux/modules/Articles.redux'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import {
  Button,
  Icon,
} from 'native-base'

type Props = {
  articles: Array<any>,
  navigation: Object,
  actions: Object,
}

class ArticlesContainer extends Component {
  props: Props

  static navigationOptions = ({ navigation }) => ({
    title: 'NewsApp',
    headerRight: <View style={styles.headerRight}>
                   <Button transparent onPress={() => navigation.navigateWithDebounce('TagSearch')}><Icon name="search"/></Button>
                 </View>,
  })

  render() {
    const { articles, navigation, actions } = this.props

    return (
      <ArticlesScreen
        navigation={navigation}
        articlesDevidedBy6={articles.articlesDevidedBy6}
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

const styles = StyleSheet.create({

  headerRight: {
    flexDirection: 'row',
  },
})
