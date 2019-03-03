import styled, { keyframes } from 'styled-components'
const frames = keyframes`
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(90deg);
  }
`

export default styled.div`
  animation: ${frames} ${props => props.theme.speed.slow} 0 infinite alternate;
  border: 0.2em solid ${props => props.theme.shade._300};
  border-radius: 0.4em;
  font-size: 1em;
  height: 1em;
  width: 1em;
`
