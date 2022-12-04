const DEFAULT_STATE = {
  data: [],
  loading: false,
  error: null,
}

const USERS_FETCH_START = 'USERS/FETCH/START'
const USERS_FETCH_SUCCES = 'USERS/FETCH/SUCCES'
const USERS_FETCH_ERROR = 'USERS/FETCH/ERROR'

export const usersReducer = (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case USERS_FETCH_START:
      return {...state, loading: true, error: null}
    case USERS_FETCH_SUCCES:
      return {...state, data: payload, loading: false, error: null}
    case USERS_FETCH_ERROR:
      return {...state, error: payload, loading: false}
    default:
      return state
  }
}
