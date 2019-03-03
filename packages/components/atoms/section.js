import styled from 'styled-components'

export default styled.section`
  background: ${props => props.theme.shade._100};
  border: 1px solid ${props => props.theme.shade._300};
  border-radius: ${props => props.theme.edge.smooth};
  font-size: 1em;
  margin: 1em 2em;
  max-width: 80em;
  min-width: 30em;
  width: 60%;
`
