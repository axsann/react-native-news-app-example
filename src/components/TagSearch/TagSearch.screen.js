// @flow
/**
 * 予約一覧画面
 */

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native'
import {
  Container,
  Icon,
} from 'native-base'
import { COLORS } from '../../constants'
import HorizontalLineSeparator from '../Common/HorizontalLineSeparator.component'

type State = {
  dataSource: Array<any>,
}

type Props = {
  tagList: Array<any>,
  articlesActions: Object,
  navigation: Object,
  isFetching: boolean,
}

export default class TagSearchScreen extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {
      dataSource: props.tagList,
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      dataSource: nextProps.tagList,
    })
  }

  refresh() {
    const { articlesActions } = this.props

    articlesActions.fetchItems()
  }

  renderSeparator = () => {
    return <HorizontalLineSeparator noMargin={true} />
  }

  onPressTag(tag: string) {
    const { articlesActions, navigation } = this.props

    articlesActions.filterItems({ tagForFilter: tag })
    navigation.navigateWithDebounce('FilteredArticles', { tag: tag })
  }

  renderItem = (data: Object) => {
    const { item } = data

    return <TouchableOpacity onPress={() => this.onPressTag(item)} style={styles.touchableRow}>
             <Text style={styles.itemText}>{item}</Text>
             <View style={styles.iconView}>
               <Icon ios="ios-arrow-forward" android="ios-arrow-forward" />
             </View>
           </TouchableOpacity>
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
          renderItem={ this.renderItem }
          ItemSeparatorComponent={ this.renderSeparator }
          ListEmptyComponent={() => <View />}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  touchableRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
    color: COLORS.BLACK,
  },
  iconView: {
    marginRight: 10,
  },
})
