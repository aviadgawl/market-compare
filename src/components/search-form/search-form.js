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
            alerts: [],
            loading: false,
            currentProductName: "",
            currentProductBrand: "",
            currentProductMaxPrice: 0,
            currentProductStores: []
        };

        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onBrandClick = this.onBrandClick.bind(this);
        this.onProductPriceChange = this.onProductPriceChange.bind(this);
        this.onStoreClick = this.onStoreClick.bind(this);
        this.onAllStoresClick = this.onAllStoresClick.bind(this);
        this.onClearStoresClick = this.onClearStoresClick.bind(this);
        this.onAddSearch = this.onAddSearch.bind(this);
        this.onRemoveSearch = this.onRemoveSearch.bind(this);
        this.isInputValid = this.isInputValid.bind(this);
        this.onLockProductName = this.onLockProductName.bind(this);
        this.getProductsSuccessCallback = this.getProductsSuccessCallback.bind(this);
        this.getProductsErrorCallback = this.getProductsErrorCallback.bind(this);
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
        if (this.isInputValid(true, true, true, true)) {

            this.setState({ loading: true });

            this.api.getProducts([{
                Name: this.state.currentProductName,
                Brand: this.state.currentProductBrand,
                Price: this.currentProductMaxPrice,
                Stores: this.state.currentProductStores
            }], this.getProductsSuccessCallback, this.getProductsErrorCallback);
        }
    }

    onRemoveSearch(event) {
        let searchesToUpdate = this.state.selectedSearches;
        searchesToUpdate.splice(event.target.id, 1);
        this.setState({ selectedSearches: searchesToUpdate });
    }

    isInputValid(nameValidation, brandValidtaion, priceValidation, storesValidation) {

        let validationErrors = [];

        if (this.state.currentProductName === "" && nameValidation) {
            validationErrors.push("Product name can not be empty.");
        }

        // if (this.state.currentProductBrand === "" && brandValidtaion) {
        //     validationErrors.push("Brand name can not be empty.");
        // }

        if (this.state.currentProductMaxPrice === 0 && priceValidation) {
            validationErrors.push("Price can not be 0.");
        }

        if (this.state.currentProductStores.length === 0 && storesValidation) {
            validationErrors.push("Stores can not be empty.");
        }

        this.setState({ alerts: validationErrors });

        setTimeout(() => {
            this.setState({ alerts: [] })
        }, 2000);

        return validationErrors.length === 0;
    }

    onLockProductName() {
        if (this.isInputValid(true, false, false, true)) {
            // this.api.getProducts([{
            //     Name: this.state.currentProductName,
            //     Brand: "",
            //     Price: "0",
            //     Stores: [this.state.currentProductStores]
            // }]);
        }
    }

    getProductsSuccessCallback(data) {
        this.setState({ loading: false });

        if (data !== null || data !== undefined) {

            let newSearchToAdd = {
                productName: this.state.currentProductName,
                productBrand: this.state.currentProductBrand,
                productMaxPrice: this.state.currentProductMaxPrice,
                productStores: this.state.currentProductStores,
                productsList: data.length > 0 ? data[0] : null,
            }

            let newSelectedSearches = this.state.selectedSearches;
            newSelectedSearches.push(newSearchToAdd);

            this.setState({ selectedSearches: newSelectedSearches });
            
            this.props.getProductsList(this.state.selectedSearches.map((search) => { return search.productsList}));
        }
    }

    getProductsErrorCallback(data) {
        this.setState({ loading: false });

        if (data !== null || data !== undefined) {
            //Do something!
        }
    }

    renderLoadingRing() {
        if (this.state.loading) {
            return <div className="card search-form-card">
                <div className="card-body">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        }
    }

    render() {
        return <div>
            <div className="row">
                <div className="col-sm-12">

                    {this.state.alerts.map((alert, index) => {
                        return <div key={index} className="alert alert-danger" role="alert">
                            {alert}
                        </div>
                    })}

                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    {this.state.selectedSearches.map((searchItem, index) => {
                        return <div key={index} className="card search-form-card">
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item"><strong>Name: </strong>{searchItem.productName}</li>
                                    <li className="list-group-item"><strong>Price: </strong>{searchItem.productMaxPrice} </li>
                                    <li className="list-group-item">
                                        <strong>Stores: </strong>
                                        {searchItem.productStores.map((store) => {
                                            return store + ' , ';
                                        })}
                                    </li>
                                    <li className="list-group-item"><strong>Count: </strong>{searchItem.productsList !== null?searchItem.productsList.length:"0"} </li>
                                </ul>
                                <div>
                                    <button onClick={this.onRemoveSearch} id={index} className="card-link btn btn-secondary">Remove</button>
                                </div>
                            </div>
                        </div>
                    })}
                    {this.renderLoadingRing()}
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
                            <button onClick={this.onLockProductName} className="btn btn-outline-secondary" type="button">Lock</button>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Product Stores</span>
                            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">

                                {
                                    this.storesList.map((store, index) => {
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
                            {
                                this.state.currentProductStores.map((store, index) => {
                                    return store + ' , ';
                                })
                            }
                            {this.state.currentProductStores.length === 0 ? "Select Store" : ""}
                        </span>
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
                        <span className="form-control">
                            {this.state.currentProductBrand}
                            {this.state.currentProductBrand === "" ? "Select Brand" : ""}
                        </span>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Product Max Price</span>
                        </div>
                        <input type="number" onChange={this.onProductPriceChange} value={this.state.currentProductMaxPrice} className="form-control" placeholder="Product Max Price" />
                    </div>

                    <div className="input-group mb-3">
                        <button onClick={this.onAddSearch} className="btn btn-secondary btn-lg">Add</button>
                    </div>
                </div>

            </div>
        </div>
    }
}