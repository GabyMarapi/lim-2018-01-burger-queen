import React from 'react';
import { Row, Col } from 'reactstrap'

export default ({ total }) => {

    return (
            <div>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}> Total    S/.  {total}</Col>
                </Row>
            </div>
    )
}