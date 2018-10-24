import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { Container, Button, Row, Col } from 'reactstrap';
import HeaderOrder from './components/HeaderOrder';
import ListMenu from './components/ListMenu';
import TabMenu from './components/TabMenu';
import OrderDetail from './components/OrderDetail';
import Total from './components/Total';


firebase.initializeApp({
  apiKey: "AIzaSyDk55mWsIWR6tUb6cKBsvTbbC4oAG2HuVU",
  authDomain: "burgerqueen-54705.firebaseapp.com",
  databaseURL: "https://burgerqueen-54705.firebaseio.com",
  projectId: "burgerqueen-54705",
  storageBucket: "burgerqueen-54705.appspot.com",
  messagingSenderId: "774270877260"
});

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputName: '',
      listMenus: [],
      listCategory: [],
      orderDetail: [],
      total: 0
    }
  }

  getCategory = () => db.collection("CategoryMenu")

  getMenus = (category) => this.getCategory().doc(category).collection(category).get()

  updateListMenus = (category) => {
    this.getMenus(category).then((docs) => {
      const arr = []
      let obj = {}
      docs.forEach(doc => {
        obj = doc.data()
        obj.id = doc.id
        arr.push(obj)
      })
      this.setState({
        listMenus: arr
      })
    })
  }
  componentDidMount() {
    this.getCategory().get().then((docs) => {
      const { listCategory } = this.state
      docs.forEach(doc => {
        listCategory.push(
          {
            [doc.id]: doc.data()
          }
        )
      })

      this.setState({
        listCategory
      })
    })
    this.updateListMenus('Desayuno')
  }

  handleOnInputName = (input) => {
    this.setState({
      inputName: input
    })
  }

  handleOnAddOrder = (e) => {
    const index = e.currentTarget.id
    const { orderDetail } = this.state
    const objMenu = this.state.listMenus[index]
    let ind = null

    orderDetail.forEach((elem, i) => {
      if (elem.id === objMenu.id) {
        ind = i
      }
    })

    if (ind !== null) {
      orderDetail[ind].count++
      this.setState({
        orderDetail,
      })
      this.updateTotal(orderDetail)
    }
    else {
      objMenu.count = 1
      this.setState({
        orderDetail: orderDetail.concat(objMenu),
      })
      this.updateTotal(orderDetail.concat(objMenu))
    }
  }

  updateTotal = (orderDetail) => {
    this.setState({
      total: orderDetail.reduce((a, b) => { return a + (b.price * b.count) }, 0)
    })
  }

  handleChangeCategory = (category) => {
    this.updateListMenus(category)
  }

  handleDeleteOrder = (index) => {
    this.setState({
      orderDetail: this.state.orderDetail.filter((elm, i) => i !== index)
    })
  }

  handleSaveOrder = () => {
    db.collection("order").add({
      client: this.state.inputName,
      total: this.state.total
    })
      .then(result => {
        this.state.orderDetail.forEach(elem => {
          db.collection("orderDetail").add({
            id: result.id,
            menu: elem.name,
            price: elem.price,
            count: elem.count,
            total: (elem.price * elem.count),
          })
        })

        this.cleanOrderDetail()
      }
      )

  }

  cleanOrderDetail = () => {
    this.setState({
      orderDetail: [],
      total: 0
    })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <HeaderOrder
              onInputName={this.handleOnInputName}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" md="8">
            <TabMenu
              listTabs={this.state.listCategory}
              changeCategory={this.handleChangeCategory}
            />
            <ListMenu
              menus={this.state.listMenus}
              onAddOrder={this.handleOnAddOrder}
            />
          </Col>
          <Col xs="12" sm="4" md="4">
            <OrderDetail
              orderDetail={this.state.orderDetail}
              deteleOrder={this.handleDeleteOrder}
            />
            <Total
              total={this.state.total}
            />
            <Button
              color="secondary"
              size="sm"
              onClick={this.handleSaveOrder}
            >Ordenar</Button>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default App;
