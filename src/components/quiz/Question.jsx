import React, {Component} from 'react';

class Question extends Component{
  onChange(e){
    e.preventDefault();
    console.log(e.target.value);
    const {setScore, setCurrent, question} = this.props;

    if(question.correct === e.target.value){
      setScore(this.props.score+1);
    }
    setCurrent(this.props.current+1);
  }
  render(){
    let {question} = this.props;
    return (
      <div className="well">
        <h3>{question.text}</h3>
        <hr/>
        <ul className="list-group">
          {question.choices.map((choice)=>{
            return <li className="list-group-item" key={choice.id}>
              <div className="radio">
                <label>
                  <input type="radio" name={choice.id}  value={choice.id} onChange={this.onChange.bind(this)}/>
                <b>{choice.id}.</b>  {choice.text}
                </label>
              </div>

            </li>
          })}
        </ul>
      </div>
    );
  }
}


export default Question;
