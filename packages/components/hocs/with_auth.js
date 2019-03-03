import React from 'react'

import { isUserAllowed } from '@company/shared'

import Error from '../molecules/error'

import withText from './with_text'
import withUser from './with_user'

export default allowedUserTypes => Component =>
  withText(
    withUser(props => {
      const { getText, texts, user, ...props } = this.props
      const isAllowed = isUserAllowed(user, allowedUserTypes)
      if (!isAllowed)
        return <Error statusCode={403} message={texts.notAllowed} />
      return <Component {...props} />
    })
  )
