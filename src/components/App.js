import React from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {/* <LeaderBoard /> */}
        {this.props.loading === true 
          ? null 
          : <QuestionPage match={{params: {id: 'vthrdm985a262al8qx3do'}}} />}
        
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);

