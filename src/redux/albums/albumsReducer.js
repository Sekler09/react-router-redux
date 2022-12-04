const DEFAULT_STATE = {
  data: [],
  loading: false,
  error: null,
}

const ALBUMS_FETCH_START = 'ALBUMS/FETCH/START'
const ALBUMS_FETCH_SUCCES = 'ALBUMS/FETCH/SUCCES'
const ALBUMS_FETCH_ERROR = 'ALBUMS/FETCH/ERROR'

export const albumsReducer = (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case ALBUMS_FETCH_START:
      return {...state, loading: true, error: null}
    case ALBUMS_FETCH_SUCCES:
      return {...state, data: payload, loading: false, error: null}
    case ALBUMS_FETCH_ERROR:
      return {...state, error: payload, loading: false}
    default:
      return state
  }
}
