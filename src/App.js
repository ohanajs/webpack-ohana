import React, { Component } from 'react'

import Fox from 'url!./fox.jpg'

export class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>What does the fox say?</h1>
        <img src={Fox} style={{width: 500}} />
      </div>
    );
  }
}
