import React from 'react';
import { Table, Button } from 'reactstrap';

// const listStyle = {
// 	display: 'flex',
// 	flexDirection: 'row',
// 	justifyContent: 'space-between'
// }

export default ({ orderDetail, deteleOrder }) => {

	return (

		<Table hover>
			<thead>

				<tr>
					<th>#</th>
					<th>Nombre</th>
					<th>S/.</th>
					<th>Cant.</th>
					<th>Tot.</th>
					<th>   </th>
				</tr>
			</thead>
			<tbody>

				{orderDetail
					.map((order, i) =>
						<tr key={i}>
							<th scope="row">{i + 1}</th>
							<td>{order.name}</td>
							<td>{order.price}.00</td>
							<td>{order.count}</td>
							<td>{order.count * order.price}</td>
							<td><Button 
							color="link"
							onClick={()=>deteleOrder(i)}
							><i className="fas fa-trash"></i></Button></td>
						</tr>
					)
				}
			</tbody>
		</Table>

	)

}