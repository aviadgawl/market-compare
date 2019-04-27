import React, { Component } from 'react';
import Home from '../home/home';
import SearchForm from '../search-form/search-form';
import SelectProducts from '../select-products/select-prodcuts';
import CompareTable from '../compare-table/compare-table';

class App extends Component {

  productsList = [{ name: "Tomato", brand: "Osem", price: 20 }, { name: "Tomato", brand: "Elit", price: 30 }];

  constructor(props) {
    super(props);
    this.state = { step: 1 };
    this.nextStep = this.nextStep.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.getProductList = this.getProductList.bind(this);
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

  getProductList(productsList){
    this.productsList = productsList;
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-dark bg-dark">
              <span onClick={this.goToHome} className="navbar-brand" href="">Market Compare</span>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="container">

              {this.state.step === 0 ? <Home></Home> : ''}
              {this.state.step === 1 ? <SearchForm getProductsList={this.getProductList}></SearchForm> : ''}
              {this.state.step === 2 ? <SelectProducts productsList={this.productsList} ></SelectProducts> : ''}
              {this.state.step === 3 ? <CompareTable></CompareTable> : ''}

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

export default App;
