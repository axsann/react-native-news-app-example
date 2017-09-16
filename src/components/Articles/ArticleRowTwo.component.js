// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { ARTICLE_COLUMN_MODE, COLORS } from '../../constants'
import VerticalLineSeparator from '../Common/VerticalLineSeparator.component'
import ArticleColumn from './ArticleColumn.component'

type Props = {
  articles: Array<any>,
  onPressArticle: Function,
}

export default class ArticleRowTwo extends Component {
  props: Props

  render() {
    const { articles, onPressArticle } = this.props

    return (
      <View style={styles.row}>
        <ArticleColumn article={articles[0]} mode={ARTICLE_COLUMN_MODE.TWO_COLUMN} onPressArticle={onPressArticle} />
        <VerticalLineSeparator />
        <ArticleColumn article={articles[1]} mode={ARTICLE_COLUMN_MODE.TWO_COLUMN} onPressArticle={onPressArticle} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    height: 200,
    marginTop: 10,
  },
})
