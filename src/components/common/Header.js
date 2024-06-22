import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
import LoadingDots from './LoadingDots'

const Header = ({ loading, courses, authors }) => {
  let courseLink,
    authorLink,
    numCourses = courses.length + 0,
    numAuthors = authors.length + 0

  if (numCourses > 0) {
    courseLink = (
      <NavLink to={'/courses'} activeClassName="active" className="nav-link">
        Courses ({numCourses})
      </NavLink>
    )
  } else {
    courseLink = (
      <NavLink to={'/course'} activeClassName="active" className="nav-link">
        Add Course
      </NavLink>
    )
  }

  if (numAuthors > 0) {
    authorLink = (
      <NavLink to="/authors" activeClassName="active" className="nav-link">
        Authors ({numAuthors})
      </NavLink>
    )
  } else {
    authorLink = (
      <NavLink to="/author" activeClassName="active">
        Add Author
      </NavLink>
    )
  }

  return (
    <nav>
      <NavLink
        exact
        to={'/'}
        activeClassName="active"
        className="nav-link home-link"
      >
        Home
      </NavLink>

      {courseLink}

      {authorLink}

      <NavLink to="/about" activeClassName="active">
        dashboard
      </NavLink>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  )
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
}

export default Header
