// @flow

import 'react-native'
import React from 'react'
import { mock, release } from 'mock-async-storage'
import ArticleWebScreen from '../../../src/components/ArticleWeb/ArticleWeb.screen'
import { ARTICLE_FONT_SIZE } from '../../../src/constants'
import ShallowRenderer from 'react-test-renderer/shallow'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

mock()

import { AsyncStorage as storage } from 'react-native'

jest.unmock('ScrollView')
jest.mock('WebView', () => 'WebView')

const URL = 'http://example.com'

const navigation = {
  state: {
    params: {
      url: URL,
    },
  },
}

describe('ArticleWebScreen', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <ArticleWebScreen navigation={navigation} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })

  it('読み込みエラー時', () => {
    const shallowRenderer = new ShallowRenderer()
    shallowRenderer.render(<ArticleWebScreen navigation={navigation} />)
    const wrapper = shallowRenderer.getMountedInstance()

    wrapper.onError()
    expect(wrapper).toMatchSnapshot()
  })
})
