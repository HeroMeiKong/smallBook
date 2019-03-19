import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
class Computer extends Component {
  constructor () {
    super()
    this.state = { status: 'off'}
  }
  optionsComputer () {
    this.setState({
      status: this.state.status === 'off' ? 'on' : 'off'
    })
  }
  render () {
    return (
      <div>
        <Screen showContent = { this.state.status === 'off' ? '显示器关闭' : '显示器开启'} />
        <button onClick = {this.optionsComputer.bind(this)}>开关</button>
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = { showContent: '无内容' }
  render () {
    return (
      <div className='screen'>{this.props.showContent}</div>
      )
  }
}

export default Computer;
// export default App;
