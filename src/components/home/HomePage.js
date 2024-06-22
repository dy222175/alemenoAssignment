import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="title">Course-App</h1>
        <p className="subtitle">
          "Unlock Your Potential: Explore, Learn, Succeed!"
        </p>
        <Link to="about" className="btn btn-primary btn-lg enter-button">
          Enter
        </Link>
      </div>
    )
  }
}

export default HomePage
