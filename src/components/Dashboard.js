import React from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab, AppBar} from '@material-ui/core'
import Question from './Question'

function Dashboard (props) {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  const {questionIds, questions, authedUser} = props
  
  function isQuestionVoted (id, questions, authedUser) {
    return questions[id].optionOne.votes.includes(authedUser)
      || questions[id].optionTwo.votes.includes(authedUser)
  }

  const answeredQuestionIds = questionIds.filter((id) => {
    return isQuestionVoted(id, questions, authedUser)
  })

  const unansweredQuestionIds = questionIds.filter((id) => {
    return !isQuestionVoted(id, questions,authedUser)
  })
  
  return (
    <div>
      <h3>Dashboard</h3>
      <Tabs value={selectedTab} onChange={handleChange} >
        <Tab label="Unanswered Questions" />
        <Tab label="Answered Questions" />
      </Tabs>
      {selectedTab === 0 && unansweredQuestionIds.map((id) => (
        <li key={id}>
          <Question id={id} />
        </li>
      ))}
      {selectedTab === 1 && answeredQuestionIds.map((id) => (
        <li key={id}>
          <Question id={id} />
        </li>
      ))}
    </div>
  )
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questions,
    authedUser,
  }
}

export default connect(mapStateToProps)(Dashboard)