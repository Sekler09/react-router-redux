import React from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {fetchAlbums} from '../redux/albums/albumsActions'
import {
  selectAlbums,
  selectAlbumsError,
  selectAlbumsLoading,
} from '../redux/albums/albumsSelectors'
import {
  selectPhotos,
  selectPhotosError,
  selectPhotosLoading,
} from '../redux/photos/photosSelectors'
import {fetchUsers} from '../redux/users/usersActions'
import {fetchPhotos} from '../redux/photos/photosActions'
import {
  selectUsers,
  selectUsersError,
  selectUsersLoading,
} from '../redux/users/usersSelectors'
import useMyFetch from '../hooks/useMyFetch'

export default connect(mapStateToProps, mapDispatchToProps)(Album)

function mapStateToProps(state) {
  return {
    users: selectUsers(state),
    usersLoading: selectUsersLoading(state),
    usersError: selectUsersError(state),
    albums: selectAlbums(state),
    albumsLoading: selectAlbumsLoading(state),
    albumsError: selectAlbumsError(state),
    photos: selectPhotos(state),
    photosLoading: selectPhotosLoading(state),
    photosError: selectPhotosError(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchPhotos: () => dispatch(fetchPhotos()),
  }
}

function Album({
  users,
  usersLoading,
  usersError,
  albums,
  albumsLoading,
  albumsError,
  photos,
  photosLoading,
  photosError,
  fetchUsers,
  fetchAlbums,
  fetchPhotos,
}) {
  const {id} = useParams()

  useMyFetch(fetchUsers)
  useMyFetch(fetchAlbums)
  useMyFetch(fetchPhotos)

  if (!users.length || !photos.length || !albums.length) {
    return <div>Laoding...</div>
  }

  const album = albums.find((album) => album.id === +id)
  const user = users.find((user) => user.id === album.userId)
  const albumPhotos = photos.filter((photo) => photo.albumId === +id)
  return (
    <div>
      <div className='text-black text-lg font-bold'>
        {album.title[0].toUpperCase() + album.title.slice(1)}
      </div>
      <div className='text-slate-400 '>
        Created by:{' '}
        <Link
          to={`/users/${user.id}`}
          className='hover:underline hover:text-indigo-700'
        >
          {user.name}
        </Link>
      </div>
      <div className='grid grid-cols-3 gap-5 mt-5'>
        {albumPhotos.map((photo) => {
          return <img src={photo.url} key={photo.id} alt='' />
        })}
      </div>
    </div>
  )
}
