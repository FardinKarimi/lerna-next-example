import React from 'react'
import styled from 'styled-components'

import MenuLink from '../../molecules/menu_link'
import ProfileInfo from '../../molecules/profile_info'

const Wrapper = styled.div`
  font-size: 1em;
  width: 20em;
  background: ${props => props.theme.primary._100};
  border-radius: ${props => props.theme.edge};
  box-shadow: ${props => props.theme.elevation} ${props => props.theme.shade};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`

const Menu = ({ profile, links }) => {
  return (
    <Wrapper>
      {profile && <ProfileInfo {...profile} />}
      {links && links.map((link, key) => <MenuLink key={key} {...link} />)}
    </Wrapper>
  )
}

export default Menu
