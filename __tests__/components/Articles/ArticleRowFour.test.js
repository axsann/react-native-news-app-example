// @flow

import 'react-native'
import React from 'react'
import ArticleRowFour from '../../../src/components/Articles/ArticleRowFour.component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const mockFourItems = [
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグB"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグA","タグG"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグE"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグC","タグA"]},
]

describe('ArticleRowFour', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <ArticleRowFour articles={mockFourItems} onPressArticle={()=>{}}  />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
