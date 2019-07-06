import React from 'react'

import useText from '../../_contexts/text_provider'
import H1 from '../../atoms/h1'
import Text from '../../atoms/text'
import Section from '../../atoms/section'

const NotImplementedPage = () => {
  const texts = useText()
  return (
    <Section>
      <H1>{texts.oops}</H1>
      <Text>{texts.notImplemented}</Text>
    </Section>
  )
}
export default NotImplementedPage
