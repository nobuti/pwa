import debounce from '../utils/debounce'

export const VIEWPORT = {
  UPDATE: 'VIEWPORT_UPDATE'
}

export default {
  name: 'viewport',
  getReducer: () => {
    const initialState = {
      width: 0,
      height: 0
    }
    return (state = initialState, action) => {
      const { type, payload } = action
      switch (type) {
        case VIEWPORT.UPDATE:
          return {
            ...state,
            ...payload
          }
        default:
          return state
      }
    }
  },
  selectViewportSize: state => state.viewport,
  init: store => {
    const handleResize = debounce(() => {
      const payload = {
        width: window ? window.innerWidth : 0,
        height: window ? window.innerHeight : 0
      }

      store.dispatch({ type: VIEWPORT.UPDATE, payload })
    }, 100)

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()
    }
  }
}
