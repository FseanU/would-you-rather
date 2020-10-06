import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends React.Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props
    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h2>Create New Question</h2>
        <p>Complete the question:</p>
        <h3>Would you rather...</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea 
            name='optionOne'
            placeholder='Enter Option One Text Here'
            value={optionOne}
            onChange={this.handleInputChange}
            maxLength={200}
          />
          <p>OR</p>
          <textarea 
            name="optionTwo"
            placeholder='Enter Option Two Text Here' 
            value={optionTwo}
            onChange={this.handleInputChange}
            maxLength={200}
          />
          <button
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)