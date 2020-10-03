import React from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends React.Component {
  render() {
    const { question } = this.props
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { 
      name, avatar, optionOne
    } = question

    return (
      <div>
        <h3>{`${name} ask:`}</h3>
        <img 
          src={avatar} 
          alt={`Avatar of ${name}`}
        /> 
        <h3>Would you rather</h3>
        <p>{`...${optionOne.text}...`}</p>
        <button>View Poll</button>
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