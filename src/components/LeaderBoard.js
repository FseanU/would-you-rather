import React from 'react'
import { connect } from 'react-redux'

function LeaderBoard(props) {
  const { usersWithScore } = props
  return (
    <div>
        <h1 className="mt-72 leaderBoard">Leader Board</h1>
        <div className="line-bottom-black"></div>
      <div className="card-container mt-48">
        {Object.keys(usersWithScore).map((userId) => {
          const user = usersWithScore[userId]
          const avatar = user.avatarURL
          return (
            <div className='card p-16' key={userId}>
              <img 
                src={require(`../${avatar}`)} 
                alt={`Avatar of ${user.name}`} 
              />
              <h2 className="mt-8">{user.name}</h2>
              <h1 className="mt-16">{user.score}</h1>
              <div className="line-bottom-white"></div>
              <div className='text-card mb-8'>
                <p>Answered questions</p>
                <p>{user.answeredQuestions}</p>
              </div>
              <div className='text-card mb-8'>
                <p>Created questions</p>
                <p>{user.createdQuestions}</p>
              </div>
            </div>
          )
        })}
      </div>
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