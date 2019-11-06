import React, { Component } from 'react';

export default class Clock extends Component {
    constructor() {
        super();
        this.state = { currentTime: "",
                       alarmTime: ""};
        this.Set_Alarm_Time = this.Set_Alarm_Time.bind(this);
    }

    componentDidMount() {
        this.clock = setInterval(
            () => this.Set_Current_Time(),
            1000)
        this.interval = setInterval(
            () => this.checkAlarmClock(),
            1000)
    }

    componentWillUnmounmt() {
        clearInterval(this.clock);
        clearInterval(this.interval);
    }

    Set_Alarm_Time(event) {
        event.preventDefault();
        const inputAlarmTimeModified = event.target.value + ":00";
        console.log("ALARM SET FOR " + inputAlarmTimeModified);
        this.setState({
            alarmTime: inputAlarmTimeModified
        })
    }

    Set_Current_Time() {
        this.setState({
            currentTime: new Date().toLocaleTimeString()
        });
    }

    checkAlarmClock() {
        if (this.state.alarmTime == "undefined" || this.state.alarmTime) {
            this.alarmMessage = "Please set your alarm";
        } else {
            this.alarmMessage = "You alarm is set for " + this.state.alarmTime + ".";
            if (this.state.currentTime === this.state.alarmTime) {
                this.alarmMessage = "WAKE UP!!!!!";
            } else {
                console.log("NOT YET!!!");
            }
        }
    }

    render() {
        return (
            <>
                <h2>Alarm Clock</h2>
                <div class="clocks">
                    <h2>Current Time: {this.state.currentTime}</h2>
                    <h2>{this.alarmMessage}</h2>
                    <form>
                        <input type="time" onChange={this.Set_Alarm_Time}></input>
                    </form>
                </div>
            </>
        )
    }
}