import React from 'react'
import { Link } from 'react-router-dom'

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-page">
        <h1 className="userName text-3xl font-extrabold">Deepak Yadav</h1>
        <table className="course-table">
          <thead>
            <tr>
              <th className="dashboard">Enrolled Courses</th>
              <th className="dashboard">Progress(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="dashboard">
                <Link to="courses">Full Stack Web Development</Link>
              </td>
              <td className="dashboard">70</td>
            </tr>
            <tr>
              <td className="dashboard">
                <Link to="courses">Deep Learning Specialization</Link>
              </td>
              <td className="dashboard">50</td>
            </tr>
            <tr>
              <td className="dashboard">
                <Link to="courses">Full Stack Web Development</Link>
              </td>
              <td className="dashboard">80</td>
            </tr>
            <tr>
              <td className="dashboard">
                <Link to="courses">Front-End Web Development</Link>
              </td>
              <td className="dashboard">90</td>
            </tr>
            <tr>
              <td className="dashboard">
                <Link to="courses">Full Stack Web Development</Link>
              </td>
              <td className="dashboard">95</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          <b>Instructor name: </b> Dr Deepak Yadav
        </p>
      </div>
    )
  }
}

export default AboutPage
