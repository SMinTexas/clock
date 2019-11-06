import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <ul>
            <li>
                <Link to="/Clock">World Clock</Link>
            </li>
            <li>
                <Link to="/Alarm">Alarm</Link>
            </li>
            <li>
                <Link to="/Timer">Timer</Link>
            </li>
            <li>
                <Link to="/Stopwatch">Stopwatch</Link>
            </li>
            <li>
                <Link to="/TimeZones">Time Zones</Link>
            </li>
        </ul>
    )
}
