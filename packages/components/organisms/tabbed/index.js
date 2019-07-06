import React, { useState } from 'react'
import styled from 'styled-components'

import Tab from '../../molecules/tab'

const Wrapper = styled.div`
  box-shadow: ${props => props.theme.elevation} ${props => props.theme.shade};
  background: ${props => props.theme.shade._100};
  margin-left: 0.5em;
`

const Header = styled.div`
  font-size: 1em;
  border-bottom: 1px solid ${props => props.theme.shade._300};
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Tabbed = ({ profile, tabs, defaultTabId }) => {
  const [activeTabId, setActiveTab] = useState(defaultTabId)

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
      {content}
    </Wrapper>
  )
}

export default Tabbed
