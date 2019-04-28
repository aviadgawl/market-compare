import React, { Component } from 'react';
import './select-products.css';

export default class SelectProducts extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedProducts: [] };
        this.onSelectProduct = this.onSelectProduct.bind(this);
        this.onRemoveSelectedProduct = this.onRemoveSelectedProduct.bind(this);
    }

    onSelectProduct(event) {
        let productIndexes = event.target.id.split(",");
        let selectedProduct = this.props.productsList[productIndexes[0]][productIndexes[1]][productIndexes[2]];
        let updatedSelectedProducts = this.state.selectedProducts;
        selectedProduct.id = event.target.id;

        if (updatedSelectedProducts.filter((product) => { return product.id === event.target.id }).length === 0) {
            updatedSelectedProducts.push(selectedProduct);
            this.setState({ selectedProducts: updatedSelectedProducts });
            this.props.getSelectedProducts(updatedSelectedProducts);
        }
    }

    onRemoveSelectedProduct(event) {
        let updatedSelectedProducts = this.state.selectedProducts;
        let productToRemove = updatedSelectedProducts.filter((product) => { return product.id === event.target.id })[0];
        let productToRemoveIndex = updatedSelectedProducts.findIndex((product) => product.id === productToRemove.id);
        updatedSelectedProducts.splice(productToRemoveIndex, 1);
        this.setState({ selectedProducts: updatedSelectedProducts });
    }

    render() {
        return <div>
            <div>
                {this.state.selectedProducts.map((product, index) => {
                    return <div key={product.id} className="card select-products-card">
                        <div className="card-body">
                            <div>
                                <ul className="list-group">
                                    <li className="list-group-item"><strong>Name: </strong> {product.Name} </li>
                                    <li className="list-group-item"><strong>Brand: </strong> {product.Brand} </li>
                                    <li className="list-group-item"><strong>Price: </strong> {product.Price} nis</li>
                                    <li className="list-group-item">{product.Stores[0]}</li>
                                </ul>
                            </div>
                            <div>
                                <button id={product.id} onClick={this.onRemoveSelectedProduct} className="card-link btn btn-secondary">Remove</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <hr />
            <div>
                {this.props.productsList.map((productArray, indexOne) => {
                    return productArray.map((products, indexTwo) => {
                        return products.map((product, indexThree) => {
                            return <div key={indexOne + "," + indexTwo + "," + indexThree} className="card select-products-card">
                                <img src={product.ImgUrl}
                                    className="card-img-top select-products-card-img" alt={product.Name} />
                                <div className="card-body">
                                    <div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{product.Name}</li>
                                            <li className="list-group-item">{product.Brand}</li>
                                            <li className="list-group-item">{product.Price} nis</li>
                                            <li className="list-group-item">{product.Stores[0]}</li>
                                        </ul>
                                    </div>
                                    <button id={indexOne + "," + indexTwo + "," + indexThree} onClick={this.onSelectProduct} className="btn btn-secondary">Select</button>
                                </div>
                            </div>
                        })
                    })
                })}
            </div>
        </div>
    }
}