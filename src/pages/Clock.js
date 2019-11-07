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
                <h3>Local Time</h3>
                <div class="local-clock">
                    <h4>Houston</h4>
                    <h4>{this.state.time.toLocaleTimeString()}</h4>
                </div>
                <h3>North America</h3>
                <div class="northamerican-clocks">
                    <div class="pacific">
                        <h4>Los Angeles</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Los_Angeles"})}</h4>
                        <h4>Vancouver</h4>
                        <h4>{this.state.time.toLocaleTimeString("ca", {timeZone: "America/Vancouver"})}</h4>
                    </div>
                    <div class="mountain">
                        <h4>Denver</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Denver"})}</h4>
                        <h4>Phoenix</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Phoenix"})}</h4>
                    </div>
                    <div class="central">
                        <h4>Chicago</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/Chicago"})}</h4>
                        <h4>Mexico City</h4>
                        <h4>{this.state.time.toLocaleTimeString("mx", {timeZone: "America/Mexico_City"})}</h4>
                    </div>
                    <div class="eastern">
                        <h4>New York City</h4>
                        <h4>{this.state.time.toLocaleTimeString("en-US", {timeZone: "America/New_York"})}</h4>
                        <h4>Toronto</h4>
                        <h4>{this.state.time.toLocaleTimeString("ca", {timeZone: "America/Toronto"})}</h4>
                    </div>
                </div>
                <h3>South America</h3>
                <div class="southamerican-clocks">
                    <div class="pacific">
                        <h4>Buenos Aires</h4>
                        <h4>{this.state.time.toLocaleTimeString("ar", {timeZone: "America/Argentina/Buenos_Aires"})}</h4>
                    </div>
                    <div class="mountain">
                    <h4>Lima</h4>
                        <h4>{this.state.time.toLocaleTimeString("pe", {timeZone: "America/Lima"})}</h4>
                    </div>
                    <div class="central">
                    <h4>Santiago</h4>
                        <h4>{this.state.time.toLocaleTimeString("cl", {timeZone: "America/Santiago"})}</h4>
                    </div>
                    <div class="eastern">
                    <h4>Sao Paulo</h4>
                        <h4>{this.state.time.toLocaleTimeString("br", {timeZone: "America/Sao_Paulo"})}</h4>
                    </div>
                </div>
                <h3>Africa</h3>
                <div class="african-clocks">
                    <div class="pacific">
                        <h4>Addis Ababa</h4>
                        <h4>{this.state.time.toLocaleTimeString("et", {timeZone: "Africa/Addis_Ababa"})}</h4>
                    </div>
                    <div class="mountain">
                    <h4>Casablanca</h4>
                        <h4>{this.state.time.toLocaleTimeString("ma", {timeZone: "Africa/Casablanca"})}</h4>
                    </div>
                    <div class="central">
                    <h4>Freetown</h4>
                        <h4>{this.state.time.toLocaleTimeString("sl", {timeZone: "Africa/Freetown"})}</h4>
                    </div>
                    <div class="eastern">
                    <h4>Johannesburg</h4>
                        <h4>{this.state.time.toLocaleTimeString("za", {timeZone: "Africa/Johannesburg"})}</h4>
                    </div>                    
                </div>
                <h3>Europe</h3>
                <div class="european-clocks">
                    <div class="pacific">
                        <h4>Amsterdam</h4>
                        <h4>{this.state.time.toLocaleTimeString("nl", {timeZone: "Europe/Amsterdam"})}</h4>
                        <h4>Athens</h4>
                        <h4>{this.state.time.toLocaleTimeString("gr", {timeZone: "Europe/Athens"})}</h4>
                        <h4>Berlin</h4>
                        <h4>{this.state.time.toLocaleTimeString("de", {timeZone: "Europe/Berlin"})}</h4>
                        <h4>Brussels</h4>
                        <h4>{this.state.time.toLocaleTimeString("be", {timeZone: "Europe/Brussels"})}</h4>
                    </div>
                    <div class="mountain">
                        <h4>Dublin</h4>
                        <h4>{this.state.time.toLocaleTimeString("ie", {timeZone: "Europe/Dublin"})}</h4>
                        <h4>Helsinki</h4>
                        <h4>{this.state.time.toLocaleTimeString("fi", {timeZone: "Europe/Helsinki"})}</h4>
                        <h4>Kiev</h4>
                        <h4>{this.state.time.toLocaleTimeString("ua", {timeZone: "Europe/Kiev"})}</h4>
                        <h4>Lisbon</h4>
                        <h4>{this.state.time.toLocaleTimeString("pt", {timeZone: "Europe/Lisbon"})}</h4>
                    </div>
                    <div class="central">
                        <h4>London</h4>
                        <h4>{this.state.time.toLocaleTimeString("gb", {timeZone: "Europe/London"})}</h4>
                        <h4>Madrid</h4>
                        <h4>{this.state.time.toLocaleTimeString("es", {timeZone: "Europe/Madrid"})}</h4>
                        <h4>Moscow</h4>
                        <h4>{this.state.time.toLocaleTimeString("ru", {timeZone: "Europe/Moscow"})}</h4>
                        <h4>Paris</h4>
                        <h4>{this.state.time.toLocaleTimeString("fr", {timeZone: "Europe/Paris"})}</h4>
                    </div>
                    <div class="eastern">
                        <h4>Prague</h4>
                        <h4>{this.state.time.toLocaleTimeString("cz", {timeZone: "Europe/Prague"})}</h4>
                        <h4>Rome</h4>
                        <h4>{this.state.time.toLocaleTimeString("it", {timeZone: "Europe/Rome"})}</h4>
                        <h4>Stockholm</h4>
                        <h4>{this.state.time.toLocaleTimeString("se", {timeZone: "Europe/Stockholm"})}</h4>
                        <h4>Vienna</h4>
                        <h4>{this.state.time.toLocaleTimeString("at", {timeZone: "Europe/Vienna"})}</h4>
                    </div>       
                    <div class="atlantic">
                        <h4>Vilnius</h4>
                        <h4>{this.state.time.toLocaleTimeString("lt", {timeZone: "Europe/Vilnius"})}</h4>
                        <h4>Volgograd</h4>
                        <h4>{this.state.time.toLocaleTimeString("ru", {timeZone: "Europe/Volgograd"})}</h4>
                        <h4>Warsaw</h4>
                        <h4>{this.state.time.toLocaleTimeString("pl", {timeZone: "Europe/Warsaw"})}</h4>
                        <h4>Zurich</h4>
                        <h4>{this.state.time.toLocaleTimeString("ch", {timeZone: "Europe/Zurich"})}</h4>
                    </div>             
                </div>
                <h3>Asia</h3>
                <div class="asian-clocks">
                    <div class="pacific">
                        <h4>Bangkok</h4>
                        <h4>{this.state.time.toLocaleTimeString("th", {timeZone: "Asia/Bangkok"})}</h4>
                    </div>
                    <div class="mountain">
                    <h4>Hong Kong</h4>
                        <h4>{this.state.time.toLocaleTimeString("hk", {timeZone: "Asia/Hong_Kong"})}</h4>
                    </div>
                    <div class="central">
                    <h4>Shanghai</h4>
                        <h4>{this.state.time.toLocaleTimeString("cn", {timeZone: "Asia/Shanghai"})}</h4>
                    </div>
                    <div class="eastern">
                    <h4>Tokyo</h4>
                        <h4>{this.state.time.toLocaleTimeString("jp", {timeZone: "Asia/Tokyo"})}</h4>
                    </div>                    
                </div>
                <h3>Australia</h3>
                <div class="australian-clocks">
                    <div class="pacific">
                        <h4>Adelaide</h4>
                        <h4>{this.state.time.toLocaleTimeString("au", {timeZone: "Australia/Adelaide"})}</h4>
                    </div>
                    <div class="mountain">
                    <h4>Brisbane</h4>
                        <h4>{this.state.time.toLocaleTimeString("au", {timeZone: "Australia/Brisbane"})}</h4>
                    </div>
                    <div class="central">
                    <h4>Darwin</h4>
                        <h4>{this.state.time.toLocaleTimeString("au", {timeZone: "Australia/Darwin"})}</h4>
                    </div>
                    <div class="eastern">
                    <h4>Melbourne</h4>
                        <h4>{this.state.time.toLocaleTimeString("au", {timeZone: "Australia/Melbourne"})}</h4>
                    </div>      
                    <div class="atlantic">
                    <h4>Sydney</h4>
                        <h4>{this.state.time.toLocaleTimeString("au", {timeZone: "Australia/Sydney"})}</h4>
                    </div>                
                </div>
            </>
        )
    }
}