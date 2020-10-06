import React from 'react'
import { connect } from 'react-redux'

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
    e.preventDefault()
    console.log('username: ', this.state.value)
  }

  render() {
    const { users } = this.props
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

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(SignIn)