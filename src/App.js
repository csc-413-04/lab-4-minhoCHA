import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
      color: 'red'
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    console.log(this.props);
  }

  onChange = () => {
    this.setState({ color: 'green' });
 }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    })
  }

  render() {
    let myVariable = <h2>Minho Cha</h2>;
    let myBanner;

    if (this.state.isOpen) {
      myBanner = <Header banner={this.state.banner}/>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          {myBanner}
          {this.props.test}
          {
            this.state.isOpen && 
            <Header banner={this.state.banner}/>
          }
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button onClick={this.buttonHandler} >Click Me</button>
          <button style={{ backgroundColor: this.state.color }} onClick={this.onChange}> <p>Click to change the button</p></button>
          <button onClick ={this.buttonHandler}>click</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);