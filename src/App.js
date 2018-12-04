import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Game from './Game'
import {questionAnswer} from "./redux/actions";
import {changeQuestion} from "./redux/actions";
import {submit} from "./redux/actions";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Game question={this.props.questions[this.props.currentQuestion]}
                        onQuestionAnswer={(answer)=>{
                            this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                        }}
                        onChangeQuestion={(next) => {
                            this.props.dispatch(changeQuestion(this.props.currentQuestion +(next ? 1 : -1)))
                        }}
                        onSubmit={() => {
                            this.props.dispatch(submit(this.props.questions))
                        }}
                        />
                    </div>

                </header>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}


export default connect(mapStateToProps)(App);
