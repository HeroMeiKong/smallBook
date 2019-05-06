import React, { Component } from 'react';
import CommentInput from './CommentInput'
import './App.css';

class Comment extends Component {

  render () {
    const { comment } = this.props
    return (
      <div><CommentInput /></div>
    )
  }
}

export default Comment


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