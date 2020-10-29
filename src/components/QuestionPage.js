import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AnswerQuestion from './AnswerQuestion'
import QuestionResults from './QuestionResults'

class QuestionPage extends React.Component {
  render() {
    const { id, optionOneVotedArr, optionTwoVotedArr, authedUser, questionExist } = this.props 
    
    if (!questionExist) {
      return <Redirect to="/404" />
    }

    return (
      <>
        {/* 1. Show AnswerQuestion if authedUser haven't answered the question
            2. Show QuestionResult if authedUser answered the question  */}
        {optionOneVotedArr.includes(authedUser) || optionTwoVotedArr.includes(authedUser)
          ? <QuestionResults id={id} />
          : <AnswerQuestion id={id} /> }
      </>
    )
  }
}

function mapStateToProps ({authedUser, questions}, props) {
  const { id } = props.match.params
  const questionExist = questions[id] 
  const optionOneVotedArr = questionExist ? questions[id].optionOne.votes : ''
  const optionTwoVotedArr = questionExist ? questions[id].optionTwo.votes : ''

  return {
    id,
    authedUser,
    optionOneVotedArr,
    optionTwoVotedArr,
    questionExist,
  }
}

export default connect(mapStateToProps)(QuestionPage)