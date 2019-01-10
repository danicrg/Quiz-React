import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Game from './Game'
import {questionAnswer, changeQuestion, submit, getQuestions, initQuestions} from "./redux/actions";
import Navbar from "./Navbar";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar onChangeQuestion={(next) => {
                            this.props.dispatch(changeQuestion(this.props.currentQuestion +(next ? 1 : -1)))
                        }}
                        onSubmit={() => {
                            this.props.dispatch(submit(this.props.questions))
                        }}
                        currentQuestion={this.props.currentQuestion}
                        finished={this.props.finished}

                />
                <Game question={this.props.questions[this.props.currentQuestion]}
                      currentQuestion={this.props.currentQuestion}
                      onQuestionAnswer={(answer)=>{
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}
                      onChangeQuestion={(next) => {
                          this.props.dispatch(changeQuestion(this.props.currentQuestion +(next ? 1 : -1)))
                      }}
                      onSubmit={() => {
                          this.props.dispatch(submit(this.props.questions))
                      }}
                      finished={this.props.finished}
                      score={this.props.score}
                      onReset={() => {
                          getQuestions().then((questions) => {
                              this.props.dispatch(initQuestions(questions));
                          })
                      }}
                />
            </div>
        );
    }

    componentDidMount() {
        getQuestions().then((questions) => {
            this.props.dispatch(initQuestions(questions));
        })
    }
}


function mapStateToProps(state) {
    return {
        ...state
    };
}


export default connect(mapStateToProps)(App);
