import React, { Component } from 'react';
import './App.css';
// import BlackBorderContianer from './BlackBorderContianer'

class App extends Component {
    render() {
        return (
            <div>
              <BlackBorderContainer>
                <div className='name'>My Name：Lucy</div>
                <p className='age'>
                  My Age：<span>12</span>
                </p>
              </BlackBorderContainer>
            </div>
        )
    }
}

class BlackBorderContainer extends Component {
  render () {
    return (<div>{this.props.children.map((el,i) => {
      return (
        <div key={i} className='border'>{el}</div>
      )
    })}</div>)
  }
}

export default App


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