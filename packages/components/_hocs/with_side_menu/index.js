import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 1em;
  display: flex;
`

export default MenuComponent => ContentComponent => props => (
  <Wrapper>
    <MenuComponent />
    <ContentComponent {...props} />
  </Wrapper>
)
