"use strict";(self.webpackChunkreact_01=self.webpackChunkreact_01||[]).push([[672],{5672:function(s,e,a){a.r(e),a.d(e,{default:function(){return M}});a(2791);var n=a(2807),i="Dialogs_dialogs__4aYpv",r="Dialogs_dialogsItems__lPBP+",o="Dialogs_dialog__5sLjs",d="Dialogs_active__o7qrP",t="Dialogs_messages__DPdTf",l="Dialogs_message__uEltY",c=a(3504),g=a(184),u=function(s){var e="/dialogs/"+s.id;return(0,g.jsx)("div",{className:o+" "+d,children:(0,g.jsxs)(c.OL,{to:e,children:[" ",(0,g.jsx)("img",{src:s.avatar}),"  ",s.name]})})},m=function(s){return(0,g.jsxs)("div",{className:l,children:[" ",s.message," "]})},_=a(6871),f=a(6139),j=a(704),x=a(9086),h=a(5304),v=(0,h.D)(50),D=(0,j.Z)({form:"dialogAddMessageForm"})((function(s){return(0,g.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,g.jsx)("div",{children:(0,g.jsx)(f.Z,{component:x.gx,validate:[h.F,v],name:"newMessageBody",placeholder:"Enter your message"})}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"Send"})})]})})),p=function(s){var e=s.dialogsPage,a=e.dialogs.map((function(s){return(0,g.jsx)(u,{name:s.name,id:s.id,avatar:s.avatar})})),n=e.messages.map((function(s){return(0,g.jsx)(m,{message:s.message})}));e.newMessageBody;return s.isAuth?(0,g.jsxs)("div",{className:i,children:[(0,g.jsx)("div",{className:r,children:a}),(0,g.jsx)("div",{className:t,children:n}),(0,g.jsx)(D,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]}):(0,g.jsx)(_.Fg,{to:"/login"})},P=a(364),b=a(1103),M=(0,a(7781).qC)((0,P.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s((0,n.X)(e))}}})),b.D)(p)}}]);
//# sourceMappingURL=672.504f3c1e.chunk.js.map