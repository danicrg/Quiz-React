import React from 'react';
export default class Actionbar extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onSubmit}>Submit</button>
                <button onClick={() => {this.props.onChangeQuestion(false)}}>Previous</button>
                <button onClick={() => {this.props.onChangeQuestion(true)}}>Next</button>
            </div>
        );
    }
}