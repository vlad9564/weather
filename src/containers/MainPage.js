import React, { Component } from 'react';
// import logo from "./../../public/weather_icons/cloud_sun_1.svg"
import logo from '../weather_icons/cloud_sun_1.svg';
class MainPage extends Component {


    constructor(props, state) {
        // this.myFunction = this.myFunction.bind(this);
        super(props, state);
        this.state = {
            isLoaded: false,
            items: "TEst"
        }
    }
    prepareData(data) {
        let icon;
        if (data.currently.icon === "clear-night") {
            icon = logo;
        }
        var newSate = {
            isLoaded: false,
            items: data.currently.summary,
            icon: logo,
            temperature: data.currently.temperature
        }
        return newSate;
    }

    componentDidMount() {
        debugger;
        const api = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a2e9fc452d514f082cc3d7a0adbda5d5/45.64861,%2025.60613?units=si&lang=ro';
        fetch(api)
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    console.table(result)
                    var newSate = this.prepareData(result);
                    this.setState(newSate);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    debugger;
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    render() {

        return (
            <div>
                <div>{this.state.items}</div>
                <img src={this.state.icon} alt="logo" />
                <div>Temperatura : {this.state.temperature}</div>
            </div>
        )
    }
}

export default MainPage