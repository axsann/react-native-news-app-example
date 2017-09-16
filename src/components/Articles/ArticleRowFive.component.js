// @flow

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import ArticleRowTwo from './ArticleRowTwo.component'
import ArticleRowThree from './ArticleRowThree.component'
import HorizontalLineSeparator from '../Common/HorizontalLineSeparator.component'
import { COLORS } from '../../constants'

type Props = {
  articles: Array<any>,
  onPressArticle: Function,
}

export default class ArticleRowFive extends Component {
  props: Props

  render() {
    const { articles, onPressArticle } = this.props

    return (
      <View style={styles.row}>
        <ArticleRowThree articles={articles.slice(0, 3)} onPressArticle={onPressArticle} />
        <HorizontalLineSeparator />
        <ArticleRowTwo articles={articles.slice(3, 5)} onPressArticle={onPressArticle} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: COLORS.WHITE,
  },
})
