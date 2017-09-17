// @flow

import React, { Component } from 'react'
import {
  RefreshControl,
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native'
import {
  Button,
  Container,
  Card,
  CardItem,
} from 'native-base'
import { COLORS } from '../../constants'
import ArticleRowOne from './ArticleRowOne.component'
import ArticleRowTwo from './ArticleRowTwo.component'
import ArticleRowThree from './ArticleRowThree.component'
import ArticleRowFour from './ArticleRowFour.component'
import ArticleRowFive from './ArticleRowFive.component'
import ArticleRowSix from './ArticleRowSix.component'
import HorizontalLineSeparator from '../Common/HorizontalLineSeparator.component'

type Props = {
  articlesActions: Object,
  articlesDevidedBy6: Object,
  disableRefresh?: boolean,
  isFetching: boolean,
  fetchSucceeded: boolean,
  navigation: Object,
}

type State = {
  dataSource: Array<any>,
}

export default class ArticlesScreen extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {
      dataSource: props.articlesDevidedBy6.listsExcludeLast,
    }
  }

  componentWillMount() {
    this.refresh()
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      dataSource: nextProps.articlesDevidedBy6.listsExcludeLast,
    })
  }

  refresh() {
    const { articlesActions, disableRefresh } = this.props

    if (!disableRefresh) {
      articlesActions.fetchItems()
    }
  }

  onPressRefreshButton = () => {
    this.refresh()
  }

  onPressArticle = (url: string) => {
    const { navigation } = this.props

    navigation.navigateWithDebounce('ArticleWeb', { url: url })
  }


  renderHeader = () => {
    const { isFetching, fetchSucceeded } = this.props

    if (fetchSucceeded === false && !isFetching) {
      return <Card style={StyleSheet.flatten(styles.card)}>
               <CardItem>
                 <Button small transparent onPress={this.onPressRefreshButton}>
                   <Text style={styles.errorText}>通信が失敗しました。</Text>
                   <Text style={styles.errorText}>タップで再読込みします。</Text>
                 </Button>
               </CardItem>
             </Card>
    }

    return <View />
  }

  renderFooter = () => {
    const { isFetching, fetchSucceeded } = this.props

    if (fetchSucceeded && !isFetching) {
      return <View>
               { !this.isEmptyDataSource &&
               <HorizontalLineSeparator />
               }
               { this.lastRow }
               { !this.isEmptyLastList &&
               <HorizontalLineSeparator />
               }
             </View>
    }

    return <View />
  }

  get isEmptyDataSource(): boolean {
    const { dataSource } = this.state

    return dataSource.length === 0
  }

  get isEmptyLastList(): boolean {
    const { lastList } = this.props.articlesDevidedBy6

    return !lastList
  }

  get lastRow() {
    const { lastList } = this.props.articlesDevidedBy6
    const lastListLength = lastList ? lastList.length : 0

    switch (lastListLength) {
      case 6: {
        return <ArticleRowSix articles={lastList} onPressArticle={this.onPressArticle} />
      }
      case 5: {
        return <ArticleRowFive articles={lastList} onPressArticle={this.onPressArticle} />
      }
      case 4: {
        return <ArticleRowFour articles={lastList} onPressArticle={this.onPressArticle} />
      }
      case 3: {
        return <ArticleRowThree articles={lastList} onPressArticle={this.onPressArticle} />
      }
      case 2: {
        return <ArticleRowTwo articles={lastList} onPressArticle={this.onPressArticle} />
      }
      case 1: {
        return <ArticleRowOne article={lastList[0]} onPressArticle={this.onPressArticle} />
      }
      default: {
        return <View />
      }
    }
  }

  renderSeparator = () => {
    return <HorizontalLineSeparator />
  }

  renderItem = (data: Object) => {
    const { item } = data

    return <ArticleRowSix articles={item} onPressArticle={this.onPressArticle} />
  }

  render() {
    const { isFetching } = this.props

    return (
      <Container style={StyleSheet.flatten(styles.container)}>

        <FlatList
          data={this.state.dataSource}
          keyExtractor={(_, index) => String(index)}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.refresh.bind(this)}
            />
          }
          ListHeaderComponent={ this.renderHeader }
          renderItem={ this.renderItem }
          ListFooterComponent={ this.renderFooter }
          ItemSeparatorComponent={ this.renderSeparator }
          ListEmptyComponent={() => <View />}
          extraData={ this.props.articlesDevidedBy6.lastList }
        />
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  errorText: {
    fontSize: 12,
  },
  card: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
})
