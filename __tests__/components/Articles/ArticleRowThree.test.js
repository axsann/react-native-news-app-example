// @flow

import 'react-native'
import React from 'react'
import ArticleRowThree from '../../../src/components/Articles/ArticleRowThree.component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const mockThreeItems = [
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグB"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグA","タグG"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグE"]},
]

describe('ArticleRowThree', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <ArticleRowThree articles={mockThreeItems} onPressArticle={()=>{}} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
