import React from 'react'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'

function LeaderBoard(props) {
  const { usersSortedByScore } = props

  return (
    <div>
        <h1 className="mt-72 leaderBoard">Leader Board</h1>
        <div className={!isMobile && "line-bottom-black"}></div>
      <div className="card-container mt-48">
        {usersSortedByScore.map((user) => {
          const avatar = user.avatarURL
          return (
            <div className='card p-16' key={user.id}>
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
  const usersWithScore = Object.keys(users).map((id) => {
    const user = users[id];
    const answeredQuestions = Object.keys(user.answers).length;
    const createdQuestions = user.questions.length;
    const score = answeredQuestions + createdQuestions;
    
    return {
      ...user,
      answeredQuestions,
      createdQuestions,
      score
    };
  })
  
  const usersSortedByScore = usersWithScore.sort(function(a, b) {
    return b.score - a.score;
  }) 

  return {
    usersSortedByScore,
  }
}

export default connect(mapStateToProps)(LeaderBoard)