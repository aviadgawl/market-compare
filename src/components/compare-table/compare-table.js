import React, { Component } from 'react';

export default class CompareTable extends Component {
	render() {
		return <div>
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Products Compare</h3>
					<div className="pull-right">
						<span className="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
							<i className="glyphicon glyphicon-filter"></i>
						</span>
					</div>
				</div>
				<div className="panel-body">
					<input type="text" className="form-control" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Filter Products" />
				</div>
				<table className="table table-hover" id="dev-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Brand</th>
							<th>Price</th>
							<th>Store</th>
						</tr>
					</thead>
					<tbody>
						{this.props.productsList.map((product , index) => {
								return <tr key={index}>
								<td>{index + 1}</td>
								<td>{product.Name}</td>
								<td>{product.Brand}</td>
								<td>{product.Price} nis</td>
								<td>{product.Stores[0]}</td>
							</tr>
						})}

					</tbody>
				</table>
			</div>
		</div>
	}
}