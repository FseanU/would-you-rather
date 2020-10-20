import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#ff7257',
  },
}))(LinearProgress);

class QuestionResults extends React.Component {
  render() {
    const { question, author, authedUser, authedUserAvatar } = this.props
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    const option1Rate = Math.round(optionOneVotes / totalVotes * 100)
    const option2Rate = Math.round(optionTwoVotes / totalVotes * 100)
    const vote = totalVotes > 1 ? "votes" : "vote"
    const avatar = author.avatarURL
    const optionOneVotedArr = question.optionOne.votes
    const optionTwoVotedArr = question.optionTwo.votes
    const votedOptionOne = optionOneVotedArr.includes(authedUser)
    const votedOptionTwo = optionTwoVotedArr.includes(authedUser)

    return (
      <div className="question-result mt-72"> 
        <div className="question-result-info">
          <h1>Results</h1>
          <div>
            <p className="mr-8">{`Asked by ${author.name}`}</p>
            <img 
              src={require(`../${avatar}`)} 
              alt={`Avatar of ${author.name}`} />
          </div>
        </div>
        <div className="mt-8 line-bottom-black"></div>
        <h1 className="mt-48">Would you rather</h1>
        <div className="options mt-32">
          <div className="option1">
            <div className="authed-user-vote">
              <img 
                src={require(`../${authedUserAvatar}`)} 
                alt="Your avatar"
                className={votedOptionOne ? "show-avatar" : "hide-avatar"}
              /> 
            </div>
            <h3 className="mb-24">{`${question.optionOne.text}?`}</h3>
            <BorderLinearProgress variant="determinate" value={option1Rate} />
            <p className="mt-8">{`${option1Rate} %`}</p>
            <p className="option-votes mt-8">{`(${optionOneVotes} out of ${totalVotes} ${vote})`}</p>
          </div>
          <div className="line-right-black"></div>
          <div className="option2">
            <div className="authed-user-vote mb-8">
              <img 
                src={require(`../${authedUserAvatar}`)} 
                alt="Your avatar"
                className={!votedOptionOne ? "show-avatar" : "hide-avatar"}
              /> 
            </div>
            <h3 className="mb-24">{`${question.optionTwo.text}?`}</h3>
            <BorderLinearProgress variant="determinate" value={option2Rate} />
            <p className="mt-8">{`${option2Rate} %`}</p>
            <p className="option-votes mt-8">{`(${optionTwoVotes} out of ${totalVotes} ${vote})`}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props
  const question = questions[id]
  const author = users[question.author]
  const authedUserAvatar = users[authedUser].avatarURL
  return {
    question,
    author,
    authedUser,
    authedUserAvatar
  }
}

export default connect(mapStateToProps)(QuestionResults)