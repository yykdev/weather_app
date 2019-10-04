import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import Axios from "axios";

const API_KEY = "65c91756dff7105ae51e2b48e7e16563";

export default class extends React.Component {
    state = {
        isLoading: true
    };
    getWeather = async (latitude, longitude) => {
        const { data } = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&lat=${latitude}&lon=${longitude}&units=metric`
        );
        console.log(data);
    };
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: { latitude, longitude }
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            this.setState({ isLoading: false });
        } catch (error) {
            Alert.alert("Can't find you.", "So sad");
        }
    };

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading } = this.state;
        return isLoading ? <Loading /> : null;
    }
}
