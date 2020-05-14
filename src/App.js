import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Square extends React.Component {
	render(){
		return (
			<button type="button" onClick={()=> this.props.onClick()}>{this.props.value}</button>
		)
	}
}

class App extends React.Component {
  constructor() {
      super();
	  this.state = {
		  squares:[0,1,2,3,4,5,6]
	  }
  }
  handleClick(i){
	  let arr = [...this.state.squares];
	  arr[i]='X';
	  this.setState({
		  squares:arr
	  })
  }
  renderSquare(i){
	  return (
		<Square value={this.state.squares[i]} index="index" onClick={()=>this.handleClick(i)} />
	  )
  }
  render(){
	  return (
	    <div className="App">
	      <h1>{this.props.name}</h1>
		  <div className="broad">
			{this.renderSquare(0)}
			{this.renderSquare(1)}
			{this.renderSquare(2)}
		  </div>
		  <div className="broad">
			{this.renderSquare(4)}
			{this.renderSquare(5)}
			{this.renderSquare(6)}
		  </div>
	    </div>
	  );
  }
}

export default App;
