import React, { Component } from 'react';
import './select-products.css';

export default class SelectProducts extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedProducts: [], products: props.productsList };
        this.onSelectProduct = this.onSelectProduct.bind(this);
        this.onRemoveSelectedProduct = this.onRemoveSelectedProduct.bind(this);
    }

    onSelectProduct(event) {
        let selectedProduct = this.state.products[event.target.id];
        let updatedSelectedProducts = this.state.selectedProducts;
        updatedSelectedProducts.push(selectedProduct);
        this.setState({ selectedProducts: updatedSelectedProducts });
    }

    onRemoveSelectedProduct(event){
        let updatedSelectedProducts = this.state.selectedProducts;
        updatedSelectedProducts.splice(event.target.id , 1);
        this.setState({selectedProducts: updatedSelectedProducts});
    }

    render() {
        return <div>
            <div>
                {this.state.selectedProducts.map((product , index) => {
                    return <div key={index} className="card select-products-card">
                        <div className="card-body">
                            <div>
                                <ul>
                                    <li> {product.name} </li>
                                    <li> {product.brand} </li>
                                    <li> {product.price} nis</li>
                                </ul>
                            </div>
                            <div>
                                <button id={index} onClick={this.onRemoveSelectedProduct} className="card-link btn btn-secondary">Remove</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <hr />
            <div>
                {this.state.products.map((product, index) => {
                    return <div key={index} className="card select-products-card">
                        <img src="https://images1-ynet-prod.azureedge.net/PicServer5/2018/12/27/8968761/896874859901009801060no.jpg"
                            className="card-img-top select-products-card-img" alt={product.name} />
                        <div className="card-body">
                            <div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{product.name}</li>
                                    <li className="list-group-item">{product.brand}</li>
                                    <li className="list-group-item">{product.price} nis</li>
                                </ul>
                            </div>
                            <button id={index} onClick={this.onSelectProduct} className="btn btn-secondary">Select</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}