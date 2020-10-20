import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav (props) {
  const { user } = props;
  const avatar = user ? user.avatarURL : ''; 
  
  return (
    <nav className="nav">
      {user ? 
        (<ul>
            <li>
              <NavLink to='/' exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/new'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard'>
                Leader Board
              </NavLink>
            </li>
            <li>
              <img src={require(`../${avatar}`)} alt="Your avatar"/>
            </li>
            <li>
              <NavLink to='/logout'>
                Logout
              </NavLink>
            </li>
          </ul>)
        : ''
      }
    </nav>
  )
}

function mapStateToProps({authedUser, users}) {
  const user = users[authedUser]
  return {
    user,
  }
}

export default connect(mapStateToProps)(Nav)