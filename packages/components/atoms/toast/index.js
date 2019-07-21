import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-bottom: 0.5em;
  cursor: default;
  font-size: 1em;
  border-radius: 3em;
  padding: 0.5em;
  text-align: center;
  box-shadow: 0 0 0.25em ${props => props.theme.shade};
  background: ${props =>
    props.status === statuses.ERROR
      ? props.theme.error
      : props.status === statuses.SUCCESS
      ? props.theme.success
      : props.theme.shade._300};
  color: ${props =>
    props.status === statuses.ERROR
      ? props.theme.shade._100
      : props.status === statuses.SUCCESS
      ? props.theme.shade._100
      : props.theme.shade._900};
  opacity: ${props => (props.shown ? 1 : 0)};
  max-height: ${props => (props.shown ? '3em' : 0)};
  transition: all ${props => props.theme.animate._300};
`

export const statuses = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const Toast = ({
  status,
  message,
  delay = 300,
  fadeTimeout = 2000,
  showIcon = true
}) => {
  const [isHovered, setHovered] = useState(false)
  const onMouseOver = () => isShown && setHovered(true)
  const onMouseOut = () => isShown && setHovered(false)

  const [isShown, setShown] = useState(false)
  const fadeIn = () => {
    if (!isShown && delay && delay > 0) {
      const timeout = setTimeout(() => setShown(true), delay)
      return () => clearTimeout(timeout)
    }
  }
  const fadeOut = () => {
    if (isShown && !isHovered && fadeTimeout && fadeTimeout > 0) {
      const timeout = setTimeout(() => setShown(false), fadeTimeout)
      return () => clearTimeout(timeout)
    }
  }

  const [{ status: lazyStatus, message: lazyMessage }, setStatus] = useState({
    status,
    message
  })
  const lazyUpdate = () => {
    if (delay && delay > 0) {
      const timeout = setTimeout(() => setStatus({ status, message }), delay)
      return () => clearTimeout(timeout)
    }
  }

  useEffect(fadeIn, [status, isHovered])
  useEffect(fadeOut, [status, isHovered])
  useEffect(lazyUpdate, [status, message])

  const icon =
    showIcon &&
    (lazyStatus === statuses.ERROR
      ? '✘'
      : lazyStatus === statuses.SUCCESS
      ? '✔'
      : '...')

  return (
    <Container
      status={lazyStatus}
      shown={isShown}
      hovered={isHovered}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {lazyMessage} {icon}
    </Container>
  )
}

export default Toast
