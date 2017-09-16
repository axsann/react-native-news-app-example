// @flow

import 'react-native'
import React from 'react'
import ArticleRowFive from '../../../src/components/Articles/ArticleRowFive.component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const mockFiveItems = [
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグB"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグA","タグG"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグE"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグC","タグA"]},
  {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグB","タグF"]},
]

describe('ArticleRowFive', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <ArticleRowFive articles={mockFiveItems} onPressArticle={()=>{}} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
