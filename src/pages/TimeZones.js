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
                <h3>Time Zones (United States)</h3>
                <div class="southamerican-clocks">
                    <div class="pacific">
                        <h4>Pacific (PST)</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"})}</h4>
                    </div>
                    <div class="mountain">
                        <h4>Mountain (MST)</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Denver"})}</h4>
                    </div>
                    <div class="central">
                        <h4>Central (CST)</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Chicago"})}</h4>
                    </div>
                    <div class="eastern">
                        <h4>Eastern (EST)</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/New_York"})}</h4>
                    </div>
                </div>
            </>
        )
    }
}