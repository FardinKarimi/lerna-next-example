import React from 'react'
import { TextConsumer } from '../providers/text_provider'

export default Component => props => (
  <TextConsumer>{texts => <Component {...props} texts={texts} />}</TextConsumer>
)
