import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

function Nav (props) {
  const { user } = props;
  const pathName = props.location.pathname;
  const avatar = user ? user.avatarURL : ''; 
  const name = user ? user.name : '';

  return (
    <nav className="nav">
      <>
        <ul>
          <div className="nav-route">
            <li id="logo-li">
              <NavLink id="logo" to='/' exact>
                WYR
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/' exact 
                className={pathName === '/' ? 'black' : ''}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/new'
                className={pathName === '/new' ? 'black' : ''}>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/leaderboard'
                className={pathName === '/leaderboard' ? 'black' : ''}>
                Leader Board
              </NavLink>
            </li>
          </div>
          {user
            ? (<div className="nav-user">
                <li>
                  <img src={require(`../${avatar}`)} alt="Your avatar"/>
                  <p className="pl-8">{name}</p>
                </li>
                <li>
                  <NavLink to='/logout'>
                    Logout
                  </NavLink>
                </li>            
              </div>)
            : ''
          }
        </ul>
      </>
        
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

export default withRouter(connect(mapStateToProps)(Nav))