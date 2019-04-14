import React, { Component } from 'react';
import './select-products.css';

export default class SelectProducts extends Component {
<<<<<<< HEAD
    productsList = [{name:"Tomato" , brand:"Osem" , price: 20} , {name:"Tomato" , brand:"Elit" , price:30}];
    constructor(props) {
        
        super(props);
    }

    render() {
        return <div>
            <div>
                {/* Here will be the selected products */}
            </div>
            <hr />
            <div>
                {this.productsList.map((product , index) => {
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
                            <button className="btn btn-secondary">Add</button>
                        </div>
                    </div>
                })}
            </div>
=======
    render() {
        return <div>
            <div>

            </div>
            <hr />
            <div>

                <div className="card select-products-card">
                    <img src="https://images1-ynet-prod.azureedge.net/PicServer5/2018/12/27/8968761/896874859901009801060no.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomato souce</h5>
                        <button className="btn btn-secondary">Add</button>
                    </div>
                </div>
                <div className="card select-products-card">
                    <img src="https://images1-ynet-prod.azureedge.net/PicServer5/2018/12/27/8968761/896874859901009801060no.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomato souce</h5>
                        <button className="btn btn-secondary">Add</button>
                    </div>
                </div>
                <div className="card select-products-card">
                    <img src="https://images1-ynet-prod.azureedge.net/PicServer5/2018/12/27/8968761/896874859901009801060no.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomato souce</h5>
                        <button className="btn btn-secondary">Add</button>
                    </div>
                </div>
                <div className="card select-products-card">
                    <img src="https://images1-ynet-prod.azureedge.net/PicServer5/2018/12/27/8968761/896874859901009801060no.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomato souce</h5>
                        <button className="btn btn-secondary">Add</button>
                    </div>
                </div>
                <div className="card select-products-card">
                    <img src="https://images1-ynet-prod.azureedge.net/PicServer5/2018/12/27/8968761/896874859901009801060no.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomato souce</h5>
                        <button className="btn btn-secondary">Add</button>
                    </div>
                </div>
                <div className="card select-products-card">
                    <img src="https://images1-ynet-prod.azureedge.net/PicServer5/2018/12/27/8968761/896874859901009801060no.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomato souce</h5>
                        <button className="btn btn-secondary">Add</button>
                    </div>
                </div>
                <div className="card select-products-card">
                    <img src="https://images1-ynet-prod.azureedge.net/PicServer5/2018/12/27/8968761/896874859901009801060no.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Tomato souce</h5>
                        <button className="btn btn-secondary">Add</button>
                    </div>
                </div>

            </div>

>>>>>>> 42a3000c8b068274d1f32111d021703fb5d018e4
        </div>
    }
}