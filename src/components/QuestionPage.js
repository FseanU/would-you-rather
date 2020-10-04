import React from 'react'
import { connect } from 'react-redux'
import AnswerQuestion from './AnswerQuestion'
import QuestionResults from './QuestionResults'

class QuestionPage extends React.Component {
  render() {
    const { answeredQuestionIds, id } = this.props 
    return (
      <div>
        {/* 1. Show AnswerQuestion if authedUser haven't answered the question
            2. Show QuestionResult if authedUser answered the question  */}
        {answeredQuestionIds.includes(id)
          ? <QuestionResults match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} />
          : <AnswerQuestion match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} /> }
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users}, props) {
  const { id } = props.match.params
  const answeredQuestions = users[authedUser].answers
  const answeredQuestionIds = Object.keys(answeredQuestions)
  return {
    id,
    authedUser,
    answeredQuestionIds,
  }
}

export default connect(mapStateToProps)(QuestionPage)