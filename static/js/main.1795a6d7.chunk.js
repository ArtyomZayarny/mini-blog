(this["webpackJsonpmini-blog"]=this["webpackJsonpmini-blog"]||[]).push([[0],{16:function(e,t,n){e.exports={miniBlog:"MiniBlog_miniBlog__1zWH1"}},18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},4:function(e,t,n){e.exports={show:"PostItem_show__N3f4h",none:"PostItem_none__31BLt"}},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(14),r=n.n(c),l=(n(23),n(3)),i=n(2),u=n(4),s=n.n(u),m=function(e){var t=Object(l.a)({},e),n=t.title,c=t.body,r=t.onSelect,u=Object(a.useState)(!1),m=Object(i.a)(u,2),h=m[0],f=m[1];return o.a.createElement("li",{className:s.a.postItem,onClick:function(){f(!h),r(e.userId)}},o.a.createElement("h3",null,n),o.a.createElement("div",{className:h?s.a.show:s.a.none},c))},h=n(15),f=n.n(h).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),b=function(e){var t=Object(a.useState)({data:[]}),n=Object(i.a)(t,2),o=n[0],c=n[1],r=Object(a.useState)({fetch:!1}),l=Object(i.a)(r,2),u=l[0],s=l[1];return Object(a.useEffect)((function(){s({fetch:!0}),f.get(e).then((function(e){c(e.data),s({fetch:!1})}))}),[e]),[o,u]},d=function(e){var t=b("/posts"),n=Object(i.a)(t,2),c=n[0],r=(n[1],Object(a.useState)([])),l=Object(i.a)(r,2),u=l[0],s=l[1];return Object(a.useEffect)((function(){s(c)}),[c]),o.a.createElement("ul",null,o.a.createElement("h2",null,"Post List"),u.length>0&&u.map((function(t){return o.a.createElement(m,{key:t.id,title:t.title,body:t.body,userId:t.userId,onSelect:e.onSelect})})))},j=n(17),E=function(e){var t=e.authorId,n=(Object(j.a)(e,["authorId"]),b("/users/".concat(t))),c=Object(i.a)(n,2),r=c[0],l=(c[1],Object(a.useState)({name:"",email:"",phone:0})),u=Object(i.a)(l,2),s=u[0],m=u[1];return Object(a.useEffect)((function(){r.id&&m(r)}),[r]),o.a.createElement("div",{className:"author"},o.a.createElement("h3",null,"AuthorInfo"),o.a.createElement("p",null,"Name : ",s.name),o.a.createElement("p",null,"E-mail : ",s.email),o.a.createElement("p",null,"Phone : ",s.phone))},O=n(16),p=n.n(O),I=function(){var e=Object(a.useState)({authorID:null}),t=Object(i.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:p.a.miniBlog},o.a.createElement(d,{onSelect:function(e){c(Object(l.a)(Object(l.a)({},n),{},{authorID:e}))}}),n.authorID&&o.a.createElement(E,{authorId:n.authorID}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1795a6d7.chunk.js.map