// @flow

import 'react-native'
import React from 'react'
import HorizontalLineSeparator from '../../../src/components/Common/HorizontalLineSeparator.component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('HorizontalLineSeparator', () => {
  it('余白あり', () => {
    const instance = renderer.create(
      <HorizontalLineSeparator />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })

  it('余白なし', () => {
    const instance = renderer.create(
      <HorizontalLineSeparator noMargin={true} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
