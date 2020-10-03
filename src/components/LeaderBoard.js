import React from 'react'
import { connect } from 'react-redux'
import { answerQuestion } from '../actions/questions'

function LeaderBoard(props) {
  const { usersWithScore } = props
  return (
    <div>
      <h1>LeaderBoard</h1>
      {Object.keys(usersWithScore).map((userId) => {
        const user = usersWithScore[userId]

        return (
          <div key={userId}>
            <img 
              src={user.avatarURL} 
              alt={`Avatar of ${user.name}`} 
            />
            <p>{user.name}</p>
            <div>
              <p>Answered questions</p>
              <p>{user.answeredQuestions}</p>
            </div>
            <div>
              <p>Created questions</p>
              <p>{user.createdQuestions}</p>
            </div>
            <p>Score: {user.score}</p>
          </div>
        )
      })}
    </div>
  )
}

function mapStateToProps({ users }) {
  // const usersWithScore = Object.keys(users).map((userId) => {
  //   const user = users[userId]
  //   const answeredQuestions = Object.keys(user.answers).length
  //   const createdQuestions = user.questions.length
  //   const score = answeredQuestions + createdQuestions
  //   return ({
  //     [userId]: {
  //       ...user,
  //       answeredQuestions,
  //       createdQuestions,
  //       score,
  //     }
  //   })
  // })
  
  let usersWithScore = {}
  for (let id in users) {
    const user = users[id]
    const answeredQuestions = Object.keys(user.answers).length
    const createdQuestions = user.questions.length
    const score = answeredQuestions + createdQuestions
    const source = {
      [id]: {
        ...user,
        answeredQuestions,
        createdQuestions,
        score,
      }
    }
    Object.assign(usersWithScore, source)
  }
  
  return {
    usersWithScore,
  }
}

export default connect(mapStateToProps)(LeaderBoard)