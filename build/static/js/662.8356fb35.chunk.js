"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[662],{5212:function(e,n,t){var a=t(1413),c=t(5987),i=t(2791),l=t(2007),s=t.n(l),r=t(6907),o=t(184),d=["children","title","meta"],x=(0,i.forwardRef)((function(e,n){var t=e.children,i=e.title,l=void 0===i?"":i,s=e.meta,x=(0,c.Z)(e,d);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.ql,{children:[(0,o.jsx)("title",{children:"".concat(l," | fanticket")}),s]}),(0,o.jsx)("div",(0,a.Z)((0,a.Z)({ref:n},x),{},{children:t}))]})}));x.propTypes={children:s().node.isRequired,title:s().string,meta:s().node},n.Z=x},9242:function(e,n,t){t.d(n,{Z:function(){return r}});var a,c=t(168),i=t(7691),l=t(184),s=i.default.div(a||(a=(0,c.Z)(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    position: relative;\n    &:before {\n        content: '';\n        background-image: linear-gradient(0deg, #1c1c1c 24.45%, rgba(28, 28, 28, 0) 84.89%),\n            ",";\n\n        z-index: -1;\n        position: absolute;\n        background-size: cover;\n        background-repeat: no-repeat;\n        -webkit-filter: grayscale(100%) blur(17.5px);\n        filter: grayscale(100%) blur(17.5px);\n        background-position: center;\n        width: 100%;\n        height: 100%;\n    }\n"])),(function(e){return e.cover||'url("/images/background/main-banner-bg.jpg")'}));function r(e){return(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(s,{className:"pt-40",children:e.children})})}},2662:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var a=t(2860),c=t(9439),i=t(2791),l=t(7689),s=t(1539),r=t(2711),o=t(3197),d=t(9615),x=t(7892),u=t.n(x),h=t(5212),p=t(9242),f=t(4942),m=t(1087),j=t(3542),v=t(195),g=t(1652),b=t(4750),N=t(727),y=t(9746),Z=t(9894),w=t(184);function k(e){var n=e.label,t=e.icon,a=e.value,c=e.options,i=e.handleChange,l=((0,s.Z)().t,c.filter((function(e){return e._id===a}))),o=function(){var e=document.activeElement;null===e||void 0===e||e.blur()};return(0,w.jsxs)("div",{className:"dropdown",children:[(0,w.jsxs)("div",{className:"flex gap-4 px-6 py-[14px] items-center cursor-pointer bg-[#151515] rounded-2xl",tabIndex:0,children:[(0,w.jsx)("div",{className:"p-[12px] capitalize border-2 border-primary rounded-[14px] h-auto min-h-0",children:(0,w.jsx)(r.JO,{icon:t,className:"text-primary w-[27px] h-[27px]"})}),(0,w.jsxs)("div",{className:"flex flex-col",children:[(0,w.jsx)("h5",{className:"text-2xl",children:n}),(0,w.jsx)("p",{className:"text-stone-400 text-[14px]",children:l.length?l[0].name?l[0].name:l[0].city.name:"all"})]}),(0,w.jsx)(r.JO,{icon:"ic:outline-keyboard-arrow-down",className:"text-2xl"})]}),(0,w.jsx)("ul",{className:"dropdown-content mt-2 menu p-2 shadow bg-base-200 rounded-b-box w-72",children:c.map((function(e,n){return(0,w.jsx)("li",{children:(0,w.jsx)(m.rU,{onClick:function(){return n=e._id,i(n),void o();var n},className:"text-[17px] py-2 ".concat(l.length&&e._id===l[0]._id?"active":""),children:e.name?e.name:"".concat(e.city.name," \u2022 ").concat(e.city.countryCode)})},n)}))})]})}function C(e){var n=e.label,t=e.icon,a=e.value,l=e.handleChange,o=((0,s.Z)().t,(0,i.useState)(!1)),d=(0,c.Z)(o,2),x=d[0],h=d[1],p=function(){h(!1)},m=function(e){return new Date(e).toDateString()};return(0,w.jsxs)("div",{className:"dropdown",children:[(0,w.jsxs)("div",{className:"flex gap-4 px-6 py-[14px] items-center cursor-pointer bg-[#151515] rounded-2xl",onClick:function(){h(!0)},tabIndex:0,children:[(0,w.jsx)("div",{className:"p-[12px] capitalize border-2 border-primary rounded-[14px] h-auto min-h-0",children:(0,w.jsx)(r.JO,{icon:t,className:"text-primary w-[27px] h-[27px]"})}),(0,w.jsxs)("div",{className:"flex flex-col",children:[(0,w.jsx)("h5",{className:"text-2xl",children:n}),(0,w.jsx)("p",{className:"text-stone-400 text-[14px]",children:"all"!==a?"".concat(m(a[0])," ~ ").concat(m(a[1])):a})]}),(0,w.jsx)(r.JO,{icon:"ic:outline-keyboard-arrow-down",className:"text-2xl"})]}),(0,w.jsx)(j.Z,{open:x,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:(0,w.jsx)(v.Z,{children:(0,w.jsx)(g._,{dateAdapter:b.y,children:(0,w.jsx)(N.u,{value:"all"!==a?a:[u()(),u()()],sx:(0,f.Z)({},".".concat(y.j.contentWrapper),{alignItems:"center"}),onClose:p,onAccept:function(e){l(e),p()}})})})})]})}function S(){var e=(0,s.Z)().t,n=(0,l.s0)(),t=(0,i.useState)([]),x=(0,c.Z)(t,2),u=x[0],f=x[1],m=(0,i.useState)([]),j=(0,c.Z)(m,2),v=j[0],g=j[1],b=(0,i.useState)([]),N=(0,c.Z)(b,2),y=N[0],Z=N[1],S=(0,i.useState)("all"),_=(0,c.Z)(S,2),J=_[0],D=_[1],T=(0,i.useState)("all"),z=(0,c.Z)(T,2),E=z[0],O=z[1],V=(0,i.useState)("all"),I=(0,c.Z)(V,2),M=I[0],R=I[1],q=(0,i.useState)(1),A=(0,c.Z)(q,2),L=A[0],F=A[1],K=(0,i.useState)(!1),P=(0,c.Z)(K,2),Q=(P[0],P[1]),U=function(e,n){"location"===n&&R(e),"category"===n&&D(e),"date"===n&&O(e)};return(0,i.useEffect)((function(){var e={category:J,location:M,date:E};d.Z.post("".concat(o.Xz.getFilterList),e).then((function(e){var n=e.data;f(n.data),Q(!1)})).catch((function(e){Q(!1)}))}),[J,M,E]),(0,i.useEffect)((function(){Q(!0),d.Z.get("".concat(o.Xz.getList)).then((function(e){var n=e.data;f(n.data),Q(!1)})).catch((function(e){Q(!1)})),Q(!0),d.Z.get("".concat(o.eq.root)).then((function(e){var n=e.data;g(n.data),Q(!1)})).catch((function(e){Q(!1)})),Q(!0),d.Z.get("".concat(o.QK.root)).then((function(e){var n=e.data;Z(n.data),Q(!1)})).catch((function(e){Q(!1)}))}),[]),(0,w.jsx)(h.Z,{title:"Search Events",children:(0,w.jsx)(p.Z,{children:(0,w.jsxs)("div",{className:"container mb-8 px-2",children:[(0,w.jsxs)("div",{className:"flex flex-col justify-center w-full gap-2 mb-16",children:[(0,w.jsx)("h4",{className:"text-4xl md:text-[64px]",children:e("title.search_events")}),(0,w.jsx)("p",{className:"text-stone-400",children:e("description.search_events")})]}),(0,w.jsxs)("div",{className:"flex flex-col justify-center w-full gap-8",children:[(0,w.jsxs)("div",{className:"flex gap-6 flex-wrap",children:[(0,w.jsx)(k,{label:e("title.ticket_ads_location"),value:M,options:v,icon:"heroicons:map-pin-solid",handleChange:function(e){return U(e,"location")}}),(0,w.jsx)(C,{label:e("title.date"),value:E,icon:"gala:calendar",handleChange:function(e){return U(e,"date")}}),(0,w.jsx)(k,{label:e("title.category"),value:J,options:y,icon:"bx:category",handleChange:function(e){return U(e,"category")}})]}),u.length?(0,w.jsx)("div",{className:"grid md:grid-cols-3 gap-8",children:u.slice(0,18*L).map((function(e,t){return(0,w.jsx)("div",{onClick:function(){return t=null===e||void 0===e?void 0:e._id,void n("/event/".concat(t,"/basic"));var t},className:"bg-[#2C2C2C] rounded-2xl cursor-pointer hover:bg-[#2C2C2C]/50",children:(0,w.jsxs)("div",{className:"flex gap-2 justify-between py-4 px-6 items-center",children:[(0,w.jsxs)("div",{className:"flex flex-col ",children:[(0,w.jsx)("h5",{className:"text-[19px]",children:e.name}),(0,w.jsx)("p",{className:"text-stone-400 text-[11px]",children:"".concat((a=e.dateTime,new Date(a).toDateString())," \u2022 ").concat(e.location.city.name," \u2022 ").concat(e.location.city.countryCode)})]}),(0,w.jsx)("div",{children:(0,w.jsxs)("div",{className:"bg-base-300 rounded-full px-3 py-1 flex justify-center items-center text-primary",children:[(0,w.jsx)(r.JO,{icon:"system-uicons:ticket",width:20}),(0,w.jsx)("h6",{className:"text-base",children:"3"})]})})]})},t);var a}))}):(0,w.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,w.jsx)("h4",{className:"text-5xl",children:e("message.no_events_fount")}),(0,w.jsx)("p",{className:"text-stone-400",children:e("message.filters_no_result")})]}),(null===u||void 0===u?void 0:u.length)>18&&(0,w.jsxs)("div",{className:"flex justify-center items-center gap-4 w-full",children:[(0,w.jsx)("button",{className:"btn border-primary btn-circle btn-sm w-10 h-10",onClick:function(){F((0,a.Z)("step"))},children:(0,w.jsx)(r.JO,{className:"text-primary text-3xl",icon:"ic:outline-plus"})}),(0,w.jsx)("h5",{className:"text-[19px]",children:e("action.more_events")})]})]})]})})})}Z.T.setLicenseKey("x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e")}}]);
//# sourceMappingURL=662.8356fb35.chunk.js.map