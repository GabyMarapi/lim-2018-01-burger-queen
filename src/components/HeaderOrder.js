import React, { Component } from 'react';
import { Row, Col, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
				<Col xs="3" sm="3" md="3">
					<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<DropdownToggle caret>
							N° Mesa
						</DropdownToggle>
						<DropdownMenu onClick={(e)=>this.props.onDropdown(e.target.id)}>
							<DropdownItem id='k'>Another Action</DropdownItem>
							<DropdownItem id='k1'>Another Action</DropdownItem>
							<DropdownItem id='k2'>Another Action</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</Col>
				<Col xs="3" sm="3" md="3">
					<Input 
					placeholder="Ingresar nombre del cliente" 
					onChange={(e)=>this.props.onInputName(e.target.value)}/>
				</Col>
			</Row >
		)
	}

}