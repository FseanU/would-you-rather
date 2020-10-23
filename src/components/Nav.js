import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav (props) {
  const { user } = props;
  const avatar = user ? user.avatarURL : ''; 
  const name = user ? user.name : '';
  
  return (
    <nav className="nav">
      {user ? 
        (<React.Fragment>
          <ul>
            <div className="nav-route">
              <li id="logo-li">
                <NavLink id="logo" to='/' exact>
                  WYR
                </NavLink>
              </li>
              <li>
                <NavLink to='/' exact>
                  Dashboard
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
            </div>
            <div className="nav-user">
              <li>
                <img src={require(`../${avatar}`)} alt="Your avatar"/>
                <p className="pl-8">{name}</p>
              </li>
              <li>
                <NavLink to='/logout'>
                  Logout
                </NavLink>
              </li>            
            </div>
          </ul>
          {/* <div className="line-bottom-black"></div> */}
        </React.Fragment>)
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