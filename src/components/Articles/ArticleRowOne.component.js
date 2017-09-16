// @flow

import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { COLORS } from '../../constants'

type Props = {
  article: Object,
  onPressArticle: Function,
}

export default class ArticleRowOne extends Component {
  props: Props

  render() {
    const { article, onPressArticle } = this.props

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPressArticle.bind(this, article.url)} style={styles.touchableRow}>
        <View style={styles.textContainer}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Text style={styles.articleDate}>{article.date}</Text>
        </View>
        <Image source={{ uri: article.imgUrl }} style={styles.image}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  touchableRow: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 3,
  },
  image: {
    flex: 2,
  },
  articleTitle: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  articleDate: {
    fontSize: 10,
    marginTop: 5,
  },
})
