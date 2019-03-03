import React from 'react'
import styled from 'styled-components'

import { getInitials } from '@company/shared'

import Circle from '../atoms/circle'
import Text, { Small, Big } from '../atoms/text'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileButton = ({
  userName,
  firstName,
  lastName,
  imageUrl,
  userType
}) => (
  <Wrapper>
    <Circle imageUrl={imageUrl}>
      {imageUrl ? null : getInitials(firstName, lastName)}
    </Circle>
    <Big>{userName}</Big>
    <Text>{userName}</Text>
    <Small>{userType}</Small>
  </Wrapper>
)

export default ProfileButton
