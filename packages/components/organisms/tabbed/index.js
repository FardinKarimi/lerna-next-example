import React from 'react'
import styled from 'styled-components'

import Tab from '../../molecules/tab'

const Wrapper = styled.div`
  box-shadow: ${props => props.theme.elevation} ${props => props.theme.shade};
  background: ${props => props.theme.shade._100};
  margin-left: 0.5em;
  height: 100%;
`

const Header = styled.div`
  font-size: 1em;
  border-bottom: 1px solid ${props => props.theme.shade._300};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const ContentWrapper = styled.div`
  margin: 0.5em;
`

const Tabbed = ({ profile, tabs, activeTabId, setActiveTab }) => {
  const activeTab = tabs.filter(tab => tab.id === activeTabId)[0]
  const content =
    activeTab && activeTab.renderContent && activeTab.renderContent()

  return (
    <Wrapper>
      <Header>
        {tabs &&
          tabs.map((tab, key) => (
            <Tab
              key={key}
              {...tab}
              isActive={activeTabId === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
      </Header>
      <ContentWrapper>{content}</ContentWrapper>
    </Wrapper>
  )
}

export default Tabbed
