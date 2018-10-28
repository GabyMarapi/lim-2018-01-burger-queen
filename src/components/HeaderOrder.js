import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';

export default class headerOrder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dropdownOpen: false
		};
	}

	toggle = () => {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	render() {
		return (
			<Row>
				<Col xs="6" sm="6" md="6">
				<label></label><Input 
					placeholder="Ingresar nombre del cliente" 
					onChange={(e)=>this.props.onInputName(e.target.value)}/>
				</Col>
			</Row >
		)
	}

}