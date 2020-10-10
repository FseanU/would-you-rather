import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'

class AnswerQuestion extends React.Component {
  state = {
    toQuestionResults: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { answer } = this.state
    console.log(answer)
    const { dispatch, authedUser, qid } = this.props

    dispatch(handleAnswerQuestion({
      qid,
      authedUser,
      answer,
    }))

    this.setState({
      toQuestionResults: true,
    })
  }

  render() {
    const { question, author } = this.props
    const { answer, toQuestionResults } = this.state
    const optionOneText = question.optionOne.text
    const optionTwoText = question.optionTwo.text
    const avatar = author.avatarURL

    if (toQuestionResults) {
      return <Redirect to='/question/:id' />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>{author.name} asks:</p>
          <img 
          src={require(`../${avatar}`)}
          alt={`Avatar of ${author.name}`}
          /> 
          <h3>Would You Rather ...</h3>
          <input 
            type="radio" 
            value="optionOne" 
            name='answer'
            onChange={this.handleChange}
          />
          {optionOneText}  

          <input 
            type="radio" 
            value="optionTwo"
            name='answer'
            onChange={this.handleChange}
          />
          {optionTwoText}  
          
          <button
            type='submit'
            disabled={ answer === undefined }>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }, props) {
  const { id } = props
  const question = questions[id]
  const author = users[question.author]
  return {
    question,
    authedUser,
    qid: id,
    author
  }
}

export default connect(mapStateToProps)(AnswerQuestion)