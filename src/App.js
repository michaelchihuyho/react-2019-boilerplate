import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doSomething } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.props.doSomething(Math.random())}>
            Click me
          </button>
          <p>
            {this.props.something}
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ someReducer }) => ({
  something: someReducer,
});

const mapDispatchToProps = { doSomething };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
