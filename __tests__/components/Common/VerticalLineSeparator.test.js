// @flow

import 'react-native'
import React from 'react'
import VerticalLineSeparator from '../../../src/components/Common/VerticalLineSeparator.component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('VerticalLineSeparator', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <VerticalLineSeparator />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
