import React, { Component } from 'react';

class MainPage extends Component {


    constructor(props, state) {
        super(props, state);
    }
    componentDidMount() {
        debugger;
        const DarkSky = require('dark-sky')
        const darksky = new DarkSky('a2e9fc452d514f082cc3d7a0adbda5d5') // Your API KEY can be hardcoded, but I recommend setting it as an env variable.

        darksky
            .latitude('37.8267')
            .longitude(-122.423)
            .get()
            .then(console.log)
            .catch(console.log)
    }

    render() {
        return (
            <div>TEST</div>
        )
    }
}

export default MainPage