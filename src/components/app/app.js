import React, { Component } from 'react';
import Home from '../home/home';
import SearchForm from '../search-form/search-form';
import SelectProducts from '../select-products/select-prodcuts';
import CompareTable from '../compare-table/compare-table';

class App extends Component {
<<<<<<< HEAD

  productsList = [];

  constructor(props) {
    super(props);
    this.state = { step: 2 };
=======
  constructor(props) {
    super(props);
    this.state = { step: 3 };
>>>>>>> 42a3000c8b068274d1f32111d021703fb5d018e4
    this.nextStep = this.nextStep.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  nextStep() {
    if(this.state.step !== 3){
      this.setState({step: this.state.step + 1 });
    }
    else{
      this.goToHome();
    }
  }

  goToHome(){
    this.setState({step: 0 });
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-dark bg-dark">
              <a onClick={this.goToHome} className="navbar-brand" href="">Market Compare</a>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="container">

              {this.state.step === 0 ? <Home></Home> : ''}
              {this.state.step === 1 ? <SearchForm></SearchForm> : ''}
              {this.state.step === 2 ? <SelectProducts></SelectProducts> : ''}
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
