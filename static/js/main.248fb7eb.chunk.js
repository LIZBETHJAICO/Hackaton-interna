(this["webpackJsonpbeauty-corp"]=this["webpackJsonpbeauty-corp"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/facebook2.68fb603f.svg"},function(e,a,t){e.exports=t.p+"static/media/google.247e3771.svg"},,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/chicabeautycorp.d5d8b12d.jpg"},function(e,a,t){e.exports=t.p+"static/media/asesoras.ddfa49b5.png"},,function(e,a,t){e.exports=t.p+"static/media/facebook.a7bea1e1.svg"},function(e,a,t){e.exports=t.p+"static/media/twitter.d0abca0c.svg"},function(e,a,t){e.exports=t.p+"static/media/logotipo-de-instagram.3f631b75.svg"},function(e,a,t){e.exports=t.p+"static/media/youtube.1f27a0fc.svg"},function(e,a,t){e.exports=t.p+"static/media/logobeautycorp.e16f228d.png"},function(e,a,t){e.exports=t.p+"static/media/minus.54dda2f0.svg"},function(e,a,t){e.exports=t.p+"static/media/plus.45b94e4a.svg"},function(e,a,t){e.exports=t.p+"static/media/send-right.3a91ec41.svg"},function(e,a,t){e.exports=t.p+"static/media/van.830538bf.svg"},function(e,a,t){e.exports=t.p+"static/media/store.df1d4b10.svg"},function(e,a,t){e.exports=t.p+"static/media/arrow-left.e12c691f.svg"},function(e,a,t){e.exports=t.p+"static/media/logocabeza.02cda9bf.png"},function(e,a,t){e.exports=t.p+"static/media/logoletra.cb41c8c0.png"},function(e,a,t){e.exports=t.p+"static/media/search.0919a214.svg"},function(e,a,t){e.exports=t.p+"static/media/user.a07f31ec.svg"},function(e,a,t){e.exports=t.p+"static/media/vector.76d65d78.svg"},function(e,a,t){e.exports=t(75)},,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/moda.f64eea8a.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(27),l=t.n(r),o=(t(54),t(2)),s=t(6),i=t(9),m=t(19),u=t.n(m);t(55),t(57);u.a.initializeApp({apiKey:"AIzaSyBMy1K2LDXkjWoX4uK3a7cYwergYCq5GYg",authDomain:"beauty-corp-c6075.firebaseapp.com",databaseURL:"https://beauty-corp-c6075.firebaseio.com",projectId:"beauty-corp-c6075",storageBucket:"beauty-corp-c6075.appspot.com",messagingSenderId:"1013710131201",appId:"1:1013710131201:web:644f8fb784ccd7fb68b000"});var p=u.a,d=t(13),E=t.n(d),b=t(14),g=t.n(b),f=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],u=i[1],d=function(e){e.preventDefault(),function(e,a){return p.auth().signInWithEmailAndPassword(e,a)}(t,m).then((function(e){return console.log("Successful Log In")})).catch((function(e){return console.log(e.message)}))};return c.a.createElement("main",null,c.a.createElement("form",{onSubmit:d,className:"login-container"},c.a.createElement("h3",null,"Inicia sesi\xf3n"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"exampleInputEmail1"},"Correo electr\xf3nico"),c.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Escribe tu correo",value:t,onChange:function(e){r(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"exampleInputPassword1"},"Contrase\xf1a"),c.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Escribe tu contrase\xf1a",value:m,onChange:function(e){u(e.target.value)}})),c.a.createElement("p",null,c.a.createElement("a",{href:"/#"},"\xbfOlvidaste tu contrase\xf1a?")),c.a.createElement("button",{type:"submit",className:"btn btn-login font",onClick:d},"Iniciar sesi\xf3n"),c.a.createElement("p",{className:"text-center"},"\xf3"),c.a.createElement("button",{type:"button",class:"btn btn-google font"},c.a.createElement("img",{className:"icon",src:g.a,alt:"google"}),c.a.createElement("span",null,"Ingresa con Google")),c.a.createElement("button",{type:"button",class:"btn btn-fb font"},c.a.createElement("img",{className:"icon",src:E.a,alt:"facebook"}),c.a.createElement("span",null,"Ingresa con Facebook")),c.a.createElement("p",{className:"text-center"},"\xbfA\xfan no tienes cuenta? ",c.a.createElement(s.b,{to:"/Register"},"Reg\xedstrate"))))},v=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],u=i[1],d=function(e){e.preventDefault(),function(e,a){return p.auth().createUserWithEmailAndPassword(e,a)}(t,m).then((function(e){return console.log("Successful Sign In")})).catch((function(e){return console.log(e.message)}))};return c.a.createElement("main",null,c.a.createElement("form",{onSubmit:d,className:"login-container"},c.a.createElement("h3",null,"Reg\xedstrate"),c.a.createElement("button",{type:"button",class:"btn btn-google font"},c.a.createElement("img",{className:"icon",src:g.a,alt:"google"}),c.a.createElement("span",null,"Reg\xedstrate con Google")),c.a.createElement("button",{type:"button",class:"btn btn-fb font"},c.a.createElement("img",{className:"icon",src:E.a,alt:"facebook"}),c.a.createElement("span",null,"Reg\xedstrate con Facebook")),c.a.createElement("p",{className:"text-center"},"o reg\xedstrate con tu correo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"exampleInputEmail1"},"Correo electr\xf3nico"),c.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Escribe tu correo",value:t,onChange:function(e){r(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"exampleInputPassword1"},"Contrase\xf1a"),c.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Escribe tu contrase\xf1a",value:m,onChange:function(e){u(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"btn btn-login font",onClick:d},"Continuar"),c.a.createElement("p",{className:"text-center"},"\xbfYa tienes cuenta? ",c.a.createElement(s.b,{to:"/Login"},"Ingresa"))))},N=t(22),h=function(e){var a=e.obj,t=e.sendToCart;return c.a.createElement("li",{className:"text-decoration-none"},c.a.createElement("div",{id:"ItemProduct"},c.a.createElement("img",{src:a.imgUrl,alt:""}),c.a.createElement("h6",{className:"text-center"},a.name),c.a.createElement("section",{id:"section-price"},c.a.createElement("p",{id:"price"},a.price),c.a.createElement("p",{id:"priceFinal"},"S/. ",a.priceFinal)),c.a.createElement("button",{onClick:function(){return t(a,a.name)}},"Agregar")))},y=t(30),x=t.n(y),S=t(31),C=t.n(S),k=function(){return c.a.createElement("section",{className:"container-baner"},c.a.createElement("div",{className:"image-banner"},c.a.createElement("img",{className:"icon-baner",src:x.a,alt:"baner de beautycorp"})),c.a.createElement("div",{className:"container-baners card bg-light mb-3"},c.a.createElement("div",{className:"card-body "},c.a.createElement("div",{className:" body-consultora row "},c.a.createElement("div",{className:"container-image col-md-6  "},c.a.createElement("img",{src:C.a,alt:"",className:"circle responsive-img"})),c.a.createElement("div",{className:" col-md-6 description"},c.a.createElement("h5",{className:"name-consultora card-text text-dark"},"MI CONSULTORA: "),c.a.createElement("p",{className:"card-text text-dark mb-3"},"Sof\xeda Diaz"))))))},O=t(32),w=["https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Ofertas%20imperdibles.png?alt=media&token=e46418c0-298a-4402-baa4-303b0c00d887","https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_141931.png?alt=media&token=b2ac14f1-45a3-49ef-bc77-4a4e434d9e4b","https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_142053.png?alt=media&token=5626417c-32f0-47be-98ae-28220e447c9a","https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_141847.png?alt=media&token=3039bc40-8393-45c5-b2f1-b65bf4231e6d","https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_141806.png?alt=media&token=8496c9b6-cfb4-403b-b695-4c866f38d179","https://firebasestorage.googleapis.com/v0/b/beauty-corp-c6075.appspot.com/o/Screenshot_20200416_141958.png?alt=media&token=5a57f647-c3b0-49c5-96e5-97613197be78"],j={duration:2e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0},I=function(){return c.a.createElement("div",{className:"container-carrusel slide-container"},c.a.createElement(O.Slide,j,c.a.createElement("div",{className:"slide-container"},c.a.createElement("img",{src:w[0]})),c.a.createElement("div",{className:"slide-container"},c.a.createElement("img",{src:w[1]})),c.a.createElement("div",{className:"slide-container"},c.a.createElement("img",{src:w[2]})),c.a.createElement("div",{className:"slide-container"},c.a.createElement("img",{src:w[3]})),c.a.createElement("div",{className:"slide-container"},c.a.createElement("img",{src:w[4]})),c.a.createElement("div",{className:"slide-container"},c.a.createElement("img",{src:w[5]}))))},F=t(33),P=t.n(F),R=t(34),T=t.n(R),U=t(35),L=t.n(U),A=t(36),B=t.n(A),D=t(37),M=t.n(D),_=function(){return c.a.createElement("footer",{className:"page-footer "},c.a.createElement("div",{className:" conten-home text-center center-block"},c.a.createElement("div",{className:"logo-footer"},c.a.createElement("img",{src:M.a})),c.a.createElement("p",{className:"txt-railway"},"- Libro de Reclamos -"),c.a.createElement("p",{className:"txt-railway"},"- Buz\xf3n de Quejas y sugerencias -"),c.a.createElement("p",{className:"txt-railway"},"- Cat\xe1logos -"),c.a.createElement("div",{className:"table-red-social"},c.a.createElement("img",{className:"fa  fa-3x social",src:P.a}),c.a.createElement("img",{className:"fa  fa-3x social",src:L.a}),c.a.createElement("img",{className:" fa-3x social",src:T.a}),c.a.createElement("img",{className:"fa  fa-3x social",src:B.a})),c.a.createElement("p",{className:"txt-railway"},"- Recibe Promociones Ofertas. Noticias -"),c.a.createElement("section",{className:"body-input"},c.a.createElement("input",{type:"text",className:"firstname",placeholder:"Correo Electr\xf3nico."})),c.a.createElement("div",{className:"button-header"},c.a.createElement("button",{type:"button"},"Enviar")),c.a.createElement("div",{className:"footer-copyright row"},c.a.createElement("div",{className:"container"},"\xa9 2020 Copyright Sistemas-BeautiCorp- Todos los derechos reservados.",c.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#!"})))))},z=function(e){var a=e.search,t=e.setSearch,n=e.searching;return c.a.createElement("div",null,c.a.createElement("h5",{className:"mt-2"}," \xbfQu\xe9 buscas?"),c.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Escribe nombre del producto",onKeyUp:function(e){n(e,a,t)}}))},J=function(e){var a=e.type,t=e.category,r=e.show,l=e.search,s=e.setSearch,i=Object(n.useState)([]),m=Object(o.a)(i,2),u=m[0],d=m[1],E=Object(N.a)(p.firestore().collection("products"),{snapshotListenOptions:{includeMetadataChanges:!0}}),b=Object(o.a)(E,3),g=b[0],f=b[1],v=b[2],y=Object(N.a)(p.firestore().collection("products"),{snapshotListenOptions:{includeMetadataChanges:!0}}),x=Object(o.a)(y,1)[0],S=function(e,a){if(0===u.filter((function(e){return e.name===a})).length){var t={count:1,name:e.name,priceFinal:e.priceFinal,imgUrl:e.imgUrl},n=u.concat([t]);d(n)}};console.log(u),localStorage.setItem("arrayProducts",JSON.stringify(u));return c.a.createElement("section",{id:"view-section"},c.a.createElement("div",{className:"col-12"},r&&c.a.createElement(z,{search:l,setSearch:s,searching:function(e,a,t,n){t(e.target.value),a&&a.length>=1&&console.log(a)}})),!r&&!a&&!t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),c.a.createElement(I,null)),c.a.createElement("section",{className:"Home-body"},v&&c.a.createElement("strong",null,"Error: ",JSON.stringify(v)),f&&c.a.createElement("span",null," Loading..."),g&&!l&&c.a.createElement("section",{id:"container-products"},g.docs.filter((function(e){return(!a||a&&e.data().brand===a)&&(!t||t&&e.data().category===t)})).map((function(e){return c.a.createElement(h,{key:e.id,obj:e.data(),sendToCart:S})}))),x&&l&&c.a.createElement("section",{id:"container-products"},x.docs.filter((function(e){return-1!==e.data().name.indexOf(l.toUpperCase())})).map((function(e){return c.a.createElement(h,{key:e.id,obj:e.data(),sendToCart:S})})))),c.a.createElement(_,null))},q=function(){return c.a.createElement("main",{className:"main-homepage"},c.a.createElement("section",null,c.a.createElement(k,null)),c.a.createElement("section",null,c.a.createElement(I,null)),c.a.createElement("footer",null,c.a.createElement(_,null)))},W=t(38),G=t.n(W),K=t(39),Y=t.n(K),H=function(e){var a=e.name,t=e.priceFinal,r=e.count,l=e.imgUrl,s=e.countPerOrder,i=Object(n.useState)(r),m=Object(o.a)(i,2),u=m[0],p=m[1];return c.a.createElement("div",{className:"item-order-container"},c.a.createElement("img",{src:l,alt:a,className:"img"}),c.a.createElement("div",{className:"description"},c.a.createElement("h5",{className:"name"},a),c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"btn-container",disabled:u<2,onClick:function(e){e.preventDefault(),p(u-1),s(u-1,a)}},c.a.createElement("img",{src:G.a,alt:"dismiuir",className:"btn-qty"})),c.a.createElement("span",{className:"count"},u),c.a.createElement("button",{type:"button",className:"btn-container",onClick:function(e){e.preventDefault(),p(u+1),s(u+1,a)}},c.a.createElement("img",{src:Y.a,alt:"aumentar",className:"btn-qty"}))),c.a.createElement("div",{className:"delete-price"},c.a.createElement("button",{className:"btn-delete"},"Eliminar"),c.a.createElement("span",null,"S/.",(t*u).toFixed(2)))))},Q=t(40),X=t.n(Q),$=t(41),V=t.n($),Z=t(42),ee=t.n(Z),ae=function(e){var a=e.dataOrders,t=Object(n.useState)(a),r=Object(o.a)(t,2),l=r[0],s=r[1],i=function(e,a){s(l.map((function(t){return t.name===a?{count:e,name:t.name,priceFinal:t.priceFinal,imgUrl:t.imgUrl}:{count:t.count,name:t.name,priceFinal:t.priceFinal,imgUrl:t.imgUrl}}))),console.log(l)};console.log(l);var m=0;return l.forEach((function(e){m+=e.priceFinal*e.count})),c.a.createElement("section",{className:"orders-container"},c.a.createElement("section",{className:"orders"},a.map((function(e,a){return c.a.createElement(H,{key:a,name:e.name,priceFinal:e.priceFinal,count:e.count,imgUrl:e.imgUrl,countPerOrder:i})}))),c.a.createElement("section",{className:"reception"},c.a.createElement("p",null,"Puedes:"),c.a.createElement("span",{className:"type"},c.a.createElement("img",{src:V.a,alt:"delivery"}),"Recibirlo en domicilio"),c.a.createElement("span",{className:"type"},c.a.createElement("img",{src:ee.a,alt:"tienda"}),"Recoger en Tienda")),c.a.createElement("hr",null),c.a.createElement("button",{type:"button",className:"btn-send"},c.a.createElement("img",{src:X.a,alt:"enviar"}),"Enviar pedido a mi Consultora"),c.a.createElement("hr",null),c.a.createElement("div",{className:"subtotal"},c.a.createElement("span",null,"Subtotal"),c.a.createElement("span",null,"S/.",m.toFixed(2))),c.a.createElement("div",{className:"btn-buy-group"},c.a.createElement("button",{type:"button",className:"btn-buy first"},"IR A COMPRAR"),c.a.createElement("button",{type:"button",className:"btn-buy"},"SEGUIR COMPRANDO")))},te=t(43),ne=t.n(te),ce=function(){var e=Object(i.f)(),a=JSON.parse(localStorage.getItem("arrayProducts"));return console.log(JSON.parse(localStorage.getItem("arrayProducts"))),c.a.createElement("main",{className:"shop-cart-container"},c.a.createElement("section",{className:"title-container"},c.a.createElement("img",{src:ne.a,alt:"regresar",onClick:function(){e.push("/")}}),c.a.createElement("h2",{className:"title"},"BOLSA DE COMPRAS")),c.a.createElement(ae,{dataOrders:a}),c.a.createElement(_,null))},re=t(44),le=t.n(re),oe=t(45),se=t.n(oe),ie=t(46),me=t.n(ie),ue=t(47),pe=t.n(ue),de=t(48),Ee=t.n(de),be=(t(72),function(e){var a=e.setCategory,t=e.show,n=e.setShow,r=(e.search,e.setSearch);return c.a.createElement("section",{className:"row"},c.a.createElement("div",{className:"col-12 pl-0 pr-0"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("a",{className:"navbar-brand itemNav",href:"./"},c.a.createElement("img",{src:le.a,className:"imgLogoCabeza"}),c.a.createElement("img",{src:se.a,className:"imgLogoLetra"})),c.a.createElement("spam",{className:"navbar-brand",onClick:function(){return n(!0!==t)}},c.a.createElement("img",{src:me.a})),c.a.createElement(s.b,{to:"/Login"},c.a.createElement("a",{className:"navbar-brand",href:"./"},c.a.createElement("img",{src:pe.a}))),c.a.createElement(s.b,{to:"/ShoppingCart"},c.a.createElement("a",{className:"navbar-brand",href:"./"},c.a.createElement("img",{src:Ee.a}))),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},c.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},c.a.createElement("li",{className:"nav-item active text-center"},c.a.createElement("a",{className:"navbar-brand text-center",href:"./"},"Bella")),c.a.createElement("li",{className:"nav-item active text-center"},c.a.createElement("a",{className:"nav-link",href:"./"},"Ofertas imperdibles")),c.a.createElement("li",{className:"nav-item active"},c.a.createElement("spam",{className:"nav-link text-center",onClick:function(){return a("Maquillaje",r(""))}},"Maquillaje")),c.a.createElement("li",{className:"nav-item active"},c.a.createElement("spam",{className:"nav-link text-center",onClick:function(){return a("Cuidado Personal",r(""))}},"Cuidado Personal")),c.a.createElement("li",{className:"nav-item active"},c.a.createElement("spam",{className:"nav-link text-center",onClick:function(){return a("Tratamiento Corporal",r(""))}},"Tratamiento Corporal")),c.a.createElement("li",{className:"nav-item active"},c.a.createElement("spam",{className:"nav-link text-center",onClick:function(){return a("Tratamiento Facial",r(""))}},"Tratamiento Facial")),c.a.createElement("li",{className:"nav-item active"},c.a.createElement("spam",{className:"nav-link text-center",onClick:function(){return a("Fragancias",r(""))}},"Fragancias")),c.a.createElement("li",{className:"nav-item active"},c.a.createElement("spam",{className:"nav-link text-center",onClick:function(){return a("Accesorios Cosmeticos",r(""))}},"Accesorios Cosm\xe9ticos")),c.a.createElement("li",{className:"nav-item active text-center"},c.a.createElement("spam",{className:"nav-link text-center"},"Tiendas retail")),c.a.createElement("li",{className:"nav-item active text-center"},c.a.createElement("spam",{className:"nav-link text-center"},"Cat\xe1logo virtual")))))))}),ge=function(e){var a=e.setType,t=e.setCategory,n=e.show,r=e.setShow,l=e.setSearch;return c.a.createElement("header",null,c.a.createElement("section",null,c.a.createElement("button",{type:"button",className:"buttonBrand",onClick:function(){return a("Esika",l(""))}},"Bella"),c.a.createElement("button",{type:"button",className:"buttonBrand",onClick:function(){return a("Cyzone",l(""))}},"MakeUp"),c.a.createElement("button",{type:"button",className:"buttonBrand",onClick:function(){return a("LBel",l(""))}},"Natural")),c.a.createElement(be,{setCategory:t,show:n,setShow:r,setSearch:l}))},fe=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),m=Object(o.a)(l,2),u=m[0],p=m[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),b=E[0],g=E[1],N=Object(n.useState)(),h=Object(o.a)(N,2),y=h[0],x=h[1];return c.a.createElement(s.a,null,c.a.createElement(ge,{setType:r,setCategory:p,show:b,setShow:g,setSearch:x}),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(J,{type:t,category:u,show:b,setShow:g,search:y,setSearch:x})),c.a.createElement(i.a,{path:"/Login",component:f}),c.a.createElement(i.a,{path:"/homepage",component:q}),c.a.createElement(i.a,{path:"/Register",component:v}),c.a.createElement(i.a,{path:"/ShoppingCart",component:ce})))},ve=(t(73),t(74),function(){return c.a.createElement("div",null,c.a.createElement(fe,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[49,1,2]]]);
//# sourceMappingURL=main.248fb7eb.chunk.js.map