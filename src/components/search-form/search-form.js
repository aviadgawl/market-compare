import React, { Component } from 'react';
import ProductsApiService from './products-api-service';

import './search-form.css';

export default class Searchform extends Component {
    storesList = ['Yenot Bitan', 'Shufersal', 'Rami Levy'];
    api = new ProductsApiService();
    constructor(props) {
        super(props);

        this.state = {
            selectedSearches: [],
            currentProductName: "Select Product",
            currentProductBrand: "Select Brand",
            currentProductMaxPrice: 0,
            currentProductStores: ["Store Name"]
        };

        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onBrandClick = this.onBrandClick.bind(this);
        this.onProductPriceChange = this.onProductPriceChange.bind(this);
        this.onStoreClick = this.onStoreClick.bind(this);
        this.onAllStoresClick = this.onAllStoresClick.bind(this);
        this.onClearStoresClick = this.onClearStoresClick.bind(this);
        this.onAddSearch = this.onAddSearch.bind(this);
        this.onRemoveSearch = this.onRemoveSearch.bind(this);

        this.api.getProducts(["s" , "d"]);

    }

    onProductNameChange(event) {
        this.setState({ currentProductName: event.target.value });
    }

    onProductPriceChange(event) {
        if (event.target.value >= 0) {
            this.setState({ currentProductMaxPrice: event.target.value });
        }
    }

    onBrandClick(event) {
        this.setState({ currentProductBrand: event.target.textContent });
    }

    onStoreClick(event) {

        let storesToUpdate = this.state.currentProductStores;

        if (storesToUpdate.indexOf(event.target.textContent) === -1) {

            if (storesToUpdate[0] === "Store Name") {
                storesToUpdate = [];
            }

            storesToUpdate.push(event.target.textContent);

            this.setState({ currentProductStores: storesToUpdate });
        }
    }

    onAllStoresClick() {
        this.setState({ currentProductStores: this.storesList });
    }

    onClearStoresClick() {
        this.setState({ currentProductStores: ["Store Name"] });
    }

    onAddSearch() {
        let newSearchToAdd = {
            productName: this.state.currentProductName,
            productBrand: this.state.currentProductBrand,
            productMaxPrice: this.state.currentProductMaxPrice,
            productStores: this.state.currentProductStores
        }

        let newSelectedSearches = this.state.selectedSearches;
        newSelectedSearches.push(newSearchToAdd);

        this.setState({selectedSearches: newSelectedSearches});
    }

    onRemoveSearch(event) { 
        let searchesToUpdate = this.state.selectedSearches;
        searchesToUpdate.splice(event.target.id , 1);
        this.setState({selectedSearches: searchesToUpdate});
    }

    render() {
        return <div>
            <div className="row">
                <div className="col-sm-12">
                    {this.state.selectedSearches.map((searchItem , index) => {
                        return <div key={index} className="card search-form-card">
                            <div className="card-body">
                                <div>
                                    <ul>
                                        <li>{searchItem.productName}  </li>
                                        <li>{searchItem.productBrand} </li>
                                        <li>{searchItem.productMaxPrice} </li>
                                        <li>
                                            {searchItem.productStores.map((store) => {
                                                return store + ' , ';
                                            })}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <button onClick={this.onRemoveSearch} id={index} className="card-link btn btn-secondary">Remove</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Product Name</span>
                        </div>
                        <input type="text" onChange={this.onProductNameChange} className="form-control" placeholder="Product Name" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Lock</button>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Product Brands</span>
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">
                                <button onClick={this.onBrandClick} className="dropdown-item">Yachin</button>
                                <button onClick={this.onBrandClick} className="dropdown-item">Osem</button>
                                <button onClick={this.onBrandClick} className="dropdown-item">Telma</button>
                                <div role="separator" className="dropdown-divider"></div>
                                <button onClick={this.onBrandClick} className="dropdown-item" >Elit</button>
                            </div>
                        </div>
                        <span className="form-control">{this.state.currentProductBrand}</span>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Product Max Price</span>
                        </div>
                        <input type="number" onChange={this.onProductPriceChange} value={this.state.currentProductMaxPrice} className="form-control" placeholder="Product Max Price" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Product Stores</span>
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">

                                {
                                    this.storesList.map((store , index) => {
                                        return <button key={index} onClick={this.onStoreClick} className="dropdown-item">{store}</button>
                                    })
                                }

                                <div role="separator" className="dropdown-divider"></div>
                                <button onClick={this.onAllStoresClick} className="dropdown-item" >All</button>
                                <div role="separator" className="dropdown-divider"></div>
                                <button onClick={this.onClearStoresClick} className="dropdown-item" >Clear</button>
                            </div>
                        </div>
                        <span className="form-control">
                            {this.state.currentProductStores.map((store, index) => {
                                return store + ' , ';
                            })}
                        </span>
                    </div>

                    <div className="input-group mb-3">
                        <button onClick={this.onAddSearch} className="btn btn-secondary btn-lg">Add</button>
                    </div>
                </div>

            </div>
        </div>
    }
}