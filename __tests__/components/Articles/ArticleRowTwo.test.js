// @flow

import 'react-native'
import React from 'react'
import ArticleRowTwo from '../../../src/components/Articles/ArticleRowTwo.component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const mockTwoItems = [
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグB"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグA","タグG"]},
]

describe('ArticleRowTwo', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <ArticleRowTwo articles={mockTwoItems} onPressArticle={()=>{}} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
