import {getAlbums} from '../../api'

export const fetchAlbums = () => async (dispatch) => {
  dispatch({type: 'ALBUMS/FETCH/START'})
  try {
    const albums = await getAlbums()
    dispatch({type: 'ALBUMS/FETCH/SUCCES', payload: albums})
  } catch (e) {
    console.error(e)
    dispatch({type: 'ALBUMS/FETCH/ERROR', payload: e})
  }
}
