import { actions as networkActions } from '../network/index'

export const initialState = {
  articles: [],
  expandedArticles: {},
  activeTabId: 'b'
}

export const LOAD_ARTICLES = 'LOAD_ARTICLES'
export const TOGGLE_ARTICLE = 'TOGGLE_ARTICLE'
export const SWITCH_TAB = 'SWITCH_TAB'

export const actions = {
  loadArticles: () => {
    const { start, success, failure } = networkActions(LOAD_ARTICLES, {
      start: 'fetchArticlesListStart',
      success: 'fetchArticlesListSuccess',
      failure: 'fetchArticlesListFailure'
    })
    return dispatch => {
      dispatch(start())
      setTimeout(() => {
        fetch('http://localhost:3020/api/v1/articles')
          .then(response => response.json())
          .then(data => {
            dispatch({ type: LOAD_ARTICLES, payload: { data } })
            dispatch(success())
          })
          .catch(error => dispatch(failure(error)))
      }, 500)
    }
  },
  toggleArticle: id => ({ type: TOGGLE_ARTICLE, payload: { id } }),
  switchTab: id => ({ type: SWITCH_TAB, payload: { id } })
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_ARTICLES: {
      return {
        ...state,
        articles: payload.data
      }
    }
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
