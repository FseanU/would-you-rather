export function formatQuestion (question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo} = question
  const { name, avatarURL } = author

  return {
    name, 
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL,
    hasVoted: optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
  }
}

export function isQuestionVoted (id, questions, authedUser) {
  return questions[id].optionOne.votes.includes(authedUser)
    || questions[id].optionTwo.votes.includes(authedUser)
}