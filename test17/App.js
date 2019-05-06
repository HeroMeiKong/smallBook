import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            number: ''
        }
    }
    changeContent(e) {
      this.setState({
        number: e.target.value
      })
        if (this.props.onSubmit) {
            this.props.onSubmit(e.target.value)
        }
    }
    render() {
        return (
            <div>
              <input type='number' onChange={this.changeContent.bind(this)} />
            </div>
        )
    }
}

class PercentageShower extends Component {
    static defaultProps = {
        num: ''
    }
    render() {
        let num = (this.props.num * 100).toFixed(2) + '%';
        return (
            <div>{num}</div>
        )
    }
}

class PercentageApp extends Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }
    onSubmit(value) {
        this.setState({
            num: value
        })
    }
    render() {
        return (
            <div>
              <Input onSubmit={this.onSubmit.bind(this)} />
              <PercentageShower num={this.state.num}/>
            </div>
        )
    }
}

export default PercentageApp


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