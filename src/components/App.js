import React from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <NewQuestion />
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

