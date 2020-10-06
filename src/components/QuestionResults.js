import React from 'react'
import { connect } from 'react-redux'

class QuestionResults extends React.Component {
  render() {
    const { question, author } = this.props
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    const vote = totalVotes > 1 ? "votes" : "vote"
    
    return (
      <div>
        <h3>{`Asked by ${author.name}`}</h3>
        <img src={author.avatarURL} alt={`Avatar of ${author.name}`} />
        <h1>
          Results :
        </h1>
        <h3>{`Would you rather ${question.optionOne.text}?`}</h3>
        <p>{`${optionOneVotes} out of ${totalVotes} ${vote}`}</p>
        <h3>{`Would you rather ${question.optionTwo.text}?`}</h3>
        <p>{`${optionTwoVotes} out of ${totalVotes} ${vote}`}</p>
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