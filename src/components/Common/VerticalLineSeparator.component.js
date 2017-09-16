// @flow

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { COLORS } from '../../constants'

export default class VerticalLineSeparator extends Component {

  render() {
    return (
      <View style={styles.verticalLineSeparator}/>
    )
  }
}

const styles = StyleSheet.create({
  verticalLineSeparator: {
    width: 1,
    backgroundColor: COLORS.VERY_LIGHT_GRAY,
  },
})
