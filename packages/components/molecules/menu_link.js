import React from 'react'
import styled from 'styled-components'

import Arrow from '../atoms/arrow'
import Link from '../atoms/link'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.shade._100};
  border-bottom: 1px solid ${props => props.theme.shade._500};
  padding: 0.25em 05em;
  :first-of-type {
    border-top: 1px solid ${props => props.theme.shade._500};
  }
`

const MenuLink = ({ text, href, onClick }) => {
  return (
    <Wrapper>
      <Link onClick={href ? null : onClick} href={onClick ? null : href}>
        {text}
      </Link>
      <Arrow />
    </Wrapper>
  )
}

export default MenuLink
