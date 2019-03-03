import styled from 'styled-components'

export default styled.div`
  font-size: 1em;
  height: 0.5em; 
  width: 0.5em;
  border-top: 0.1em solid ${props => props.theme.primary._700};
  border-right: 0.1em solid ${props => props.theme.primary._700};
  transform: rotate(45deg);
`
