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

            storesToUpdate.push(event.target.textContent);

            this.setState({ currentProductStores: storesToUpdate });
        }
    }

    onAllStoresClick() {
        this.setState({ currentProductStores: this.storesList });
    }

    onClearStoresClick() {
        this.setState({ currentProductStores: [] });
    }

    onAddSearch() {

        if (this.isInputValid(true, true, true, true)) {

            this.setState({ loading: true });

            this.api.getProducts([{
                Name: this.state.currentProductName,
                Brand: this.state.currentProductBrand,
                Price: this.state.currentProductMaxPrice,
                Stores: this.state.currentProductStores
            }], this.getProductsSuccessCallback, this.getProductsErrorCallback);

            this.props.showNotifications(["Search was added successfuly."], false);
        }
    }

    onRemoveSearch(event) {
        let searchesToUpdate = this.state.selectedSearches;
        searchesToUpdate.splice(event.target.id, 1);
        this.setState({ selectedSearches: searchesToUpdate });
        this.props.getProductsList(this.state.selectedSearches.map((search) => { return search.productsList }));
    }

    isInputValid(nameValidation, brandValidtaion, priceValidation, storesValidation) {

        let validationErrors = [];

        if (this.state.currentProductName === "" && nameValidation) {
            validationErrors.push("Product name can not be empty.");
        }

        if (this.state.currentProductMaxPrice === 0 && priceValidation) {
            validationErrors.push("Price can not be 0.");
        }

        if (this.state.currentProductStores.length === 0 && storesValidation) {
            validationErrors.push("Stores can not be empty.");
        }

        this.props.showNotifications(validationErrors, true);

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
        this.setState({loading:false});

        if (data !== null || data !== undefined) {

            let newSearchToAdd = {
                productName: this.state.currentProductName,
                productBrand: this.state.currentProductBrand,
                productMaxPrice: this.state.currentProductMaxPrice,
                productStores: this.state.currentProductStores,
                productsList: data,
                productsCount: this.getProductCount(data)
            };

            let newSelectedSearches = this.state.selectedSearches;
            newSelectedSearches.push(newSearchToAdd);

            this.setState({ selectedSearches: newSelectedSearches });

            this.props.getProductsList(this.state.selectedSearches.map((search) => { return search.productsList }));

            this.setState({
                currentProductName: "",
                currentProductMaxPrice: 0,
                currentProductStores: []
            });
        }
    }

    getProductsErrorCallback(data) {
        this.setState({ loading: false });

        if (data !== null || data !== undefined) {
            this.props.showNotifications(["There was an error from the products api."], true);
        }
    }

    getProductCount(productsList) {
        let count = 0;
        productsList.forEach((prodcuts) => {
            count += prodcuts.length;
        });
        return count;
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
                                <li className="list-group-item"><strong>Count: </strong>{searchItem.productsCount} </li>
                            </ul>
                            <div>
                                <button onClick={this.onRemoveSearch} id={index} className="card-link btn btn-secondary">Remove</button>
                            </div>
                        </div>
                    </div>
                })}
                {this.renderLoadingRing()}
            </div>
            <hr />
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Product Name</span>
                    </div>
                    <input type="text" onChange={this.onProductNameChange} value={this.state.currentProductName} className="form-control" placeholder="Product Name" />
                    <div className="input-group-append">
                        <button onClick={this.onLockProductName} className="btn btn-outline-secondary" type="button">Lock</button>
                    </div>
                </div>
            </div>
            <div className="row">
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
                    <div className="form-control search-form-store-select">
                        {
                            this.state.currentProductStores.map((store, index) => {
                                return store + ' , ';
                            })
                        }
                        {this.state.currentProductStores.length === 0 ? "Select Store" : ""}
                    </div>
                </div>
            </div>
            <div className="row">
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
    }
}