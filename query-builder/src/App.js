import './App.css';
import React, { Component } from 'react'
import QueryDialog from './components/QueryDialog';

export default class App extends Component {
  state = {
    isDailogClosed: false
  }

  openQueryBuilder = () => {
    this.setState({isDailogClosed : !this.state.isDailogClosed});
  }

  render() {
    const closeDialogBox = () =>{
      this.setState({isDailogClosed : !this.state.isDailogClosed})      
    }
  
    return (
      <div className="App p-16">
        <button className="btn blue-btn" onClick={this.openQueryBuilder}> Build Query  </button>
        {/* {!this.state.isDailogClosed ? <QueryDialog onClose={closeDialogBox}/>: ''} */}
        <div className={this.state.isDailogClosed ? 'scale0 transit' : 'scale1 transit'}> <QueryDialog onClose={closeDialogBox}/></div>
      </div>
    );
  }
}
