import "@ui5/webcomponents/dist/Button";
import React, { Component } from 'react';
import DayWeather from './DayWeather';

class DaysWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.press = this.press.bind(this);
    }

    press() {
        debugger;
    }

    render() {
        debugger;
        return (<div style={{ display: "flex" }}>

            {this.props.data.map(dayWeather => <DayWeather {...dayWeather} />)}
        

        </div>);
    }
}

export default DaysWeather;