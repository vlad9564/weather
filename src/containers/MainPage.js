import React, { Component } from 'react';

class MainPage extends Component {


    constructor(props, state) {
        super(props, state);
    }
    componentDidMount() {
        debugger;
        fetch("https://api.darksky.net/forecast/a2e9fc452d514f082cc3d7a0adbda5d5/45.64861,%2025.60613?units=si&lang=ro")
            .then(res => res.json())
            .then(
                (result) => {
                    debugger;
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>TEST</div>
        )
    }
}

export default MainPage