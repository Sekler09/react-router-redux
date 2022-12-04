import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import logo from '../assets/icons/album-icon.jpg'
import useMyFetch from '../hooks/useMyFetch'
import {fetchAlbums} from '../redux/albums/albumsActions'
import {
  selectAlbums,
  selectAlbumsError,
  selectAlbumsLoading,
} from '../redux/albums/albumsSelectors'

export default connect(mapStateToProps, mapDispatchToProps)(Albums)

function mapStateToProps(state) {
  return {
    albums: selectAlbums(state),
    loading: selectAlbumsLoading(state),
    error: selectAlbumsError(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  }
}
function Albums({albums, error, loading, fetchAlbums}) {
  useMyFetch(fetchAlbums)

  if (loading) {
    return <div className='text-xl'>Loading...</div>
  }

  if (error) {
    throw new Error()
  }
  return (
    <div>
      {albums.map((album) => (
        <div className='flex gap-3 text-lg'>
          <img src={logo} alt='' className='w-6 self-start' />
          <Link
            key={album.id}
            to={`/albums/${album.id}`}
            className='hover:underline hover:text-indigo-700'
          >
            {album.title[0].toUpperCase() + album.title.slice(1)}
          </Link>
        </div>
      ))}
    </div>
  )
}
