import React, {Component} from 'react';

class Results extends Component{

  render(){
    let percent = Math.floor(this.props.score / this.props.questions.length * 100);
    let message = '';
    if(percent > 80){
      message  = 'You did great job!';
    }else if(percent >60){
      message = 'You did good!';
    }else{
      message = 'You did ok, try again next time!'
    }
    return (
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length}</h4>
        <h1>{percent}% - {message}</h1>
        <hr/>
        <a href='/'>Try again</a>
    </div>
    );
  }
}


export default Results;
