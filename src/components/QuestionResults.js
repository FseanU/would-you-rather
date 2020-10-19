import React from 'react'
import { connect } from 'react-redux'

class QuestionResults extends React.Component {
  render() {
    const { question, author } = this.props
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    const vote = totalVotes > 1 ? "votes" : "vote"
    const avatar = author.avatarURL

    return (
      <div className="question-result mt-72"> 
        <div className="question-result-info">
          <h1>Results</h1>
          <div>
            <p className="mr-8">{`Asked by ${author.name}`}</p>
            <img 
              src={require(`../${avatar}`)} 
              alt={`Avatar of ${author.name}`} />
          </div>
        </div>
        <div className="mt-8 line-bottom-black"></div>
        <h1 className="mt-48">Would you rather</h1>
        <div className="options mt-32">
          <div className="option1">
            <h3>{`${question.optionOne.text}?`}</h3>
            <p>{`${optionOneVotes} out of ${totalVotes} ${vote}`}</p>
          </div>
          <div className="option2">
            <h3>{`${question.optionTwo.text}?`}</h3>
            <p>{`${optionTwoVotes} out of ${totalVotes} ${vote}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, props) {
  const { id } = props
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(QuestionResults)