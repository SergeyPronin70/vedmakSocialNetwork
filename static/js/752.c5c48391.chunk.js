"use strict";(self.webpackChunkreact_01=self.webpackChunkreact_01||[]).push([[752],{752:function(e,s,t){t.r(s),t.d(s,{default:function(){return W}});var i=t(1413),n=t(5671),o=t(3144),r=t(136),l=t(5716),u=t(2791),a=t(364),c=t(885),d=t(2465),h="ProfileInfo_descriptionBlock__rLfn1",f="ProfileInfo_mainPhoto__dlEIJ",p="ProfileInfo_contact__WsOPj",x=t(184),j=function(e){var s=(0,u.useState)(!1),t=(0,c.Z)(s,2),i=t[0],n=t[1],o=(0,u.useState)(e.status),r=(0,c.Z)(o,2),l=r[0],a=r[1];(0,u.useEffect)((function(){a(e.status)}),[e.status]);return(0,x.jsxs)("div",{children:[!i&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Status:"})," ",(0,x.jsxs)("span",{onDoubleClick:function(){n(!0)},children:[" ",e.status||"---","  "]})]}),i&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(l)},onChange:function(e){a(e.currentTarget.value)},value:l})})]})},v=t(8478),m=t(704),b=t(9086),P=t(9234),k=(0,m.Z)({form:"edit-profile"})((function(e){var s=e.handleSubmit,t=e.profile,i=e.error;return(0,x.jsxs)("form",{onSubmit:s,children:[(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"Save"})}),i&&(0,x.jsx)("div",{className:P.Z.formSummaryError,children:i}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name"}),":",(0,b.SP)("Full name","fullName",b.II,[])]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job"}),":",(0,b.SP)("","lookingForAJob",b.II,[],{type:"checkbox"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),":",(0,b.SP)("My professional skills","lookingForAJobDescription",b.gx,[])]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),":",(0,b.SP)("About me","aboutMe",b.gx,[])]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"})," ",Object.keys(t.contacts).map((function(e){return(0,x.jsx)("div",{className:p,children:(0,x.jsxs)("b",{children:[e,": ",(0,b.SP)(e,"contacts."+e,b.II,[])]})},e)}))]})]})})),g=function(e){var s=e.profile,t=e.isOwner,i=e.goToEditMode;return(0,x.jsxs)("div",{children:[t&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{onClick:i,children:"edit"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name:"})," ",s.fullName]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job:"})," ",s.lookingForAJob?"Yes":"No"]}),s.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills:"})," ",s.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me:"})," ",s.aboutMe]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"})," ",Object.keys(s.contacts).map((function(e){return(0,x.jsx)(S,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})]})},S=function(e){var s=e.contactTitle,t=e.contactValue;return(0,x.jsxs)("div",{className:p,children:[(0,x.jsxs)("b",{children:[" ",s," "]})," : ",t," "]})},C=function(e){var s=e.profile,t=e.status,i=e.updateStatus,n=e.isOwner,o=e.savePhoto,r=e.saveProfile,l=(0,u.useState)(!1),a=(0,c.Z)(l,2),p=a[0],m=a[1];if(!s)return(0,x.jsx)(d.Z,{});return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("img",{src:s.photos.large||v,className:f}),n&&(0,x.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),p?(0,x.jsx)(k,{initialValues:s,profile:s,onSubmit:function(e){r(e).then((function(){m(!1)}))}}):(0,x.jsx)(g,{goToEditMode:function(){m(!0)},profile:s,isOwner:n}),(0,x.jsx)(j,{status:t,updateStatus:i})]})})},_=t(6070),I=t(2982),y="MyPosts_postsBlock__1XxYT",Z="MyPosts_posts__xQNWy",A="Post_item__3wAQf",w=function(e){var s=(0,u.useState)(0),t=(0,c.Z)(s,2);t[0],t[1];return(0,x.jsxs)("div",{className:A,children:[(0,x.jsx)("img",{src:"https://cs4.pikabu.ru/post_img/big/2015/05/22/6/1432282614_1753581065.jpg"}),(0,x.jsx)("h2",{children:e.message}),(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"Likes"})," ",e.likesCount,(0,x.jsx)("button",{onClick:function(){e.incrementLikesCount(e.id),console.log(e)},children:"Like"}),(0,x.jsx)("button",{onClick:e.decrementLikesCount,children:"Dislike"}),(0,x.jsx)("button",{onClick:function(){e.deletePost(e.id)},children:"Delete"})]})]})},N=t(6139),L=t(5304),F=u.memo((function(e){var s=(0,I.Z)(e.posts).map((function(s){return(0,x.jsx)(w,{id:s.id,message:s.message,likesCount:s.likesCount,incrementLikesCount:e.incrementLikesCount,decrementLikesCount:s.decrementLikesCount,profile:s.profile,deletePost:e.deletePost},s.id)}));return(0,x.jsxs)("div",{className:y,children:[(0,x.jsx)("h3",{children:"My posts "}),(0,x.jsx)(D,{onSubmit:function(s){e.addPostActionCreator(s.newPostText)}}),(0,x.jsx)("div",{className:Z,children:s})]})})),M=(0,L.D)(100),D=(0,m.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,x.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,x.jsx)("div",{children:(0,x.jsx)(N.Z,{component:b.gx,name:"newPostText",validate:[L.F,M],placeholder:"Post message"})}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"Add post"})})]})})),T=F,O=(0,a.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage}}),{incrementLikesCount:_.tM,decrementLikesCount:_.eD,deletePost:_.fR,addPostActionCreator:_.Wl})(T),J=function(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C,{savePhoto:e.savePhoto,profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),(0,x.jsx)(O,{profile:e.profile})]})},E=t(6871),U=t(1103),B=t(7781),V=function(e){(0,r.Z)(t,e);var s=(0,l.Z)(t);function t(){return(0,n.Z)(this,t),s.apply(this,arguments)}return(0,o.Z)(t,[{key:"refreshProfile",value:function(){var e,s,t,i=null===(e=this.props)||void 0===e||null===(s=e.match)||void 0===s||null===(t=s.params)||void 0===t?void 0:t.userId;console.log(i),i||(i=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(i),this.props.getStatus(i)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){var i,n,o,r,l;(null===(i=this.props)||void 0===i||null===(n=i.match)||void 0===n||null===(o=n.params)||void 0===o?void 0:o.userId)!=(null===(r=e.match)||void 0===r||null===(l=r.params)||void 0===l?void 0:l.userId)&&this.refreshProfile()}},{key:"render",value:function(){var e,s,t;return(0,x.jsx)(J,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!(null!==(e=this.props)&&void 0!==e&&null!==(s=e.match)&&void 0!==s&&null!==(t=s.params)&&void 0!==t&&t.userId),profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(u.Component),W=(0,B.qC)((0,a.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:_.et,getStatus:_.lR,updateStatus:_.Nf,savePhoto:_.Ju,saveProfile:_.Ii}),(function(e){return function(s){var t=(0,E.bS)("/profile/:userId");return(0,x.jsx)(e,(0,i.Z)((0,i.Z)({},s),{},{match:t}))}}),U.D)(V)}}]);
//# sourceMappingURL=752.c5c48391.chunk.js.map