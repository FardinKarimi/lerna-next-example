import React from 'react'

import Spinner from '../atoms/spinner'
import Error from '../molecules/error'

import withText from './with_text'

export default Component => {
  class WithUser extends React.Component {
    state = { user: null, loading: true }
    componentDidMount() {
      fetch(`/api/me`)
        .then(response => response.json())
        .then(user => this.setState({ user, loading: false }))
        .catch(() => this.setState({ user: null, loading: false }))
    }
    render() {
      const { user, loading } = this.state
      const { texts, ...props } = this.props
      if (loading) return <Spinner />
      if (!user) return <Error statusCode={401} message={texts.notLoggedIn} />
      return <Component {...props} user={user} />
    }
  }

  return withText(WithUser)
}
