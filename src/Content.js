import React from 'react';
export default class Game extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="image">
                    <img src={this.props.question.attachment.url} alt="Attachment"/>
                </div>

                <div className="qanswer">
                <h1 id="question">{this.props.question.question}</h1>
                <input id="input" type="text" value={this.props.question.userAnswer || ''} onChange={(e)=>{
                    this.props.onQuestionAnswer(e.target.value);
                }}
                />
                    <div className="tips">
                        <ul>
                        {this.props.question.tips.map(tip => (
                              <li>
                                  {tip}
                              </li>
                        ))}
                        </ul>
                    </div>
                </div>


            </div>
        );
    }
}