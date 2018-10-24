import React from 'react'
import { Nav, NavItem, NavLink,  } from 'reactstrap';
import classnames from 'classnames';

export default class TabMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listTabs: this.props.listTabs,
      flagActive: 2
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
            <NavItem 
            key={i}
            style={{cursor : 'pointer'}}
            >
              <NavLink
                className={classnames({ active: flagActive === i })}
                onClick={() => 
                  {
                    this.changeFlag(i)
                    this.props.changeCategory(Object.keys(elem)[0])
                  }
                }
              >
                {elem[Object.keys(elem)[0]].name}
              </NavLink>
            </NavItem>
          ).reverse()}
        </Nav>
    )
  }
}