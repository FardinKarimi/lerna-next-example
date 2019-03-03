import styled from 'styled-components'

const Text = styled.p`
  color: ${props => props.theme.shade._700};
  font-size: 1em;
  padding-bottom: 0.5em;
`

export const Small = styled(Text)`
  color: ${props => props.theme.shade._600};
  font-size: 0.75em;
`

export const Big = styled(Text)`
  color: ${props => props.theme.shade._800};
  font-size: 1.25em;
`

export default Text
