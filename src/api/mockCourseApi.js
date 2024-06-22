import delay from './delay'

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: 'react-flux-building-applications',
    title: 'Learn react from ChaiAurCode',
    watchHref:
      'https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige',
    authorId: 'cory-house',
    length: '5:08',
    category: 'JavaScript',
  },
  {
    id: 'clean-code',
    title: 'Full Stack web development',
    watchHref:
      'https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige',
    authorId: 'cory-house',
    length: '3:10',
    category: 'Software Practices',
  },
  {
    id: 'architecture',
    title: 'Architecting Design',
    watchHref:
      'https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige',
    authorId: 'cory-house',
    length: '2:52',
    category: 'Software Architecture',
  },
  {
    id: 'career-reboot-for-developer-mind',
    title: 'Becoming an Outlier: Reprogramming the Developer Mind',
    watchHref:
      'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
    authorId: 'cory-house',
    length: '2:30',
    category: 'Career',
  },
  {
    id: 'web-components-shadow-dom',
    title: 'Web Component Fundamentals',
    watchHref: 'http://www.pluralsight.com/courses/web-components-shadow-dom',
    authorId: 'cory-house',
    length: '5:10',
    category: 'HTML5',
  },
]

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace)
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-')
}

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses))
      }, delay)
    })
  }

  static saveCourse(course) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`)
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(
            (a) => a.id === course.id,
          )
          courses.splice(existingCourseIndex, 1, course)
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course)
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`
          courses.push(course)
        }

        resolve(Object.assign({}, course))
      }, delay)
    })
  }

  static deleteCourse(courseToDelete) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(
          (course) => course.id === courseToDelete.id,
        )
        courses.splice(indexOfCourseToDelete, 1)
        resolve(courseToDelete)
      }, delay)
    })
  }
}

export default CourseApi
