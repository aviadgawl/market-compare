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
								<th>First Name</th>
								<th>Last Name</th>
								<th>Username</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Kilgore</td>
								<td>Trout</td>
								<td>kilgore</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Bob</td>
								<td>Loblaw</td>
								<td>boblahblah</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Holden</td>
								<td>Caulfield</td>
								<td>penceyreject</td>
							</tr>
						</tbody>
					</table>
				</div>
        </div>
    }
}