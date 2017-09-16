// @flow

import 'react-native'
import React from 'react'
import ArticleWebScreen from '../../../src/components/ArticleWeb/ArticleWeb.screen'
import ShallowRenderer from 'react-test-renderer/shallow'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.unmock('ScrollView')
jest.mock('WebView', () => 'WebView')

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform')
  Platform.OS = 'ios'
  return Platform
})
jest.mock('Dimensions', () => {
  const Dimensions = require.requireActual('Dimensions')
  Dimensions.get('window').width = 320
  return Dimensions
})

const navigation = {
  state: {
    params: {
      url: 'http://example.com',
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

})
