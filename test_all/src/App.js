import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
    ]

class Lesson extends Component {
  render () {
    const {lesson} = this.props
    return (
      <div>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>
      )
  }
}

class LessonsList extends Component {
  render () {
    return (
      <div>
        {lessons.map( (lesson,i) => <Lesson key={i} lesson={lesson} />)}
      </div>
    )
  }
}

export default LessonsList


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
