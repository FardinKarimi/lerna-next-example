import React from 'react'

import withText from '../../_hocs/with_text'
import H1 from '../../atoms/h1'
import Text from '../../atoms/text'
import Section from '../../atoms/section'

const NotImplementedPage = ({ texts }) => (
  <Section>
    <H1>{texts.oops}</H1>
    <Text>{texts.notImplemented}</Text>
  </Section>
)

export default withText(NotImplementedPage)
