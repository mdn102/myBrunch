import React, { Component } from 'react';
import axios from 'axios';
import '../assets/owfont/css/owfont-regular.css';

const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.REACT_APP_APPID_KEY;


class WeatherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            errorState: null,
            loading: true
        }
    }

    componentDidMount = () => {
        this.getWeatherInfoFromApi()
    }

    getWeatherInfoFromApi = () => {
        this.setState({ loading: true })
        axios.get('https://api.openweathermap.org/data/2.5/weather?', {
            params: {
                APPID: apiKey,
                q: 'Seattle,us',
                units: 'imperial'
            }
        })
            .then((weather) => {
                console.log(weather.data)
                this.setState({
                    results: weather.data,
                    loading: false
                })
            }).catch(() => {
                this.setState({ errorState: `Sorry we couldn't find information related to the location you search, do you want to try something else?`, loading: false })
            })
    }

    render() {

        return (
            <div className="weatherData">

                {this.state.loading &&
                    <p>loading weather information...</p>
                }

                {!!this.state.results &&
                    <div className="weatherData">
                        <i className={`owf owf-${this.state.results.weather[0].id} owf-5x owf-fw`}></i>
                        <p className="weatherData__currentTemp">{Math.floor(this.state.results.main.temp)}&#8451;</p>
                        <p className="weatherData__description">{this.state.results.weather[0].description}</p>
                    </div>
                }

            </div>
        )
    }

}

export default WeatherInfo

