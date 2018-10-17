import React from 'react';
import { Card, CardTitle, CardText, Col } from 'reactstrap';

export default ({ menus, onAddOrder }) => {
  console.log(menus);

  return (
    <div className='row container-fluid'>
      {
        menus
          .map((menu,i) =>
            <Col sm="6" key={menu.id} >
              <Card body id={i} onClick={onAddOrder}>
                <CardTitle >{menu.name}</CardTitle>
                <CardText >S/. {menu.price}.00</CardText>
              </Card>
              
            </Col>
          )
      }
    </div>



  )
}
