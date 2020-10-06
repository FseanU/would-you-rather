import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' exact>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' exact>
            Leader Board
          </NavLink>
        </li>
        <li>
          <NavLink to='/signin' exact>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}