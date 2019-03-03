import styled from 'styled-components'

export default styled.div`
  align-items: center;
  background: ${props =>
    props.imageUrl ? `url(${props.imageUrl})` : props.theme.secondary._200};
  background-size: cover;
  border-radius: ${props => props.theme.edge.round};
  /* border: 0.1em solid ${props => props.theme.secondary}; */
  box-shadow: ${props => props.theme.elevation} ${props => props.theme.shade};
  color: ${props => props.theme.shade._900};
  display: flex;
  flex-direction: row;
  font-size: 4em;
  justify-content: center;
  margin: 0.5em;
  text-transform: uppercase;
  height: 2em;
  width: 2em;
`
