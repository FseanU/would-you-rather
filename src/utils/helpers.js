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