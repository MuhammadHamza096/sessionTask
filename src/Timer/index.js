import {Component} from 'react'
class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          count:0
      };
    }
  startTimer(){
     this.myInterval=setInterval(()=>{
         this.setState({
             count:this.state.count+1
         })
     },1000)
  }
  stopTimer(){
    clearInterval(this.myInterval)
  }
  clearTimer(){
    clearInterval(this.myInterval)
      this.setState({count:0})
  }
    render() {
      return (
        <div>
          <h2>{this.state.count}</h2>
          <button onClick={()=>this.startTimer()}>Start Timer </button>
          <button onClick={()=>this.stopTimer()}>Stop Timer </button>
          <button onClick={()=>this.clearTimer()}>Clear Timer</button>
        </div>
      );
    }
  }
  export default Timer