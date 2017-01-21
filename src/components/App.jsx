import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      questions:[
        {
            id:1,
            text:'What\'s your name?',
            choices:[
              {id:'a',text:'Michael'},
              {id:'b',text:'Barney'},
              {id:'c',text:'Bob'}
            ],
            correct:'b'

        },
        {
            id:2,
            text:'Where do you live?',
            choices:[
              {id:'a',text:'Beijing'},
              {id:'b',text:'New York'},
              {id:'c',text:'Toronto'}
            ],
            correct:'c'
        },
        {
            id:3,
            text:'What have you ate for lunch?',
            choices:[
              {id:'a',text:'Noddle'},
              {id:'b',text:'Bread'},
              {id:'c',text:'Pita'}
            ],
            correct:'c'

        }
      ],
      score:0,
      current:1
    }
  }

  handleScore(score){
    this.setState({score:score});
  }
  handleCurrent(current){
    this.setState({current:current});
  }
  render(){
    let results = '', scorebox='';
    if(this.state.current > this.state.questions.length){
       results = <Results {...this.state} />;

    }else{
       scorebox = <Scorebox {...this.state}/>;
    }
    return (
      <div >
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.handleCurrent.bind(this)} setScore={this.handleScore.bind(this)}/>
        {results}
      </div>
    );
  }
}


export default App;
