import React from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage';
import SignIn from './SignIn'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props.loading)
    return (
      <div>
        <LoadingBar />
        <SignIn />
        
        {this.props.loading === true 
          ? null 
          : <Dashboard />}
        
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

