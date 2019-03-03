import React from 'react'
import { TextConsumer } from '../../_contexts/text_provider'

export default Component => props => (
  <TextConsumer>{texts => <Component {...props} texts={texts} />}</TextConsumer>
)
