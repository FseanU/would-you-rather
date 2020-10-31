import React from 'react'
import { connect } from 'react-redux'
import { isMobile } from 'react-device-detect'
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Question from './Question'
import { isQuestionVoted } from '../utils/helpers'

const useStyles = makeStyles({
  indicator: {
    backgroundColor: "#ff7257",
  },
  buttonStyle: {
    color: "#ff7257",
  },
  tabTitleForMobile: {
    fontSize: 11,
  }
});

function Dashboard (props) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const classes = useStyles(selectedTab);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  const {questionIds, questions, authedUser} = props
  
  const answeredQuestionIds = questionIds.filter((id) => {
    return isQuestionVoted(id, questions, authedUser)
  })

  const unansweredQuestionIds = questionIds.filter((id) => {
    return !isQuestionVoted(id, questions,authedUser)
  })

  return (
    <div className="dashboard mt-72">
      <Grid 
        container
        justify="center"
      >
        <Tabs 
          value={selectedTab} 
          onChange={handleChange} 
          TabIndicatorProps={{ className: classes.indicator }} >
          <Tab 
            // label="Unanswered Questions" 
            label={ 
              <Typography 
                variant="body1" 
                className={
                  isMobile 
                  ? classes.tabTitleForMobile
                  : ''
                }>
                Unanswered Questions
              </Typography>             
            } 
            className={selectedTab === 1 ? '' : classes.buttonStyle} />
          <Tab 
            label={
              <Typography 
                variant="body1" 
                className={
                  isMobile 
                  ? classes.tabTitleForMobile
                  : ''
                }>
                Answered Questions
              </Typography> 
            } 
            className={selectedTab === 0 ? '' : classes.buttonStyle} />
        </Tabs>
      </Grid>
      <div className="mt-16 dashboard-cards">
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