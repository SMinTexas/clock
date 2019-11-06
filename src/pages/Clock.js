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
                <h2>World Clocks</h2>
                <div class="clocks">
                    <h3>Los Angeles</h3>
                    <h3>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"})}</h3>
                </div>
                <div class="clocks">
                    <h3>Chicago</h3>
                    <h3>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Chicago"})}</h3>
                </div>
                <div class="clocks">
                    <h3>Houston</h3>
                    <h3>{this.state.time.toLocaleTimeString()}</h3>
                </div>
                <div class="clocks">
                    <h3>New York City</h3>
                    <h3>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/New_York"})}</h3>
                </div>
                <div class="clocks">
                    <h3>London</h3>
                    <h3>{this.state.time.toLocaleTimeString("en-GB")}</h3>
                </div>
                <div class="clocks">
                    <h3>Paris</h3>
                    <h3>{this.state.time.toLocaleTimeString("fr")}</h3>
                </div>
                <div class="clocks">
                    <h3>Berlin</h3>
                    <h3>{this.state.time.toLocaleTimeString("de")}</h3>
                </div>
                <div class="clocks">
                    <h3>Moscow</h3>
                    <h3>{this.state.time.toLocaleTimeString("ru")}</h3>
                </div>
                <div class="clocks">
                    <h3>Tokyo</h3>
                    <h3>{this.state.time.toLocaleTimeString("ja")}</h3>
                </div>
            </>
        )
    }
}