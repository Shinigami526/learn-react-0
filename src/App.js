import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
       test: "test is valid"
    }
  }
  update(e){
    this.setState({
      test: e.target.value
    })
  }

   render () {
    //let txt = this.props.txt
    const { txt, cat } = this.props;
       return (
           <div className="App">
            <h1>Welcome to world</h1>
            <p>{txt}</p>
            <input type="text" onChange={this.update.bind(this)} />
            <h4>{this.state.test}</h4>
           </div>
        );
   }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

export default App;
