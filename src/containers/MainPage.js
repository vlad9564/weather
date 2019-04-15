import React, { Component } from 'react';
// import logo from "./../../public/weather_icons/cloud_sun_1.svg"
import cloud_sun_1 from '../weather_icons/cloud_sun_1.svg';
import normal_night from '../weather_icons/normal_nihght.svg';
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/CustomListItem";
import "@ui5/webcomponents/dist/GroupHeaderListItem";
import "@ui5/webcomponents/dist/ShellBar";


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
        var icon;
        switch (data.currently.icon) {
            case "clear-night":
                icon = normal_night;
                break;

            default:
                break;
        }
        var newSate = {
            isLoaded: false,
            items: data.currently.summary,
            icon: icon,
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

                <ui5-shellbar
                    profile="https://jira2.cerner.com/secure/useravatar?ownerId=cv049332&avatarId=39490"
                    primary-title="Weather application"
                    secondary-title="@Vlad Ciobanu"
                    logo={cloud_sun_1}
                >
                </ui5-shellbar>

                <div style={{ display: "-webkit-box" }} >
                    <div style={{
                        width: "30%",
                        height: "inherit",
                        borderStyle: "dotted"
                    }}>
                        <ui5-list id="myList" >
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Acasa la ei doi">Brasov</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Acasa la Cristina">Targoviste</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Acasa la Vlad">Zarnesti</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Merem la Cluj">Cluj-Napoca</ui5-li>
                        </ui5-list>

                    </div>
                    <div style={{
                        padding: "5% 10px 10px",
                        marginTop: "auto",
                        marginRight: "auto",
                        marginBottom: "auto",
                        marginLeft: "20%"
                    }}>
                        <div>{this.state.items}</div>
                        <img src={this.state.icon} alt="logo" />
                        <div>Temperatura : {this.state.temperature}</div>
                    </div>
                </div>
            </div >
        )
    }
}

export default MainPage