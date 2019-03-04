import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { isServer } from '@company/shared'

const A = styled.a`
  font-size: 1em;
  text-decoration: none;
  font-weight: ${props => (props.isCurrentPage ? 'bold' : 'normal')};
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

const Link = ({
  prefetch = false,
  href,
  target,
  children,
  onClick,
  ...props
}) => {
  const handleClick = onClick
    ? event => {
        event.stopPropagation()
        onClick && onClick(event)
      }
    : undefined
  const isCurrentPage = !isServer && window.location.pathname === href
  return (
    <NextLink href={href} prefetch={prefetch}>
      <A
        isCurrentPage={isCurrentPage}
        onClick={handleClick}
        target={target}
        href={href}
        {...props}
      >
        {children}
      </A>
    </NextLink>
  )
}

export default Link
