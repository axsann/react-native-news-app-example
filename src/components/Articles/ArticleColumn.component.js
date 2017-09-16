import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native'
import { ARTICLE_COLUMN_MODE, COLORS } from '../../constants'

const DEVICE_WIDTH = Dimensions.get('window').width
const IPHONE5_WIDTH = 320
const NEXUS4_WIDTH = 384
const CROP_SIZE_IOS = 38
const CROP_SIZE_ANDROID = 32
const CROP_SIZE = Platform.OS === 'ios' ? CROP_SIZE_IOS : CROP_SIZE_ANDROID

type Props = {
  mode: string,
  article: Object,
  onPressArticle: Function,
}

type State = {
  imageFlex: number,
  textFlex: number,
  doesCropTitle: boolean,
}

export default class ArticleColumn extends Component {
  props: Props
  state: State

  constructor(props) {
    super(props)
    this.state = {
      imageFlex: 4,
      textFlex: 3,
      doesCropTitle: false,
    }
  }

  componentWillMount() {
    switch (this.props.mode) {
      case ARTICLE_COLUMN_MODE.TWO_COLUMN: {
        this.setState({
          imageFlex: 4,
          textFlex: 3,
          doesCropTitle: false,
        })
        break
      }
      case ARTICLE_COLUMN_MODE.THREE_COLUMN: {
        this.setState({
          imageFlex: 8,
          textFlex: 9,
          doesCropTitle: this.isDeviceWidthShort ? true : false,
        })
        break
      }
      default: {
        console.error('Please set MODE to ArticleColumn.')
      }
    }
  }

  get isDeviceWidthShort() {
    if (Platform.OS === 'ios') {
      return DEVICE_WIDTH <= IPHONE5_WIDTH
    } else {
      return DEVICE_WIDTH <= NEXUS4_WIDTH
    }
  }

  get articleTitle() {
    const { doesCropTitle } = this.state
    const { title } = this.props.article

    if (doesCropTitle && title.length > CROP_SIZE) {
      return `${title.substr(0, CROP_SIZE)}...`
    } else {
      return title
    }
  }

  get imageFlexStyle() {
    return {
      flex: this.state.imageFlex,
    }
  }

  get textFlexStyle() {
    return {
      flex: this.state.textFlex,
    }
  }

  render() {
    const { article, onPressArticle } = this.props

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPressArticle.bind(this, article.url)} style={styles.touchableColumn}>
        <View style={styles.viewFlex1}>
          <Image source={{ uri: article.imgUrl }} style={this.imageFlexStyle}/>
          <View style={[this.textFlexStyle, styles.textContainer]}>
            <Text style={styles.articleTitle}>{this.articleTitle}</Text>
            <Text style={styles.articleDate}>{article.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  touchableColumn: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  viewFlex1: {
    flex: 1,
  },
  textContainer: {
    marginTop: 10,
  },
  articleTitle: {
    fontSize: 12.5,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  articleDate: {
    fontSize: 10,
    marginTop: 5,
  },
})
