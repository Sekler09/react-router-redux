import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import useMyFetch from '../hooks/useMyFetch.js'
import {fetchUsers} from '../redux/users/usersActions.js'
import {
  selectUsersError,
  selectUsersLoading,
  selectUsers,
} from '../redux/users/usersSelectors.js'

export default connect(mapStateToProps, mapDispatchToProps)(Users)

function mapStateToProps(state) {
  return {
    users: selectUsers(state),
    loading: selectUsersLoading(state),
    error: selectUsersError(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

function Users({users, loading, error, fetchUsers}) {
  useMyFetch(fetchUsers)

  if (loading) {
    return <div className='text-xl'>Loading...</div>
  }

  if (error) {
    throw new Error()
  }

  return (
    <ul className='flex flex-col text-lg list-disc '>
      {users.map((user) => (
        <li key={user.id}>
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className='self-start hover:underline hover:text-indigo-700'
          >
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
