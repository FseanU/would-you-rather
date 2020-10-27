import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute ({component: Component, authed, path }) {
  return (
    <Route 
      render={(props) => (
        authed === true
        ? <Component />
        : <Redirect to={{
            pathname: "/signin",
            state: { from: props.location }
          }} />
      )}
      // path={path}
    />
  )
}