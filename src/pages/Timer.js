import React, { Component } from 'react';

export default class Clock extends Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 10};
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.message = "";
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({time: timeLeftVar});
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            message: "Countdown!",
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        if (seconds === 0) {
            this.setState({ message: "Time's Up!" })
            clearInterval(this.timer);
        }
    }
    render() {
        return (
            <>
                <div class="timer">
                    <h2>{this.state.message}</h2>
                        <button onClick={this.startTimer}>Start The Countdown</button>
                        m: {this.state.time.m} s: {this.state.time.s}
                </div>
            </>
        )
    }
}