(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(45)},28:function(e,t,n){},30:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(6),l=n.n(o),c=(n(28),n(21)),i=n(8),s=n(9),u=n(12),d=n(10),m=n(13),f=(n(30),n(14)),h=n.n(f),g=n(5),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).toggle=function(){n.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})},n.state={dropdownOpen:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.k,null,r.a.createElement(g.e,{xs:"6",sm:"6",md:"6"},r.a.createElement("label",null),r.a.createElement(g.g,{placeholder:"Ingresar nombre del cliente",onChange:function(t){return e.props.onInputName(t.target.value)}})))}}]),t}(a.Component),E=function(e){var t=e.menus,n=e.onAddOrder;return console.log(t),r.a.createElement("div",{className:"row container-fluid"},t.map(function(e,t){return r.a.createElement(g.e,{sm:"6",key:e.id},r.a.createElement(g.b,{body:!0,id:t,onClick:n},r.a.createElement(g.d,null,e.name),r.a.createElement(g.c,null,"S/. ",e.price,".00")))}))},v=n(2),b=n.n(v),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).changeFlag=function(e){n.setState({flagActive:e})},n.state={listTabs:n.props.listTabs,flagActive:2},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.flagActive;return r.a.createElement(g.h,{tabs:!0},this.state.listTabs.map(function(n,a){return r.a.createElement(g.i,{key:a,style:{cursor:"pointer"}},r.a.createElement(g.j,{className:b()({active:t===a}),onClick:function(){e.changeFlag(a),e.props.changeCategory(Object.keys(n)[0])}},n[Object.keys(n)[0]].name))}).reverse())}}]),t}(r.a.Component),y=function(e){var t=e.orderDetail,n=e.deteleOrder;return r.a.createElement(g.l,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"S/."),r.a.createElement("th",null,"Cant."),r.a.createElement("th",null,"Tot."),r.a.createElement("th",null,"   "))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price,".00"),r.a.createElement("td",null,e.count),r.a.createElement("td",null,e.count*e.price),r.a.createElement("td",null,r.a.createElement(g.a,{color:"link",onClick:function(){return n(t)}},r.a.createElement("i",{className:"fas fa-trash"}))))})))},w=function(e){var t=e.total;return r.a.createElement("div",null,r.a.createElement(g.k,null,r.a.createElement(g.e,{sm:{size:"auto",offset:1}}," Total    S/.  ",t)))};h.a.initializeApp({apiKey:"AIzaSyDk55mWsIWR6tUb6cKBsvTbbC4oAG2HuVU",authDomain:"burgerqueen-54705.firebaseapp.com",databaseURL:"https://burgerqueen-54705.firebaseio.com",projectId:"burgerqueen-54705",storageBucket:"burgerqueen-54705.appspot.com",messagingSenderId:"774270877260"});var k=h.a.firestore();k.settings({timestampsInSnapshots:!0});var C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getCategory=function(){return k.collection("CategoryMenu")},e.getMenus=function(t){return e.getCategory().doc(t).collection(t).get()},e.updateListMenus=function(t){e.getMenus(t).then(function(t){var n=[],a={};t.forEach(function(e){(a=e.data()).id=e.id,n.push(a)}),e.setState({listMenus:n})})},e.handleOnInputName=function(t){e.setState({inputName:t})},e.handleOnAddOrder=function(t){var n=t.currentTarget.id,a=e.state.orderDetail,r=e.state.listMenus[n],o=null;a.forEach(function(e,t){e.id===r.id&&(o=t)}),null!==o?(a[o].count++,e.setState({orderDetail:a}),e.updateTotal(a)):(r.count=1,e.setState({orderDetail:a.concat(r)}),e.updateTotal(a.concat(r)))},e.updateTotal=function(t){e.setState({total:t.reduce(function(e,t){return e+t.price*t.count},0)})},e.handleChangeCategory=function(t){e.updateListMenus(t)},e.handleDeleteOrder=function(t){e.setState({orderDetail:e.state.orderDetail.filter(function(e,n){return n!==t})})},e.handleSaveOrder=function(){k.collection("order").add({client:e.state.inputName,total:e.state.total}).then(function(t){e.state.orderDetail.forEach(function(e){k.collection("orderDetail").add({id:t.id,menu:e.name,price:e.price,count:e.count,total:e.price*e.count})}),e.cleanOrderDetail()})},e.cleanOrderDetail=function(){e.setState({orderDetail:[],total:0})},e.state={inputName:"",listMenus:[],listCategory:[],menus:{listCategory:[],listMenus:[]},order:{clientName:null,date:null,total:0,orderDetail:[]},orderDetail:[],total:0},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getCategory().get().then(function(t){var n=e.state.listCategory;t.forEach(function(e){n.push(Object(c.a)({},e.id,e.data())),console.log(e)}),e.setState({listCategory:n})}),this.updateListMenus("Desayuno")}},{key:"render",value:function(){return r.a.createElement(g.f,null,r.a.createElement(g.k,null,r.a.createElement(g.e,null,r.a.createElement(p,{onInputName:this.handleOnInputName}))),r.a.createElement(g.k,null,r.a.createElement(g.e,{xs:"12",sm:"8",md:"8"},r.a.createElement(O,{listTabs:this.state.listCategory,changeCategory:this.handleChangeCategory}),r.a.createElement(E,{menus:this.state.listMenus,onAddOrder:this.handleOnAddOrder})),r.a.createElement(g.e,{xs:"12",sm:"4",md:"4"},r.a.createElement(y,{orderDetail:this.state.orderDetail,deteleOrder:this.handleDeleteOrder}),r.a.createElement(w,{total:this.state.total}),r.a.createElement(g.a,{color:"secondary",size:"sm",onClick:this.handleSaveOrder},"Ordenar"))))}}]),t}(a.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lim-2018-01-burger-queen",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/lim-2018-01-burger-queen","/service-worker.js");j?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):D(t,e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.60d6fbf6.chunk.js.map