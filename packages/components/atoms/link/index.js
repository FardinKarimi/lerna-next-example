import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

const A = styled.a`
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
  return (
    <NextLink href={href} prefetch={prefetch}>
      <A onClick={handleClick} target={target} href={href} {...props}>
        {children}
      </A>
    </NextLink>
  )
}

export default Link
