import React from 'react';
import Content from './Content'
import Actionbar from './Actionbar'

export default class Game extends React.Component {
    render() {
        if (this.props.finished) {
            return (
                <div className="finished">
                    <h1>Your score is {this.props.score}</h1>
                    <button onClick={this.props.onReset} >Restart</button>
                </div>
            );
        } else{
            return (
                <div className="game">

                    <Content question={this.props.question}
                             onQuestionAnswer={this.props.onQuestionAnswer}
                    />
                    <Actionbar onSubmit={this.props.onSubmit}
                               onChangeQuestion={this.props.onChangeQuestion}
                               currentQuestion={this.props.currentQuestion}
                    />
                </div>
            );
        }

    }
}