import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Drawer from './Drawer'

function NavSmall(props) {
  const { user } = props;
  const avatar = user ? user.avatarURL : ''; 
  const name = user ? user.name : '';

  return (
    <>
    <div className="nav-small">
      <Drawer />
      <NavLink id="logo" to='/' exact>
        WYR
      </NavLink>
      {user
        ? (<img src={require(`../${avatar}`)} alt="Your avatar"/>)
        : ''
      }
    </div>
    <div className="line-bottom-black"></div>
    </>
  )
}

function mapStateToProps({authedUser, users}) {
  const user = users[authedUser]
  return {
    user,
  }
}

export default connect(mapStateToProps)(NavSmall)