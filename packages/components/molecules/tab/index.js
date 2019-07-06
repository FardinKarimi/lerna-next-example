import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  align-items: center;
  border: 2px solid transparent;
  border-bottom: 2px solid
    ${props => (props.isActive ? props.theme.primary : 'transparent')};
  display: flex;
  justify-content: space-between;
  padding: 1em;
  width: 100%;
  white-space: nowrap;
  cursor: pointer;
  background: transparent;
  font-size: 1em;
  transition: color ${props => props.theme.animate._200};
  color: ${props => (props.isActive ? props.theme.primary : props.theme.shade)}
  :hover {
    color: ${props => props.theme.primary};
  }
`

const Tab = ({ text, isActive, onClick }) => {
  return (
    <Wrapper isActive={isActive} onClick={onClick}>
      {text}
    </Wrapper>
  )
}

export default React.memo(Tab, (p, n) => p.isActive === n.isActive)
