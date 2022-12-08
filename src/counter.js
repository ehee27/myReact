import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props)
// this.state - we want to use the 'key', but the live App uses our 'props'
    this.state = {
      count: props.initialCount
    }
  }
  render() {
    return (
      <div>
          <button onClick={() => this.changeCount(-1)}>-</button>
          <span>{this.state.count}</span>
          <button onClick={() => this.changeCount(+1)}>+</button>
      </div>    
    )
  }
  changeCount(amount) {
    this.setState(prevState => {
      return ({count: prevState.count + amount})
    })
  }
}

// functions change the state or 'set...'






// export default class Counter extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       count: props.initialCount
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h3>Class Component</h3>
//           <button onClick={() => this.changeCount(-1)}>-</button>
//           <span>{this.state.count}</span>
//           <button onClick={() => this.changeCount(+1)}>+</button>
//       </div>
//     )
//   }

//   changeCount(amount){
//     this.setState({ count: this.state.count + amount})
//   }
// }