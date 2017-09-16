// @flow

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { COLORS } from '../../constants'

type Props = {
  noMargin?: boolean,
}

export default class HorizontalLineSeparator extends Component {
  props: Props

  get marginStyle(): Object {
    const { noMargin } = this.props

    if (noMargin) {
      return {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
      }
    } else {
      return {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
      }
    }
  }

  render() {
    return (
      <View style={[styles.horizontalLineSeparator, this.marginStyle]} />
    )
  }
}

const styles = StyleSheet.create({
  horizontalLineSeparator: {
    backgroundColor: COLORS.VERY_LIGHT_GRAY,
    height: 1,
  },
})
