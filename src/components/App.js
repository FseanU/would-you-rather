import React from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        Would you rather...?
      </div>
    );
  }
}


export default connect()(App);

