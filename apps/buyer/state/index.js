export const TOGGLE_ARTICLE = 'TOGGLE_ARTICLE'
export const SWITCH_TAB = 'SWITCH_TAB'

export const initialState = {
  shop: {
    expandedArticles: {},
    activeTabId: 'b'
  }
}

export const actions = {
  toggleArticle: id => ({ type: TOGGLE_ARTICLE, id }),
  switchTab: id => ({ type: SWITCH_TAB, id })
}

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_ARTICLE: {
      return {
        ...state,
        shop: {
          ...state.shop,
          expandedArticles: {
            ...state.shop.expandedArticles,
            [action.id]: !state.shop.expandedArticles[action.id]
          }
        }
      }
    }
    case SWITCH_TAB: {
      return {
        ...state,
        shop: {
          ...state.shop,
          activeTabId: action.id
        }
      }
    }
  }
}
