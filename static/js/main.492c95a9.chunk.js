(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{102:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(1),n=c.n(a),i=c(16),o=c.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=c(11),l=(c(92),c(30)),d=c(18),j=c(31),b=j.a.initializeApp({apiKey:"AIzaSyC8yC09wEE3Zydr2wcC33etLJ2onU5teWQ",authDomain:"pet-app-43a74.firebaseapp.com",databaseURL:"https://pet-app-43a74-default-rtdb.firebaseio.com",projectId:"pet-app-43a74",storageBucket:"pet-app-43a74.appspot.com",messagingSenderId:"217479578462",appId:"1:217479578462:web:9bfc5428f8aaad6d8705cf"}).firestore(),p=j.a.auth(),m=j.a.storage(),u=(c(96),c(97),c.p+"static/media/img_signup.2a285a90.jpg"),h=c(138),O=c(142),x=c(144),_=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(2),"& label.Mui-focused":{color:"#0e86c7"},"& .MuiInput-underline:after":{borderBottomColor:"#0e86c7"}}}}})),g=function(){var e=_(),t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],i=c[1],o=Object(a.useState)(""),l=Object(r.a)(o,2),j=l[0],b=l[1],m=Object(a.useState)(""),h=Object(r.a)(m,2),g=h[0],f=h[1],v=Object(a.useState)(""),N=Object(r.a)(v,2),k=N[0],y=N[1],w=Object(d.f)("/");return Object(s.jsx)("div",{className:"singup__container",children:Object(s.jsxs)("form",{className:e.root,children:[Object(s.jsx)("div",{children:Object(s.jsx)("center",{children:Object(s.jsx)("img",{src:u,alt:"",className:"signup__img"})})}),Object(s.jsx)("center",{children:Object(s.jsx)(O.a,{className:"login__input",id:"standard-basic",label:"Nombre",type:"text",value:n,onChange:function(e){return i(e.target.value)}})}),Object(s.jsx)("center",{children:Object(s.jsx)(O.a,{className:"login__input",id:"standard-basic",label:"Apellido",type:"text",value:j,onChange:function(e){return b(e.target.value)}})}),Object(s.jsx)("center",{children:Object(s.jsx)(O.a,{className:"login__input",id:"standard-basic",label:"Email",type:"email",value:g,onChange:function(e){return f(e.target.value)}})}),Object(s.jsx)("center",{children:Object(s.jsx)(O.a,{className:"login__input",id:"standard-basic",label:"Contrase\xf1a",type:"password",value:k,onChange:function(e){return y(e.target.value)}})}),Object(s.jsx)("center",{children:Object(s.jsx)(x.a,{type:"submit",className:"signup__button",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(g,k).then((function(e){return e.user.updateProfile({displayName:n+" "+j}).then((function(e){w.push("/")}))})).catch((function(e){alert(e.message)}))},children:"Registrate"})})]})})},f=c.p+"static/media/img_login.4c552726.jpg",v=c.p+"static/media/login_vet.48c7cbf2.png",N=c(143);function k(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var y=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(2),"& label.Mui-focused":{color:"#0e86c7"},"& .MuiInput-underline:after":{borderBottomColor:"#0e86c7"}}},paper:{position:"absolute",width:300,backgroundColor:e.palette.background.paper,border:"1px solid #000",boxShadow:e.shadows[10],padding:e.spacing(2,4,3)}}})),w=function(){var e=y(),t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],i=c[1],o=Object(d.f)(""),l=Object(a.useState)(""),j=Object(r.a)(l,2),b=j[0],m=j[1],u=Object(a.useState)(k),h=Object(r.a)(u,1)[0],x=Object(a.useState)(!1),_=Object(r.a)(x,2),w=_[0],C=_[1];return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("center",{children:Object(s.jsx)("h1",{className:"container__name",children:"Social Pet"})}),Object(s.jsx)("center",{children:Object(s.jsx)("h2",{className:"container__description",children:"La red social de las mascotas "})}),Object(s.jsxs)("div",{className:"socialpet__container",children:[Object(s.jsx)("div",{className:"login__left",children:Object(s.jsx)("img",{src:v,alt:" ",className:"socialpet__vet"})}),Object(s.jsxs)("div",{className:"login__right",children:[Object(s.jsx)("center",{children:Object(s.jsx)("img",{src:f,alt:"",className:"login__img"})}),Object(s.jsxs)("form",{className:e.root,children:[Object(s.jsx)("center",{children:Object(s.jsx)(O.a,{className:"login__input",id:"standard-basic",label:"Email",type:"email",onChange:function(e){return i(e.target.value)}})}),Object(s.jsx)("center",{children:Object(s.jsx)(O.a,{className:"login__input",id:"standard-basic",label:"Contrase\xf1a",type:"password",onChange:function(e){return m(e.target.value)}})}),Object(s.jsx)("center",{children:Object(s.jsx)("button",{type:"submit",className:"login__login",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(n,b).then((function(e){console.log(e),o.push("/")})).catch((function(e){"The password is invalid or the user does not have a password."===e.message?alert("Contrase\xf1a incorrecta"):"There is no user record corresponding to this identifier. The user may have been deleted."===e.message?(o.push("/register"),window.scrollTo({top:document.body.scrollHeight,left:0,behavior:"smooth"})):alert(e.message)}))},children:"Ingresar"})}),Object(s.jsx)("center",{children:Object(s.jsx)("h3",{className:"login__text",children:"\xbfAun no tienes una cuenta?"})}),Object(s.jsx)("center",{children:Object(s.jsx)("button",{type:"button",className:"login__createNewAccount",onClick:function(){return C(!0)},children:"Registrate"})}),Object(s.jsx)("center",{children:Object(s.jsx)(N.a,{open:w,onClose:function(){return C(!1)},children:Object(s.jsx)("div",{style:h,className:e.paper,children:Object(s.jsx)(g,{})})})})]})]})]})]})},C=(c(102),c.p+"static/media/adiestrador.c056f71d.png"),S=c.p+"static/media/veterinaria.9c4f7023.png",I=c.p+"static/media/refugios.0391cc63.png",L=c.p+"static/media/petshop.b44f7276.png",E=c(146),B=c(74),T=c.n(B),D=function(e){var t=e.user,c=Object(d.f)("");!1===t&&c.push("/login");return Object(s.jsxs)("div",{className:"headerhome",children:[Object(s.jsx)("div",{className:"headerhome__left",children:Object(s.jsx)("h1",{className:"headerhome__name",children:"Social Pet"})}),Object(s.jsxs)("nav",{className:"headerhome__middle",children:[Object(s.jsx)("div",{className:"headerhome__icons",children:Object(s.jsx)("img",{src:C,alt:"",className:"header__icons"})}),Object(s.jsx)("div",{className:"headerhome__icons",children:Object(s.jsx)("img",{src:I,alt:"",className:"header__icons"})}),Object(s.jsx)("div",{className:"headerhome__icons",children:Object(s.jsx)("img",{src:S,alt:"",className:"header__icons"})}),Object(s.jsx)("div",{className:"headerhome__icons",children:Object(s.jsx)(l.b,{to:"/homebuy",children:Object(s.jsx)("img",{src:L,alt:"",className:"header__icons"})})})]}),Object(s.jsxs)("div",{className:"headerhome__right",children:[Object(s.jsx)("div",{className:"headerhome__user",children:Object(s.jsx)("h3",{className:"homeHeader__userName",children:null===t||void 0===t?void 0:t.displayName})}),Object(s.jsx)("div",{children:Object(s.jsx)(E.a,{})}),Object(s.jsx)("section",{children:Object(s.jsxs)("div",{className:"dropdown",children:[Object(s.jsx)(T.a,{className:"dropdown"}),Object(s.jsx)("div",{className:"dropdown-content",children:Object(s.jsx)("center",{children:Object(s.jsx)("a",{onClick:function(e){e.preventDefault(),p.signOut(),c.push("/login")},children:Object(s.jsx)("p",{children:"Cerrar sesion"})})})})]})})]})]})},A=(c(104),c(75)),M=c.n(A),P=Object(h.a)((function(e){return{button:{margin:e.spacing(1),backgroundColor:"#1770a0",padding:"5px",color:"white"}}})),R=function(){P();return Object(s.jsxs)("nav",{className:"header",children:[Object(s.jsx)("h1",{className:"header__name",children:" Tienda de mascotas"}),Object(s.jsxs)("div",{className:"header__shopping",children:[Object(s.jsx)(M.a,{}),Object(s.jsx)("span",{className:"shopping__count",children:"0"})]}),Object(s.jsx)("div",{className:"header__search",children:Object(s.jsx)("input",{type:"text",className:"header__searchInput",placeholder:"Buscar..."})}),Object(s.jsxs)("div",{className:"header__section",children:[Object(s.jsx)("div",{className:"headerhome__icons",children:Object(s.jsx)("img",{src:C,alt:"",className:"header__icons"})}),Object(s.jsx)("div",{className:"headerhome__icons",children:Object(s.jsx)("img",{src:I,alt:"",className:"header__icons"})}),Object(s.jsx)("div",{className:"headerhome__icons",children:Object(s.jsx)("img",{src:S,alt:"",className:"header__icons"})}),Object(s.jsx)("div",{className:"headerhome__icons",children:Object(s.jsx)("img",{src:L,alt:"",className:"header__icons"})}),Object(s.jsx)("div",{className:"header__avatar",children:Object(s.jsx)(E.a,{})})]})]})},U=(c(105),c(106),c.p+"static/media/post_photo.8182f128.png"),F=c.p+"static/media/post_lost.471e034e.png",W=c.p+"static/media/post_found.49f5f4e2.png";function H(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var V=Object(h.a)((function(e){return{paper:{position:"absolute",width:500,height:343,backgroundColor:e.palette.background.paper,border:"2px solid #DDDFE2",outline:"none",boxShadow:e.shadows[5],borderRadius:"5px"}}}));var z=function(e){var t=e.username,c=V(),n=Object(a.useState)(H),i=Object(r.a)(n,1)[0],o=Object(a.useState)(""),l=Object(r.a)(o,2),d=(l[0],l[1],Object(a.useState)("")),p=Object(r.a)(d,2),u=(p[0],p[1],Object(a.useState)("")),h=Object(r.a)(u,2),O=h[0],_=h[1],g=Object(a.useState)(!1),f=Object(r.a)(g,2),v=f[0],k=f[1],y=Object(a.useState)(0),w=Object(r.a)(y,2),C=w[0],S=(w[1],Object(a.useState)("")),I=Object(r.a)(S,2),L=I[0],B=I[1],T=Object(a.useState)(0),D=Object(r.a)(T,2),A=D[0],M=D[1],P=function(){k(!0)},R=function(){k(!1)};return Object(s.jsxs)("div",{className:"post",children:[Object(s.jsx)(N.a,{open:v,onClose:R,children:Object(s.jsx)("div",{style:i,className:c.paper,children:Object(s.jsxs)("form",{className:"post__commentAssign",children:[Object(s.jsxs)("div",{className:"post__top",children:[Object(s.jsx)(E.a,{className:"post__avatar",alt:""}),Object(s.jsx)("input",{className:"post__input",type:"text",onChange:function(e){return B(e.target.value)},onClick:P,placeholder:"\xbfTe gustaria comentar algo ".concat(t," ?")})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"post__option",onClick:function(){document.getElementsByClassName("postImage")[0].click()},children:[Object(s.jsx)("img",{src:U,className:"post__gallery",alt:""}),Object(s.jsx)("input",{type:"file",className:"postImage",onChange:function(e){e.target.files[0]&&_(e.target.files[0])}}),Object(s.jsx)("h3",{children:"Foto"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"imageupload__feedModal",children:[Object(s.jsx)("label",{class:"containerr",children:Object(s.jsx)("input",{type:"checkbox",checked:!0})}),Object(s.jsx)("br",{}),Object(s.jsx)("h2",{className:"imageText ".concat(O&&"show"),children:"Haz clic en postear para cargar la imagen"}),Object(s.jsx)("progress",{value:A,max:"100",className:"progress ".concat(A&&"show")}),Object(s.jsx)(x.a,{type:"submit",onClick:function(e){(e.preventDefault(),""===O)?b.collection("posts").add({timestamp:j.a.firestore.FieldValue.serverTimestamp(),caption:L,imageUrl:O,noLikes:C,username:t}):m.ref("images/".concat(O.name)).put(O).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);M(t)}),(function(e){console.log(e),alert(e.message)}),(function(){m.ref("images").child(O.name).getDownloadURL().then((function(e){b.collection("posts").add({timestamp:j.a.firestore.FieldValue.serverTimestamp(),caption:L,imageUrl:e,noLikes:C,username:t}),R(),M(0),B(""),_(null)}))}))},className:"imageupload__submitButton",children:"Postear"})]})]})})}),Object(s.jsxs)("div",{className:"post__top",children:[Object(s.jsx)(E.a,{}),Object(s.jsx)("form",{children:Object(s.jsx)("input",{type:"text",placeholder:"\xbfTe gustaria comentar algo ".concat(t," ?"),className:"post__input",onClick:P})})]}),Object(s.jsxs)("div",{className:"post__botton",onClick:k,children:[Object(s.jsxs)("div",{className:"post__option",children:[Object(s.jsx)("img",{src:U,alt:""}),Object(s.jsx)("h3",{children:"Foto/Video"})]}),Object(s.jsxs)("div",{className:"post__option",onClick:k,children:[Object(s.jsx)("img",{src:F,alt:""}),Object(s.jsx)("h3",{children:"Perdido"})]}),Object(s.jsxs)("div",{className:"post__option",onClick:k,children:[Object(s.jsx)("img",{src:W,alt:""}),Object(s.jsx)("h3",{children:"Encontrado"})]})]})]})},J=c(76),K=c.n(J),Q=c(77),Z=c.n(Q),$=c(78),q=c.n($);c(107);var G=function(e){var t=e.postId,c=e.origuser,n=e.username,i=e.userId,o=e.caption,l=e.imageUrl,d=e.noLikes,p=Object(a.useState)([]),m=Object(r.a)(p,2),u=m[0],h=m[1],O=Object(a.useState)(""),x=Object(r.a)(O,2),_=x[0],g=x[1],f=Object(a.useState)("like2"),v=Object(r.a)(f,2),N=v[0],k=v[1],y=Object(a.useState)("textforlike"),w=Object(r.a)(y,2),C=w[0],S=w[1];return Object(a.useEffect)((function(){var e;return t&&(e=b.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){h(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),Object(a.useEffect)((function(){b.collection("posts").doc(t).collection("likes").doc(i).get().then((function(e){e.data()&&("like2"===N?(k("like2 blue"),S("textforlike bluetextforlike")):(k("like2"),S("textforlike")))}))}),[t,i]),Object(s.jsxs)("div",{className:"postcard",children:[Object(s.jsxs)("div",{className:"postcard__header",children:[Object(s.jsx)(E.a,{src:"",alt:"",className:"postcard__avatar"}),Object(s.jsx)("div",{className:"postcard__headerInfo",children:Object(s.jsx)("h4",{className:"postcard__user",children:n})})]}),Object(s.jsx)("div",{className:"postcard__message",children:Object(s.jsx)("p",{children:o})}),Object(s.jsx)("div",{className:"postcard__image",children:Object(s.jsx)("img",{src:l,alt:""})}),Object(s.jsxs)("div",{className:"post__likeandlove",children:[Object(s.jsx)("i",{className:"post__like"}),Object(s.jsx)("i",{className:"post__heart"}),Object(s.jsxs)("p",{children:[d," Likes"]})]}),Object(s.jsxs)("div",{className:"postcard__options",children:[Object(s.jsxs)("div",{className:"postcard__option",onClick:function(e){e.preventDefault(),"like2"===N?(k("like2 blue"),S("textforlike bluetextforlike")):(k("like2"),S("textforlike")),b.collection("posts").doc(t).get().then((function(e){var c=e.data();console.log(N),"like2"===N?b.collection("posts").doc(t).collection("likes").doc(i).get().then((function(e){e.data()?console.log(e.data()):(b.collection("posts").doc(t).collection("likes").doc(i).set({likes:1}),b.collection("posts").doc(t).update({noLikes:c.noLikes+1}))})):b.collection("posts").doc(t).collection("likes").doc(i).delete().then((function(){b.collection("posts").doc(t).update({noLikes:c.noLikes-1})}))}))},children:[Object(s.jsx)(K.a,{className:N}),Object(s.jsx)("p",{className:C,children:" Me gusta"})]}),Object(s.jsxs)("div",{className:"postcard__option",children:[Object(s.jsx)(Z.a,{className:N}),Object(s.jsx)("p",{className:C,children:"Me encanta"})]}),Object(s.jsxs)("div",{className:"postcard__option",children:[Object(s.jsx)(q.a,{}),Object(s.jsx)("p",{children:"Mensaje"})]})]}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.collection("posts").doc(t).collection("comments").add({text:_,username:c,timestamp:j.a.firestore.FieldValue.serverTimestamp()}),g("")},children:[Object(s.jsxs)("div",{className:"commentBox",children:[Object(s.jsx)(E.a,{className:"post__avatar2",alt:"",src:""}),Object(s.jsx)("input",{className:"commentInputBox",type:"text",placeholder:"Comentar ... ",onChange:function(e){return g(e.target.value)}}),Object(s.jsx)("input",{type:"submit",disabled:!_,className:"transparent__submit"})]}),Object(s.jsx)("p",{className:"pressEnterToPost",children:"Press Enter to post"})]}),u.map((function(e){return Object(s.jsxs)("div",{className:"comments__show myself",children:[Object(s.jsx)(E.a,{className:"post__avatar2",alt:"",src:""}),Object(s.jsx)("div",{class:"container__comments",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{children:e.username}),Object(s.jsx)("i",{class:"post__verified"}),"\xa0 ",e.text]})})]})}))]})};var X=function(e){var t=e.user,c=Object(d.f)(""),n=Object(a.useState)([]),i=Object(r.a)(n,2),o=i[0],l=i[1];return console.log(t),void 0===t&&c.push("/login"),Object(a.useEffect)((function(){b.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(s.jsxs)("div",{className:"posts",children:[Object(s.jsx)(z,{username:null===t||void 0===t?void 0:t.displayName}),o.map((function(e){var c=e.id,a=e.post;return Object(s.jsx)(G,{postId:c,origuser:null===t||void 0===t?void 0:t.displayName,username:a.username,userId:t.uid,caption:a.caption,imageUrl:a.imageUrl,noLikes:a.noLikes},c)}))]})},Y=c(66),ee=c(26),te=c(79),ce=c.n(te),se=c(145),ae=Object(h.a)((function(e){return{search:Object(Y.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ee.b)(e.palette.common.white,.55),"&:hover":{backgroundColor:Object(ee.b)(e.palette.common.white,.85)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(8, 80, 120, 50)"},inputRoot:{color:"inherit"},inputInput:Object(Y.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),ne=function(){var e=ae();return Object(s.jsxs)("div",{className:e.search,children:[Object(s.jsx)("div",{className:e.searchIcon,children:Object(s.jsx)(ce.a,{})}),Object(s.jsx)(se.a,{placeholder:"Buscar...",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})},ie=(c(108),c.p+"static/media/tienda_de_mascotas.a0353408.png"),oe=function(){return Object(s.jsx)("div",{className:"HomeBuy__img",children:Object(s.jsx)("div",{className:"headerbuy__tienda",children:Object(s.jsx)("img",{src:ie,alt:"",className:"headerbuy__img"})})})};var re=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return p.onAuthStateChanged((function(e){n(e||!1)})),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(l.a,{children:Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{path:"/login",children:Object(s.jsx)(w,{})}),Object(s.jsx)(d.a,{path:"/signup",children:Object(s.jsx)(g,{})}),Object(s.jsxs)(d.a,{exact:!0,path:"/",children:[Object(s.jsx)(D,{user:c}),Object(s.jsx)(ne,{}),Object(s.jsx)("div",{className:"app__posts",children:Object(s.jsx)(X,{user:c})})]}),Object(s.jsx)(l.a,{children:Object(s.jsxs)(d.a,{path:"/homebuy",children:[Object(s.jsx)(R,{}),Object(s.jsx)(oe,{})]})})]})})})};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.492c95a9.chunk.js.map