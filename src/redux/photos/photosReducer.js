const DEFAULT_STATE = {
  data: [],
  loading: false,
  error: null,
}

const PHOTOS_FETCH_START = 'PHOTOS/FETCH/START'
const PHOTOS_FETCH_SUCCES = 'PHOTOS/FETCH/SUCCES'
const PHOTOS_FETCH_ERROR = 'PHOTOS/FETCH/ERROR'

export const photosReducer = (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case PHOTOS_FETCH_START:
      return {...state, loading: true, error: null}
    case PHOTOS_FETCH_SUCCES:
      return {...state, data: payload, loading: false, error: null}
    case PHOTOS_FETCH_ERROR:
      return {...state, error: payload, loading: false}
    default:
      return state
  }
}
