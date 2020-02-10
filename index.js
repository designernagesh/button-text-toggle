import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      btnText: 'Web Designer'
    };
  }
  clickHandle = () => {
    this.setState({
      btnText: !this.state.btnText
    })
  }
  render() {
    const text = this.state.btnText ? 'Web Designer': 'UI Developer'
    return (
      <div>        
        <button onClick={this.clickHandle}>{text}</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
