"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[274],{1607:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(1413),a=n(5987),l=(n(2791),n(184)),c=["label","color","className"];function s(e){var t=e.label,n=e.color,s=e.className,r=void 0===s?"":s,o=(0,a.Z)(e,c);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",(0,i.Z)((0,i.Z)({className:"px-2 py-0.5 bg-".concat(n," text-sm rounded-full ").concat(r)},o),{},{children:(0,l.jsx)("span",{children:t})}))})}},5212:function(e,t,n){var i=n(1413),a=n(5987),l=n(2791),c=n(2007),s=n.n(c),r=n(6907),o=n(184),d=["children","title","meta"],u=(0,l.forwardRef)((function(e,t){var n=e.children,l=e.title,c=void 0===l?"":l,s=e.meta,u=(0,a.Z)(e,d);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.ql,{children:[(0,o.jsx)("title",{children:"".concat(c," | fanticket")}),s]}),(0,o.jsx)("div",(0,i.Z)((0,i.Z)({ref:t},u),{},{children:n}))]})}));u.propTypes={children:s().node.isRequired,title:s().string,meta:s().node},t.Z=u},2821:function(e,t,n){n.d(t,{Z:function(){return r},i:function(){return o}});var i,a=n(168),l=n(7691),c=n(184),s=l.default.div(i||(i=(0,a.Z)(["\n    border-radius: 16px;\n    width: 100%;\n    cursor: pointer;\n    border: 1px;\n    border-style: solid;\n    border-color: transparent;\n\n    display: inline-flex;\n    justify-content: space-between;\n    position: relative;\n    background: linear-gradient(#1c1c1c, #1c1c1c) padding-box, linear-gradient(to bottom, #828282, #323232) border-box;\n"])));function r(e){return(0,c.jsx)(s,{className:null===e||void 0===e?void 0:e.className,children:(0,c.jsx)("div",{className:"w-full ".concat((null===e||void 0===e?void 0:e.isMessage)&&"bg-primary/30"," rounded-xl ").concat((null===e||void 0===e?void 0:e.hoverEvent)&&"hover:bg-primary/20"," "),onClick:null===e||void 0===e?void 0:e.onClick,children:e.children})})}var o=function(e){var t=e.cls,n=void 0===t?"":t;return(0,c.jsx)("div",{className:"divider overflow-hidden ".concat(n),style:{height:1}})}},9242:function(e,t,n){n.d(t,{Z:function(){return r}});var i,a=n(168),l=n(7691),c=n(184),s=l.default.div(i||(i=(0,a.Z)(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    position: relative;\n    &:before {\n        content: '';\n        background-image: linear-gradient(0deg, #1c1c1c 24.45%, rgba(28, 28, 28, 0) 84.89%),\n            ",";\n\n        z-index: -1;\n        position: absolute;\n        background-size: cover;\n        background-repeat: no-repeat;\n        -webkit-filter: grayscale(100%) blur(17.5px);\n        filter: grayscale(100%) blur(17.5px);\n        background-position: center;\n        width: 100%;\n        height: 100%;\n    }\n"])),(function(e){return e.cover||'url("/images/background/main-banner-bg.jpg")'}));function r(e){return(0,c.jsx)("div",{className:"w-full",children:(0,c.jsx)(s,{className:"pt-40",children:e.children})})}},1274:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var i=n(4165),a=n(5861),l=n(9439),c=n(2791),s=n(7689),r=n(5985),o=n(3197),d=n(1539),u=n(9615),m=n(2654),v=n(5212),f=n(9242),x=n(1087),p=n(7087),h=n(2711),b=n(2821),j=n(848),g=n(1607),y=n(184);function k(e){var t,n,r,v,f,k,N,Z,w,C=e.ticket,S=e.event,_=e.type,E=e.onDispute,M=e.onReturn,D=e.onRefund,I=(0,d.Z)().t,L=(0,s.s0)(),T=(0,j.Z)().received,z=(0,c.useState)(!0),F=(0,l.Z)(z,2),q=F[0],U=F[1],R=(0,c.useState)(!1),A=(0,l.Z)(R,2),B=A[0],H=A[1],X=(0,c.useState)(!1),Y=(0,l.Z)(X,2),O=Y[0],$=Y[1],J="success";"inprogress"===C.status?J="red-500":"sold"!==C.status&&(J="sky");var K=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o.U7.getDisputeTicket,"/").concat(C._id)).then((function(e){var t,n=e.status,i=e.data;200===n&&(null!==(t=i.data)&&void 0!==t&&t.dispute?$(!0):H(!(null!==C&&void 0!==C&&C.dispute)))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.post(o.vp.setCancelTicket,{ticketId:C._id}).then((function(e){var t=e.status;e.data;200===t&&L("/ticket/my-tickets")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){"my-ticket"===_&&K()}),[C]),(0,c.useEffect)((function(){if(T&&null!==T&&void 0!==T&&T.command){var e=T.command,t=T.id;e===o.LY.DISABLE_DISPUTE&&t===C._id&&H(!0),e===o.LY.DISABLE_CANCEL&&t===C._id&&U(!1)}}),[T]),(0,y.jsx)("div",{className:"w-full h-full cursor-pointer",children:(0,y.jsx)(b.Z,{children:(0,y.jsxs)("div",{className:"flex flex-col w-full gap-8 p-4 items-start",children:[(0,y.jsxs)("div",{className:"flex gap-6 w-full",children:[(0,y.jsx)("div",{className:"avatar w-1/5 h-20",children:(0,y.jsx)(p.LazyLoadImage,{src:"".concat(o.E0).concat(C.avatar),alt:"",effect:"blur",className:"aspect-square rounded-xl"})}),(0,y.jsxs)("div",{className:"flex flex-col w-full",children:[(0,y.jsx)("label",{className:"text-[19px] capitalize",children:null===S||void 0===S?void 0:S.name}),(0,y.jsx)("span",{className:"text-base text-stone-400",children:(0,m.UX)(null===C||void 0===C?void 0:C.dateTime)}),(0,y.jsxs)("div",{className:"flex justify-between",children:[(0,y.jsx)("span",{className:"text-sm text-primary",children:"1 ".concat(I("title.ticket"))}),(0,y.jsx)("span",{className:"text-sm text-stone-400",children:"".concat((0,m.DY)(C.purchasedTime))})]})]})]}),(0,y.jsx)(b.Z,{className:"w-full p-4 event-active-bg",style:{justifyContent:"start"},children:(0,y.jsxs)("div",{className:"flex gap-4",children:[(0,y.jsx)("div",{children:(0,y.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,y.jsx)("path",{d:"M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM13.395 9.882L11.895 16.9395C11.79 17.4495 11.9385 17.739 12.351 17.739C12.642 17.739 13.0815 17.634 13.38 17.37L13.248 17.994C12.8175 18.513 11.868 18.891 11.0505 18.891C9.996 18.891 9.5475 18.258 9.8385 16.9125L10.9455 11.7105C11.0415 11.271 10.9545 11.112 10.515 11.0055L9.8385 10.884L9.9615 10.3125L13.3965 9.882H13.395ZM12 8.25C11.6022 8.25 11.2206 8.09196 10.9393 7.81066C10.658 7.52936 10.5 7.14782 10.5 6.75C10.5 6.35218 10.658 5.97064 10.9393 5.68934C11.2206 5.40804 11.6022 5.25 12 5.25C12.3978 5.25 12.7794 5.40804 13.0607 5.68934C13.342 5.97064 13.5 6.35218 13.5 6.75C13.5 7.14782 13.342 7.52936 13.0607 7.81066C12.7794 8.09196 12.3978 8.25 12 8.25Z",fill:"#F2B705"})})}),(0,y.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,y.jsx)("p",{className:"text-[19px]",children:I("description.sold_ticket_desc")}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:"text-[19px]",children:"1 ".concat(I("title.ticket"))}),(0,y.jsx)("p",{className:"text-sm text-stone-400",children:null===S||void 0===S?void 0:S.name})]}),(0,y.jsxs)("div",{className:"flex gap-6 items-center flex-wrap",children:[(0,y.jsx)(x.rU,{to:"/ticket/manage/".concat(C._id),className:"text-primary underline",children:I("action.see_ad")}),(0,y.jsx)("span",{className:"text-primary underline",children:I("action.help")}),(0,y.jsx)("a",{href:"".concat(o.E0).concat(null!==C&&void 0!==C&&null!==(t=C.return)&&void 0!==t&&t.file?null===C||void 0===C||null===(n=C.return)||void 0===n?void 0:n.file:null===C||void 0===C?void 0:C.uploadedFile),download:!0,className:"text-primary",children:(0,y.jsx)(h.JO,{icon:"et:download",width:25,height:20})}),(null===S||void 0===S?void 0:S.removed)&&(null===C||void 0===C||null===(r=C.return)||void 0===r?void 0:r.state)&&"my-ticket"===_&&(0,y.jsx)("button",{className:"btn btn-primary".concat(null!==C&&void 0!==C&&null!==(v=C.return)&&void 0!==v&&v.file?"/100":""," btn-sm"),onClick:M,children:I("action.".concat(null!==C&&void 0!==C&&null!==(f=C.return)&&void 0!==f&&f.file?"returned":"return_ticket"))}),(null===S||void 0===S?void 0:S.removed)&&(null===C||void 0===C||null===(k=C.return)||void 0===k?void 0:k.state)&&"my-ticket"!==_&&(0,y.jsx)("button",{className:"btn btn-primary btn-sm tooltip",disabled:!(null!==C&&void 0!==C&&null!==(N=C.return)&&void 0!==N&&N.file)||(null===C||void 0===C?void 0:C.refund),onClick:D,"data-tip":I("action.refund_payment"),children:I("action.".concat(null!==C&&void 0!==C&&C.refund?"refunded":"refund"))}),!(null!==S&&void 0!==S&&S.removed)&&"my-ticket"===_&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{className:"btn btn-primary btn-sm",onClick:E,disabled:O||B,children:I("action.".concat(O?"disputed":"dispute"))}),q&&(0,y.jsx)("button",{className:"btn btn-primary btn-sm",onClick:P,children:I("action.cancel")})]}),!(null!==C&&void 0!==C&&null!==(Z=C.return)&&void 0!==Z&&Z.state)&&"my-ticket"!==_&&(0,y.jsx)(g.Z,{label:null===C||void 0===C||null===(w=C.status)||void 0===w?void 0:w.replaceAll("_"," "),color:J})]})]})]})})]})})})}n(7870);var N=n(7364);function Z(e){var t=e.ticket,n=e.onClose,i=e.onSend,a=(0,d.Z)().t,s=(0,c.useState)(""),r=(0,l.Z)(s,2),o=r[0],u=r[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("input",{type:"checkbox",id:"ticket-dispute-modal",className:"modal-toggle"}),(0,y.jsx)("div",{className:"modal",children:(0,y.jsxs)(N.j,{className:"modal-box backdrop-blur-lg",children:[(0,y.jsxs)("div",{className:"mb-2",children:[(0,y.jsx)("label",{htmlFor:"ticket-dispute-modal",className:"btn btn-sm btn-circle absolute right-2 top-5 bg-transparent border-0",children:"\u2715"}),(0,y.jsx)("h3",{className:"font-bold text-lg",children:a("action.dispute")})]}),(0,y.jsx)("hr",{className:"-mx-5 border-stone-500"}),(0,y.jsxs)("div",{className:"flex flex-col gap-4 p-2 mb-4",children:[(0,y.jsxs)("span",{className:"text-stone-400 -mb-2",children:[a("label.reason")," : "]}),(0,y.jsx)(b.Z,{children:(0,y.jsx)("div",{className:"p-2 w-full flex",children:(0,y.jsx)("textarea",{className:"textarea w-full",rows:3,value:o,onChange:function(e){return u(e.target.value)}})})})]}),(0,y.jsxs)("div",{className:"flex justify-between gap-2 p-2",children:[(0,y.jsx)("button",{className:"btn btn-primary px-8 capitalize btn-outline",onClick:function(){return n("cancel")},children:a("action.cancel")}),(0,y.jsx)("button",{className:"btn btn-primary px-8 capitalize",onClick:function(){i({ticketId:null===t||void 0===t?void 0:t._id,content:o})},children:a("action.continue")})]})]})})]})}function w(e){var t,n=e.ticket,i=e.onClose,a=e.onSend,s=(0,d.Z)().t,r=(0,c.useState)(""),o=(0,l.Z)(r,2),u=o[0],m=o[1],v=(0,c.useState)({}),f=(0,l.Z)(v,2),x=f[0],p=f[1],h=(0,c.useState)(!1),j=(0,l.Z)(h,2),g=j[0],k=j[1];return(0,c.useEffect)((function(){var e;m(null===n||void 0===n||null===(e=n.return)||void 0===e?void 0:e.content)}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("input",{type:"checkbox",id:"ticket-return-modal",className:"modal-toggle"}),(0,y.jsx)("div",{className:"modal",children:(0,y.jsxs)(N.j,{className:"modal-box backdrop-blur-lg",children:[(0,y.jsxs)("div",{className:"mb-2",children:[(0,y.jsx)("label",{htmlFor:"ticket-return-modal",className:"btn btn-sm btn-circle absolute right-2 top-5 bg-transparent border-0",children:"\u2715"}),(0,y.jsx)("h3",{className:"font-bold text-lg capitalize",children:s("action.return_ticket")})]}),(0,y.jsx)("hr",{className:"-mx-5 border-stone-500"}),(0,y.jsxs)("div",{className:"flex flex-col gap-4 p-2 mb-4",children:[(0,y.jsxs)("span",{className:"text-stone-400 -mb-2",children:[s("title.ticket")," : "]}),(0,y.jsx)("input",{type:"file",accept:".jpg, .png, .bmp, .webp, .pdf",onChange:function(e){var t,n;null!==(t=e.target)&&void 0!==t&&t.files[0]?k(!0):k(!1),p(null===(n=e.target)||void 0===n?void 0:n.files[0])},className:"file-input file-input-bordered file-input-warning w-full mt-2"}),(0,y.jsxs)("span",{className:"text-stone-400 -mb-2",children:[s("label.message")," : "]}),(0,y.jsx)(b.Z,{children:(0,y.jsx)("div",{className:"p-2 w-full flex",children:(0,y.jsx)("textarea",{className:"textarea w-full",rows:2,value:u,onChange:function(e){return m(e.target.value)}})})})]}),(0,y.jsxs)("div",{className:"flex justify-between gap-2 p-2",children:[(0,y.jsx)("button",{className:"btn btn-primary px-8 capitalize btn-outline",onClick:function(){return i("cancel")},children:s("action.cancel")}),(0,y.jsx)("button",{className:"btn btn-primary px-8 capitalize",disabled:!u||!g,onClick:function(){a({ticketId:null===n||void 0===n?void 0:n._id,file:x,content:u})},children:s("action.".concat(null!==n&&void 0!==n&&null!==(t=n.return)&&void 0!==t&&t.file?"update":"continue"))})]})]})})]})}function C(){var e,t=(0,s.TH)(),n=(0,s.s0)(),x=(0,d.Z)().t,p=(0,s.UO)().eventId,h=(0,c.useState)([]),j=(0,l.Z)(h,2),N=j[0],C=j[1],S=(0,c.useState)(),_=(0,l.Z)(S,2),E=_[0],M=_[1],D=(0,c.useState)(""),I=(0,l.Z)(D,2),L=I[0],T=I[1],z=(0,c.useState)({}),F=(0,l.Z)(z,2),q=F[0],U=F[1],R=(0,c.useState)({}),A=(0,l.Z)(R,2),B=A[0],H=A[1],X=(0,c.useState)(!1),Y=(0,l.Z)(X,2),O=(Y[0],Y[1]),$=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:L,e.next=3,u.Z.get("".concat(o.Xz.getMyEventDetail,"/").concat(p).concat(void 0!==L?"?type=".concat(t):"")).then((function(e){var t;M(e.data.data),C((null===(t=e.data.data)||void 0===t?void 0:t.tickets)||[])}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e,n=null===(e=t.state)||void 0===e?void 0:e.type;T(n),p&&$(n)}),[p,t]),(0,y.jsx)(v.Z,{title:"Event Detail",children:(0,y.jsxs)(f.Z,{children:[(0,y.jsxs)("div",{className:"container p-4",children:[(0,y.jsxs)("div",{className:"w-full justify-center flex flex-col mb-16",children:[(0,y.jsx)("h4",{className:"text-4xl md:text-[64px]",children:x("title.".concat("my-list"===L?"menu.my_listing":"tickets"))}),(0,y.jsx)("p",{className:"text-stone-400 mt-4",children:x("my-list"===L?"description.".concat(N.length?"my_listing":"empty_my_listing"):"description.my_tickets")})]}),(0,y.jsx)("div",{className:"w-full md:w-1/2 mb-8",children:(0,y.jsx)(b.Z,{className:"flex px-6 py-[19px]",children:(0,y.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,y.jsxs)("div",{className:"flex gap-6",children:[(0,y.jsx)("img",{src:"".concat(o.E0,"uploads/ticket_avatar/default-ticket.svg"),className:"w-16 h-20 rounded-xl ",alt:""}),(0,y.jsxs)("div",{className:"flex items-stretch justify-between flex-col gap-1 w-full",children:[(0,y.jsx)("label",{className:"text-[19px] capitalize",children:null===E||void 0===E?void 0:E.name}),(0,y.jsx)("span",{className:"text-base text-stone-400",children:(0,m.UX)(null===E||void 0===E?void 0:E.dateTime)}),(0,y.jsxs)("div",{className:"flex justify-between",children:[(0,y.jsx)("span",{className:"text-sm text-primary",children:"".concat(null===E||void 0===E||null===(e=E.tickets)||void 0===e?void 0:e.length," ").concat(x("title.tickets"))}),(null===E||void 0===E?void 0:E.removed)&&(0,y.jsx)(g.Z,{label:x("label.removed"),color:"red-500"})]})]})]}),(0,y.jsx)("span",{className:"text-primary underline",children:x("action.see_ad")})]})})}),(0,y.jsx)("h4",{className:"text-[28px] w-1/2 mb-4",children:x("action.past_events")}),(0,y.jsx)("div",{className:"grid md:grid-cols-2 gap-8 mb-8",children:E&&(null===N||void 0===N?void 0:N.map((function(e,t){return(0,y.jsx)(k,{ticket:e,event:E,type:L,onDispute:function(){return t=e,void("my-ticket"===L&&(U(t),document.querySelector("#ticket-dispute-modal").click()));var t},onReturn:function(){return t=e,void("my-ticket"===L&&(H(t),document.querySelector("#ticket-return-modal").click()));var t},onRefund:function(){return t=e,void("my-ticket"!==L&&(O(!0),u.Z.post(o.vp.refundTicket,{ticketId:t._id}).then((function(e){var t=e.status,n=e.data;200===t&&r.Am.success(null===n||void 0===n?void 0:n.message)})).catch((function(e){})).finally((function(){O(!1)}))));var t}},t)})))})]}),!(null!==E&&void 0!==E&&E.removed)&&"my-ticket"===L&&(0,y.jsx)(Z,{onSend:function(e){var t=e.ticketId,i=e.content;O(!0),u.Z.post(o.U7.sendDisputeRequest,{ticketId:t,content:i}).then((function(e){200===e.status&&n("/conversation/list")})).catch((function(e){})).finally((function(){O(!1)}))},ticket:q,onClose:function(){document.querySelector("#ticket-dispute-modal").click()}}),(null===E||void 0===E?void 0:E.removed)&&"my-ticket"===L&&(0,y.jsx)(w,{onSend:function(e){var t=e.ticketId,n=e.content,i=e.file;O(!0);var a=new FormData;a.append("ticketId",t),a.append("content",n),a.append("file",i),u.Z.post(o.vp.returnTicket,a).then((function(e){var t=e.status,n=e.data;200===t&&r.Am.success(null===n||void 0===n?void 0:n.message),document.querySelector("#ticket-return-modal").click()})).catch((function(e){})).finally((function(){O(!1)}))},ticket:B,onClose:function(){document.querySelector("#ticket-return-modal").click()}})]})})}},7870:function(e,t,n){n.d(t,{FK:function(){return c},e_:function(){return l},v1:function(){return s}});var i=n(6098),a=n.n(i);function l(e){return a()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function c(e){return a()(e).format()}function s(e){return a()(e).format("0.00a").replace(".00","")}},2654:function(e,t,n){n.d(t,{DY:function(){return r},UX:function(){return o},gC:function(){return c},uW:function(){return l},xD:function(){return d},zM:function(){return s}});var i=n(9158),a=n(5939);function l(e){return e.containsTime?s(e.dateTime):c(e.dateTime)}function c(e){return(0,i.Z)(new Date(e),"dd MMM yyyy")}function s(e){return(0,i.Z)(new Date(e),"dd MMM yyyy HH:mm")}function r(e){try{return(0,a.Z)(new Date(e),{addSuffix:!0})}catch(t){return"Invaild Date"}}function o(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{return t?(0,i.Z)(new Date(e),"EEEE dd, MMMM, yyyy p"):(0,i.Z)(new Date(e),"EEEE dd, MMMM, yyyy")}catch(n){return"".concat(e)}}function d(e){try{return(0,i.Z)(new Date(e),"MMM, dd EEE")}catch(t){return"".concat(e)}}}}]);
//# sourceMappingURL=274.1cdfe9b0.chunk.js.map