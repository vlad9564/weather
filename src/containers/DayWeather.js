import "@ui5/webcomponents/dist/Button";
import React, { Component } from 'react';
import * as Constants from '../utils/Constants';





class DayWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.setUVColor = this.setUVColor.bind(this);
        this.setWeatherIcon = this.setWeatherIcon.bind(this);
    }


    setWeatherIcon(icon) {
        if (icon === "fog") return Constants.FOG
        if (icon === "wind") return Constants.WIND
        if (icon === "snow") return Constants.SNOW
        if (icon === "sleet") return Constants.SLEET
        if (icon === "rain") return Constants.RAIN
        if (icon === "partly-cloudy-day") return Constants.PARTIALY_CLOUD_DAY
        if (icon === "partly-cloudy-night") return Constants.PARTIALY_CLOUD_NIGHT
        if (icon === "cloudy") return Constants.CLOUDY
        if (icon === "clear-night") return Constants.CLEAR_NIGHT
        if (icon === "clear-day") return Constants.CLEAR_DAY
    }

    setUVColor(uvType) {
        debugger;
        if (uvType < 3) {
            return "Green"
        }
        if (uvType >= 3 && uvType < 6) {
            return "Yellow"
        }
        if (uvType >= 6 && uvType < 8) {
            return 'Orange';
        }
        if (uvType >= 8 && uvType < 11) {
            return "Red"
        }
        if (uvType >= 11 && uvType < 20) {
            return "Violet"
        }

    }

    render() {
        var color = this.setUVColor(this.props.uvIndex);
        var iconForWeather = this.setWeatherIcon(this.props.icon);
        debugger;
        return (
            <div>
                <div style={{ marginLeft: "2px" }}><ui5-button type="Emphasized">{this.props.data.toISOString().slice(0, 16).replace("T", " ") + "\n" + this.props.icon}</ui5-button></div>
                <label style={{ backgroundColor: color }}>Radiatii UV at {this.props.uvIndexTime.toISOString()} </label>
                <img src={iconForWeather} alt="logo" />

            </div>
        );
    }
}

export default DayWeather;