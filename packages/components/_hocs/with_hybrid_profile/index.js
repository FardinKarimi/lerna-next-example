import withHybridRendering from '../with_hybrid_rendering'
import { actions as userActions, LOAD_ME } from '@company/shared/state/user'
import { CALL_SUCCEEDED } from '@company/shared/state/network'

export default withHybridRendering(
  userActions.loadMe,
  state => (state.network[LOAD_ME] || {}).status === CALL_SUCCEEDED
)
