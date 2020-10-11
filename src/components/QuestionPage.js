import React from 'react'
import { connect } from 'react-redux'
import AnswerQuestion from './AnswerQuestion'
import QuestionResults from './QuestionResults'

class QuestionPage extends React.Component {
  render() {
    const { id, optionOneVotedArr, optionTwoVotedArr, authedUser } = this.props 

    return (
      <div>
        {/* 1. Show AnswerQuestion if authedUser haven't answered the question
            2. Show QuestionResult if authedUser answered the question  */}
        {optionOneVotedArr.includes(authedUser) || optionTwoVotedArr.includes(authedUser)
          ? <QuestionResults id={id} />
          : <AnswerQuestion id={id} /> }
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, props) {
  const { id } = props.match.params
  const optionOneVotedArr = questions[id].optionOne.votes
  const optionTwoVotedArr = questions[id].optionTwo.votes
  
  return {
    id,
    authedUser,
    optionOneVotedArr,
    optionTwoVotedArr,
  }
}

export default connect(mapStateToProps)(QuestionPage)