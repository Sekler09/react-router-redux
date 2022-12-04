import React from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import logo from '../assets/icons/album-icon.jpg'
import useMyFetch from '../hooks/useMyFetch'
import {fetchAlbums} from '../redux/albums/albumsActions'
import {fetchUsers} from '../redux/users/usersActions'
import {
  selectUsersError,
  selectUsersLoading,
  selectUsers,
} from '../redux/users/usersSelectors'

import {selectAlbums} from '../redux/albums/albumsSelectors'

export default connect(mapStateToProps, mapDispatchToProps)(User)

function mapStateToProps(state) {
  return {
    users: selectUsers(state),
    usersLoading: selectUsersLoading(state),
    usersError: selectUsersError(state),
    albums: selectAlbums(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAlbums: () => dispatch(fetchAlbums()),
  }
}

function User({
  users,
  usersLoading,
  usersError,
  albums,
  fetchUsers,
  fetchAlbums,
}) {
  const {id} = useParams()
  useMyFetch(fetchUsers)
  useMyFetch(fetchAlbums)
  const user = users.find((user) => user.id === +id)
  const userAlbums = albums.filter((album) => album.userId === +id)
  if ((users.length && !user) || usersError) {
    throw new Error()
  }

  if (!users.length || usersLoading) {
    return <div>Loading...</div>
  }

  const cross = String.fromCharCode(215)
  return (
    <div>
      <div className='text-black text-xl font-bold'>{user.name}</div>
      <div className='text-slate-500 '>Username: {user.username}</div>
      <div className='text-slate-500 '>
        Email:{' '}
        <a className='underline' href={'mailto:' + user.email}>
          {user.email}
        </a>
      </div>
      <div className='text-slate-500 '>
        Phone: {user.phone.replace(' x', cross)}
      </div>
      <div className='text-slate-500 '>
        Site:{' '}
        <a className='underline' href={'http://' + user.website}>
          {user.website}
        </a>
      </div>

      <div className='text-black text-xl font-bold mt-10 mb-2'>Albums:</div>
      {userAlbums.map((album) => (
        <div className='flex text-lg gap-3' key={album.id}>
          <img src={logo} className='w-6 self-start' alt='' />
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
