import React , {Component} from 'react';

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
								<th>Price</th>
								<th>Brand</th>
								<th>Store</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Tomato</td>
								<td>12 nis</td>
								<td>Osem</td>
								<td>Ynot Bitan</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Tomato</td>
								<td>13 nis</td>
								<td>Osem</td>
								<td>Shufersal</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Tomato</td>
								<td>34 nis</td>
								<td>Osem</td>
								<td>Rami Levy</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Potato Chips</td>
								<td>13 nis</td>
								<td>Elit</td>
								<td>Shufersal</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Potato Chips</td>
								<td>34 nis</td>
								<td>Osem</td>
								<td>Rami Levy</td>
							</tr>
						</tbody>
					</table>
				</div>
        </div>
    }
}