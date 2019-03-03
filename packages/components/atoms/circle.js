import styled from 'styled-components'

export default styled.div`
  align-items: center;
  background: ${props =>
    props.imageUrl ? `url(${props.imageUrl})` : props.theme.secondary._500};
  background-size: cover;
  border-radius: ${props => props.theme.edge.round};
  border: 0.1em solid ${props => props.theme.secondary._700};
  box-shadow: 0 0 0.5em 0 ${props => props.theme.shade._600};
  color: ${props => props.theme.shade._100};
  display: flex;
  flex-direction: row;
  font-size: 1em;
  justify-content: center;
  margin: 0.5em;
  text-transform: uppercase;
  height: 2em;
  width: 2em;
`
