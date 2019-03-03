import React from 'react'
import { UserConsumer } from '../../_contexts/user_provider'

export default Component => props => (
  <UserConsumer>{user => <Component {...props} user={user} />}</UserConsumer>
)
