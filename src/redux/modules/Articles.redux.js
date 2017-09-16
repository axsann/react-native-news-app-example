// @flow

// constants ========================
const PREFIX = 'Articles/'

// Redux: ActionType ======================
export const FETCH_ITEMS = `${PREFIX}FETCH_ITEMS`
export const FETCH_ITEMS_SUCCESS = `${PREFIX}FETCH_ITEMS_SUCCESS`
export const FETCH_ITEMS_FAIL = `${PREFIX}FETCH_ITEMS_FAIL`
export const FILTER_ITEMS = `${PREFIX}FILTER_ITEMS`

// Redux: ActionCreator ===================
export const fetchItems = () => ({
  type: FETCH_ITEMS,
})

export const fetchItemsSuccess = (payload: {articles: Array<any>, allTags: Array<any>}) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: payload,
})

export const fetchItemsFail = (error: Object) => ({
  type: FETCH_ITEMS_FAIL,
  payload: error,
})

export const filterItems = (payload: {tagForFilter: string}) => ({
  type: FILTER_ITEMS,
  payload: payload,
})

type State = {
  isFetching: boolean,
  fetchSucceeded: ?boolean,
  articleList: Array<any>,
  articlesDevidedBy6: Object,
  tagForFilter: string,
  filteredArticleList: Array<any>,
  filteredArticlesDevidedBy6: Object,
}

// initialState ===========================
const initialState = {
  isFetching: true,
  fetchSucceeded: undefined,
  articleList: [],
  tagList: [],
  articlesDevidedBy6: {
    listsExcludeLast: [],
    lastList: [],
  },
  tagForFilter: '',
  filteredArticleList: [],
  filteredArticlesDevidedBy6: {
    listsExcludeLast: [],
    lastList: [],
  },
}

// Redux: Reducer =========================
export default (state: State = initialState, action: Object = {}) => {
  switch (action.type) {

    case FETCH_ITEMS: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case FETCH_ITEMS_SUCCESS: {
      const { articles, allTags } = action.payload
      const articlesDevidedBy6 = devideArticles(articles)

      return {
        ...state,
        isFetching: false,
        fetchSucceeded: true,
        articleList: articles,
        tagList: allTags,
        articlesDevidedBy6: articlesDevidedBy6,
      }
    }

    case FETCH_ITEMS_FAIL: {
      return {
        ...state,
        isFetching: false,
        fetchSucceeded: false,
      }
    }

    case FILTER_ITEMS: {
      const { articleList } = state
      const { tagForFilter } = action.payload

      const filteredArticleList = articleList.filter(item => item.tags.includes(tagForFilter))
      const filteredArticlesDevidedBy6 = devideArticles(filteredArticleList)

      return {
        ...state,
        tagForFilter,
        filteredArticleList,
        filteredArticlesDevidedBy6,
      }

    }

    default: {

      return {
        ...state,
      }
    }
  }
}

const devideArticles = articleList => {
    const size = 6
    const tempArticleList = articleList.concat() // 配列をクローンする
    const separatedArticleList = []

    while (tempArticleList.length > 0) {
      separatedArticleList.push(tempArticleList.splice(0, size))
    }
    const articlesDevidedBy6 = {
      listsExcludeLast: separatedArticleList.slice(0, separatedArticleList.length - 1),
      lastList: separatedArticleList[separatedArticleList.length - 1],
    }

    return articlesDevidedBy6
}
