import React from 'react'

class NewQuestion extends React.Component {
  state = {
    optionOne: '',
    optionTwo: '',
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

    // todo: Add Question to Store

    console.log('New Question')
    console.log('OptionOne', optionOne)
    console.log('OptionTwo', optionTwo)

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
    }))
  }

  render() {
    const { optionOne, optionTwo } = this.state

    /* todo: Redirect to / if submitted */
    return (
      <div>
        <h3>Create New Question</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea 
            name='optionOne'
            placeholder='Enter Option One Text Here'
            value={optionOne}
            onChange={this.handleInputChange}
            maxLength={200}
          />
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

export default NewQuestion