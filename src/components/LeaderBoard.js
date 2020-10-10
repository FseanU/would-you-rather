import React from 'react'
import { connect } from 'react-redux'

function LeaderBoard(props) {
  const { usersWithScore } = props
  return (
    <div>
      <h1>LeaderBoard</h1>
      {Object.keys(usersWithScore).map((userId) => {
        const user = usersWithScore[userId]
        const avatar = user.avatarURL
        return (
          <div key={userId}>
            <img 
              src={require(`../${avatar}`)} 
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