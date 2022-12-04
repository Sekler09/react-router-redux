import {getPhotos} from '../../api'

export const fetchPhotos = () => async (dispatch) => {
  dispatch({type: 'PHOTOS/FETCH/START'})
  try {
    const photos = await getPhotos()
    dispatch({type: 'PHOTOS/FETCH/SUCCES', payload: photos})
  } catch (e) {
    console.error(e)
    dispatch({type: 'PHOTOS/FETCH/ERROR', payload: e})
  }
}
