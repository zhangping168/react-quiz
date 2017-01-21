import React, {Component} from 'react';

class Scorebox extends Component{

  render(){
    return (
      <div className="well">
        Question {this.props.current} out of {this.props.questions.length} <span className="pull-right">Score: <strong>{this.props.score}</strong></span>
      </div>
    );
  }
}


export default Scorebox;
