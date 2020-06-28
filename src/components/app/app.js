import React, { Component } from 'react';
import Home from '../home/home';
import SearchForm from '../search-form/search-form';
import SelectProducts from '../select-products/select-prodcuts';
import CompareTable from '../compare-table/compare-table';
import './app.css';

export default class App extends Component {

  productsList = [];
  selectedProducts = [];

  constructor(props) {
    super(props);
    this.state = { step: 0, alerts: [], alertsClass: "" };
    this.onNextStep = this.onNextStep.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.getProductList = this.getProductList.bind(this);
    this.getSelectedProducts = this.getSelectedProducts.bind(this);
    this.showNotifications = this.showNotifications.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
  }

  onNextStep() {
    let nextStep = this.state.step + 1;
    let selectProductsCondition = this.productsList.length !== 0;
    let compareTableCondition = this.selectedProducts.length !== 0;

    if (this.state.step !== 3) {

      if (nextStep === 2 && selectProductsCondition) {
        this.goToNextStep(nextStep)
      }
      else if (nextStep === 3 && compareTableCondition) {
        this.goToNextStep(nextStep)
      }
      else if (nextStep === 1) {
        this.goToNextStep(nextStep)
      }
      else {
        this.showNotifications(["Please finish with the current step."], true);
      }
    }
    else {
      this.goToHome();
    }
  }

  goToNextStep(step) {
    this.setState({ stepsClass: "app-steps-div-end" });

    setTimeout(() => {
      this.setState({ stepsClass: "app-steps-div-start", step: step })
    }, 500);
  }

  goToHome() {
    this.productsList = [];
    this.selectedProducts = [];
    this.setState({ step: 0 });
  }

  getProductList(productsList) {
    this.productsList = productsList;
  }

  getSelectedProducts(prodcutsList) {
    this.selectedProducts = prodcutsList;
  }

  showNotifications(notifications, isErrorType) {
    let notificationClassName = isErrorType ? "alert alert-danger" : "alert alert-success";

    let notificationsToAdd = notifications.map((notification) => {
      return { message: notification, className: notificationClassName };
    });

    this.setState({ alerts: notificationsToAdd, alertsClass: "app-alerts-div-end", stepsClass: "app-steps-div-start" });

    setTimeout(() => {
      this.setState({ alerts: [], alertsClass: "app-alerts-div-start" })
    }, 2000);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar fixed-top navbar-dark bg-dark">
              <div className="container-fluid">
                <div className="navbar-header">
                  <span onClick={this.goToHome} className="navbar-brand" href="">Market Compare</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className={this.state.alertsClass} >
              {this.state.alerts.map((alert, index) => {
                return <div key={index} className={alert.className} role="alert">
                  {alert.message}
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="app-margin-top">
           <div className="row">
            <div className="col-sm-12">
            <div className="container">
              <div className="progress">
                <div className={"progress-bar app-progress-bar-" + this.state.step} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="container">
                <div className={this.state.stepsClass}>
                  {this.state.step === 0 ? <Home></Home> : ''}
                  {this.state.step === 1 ? <SearchForm showNotifications={this.showNotifications} getProductsList={this.getProductList}></SearchForm> : ''}
                  {this.state.step === 2 ? <SelectProducts showNotifications={this.showNotifications} productsList={this.productsList} getSelectedProducts={this.getSelectedProducts} ></SelectProducts> : ''}
                  {this.state.step === 3 ? <CompareTable productsList={this.selectedProducts}></CompareTable> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row app-margin-top">
          <div className="col-sm-12">
            <nav className="navbar fixed-bottom navbar-dark bg-dark">
              <div className="container-fluid">
                {this.state.step !== 3 ? <button onClick={this.onNextStep} className="btn btn-light btn-lg app-margin-auto">Next</button> : ''}
              </div>
            </nav>
          </div>
        </div>

      </div>
    );
  }
}