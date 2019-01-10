import React from 'react';

let countdownTime = [1, 0]; // [minutes, seconds]
export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            minutes: countdownTime[0],
            seconds: countdownTime[1],
            millis: 0,
            running: false
        };
    }

    interval = setInterval(() => {
        this.tick();
    }, 100);


    tick() {
        let millis = this.state.millis -1;
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;

        if (millis === -1) {
            millis = 9;
            seconds = seconds -1;
        }
        if (seconds === -1) {
            millis = 0;
            seconds = 59;
            minutes = minutes + -1;
        }

        if (this.props.finished) {
            millis = 0;
            seconds = countdownTime[1];
            minutes = countdownTime[0];
        }

        if (millis === 0 && seconds === 0 && minutes === 0){
                clearInterval(this.interval);
                this.setState({
                    millis: 0,
                    seconds: countdownTime[1],
                    minutes: countdownTime[0]
                });
                this.props.onSubmit();
        }

        this.setState({
            millis: millis,
            seconds: seconds,
            minutes: minutes
        });
    }

    zeroPad(value) {
        return value < 10 ? `0${value}` : value;
    }

    render() {
        return (
            <div className="timer">
                <span className="mins">{this.zeroPad(this.state.minutes)}:</span>
                <span className="secs">{this.zeroPad(this.state.seconds)} </span>
                <span className="millis">:0{this.state.millis}</span>
            </div>
        );
    }
}