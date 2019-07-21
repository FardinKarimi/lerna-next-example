import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 1em;
  display: flex;
  flex-wrap: wrap;
`

const ComponentWithMenu = ({ renderMenu, renderContent }) => (
  <Wrapper>
    {renderMenu && renderMenu()}
    {renderContent && renderContent()}
  </Wrapper>
)

export default ComponentWithMenu
