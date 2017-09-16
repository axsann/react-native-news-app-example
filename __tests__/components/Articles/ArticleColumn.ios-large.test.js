// @flow

import 'react-native'
import React from 'react'
import ArticleColumn from '../../../src/components/Articles/ArticleColumn.component'
import { ARTICLE_COLUMN_MODE } from '../../../src/constants'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const mockItem = {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグB"]}
const mockItemLongTitle = {"title":"ああああああああああああああああああああああああああああああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグB"]}

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform')
  Platform.OS = 'ios'
  return Platform
})

jest.mock('Dimensions', () => {
  const Dimensions = require.requireActual('Dimensions')
  Dimensions.get('window').width = 375
  return Dimensions
})

describe('ArticleColumn', () => {

  it('2カラムモード', () => {
    const instance = renderer.create(
      <ArticleColumn article={mockItem}  onPressArticle={()=>{}} mode={ARTICLE_COLUMN_MODE.TWO_COLUMN} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })

  it('3カラムモード', () => {
    const instance = renderer.create(
      <ArticleColumn article={mockItem}  onPressArticle={()=>{}} mode={ARTICLE_COLUMN_MODE.THREE_COLUMN} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })

  it('カラムモード未指定時エラー処理', () => {
    const instance = renderer.create(
      <ArticleColumn article={mockItem}  onPressArticle={()=>{}} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })

  it('3カラムモードでタイトルが長い場合', () => {
    const instance = renderer.create(
      <ArticleColumn article={mockItemLongTitle}  onPressArticle={()=>{}} mode={ARTICLE_COLUMN_MODE.THREE_COLUMN} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
