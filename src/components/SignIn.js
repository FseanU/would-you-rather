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
      <div className="sign-in-container mt-56">
        <img 
          src={require(`../images/login_illustration.png`)} 
          alt="login illustration"/>
        <div className="sign-in">
          <h1>Sign in <br />to play</h1>
          <form onSubmit={this.handleSubmit}>
            <select 
              value={this.state.value} 
              onChange={this.handleChange}
              className="mt-32 p-8"
            >
              {Object.keys(users).map((id) => (
                <option key={id} value={id}>
                  {users[id].name}
                </option>
              ))}
            </select>
            <button 
              type='submit'
              className="mt-16">
              Sign In
            </button>
          </form>
        </div>
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