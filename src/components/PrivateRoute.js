import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute ({component: Component, authed, path }) {
  console.log(authed)
  console.log('test')
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