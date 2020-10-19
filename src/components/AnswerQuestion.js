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
    console.log(this.state.answer);
    const { question, author } = this.props
    const { answer, toQuestionResults } = this.state
    const optionOneText = question.optionOne.text
    const optionTwoText = question.optionTwo.text
    const avatar = author.avatarURL

    if (toQuestionResults) {
      return <Redirect to='/question/:id' />
    }

    return (
      <div className="mt-72 answer-question">
        <form onSubmit={this.handleSubmit}>
          <div className="author-info">
            <img 
            src={require(`../${avatar}`)}
            alt={`Avatar of ${author.name}`}
            /> 
            <div className="ml-16">
              <p>{author.name} asks:</p>
              <h1>Would You Rather ...</h1>
            </div>
          </div>
          <div className="options mt-64">
            <input 
              type="radio" 
              value="optionOne" 
              name='answer'
              onChange={this.handleChange}
              id="optionOne"
            />
            <label 
              htmlFor="optionOne" 
              className="option1"
              id={this.state.answer === "optionOne" ? "selected" : "unselected"}
            >
              {optionOneText}  
            </label>
          
            <input 
              type="radio" 
              value="optionTwo"
              name='answer'
              onChange={this.handleChange}
              id="optionTwo"
            />
            <label 
              htmlFor="optionTwo" 
              className="option2"
              id={this.state.answer === "optionTwo" ? "selected" : "unselected"}
            >
              {optionTwoText}  
            </label>  
          </div>
          <div className="answer-question-btn mt-56">
            <button
              type='submit'
              disabled={ answer === undefined }>
              Submit
            </button>
          </div>
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