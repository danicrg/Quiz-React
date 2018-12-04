import React from 'react';
import Content from './Content'
import Actionbar from './Actionbar'
export default class Game extends React.Component {
    render() {
        return (
            <div>
                <Content question={this.props.question}
                onQuestionAnswer={this.props.onQuestionAnswer}
                />
                <Actionbar onSubmit={this.props.onSubmit}
                onChangeQuestion={this.props.onChangeQuestion}
                />
            </div>
        );
    }
}