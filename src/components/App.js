import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar, { loadingBarMiddleware } from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import SignIn from './SignIn';
import Nav from './Nav';
import LogoutPage from './LogoutPage';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const authed = this.props.authedUser !== null

    return (
      <Router>
        <React.Fragment>
          <LoadingBar style={{backgroundColor: '#FF7257', height: '2px' }} />
          
          <div className='container'>
            <Nav />

            <div className="content-container">
              {this.props.loading === true 
                ? null 
                : <Switch>
                    <Route path='/signin' component={SignIn} />
                    <Route path='/logout' component={LogoutPage} />
                    <PrivateRoute authed={authed} path='/questions/:id' component={QuestionPage} />
                    <PrivateRoute authed={authed} path='/leaderboard' component={LeaderBoard} />
                    <PrivateRoute authed={authed} path='/new' component={NewQuestion} />
                    <PrivateRoute authed={authed} exact={true} path='/' component={Dashboard} />
                    <Route path='/404' component={NotFound} />
                    <Redirect to='/404' />
                  </Switch>}
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, questions }){
  return {
    loading: questions === null,
    authedUser,
  }
}

export default connect(mapStateToProps)(App);

