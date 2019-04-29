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
    this.state = { step: 1, alerts: [], alertsClass: "" };
    this.nextStep = this.nextStep.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.getProductList = this.getProductList.bind(this);
    this.getSelectedProducts = this.getSelectedProducts.bind(this);
    this.showNotifications = this.showNotifications.bind(this);
  }

  nextStep() {
    if (this.state.step !== 3) {
      this.setState({ step: this.state.step + 1 });
    }
    else {
      this.goToHome();
    }
  }

  goToHome() {
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

    this.setState({ alerts: notificationsToAdd, alertsClass: "app-alerts-div-end" });

     setTimeout(() => {
       this.setState({ alerts: [], alertsClass: "app-alerts-div-start" })
     }, 2000);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-dark bg-dark">
              <span onClick={this.goToHome} className="navbar-brand" href="">Market Compare</span>
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
        <div className="row">
          <div className="col-sm-12">
            <div className="container">

              {this.state.step === 0 ? <Home></Home> : ''}
              {this.state.step === 1 ? <SearchForm showNotifications={this.showNotifications} getProductsList={this.getProductList}></SearchForm> : ''}
              {this.state.step === 2 ? <SelectProducts showNotifications={this.showNotifications} productsList={this.productsList} getSelectedProducts={this.getSelectedProducts} ></SelectProducts> : ''}
              {this.state.step === 3 ? <CompareTable productsList={this.selectedProducts}></CompareTable> : ''}

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="container">
              <button onClick={this.nextStep} className="btn btn-dark btn-lg btn-block">Next</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}