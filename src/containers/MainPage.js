import React, { Component } from 'react';
// import logo from "./../../public/weather_icons/cloud_sun_1.svg"
import cloud_sun_1 from '../weather_icons/cloud_sun_1.svg';
import normal_night from '../weather_icons/normal_nihght.svg';
import sun from '../weather_icons/sun.svg';
import heart from '../weather_icons/heart.svg';
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/CustomListItem";
import "@ui5/webcomponents/dist/GroupHeaderListItem";
import "@ui5/webcomponents/dist/ShellBar";
import * as Constants from "../utils/Constants"


class MainPage extends Component {


    constructor(props, state) {
        // this.myFunction = this.myFunction.bind(this);

        super(props, state);
        debugger;
        // var x = navigator.geolocation.getCurrentPosition(this.success);
        
        this.select = React.createRef();
        this.state = {
            isLoaded: false,
            items: "TEst"
        }

    }

    prepareData(data) {
        var icon;
        debugger;
        switch (data.currently.icon) {
            case "clear-night":
                icon = normal_night;
                break;
            case "clear-day":
                icon = sun;
                break;
            default:
                icon = cloud_sun_1
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


    changeLocation(event) {


        let location = event.detail.item.innerHTML
        switch (location) {
            case "BrasovN":
                this.setState({
                    isLoaded: false,
                    items: "Foarte cald la noi",
                    icon: heart,
                    temperature: "∞"
                });
                break;
            case "Berlin":
                this.getWeatherByLatLong(Constants.BERLIN_LOCATION);
                break;
            case "Zarnesti":
                this.getWeatherByLatLong(Constants.ZARNEST_LOCATION);
                break;
            case "Targoviste":
                this.getWeatherByLatLong(Constants.TARGOVISTE_LOCATION);
                break;
            case "Brasov":
                this.getWeatherByLatLong(Constants.BRASOV_LOCATION);
                break;

            default:
                this.setState({
                    isLoaded: false,
                    items: "Unknown yet# Under development",
                    icon: cloud_sun_1,
                    temperature: ""
                });
                break;
        }


    }

    getWeatherByLatLong(coord) {

        const api = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a2e9fc452d514f082cc3d7a0adbda5d5/' + coord + '?units=si&lang=ro';
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

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(() => {
            debugger;
        }
            , () => {
                debugger;
            });

        this.select.current.addEventListener('itemPress', event => {
            this.changeLocation(event);

        });

        const defaultCoord = "44.92543,25.4567";
        this.getWeatherByLatLong(defaultCoord);
        // const api = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a2e9fc452d514f082cc3d7a0adbda5d5/' + defaultCoord + '?units=si&lang=ro';
        // fetch(api)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             debugger;
        //             console.table(result)
        //             var newSate = this.prepareData(result);
        //             this.setState(newSate);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             debugger;
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }

    render() {

        return (
            <div>

                <ui5-shellbar
                    profile={Constants.ICON_PICTURE}
                    primary-title="Weather application"
                    secondary-title="@Vlad Ciobanu"
                    logo={cloud_sun_1}
                >
                </ui5-shellbar>

                <div style={{ display: "-webkit-box" }} >
                    <div style={{
                        width: "30%",
                        minWidth: "200px"
                    }}>
                        <ui5-list id="myList" ref={this.select}>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Acasa la ei doi">BrasovN</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Acasa la Cristina">Targoviste</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Acasa la Vlad">Zarnesti</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Merem la Cluj">Cluj-Napoca</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Bucuresti">Bucuresti</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Bucuresti">Berlin</ui5-li>
                            <ui5-li icon="sap-icon://functional-location" type="Active" description="Brasov">Brasov</ui5-li>


                        </ui5-list>

                    </div>
                    <div
                        // padding: "5% 10px 10px",
                        // marginTop: "auto",
                        // marginRight: "auto",
                        // marginBottom: "auto",
                        // marginLeft: "20%"
                        style={{ marginLeft: "5%", marginTop: "2%" }}
                    >
                        <div>Statusul vremii: {this.state.items}</div>
                        <img src={this.state.icon} alt="logo" />
                        <div>Temperatura : {this.state.temperature} °C</div>
                    </div>
                </div>
            </div >
        )
    }
}

export default MainPage