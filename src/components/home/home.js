import React, { Component } from 'react';
import reactIcon from './assets/react-icon.png';
import webpackIcon from './assets/webpack-icon.png';
import bootstrapIcon from './assets/bootstrap-icon.png';
import './home.css';

export default class Home extends Component {
    render() {
        return <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcome To Market Compare</h1>
                    <p className="lead">This app will help you compare products btewin diffrend retilers.</p>
                    <p>This app was written with next technologies:</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Reactjs <img className="home-icon" src={reactIcon} alt="React Icon"/></li>
                        <li className="list-group-item">React-Scripts <img className="home-icon" src={reactIcon} alt="React Icon"/> </li>
                        <li className="list-group-item">Webpack <img className="home-icon" src={webpackIcon} alt="Webpack icon" /></li>
                        <li className="list-group-item">Bootstrap <img className="home-icon" src={bootstrapIcon} alt="Bootstrap icon" /> </li>
                    </ul>
                </div>
            </div>
        </div>
    }
}