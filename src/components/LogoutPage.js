import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logOut } from '../actions/authedUser'

class LogoutPage extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(logOut())
  }

  render() {
    return(
      <Redirect to="/" />
    )
  }
}

export default connect()(LogoutPage)