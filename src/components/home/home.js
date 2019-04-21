import React, { Component } from 'react';
import reactIcon from './assets/react-icon.png';
import webpackIcon from './assets/webpack-icon.png';
import bootstrapIcon from './assets/bootstrap-icon.png';
import azureIcon from './assets/azure-icon.png';
import githubIcon from './assets/github-icon.png';

import './home.css';

export default class Home extends Component {
    render() {
        return <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcome To Market Compare</h1>
                    <p className="lead">This app will help you compare products between different stores.</p>
                    <p>This app was written with next technologies:</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="https://reactjs.org/">Reactjs</a> <img className="home-icon" src={reactIcon} alt="React Icon" /></li>
                        <li className="list-group-item"><a href="https://www.npmjs.com/package/react-scripts">React-Scripts</a> <img className="home-icon" src={reactIcon} alt="React Icon" /> </li>
                        <li className="list-group-item"><a href="https://webpack.js.org/">Webpack</a> <img className="home-icon" src={webpackIcon} alt="Webpack icon" /></li>
                        <li className="list-group-item"><a href="https://getbootstrap.com/">Bootstrap</a> <img className="home-icon" src={bootstrapIcon} alt="Bootstrap icon" /> </li>
                        <li className="list-group-item"><a href="https://reactjs.org/">Azure</a> <img className="home-icon" src={azureIcon} alt="Bootstrap icon" /> </li>
                        <li className="list-group-item"><a href="https://github.com/aviadgawl/market-compare">GitHub</a> <img className="home-icon" src={githubIcon} alt="Bootstrap icon" /> </li>
                    </ul>
                </div>
            </div>
        </div>
    }
}