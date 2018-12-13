import React from 'react';
import Timer from "./Timer";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1>QUIZ</h1>
                <Timer className="timer"
                       onChangeQuestion={this.props.onChangeQuestion}
                       currentQuestion={this.props.currentQuestion}
                       onSubmit={this.props.onSubmit}
                />
            </div>
        );

    }
}