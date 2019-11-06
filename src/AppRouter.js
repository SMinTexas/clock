import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './pages/Home';
import Clock from './pages/Clock';
import Alarm from './pages/Alarm';
import Timer from './pages/Timer';
import Stopwatch from './pages/Stopwatch';
import TimeZones from './pages/TimeZones';
import NotFound from './pages/NotFound';

export default function AppRouter() {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/clock"><Clock /></Route>
                <Route exact path="/alarm"><Alarm /></Route>
                <Route exact path="/timer"><Timer /></Route>
                <Route exact path="/stopwatch"><Stopwatch /></Route>
                <Route exact path="/timezones"><TimeZones /></Route>
                <Route><NotFound /></Route>
            </Switch>
        </Router>
    )
}