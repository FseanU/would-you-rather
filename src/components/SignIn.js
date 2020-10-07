import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends React.Component {
  state = {
    value: '',
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState(()=> ({
      value,
    }))
  }

  handleSubmit = (e) => {
    const { dispatch } = this.props
    const userId = this.state.value
    console.log("submit")
    e.preventDefault()
    if (userId) {
      dispatch(setAuthedUser(userId))
    } 
  }

  render() {
    const { users, authedUser } = this.props
    if (authedUser) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h2>Welcome to the Would You Rather App</h2>
        <p>Please sign in to continue</p>
        <h1>Sign in</h1>

        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            {Object.keys(users).map((id) => (
              <option key={id} value={id}>
                {users[id].name}
              </option>
            ))}
          </select>
          <button type='submit'>
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(SignIn)