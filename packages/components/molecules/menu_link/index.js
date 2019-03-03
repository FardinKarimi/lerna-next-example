import React from 'react'
import styled from 'styled-components'

import Arrow from '../../atoms/arrow'
import Link from '../../atoms/link'

const Wrapper = styled.div`
  align-items: center;
  background: ${props => props.theme.shade._100};
  border-top: 1px solid ${props => props.theme.shade._300};
  display: flex;
  justify-content: space-between;
  padding: 1em;
  width: 100%;
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
