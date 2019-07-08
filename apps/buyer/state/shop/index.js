export const shop = {
  expandedArticles: {},
  activeTabId: 'b'
}

export const TOGGLE_ARTICLE = 'TOGGLE_ARTICLE'
export const SWITCH_TAB = 'SWITCH_TAB'

export const shopActions = {
  toggleArticle: id => ({ type: TOGGLE_ARTICLE, payload: { id } }),
  switchTab: id => ({ type: SWITCH_TAB, payload: { id } })
}

export const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_ARTICLE: {
      return {
        ...state,
        expandedArticles: {
          ...state.expandedArticles,
          [payload.id]: !state.expandedArticles[payload.id]
        }
      }
    }
    case SWITCH_TAB: {
      return {
        ...state,
        activeTabId: payload.id
      }
    }
  }
}
