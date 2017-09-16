// @flow

import 'react-native'
import React from 'react'
import ArticleRowOne from '../../../src/components/Articles/ArticleRowOne.component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const mockItem = {"title":"あああああああああああああああああああああああああああ","url":"https://example.com","date":"20XX年Y月Z日","imgUrl":"https://placehold.jp/150x150.png","tags":["タグB"]}

describe('ArticleRowOne', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <ArticleRowOne article={mockItem}  onPressArticle={()=>{}} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
