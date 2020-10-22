import React from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Question extends React.Component {
  render() {
    const { question } = this.props
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { 
      name, optionOne, id
    } = question

    const avatar = question.avatar

    return (
      <div className="question-card p-16">
        <div className="card-info">
          <img 
            src={require(`../${avatar}`)} 
            // src={require('../images/avatar1.png')} 
            alt={`Avatar of ${name}`}
          /> 
          <div className="ml-8">
            <h2>Would you rather</h2>
            <p className="author">{`Asked by ${name}`}</p>
            <div className="line-bottom-black mt-8 mb-16"></div>
            <p>{`...${optionOne.text}...`}</p>
          </div>
        </div>
        <div className="question-card-btn mt-16">
          <Link to={`/questions/${id}`}>View Poll</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({questions, authedUser, users}, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question: question 
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default connect(mapStateToProps)(Question)