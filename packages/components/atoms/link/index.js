import styled from 'styled-components'

export default styled.a`
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
  :link {
    color: ${props => props.theme.primary._700};
  }
  :visited {
    color: ${props => props.theme.primary._600};
  }
  :hover,
  :focus {
    color: ${props => props.theme.primary._700};
    text-decoration: underline;
  }
  :active {
    color: ${props => props.theme.primary._900};
    text-decoration: underline;
  }
`
