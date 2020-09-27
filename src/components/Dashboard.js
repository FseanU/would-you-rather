import React from 'react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Dashboard</h3>
        <div>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              Question Id: {id}
            </li>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questions,
  }
}

export default connect(mapStateToProps)(Dashboard)