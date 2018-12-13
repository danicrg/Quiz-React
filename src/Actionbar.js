import React from 'react';
export default class Actionbar extends React.Component {
    render() {
        if (this.props.currentQuestion === 0){
            return (
                <div className="actionbar">
                    <button onClick={this.props.onSubmit}>Submit</button>
                    <button onClick={() => {this.props.onChangeQuestion(true)}}>Next</button>
                </div>
            );
        }
        if (this.props.currentQuestion === 9){
            return (
                <div className="actionbar">

                    <button onClick={() => {this.props.onChangeQuestion(false)}}>Previous</button>
                    <button onClick={this.props.onSubmit}>Submit</button>
                </div>
            )
        }
        return (
            <div className="actionbar">
                <button onClick={this.props.onSubmit}>Submit</button>
                <button onClick={() => {this.props.onChangeQuestion(false)}}>Previous</button>
                <button onClick={() => {this.props.onChangeQuestion(true)}}>Next</button>
            </div>
        );
    }
}