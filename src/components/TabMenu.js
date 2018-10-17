import React from 'react'
import { Nav, NavItem, NavLink,  } from 'reactstrap';
import classnames from 'classnames';

export default class TabMenu extends React.Component {
  constructor({listTabs}) {
    super()
    this.state = {
      listTabs,
      flagActive: 0
    }
  }

  changeFlag = (flag) => {
    this.setState({
      flagActive: flag
    })
  }
  render() {
    let { flagActive } = this.state

    return (
        <Nav tabs>
          {this.state.listTabs.map((elem, i) =>
            <NavItem key={i}>
              <NavLink
                className={classnames({ active: flagActive === i })}
                onClick={() => this.changeFlag(i)}
              >
                {elem}
              </NavLink>
            </NavItem>
          )}
        </Nav>
    )
  }
}