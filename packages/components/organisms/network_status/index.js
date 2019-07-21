import styled from 'styled-components'
import Toast, { statuses } from '../../molecules/toast'

const Container = styled.div`
  font-size: 0.75em;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0.5em;
  left: 50%;
  transform: translateX(-50%);
`

const NetworkStatus = ({ items }) => (
  <Container>
    {items.map((item, key) => (
      <Toast
        key={key}
        message={item.message}
        status={item.status}
      />
    ))}
  </Container>
)

export default NetworkStatus
