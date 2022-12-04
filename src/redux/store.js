import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {albumsReducer} from './albums/albumsReducer'
import {photosReducer} from './photos/photosReducer'
import {usersReducer} from './users/usersReducer'

export const store = createStore(
  combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    photos: photosReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
