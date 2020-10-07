import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage';
import SignIn from './SignIn'
import Nav from './Nav'
import LogoutPage from './LogoutPage';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <div>
          <LoadingBar />
          <Nav />
          {this.props.authedUser ? console.log("already login")
            : <Redirect to="/signin" />}
          <Route path='/signin' component={SignIn} />
          {this.props.loading === true 
            ? null 
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/question/:id' component={QuestionPage} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/new' component={NewQuestion} />
                <Route path='/logout' component={LogoutPage} />
              </div>}
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }){
  return {
    loading: authedUser === null,
    authedUser,
  }
}

export default connect(mapStateToProps)(App);

