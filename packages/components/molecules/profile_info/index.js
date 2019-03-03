import React from 'react'
import styled from 'styled-components'

import { getInitials } from '@company/shared'

import Circle from '../../atoms/circle'
import { Small, Big } from '../../atoms/text'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  margin-bottom: 1em;
`

const ProfileButton = ({
  userName,
  companyName,
  firstName,
  lastName,
  imageUrl,
  userType
}) => (
  <Wrapper>
    <Circle imageUrl={imageUrl}>
      {imageUrl ? null : getInitials(firstName, lastName)}
    </Circle>
    <Small>{userName}</Small>
    <br />
    <Big>
      {firstName} {lastName}
    </Big>
    <Small>
      {userType} - {companyName}
    </Small>
  </Wrapper>
)

export default ProfileButton
