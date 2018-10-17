import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { Container, Row, Col } from 'reactstrap';
import HeaderOrder from './components/HeaderOrder';
import ListMenu from './components/ListMenu';
import TabMenu from './components/TabMenu';
import OrderDetail from './components/OrderDetail';

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
      tableSelected: '',
      listMenus: [],
      listCategory: ['Desayuno', 'Almuerzo y Cena', 'Bedidas'],
      orderDetail: []
    }
  }

  getMenus = (category) => db.collection("CategoryMenu").doc(category).collection(category).get()

  componentWillMount() {
    this.getMenus('Desayuno').then((docs) => {

      const arr = []
      let obj = {}
      docs.forEach(doc => {
        obj = doc.data()
        obj.id = doc.id

        arr.push(obj)
      })
      console.log(arr);

      this.setState({
        listMenus: arr
      })
    })
  }

  handleOnInputName = (input) => {
    this.setState({
      inputName: input
    })
  }

  handleOnDropdown = (selected) => {
    this.setState({
      tableSelected: selected
    })
  }

  // setOrder = (id) => {
  //   // db.collection("Order").doc().set({
  //   //   name: "Gaby",
  //   //   menu: listMenus[id],
  //   // })
  // }

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
        orderDetail
      })
    }
    else {
      objMenu.count = 1
      this.setState({
        orderDetail: orderDetail.concat(objMenu)
      })
    }



    // const id = e.currentTarget.id
    // const { listMenus } = this.state

    // db.collection("OrderDetail").doc().set({
    //   menu: listMenus[id],
    // })

  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <HeaderOrder
              onInputName={this.handleOnInputName}
              onDropdown={this.handleOnDropdown}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" md="8">
            <TabMenu
              listTabs={this.state.listCategory}
            />
            <ListMenu
              menus={this.state.listMenus}
              onAddOrder={this.handleOnAddOrder}
            />
          </Col>
          <Col xs="12" sm="4" md="4">
            <OrderDetail
              orderDetail={this.state.orderDetail}
            // orders={this.state.OrderDetail}
            />
          </Col>
        </Row>
      </Container>

    )
  }
}

export default App;
