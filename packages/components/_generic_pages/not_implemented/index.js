import React from 'react'
import withText from '../../_hocs/with_text'
import H1 from '../../atoms/h1'
import Text from '../../atoms/text'
import Link from '../../atoms/link'

const NotImplementedPage = ({ texts }) => (
  <>
    <H1>{texts.oops}</H1>
    <Text>{texts.notImplemented}</Text>
    <Link href="/">{texts.home}</Link>
  </>
)

export default withText(NotImplementedPage)
