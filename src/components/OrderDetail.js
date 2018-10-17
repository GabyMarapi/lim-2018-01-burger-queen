import React from 'react';
import { Table,ListGroup, ListGroupItem, Button } from 'reactstrap';

// const listStyle = {
// 	display: 'flex',
// 	flexDirection: 'row',
// 	justifyContent: 'space-between'
// }

export default ({ orderDetail }) => {
	console.log(orderDetail);
	
	return (
		<div>
			<ListGroup>
				<Table hover>
					<thead>

						<tr>
							<th>#</th>
							<th>Nombre</th>
							<th>S/.</th>
							<th>Cant.</th>
						</tr>
					</thead>
					<tbody>

						{orderDetail
							.map((order,i) =>
								<tr key={i}>
									<th scope="row">{i+1}</th>
									<td>{order.name}</td>
									<td>{order.price}.00</td>
									<td>{order.count}</td>
									<td><Button color="link"><i className="fas fa-trash"></i></Button></td>
							
								</tr>
								// <ListGroupItem
								//     style={listStyle}
								//     key={order.menuId}
								//     id={order.menuId}
								// >
								//     <p>{order.menuName}</p>
								//     <Button color="link"><i className="fas fa-trash"></i></Button>
								// </ListGroupItem>
							)
						}
					</tbody>

				</Table>
			</ListGroup>
		</div>
	)

}