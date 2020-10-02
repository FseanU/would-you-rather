import React from 'react'
import { connect } from 'react-redux'

class AnswerQuestion extends React.Component {
  state = { }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { option } = this.state
    console.log(option)
  }

  render() {
    const { authedUser, id, question, author } = this.props
    const { option } = this.state
    const optionOneText = question.optionOne.text
    const optionTwoText = question.optionTwo.text
    // todo: Redirect to QuestionResults
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>{author.name} asks:</p>
          <img 
          src={author.avatarURL} 
          alt={`Avatar of ${author.name}`}
          /> 
          <h3>Would You Rather ...</h3>
          <input 
            type="radio" 
            value={optionOneText} 
            name='option'
            onChange={this.handleChange}
          />
          {optionOneText}  

          <input 
            type="radio" 
            value={optionTwoText} 
            name='option'
            onChange={this.handleChange}
          />
          {optionTwoText}  
          
          <button
            type='submit'
            disabled={ option === undefined }>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }, props) {
  const { id } = props.match.params
  const question = questions[id]
  const author = users[question.author]
  return {
    question,
    authedUser,
    id,
    author
  }
}

export default connect(mapStateToProps)(AnswerQuestion)