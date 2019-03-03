import React from 'react'
import styled from 'styled-components'

import withText from '../hocs/with_text'

import MenuLink from '../molecules/menu_link'
import ProfileInfo from '../molecules/profile_info'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 1em;
`

const Menu = ({ profile, links, texts, handleLogout }) => {
  return (
    <Wrapper>
      <ProfileInfo {...profile} />
      {links.map((link, key) => (
        <MenuLink key={key} {...link} />
      ))}
      <MenuLink text={texts.settings} href="/settings" />
      <MenuLink text={texts.logout} onClick={handleLogout} />
    </Wrapper>
  )
}

export default withText(Menu)
