import React, { Component } from 'react';

class MainPage extends Component {


    constructor(props, state) {
        super(props, state);
    }
    componentDidMount() {
        debugger;
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;


        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://api.darksky.net/forecast/a2e9fc452d514f082cc3d7a0adbda5d5/45.64861,%2025.60613?units=si&lang=ro");
        xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.setRequestHeader('Access-Control-Allow-Headers', '*');

        xhr.send(data);
    }

    render() {
        return (
            <div>TEST</div>
        )
    }
}

export default MainPage