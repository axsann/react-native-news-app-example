// @flow

import React, { Component } from 'react'
import {
  WebView,
  View,
  StyleSheet,
  Alert,
} from 'react-native'
import Spinner from 'react-native-spinkit'

import { COLORS } from '../../constants'

const WEBVIEW_REF = 'WEBVIEW_REF'

type Props = {
  navigation: Object,
}

type State = {
  isLoaded: boolean,
}

export default class ArticleWebScreen extends Component {
  props: Props
  state: State

  static navigationOptions = {
    title: '記事ページ',
  }

  constructor() {
    super()
    this.state = {
      isLoaded: false,
    }
  }

  onError = () => {
    this.setIsLoaded(true)
    Alert.alert('通信エラー', 'ページの読み込みができませんでした。\n通信環境のよいところで、再度お試しください。')
  }

  setIsLoaded(isLoaded: boolean) {
    this.setState({ isLoaded: isLoaded })
  }

  render() {
    const { navigation } = this.props
    const { isLoaded } = this.state

    return (
      <View style={styles.container}>
        <WebView
          ref={WEBVIEW_REF}
          source={{ uri: navigation.state.params.url }}
          style={styles.webView}
          onLoad={this.setIsLoaded.bind(this, true)}
          onError={this.onError}
        />
        { !isLoaded &&
        <View style={styles.spinnerContainerAbsolute}>
          <View style={styles.spinnerContainerRelative}>
            <Spinner style={styles.spinner} isVisible={!isLoaded} size={100} type={'ThreeBounce'} color={COLORS.VERY_LIGHT_GRAY}/>
          </View>
        </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TRANSPARENT,
    alignSelf: 'stretch',
  },
  webView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  spinnerContainerAbsolute: {
    backgroundColor: COLORS.TRANSPARENT,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  spinnerContainerRelative: {
    backgroundColor: COLORS.TRANSPARENT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    marginTop: -90,
  },
})
