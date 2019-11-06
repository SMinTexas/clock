import React, { Component } from 'react';

export default class Clock extends Component {
    constructor() {
        super();
        this.state = { time: new Date()}
    }

    componentDidMount() {
        this.clockInterval = setInterval(() => {
            console.log(`Clock ${this.props.number}'s interval`);
            this.setState({ time: new Date() });
        })
    }

    componentWillUnmounmt() {
        clearInterval(this.clockInterval);
    }

    render() {
        return (
            <>
                <h2>Time Zones</h2>
                <div class="clocks">
                    <h3>Pacific</h3>
                    <h3>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"})}</h3>
                </div>
                <div class="clocks">
                    <h3>Mountain</h3>
                    <h3>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Denver"})}</h3>
                </div>
                <div class="clocks">
                    <h3>Central</h3>
                    <h3>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Chicago"})}</h3>
                </div>
                <div class="clocks">
                    <h3>Eastern</h3>
                    <h3>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/New_York"})}</h3>
                </div>
            </>
        )
    }
}