"use strict";(self.webpackChunkreact_01=self.webpackChunkreact_01||[]).push([[813],{2813:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var s=n(1413),r=n(5671),i=n(3144),o=n(136),a=n(8347),l=n(2791),u=n(364),c=n(885),d=n(2465),p="ProfileInfo_descriptionBlock__rLfn1",h="ProfileInfo_mainPhoto__dlEIJ",f="ProfileInfo_contact__WsOPj",x=n(184),v=function(e){var t=(0,l.useState)(!1),n=(0,c.Z)(t,2),s=n[0],r=n[1],i=(0,l.useState)(e.status),o=(0,c.Z)(i,2),a=o[0],u=o[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,x.jsxs)("div",{children:[!s&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Status:"})," ",(0,x.jsxs)("span",{onDoubleClick:function(){r(!0)},children:[" ",e.status||"---","  "]})]}),s&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(a)},onChange:function(e){u(e.currentTarget.value)},value:a})})]})},m=n(8478),E=n(704),j=n(9086),g=n(9234),b=(0,E.Z)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,s=e.error;return(0,x.jsxs)("form",{onSubmit:t,children:[(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"Save"})}),s&&(0,x.jsx)("div",{className:g.Z.formSummaryError,children:s}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name"}),":",(0,j.SP)("Full name","fullName",j.II,[])]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job"}),":",(0,j.SP)("","lookingForAJob",j.II,[],{type:"checkbox"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),":",(0,j.SP)("My professional skills","lookingForAJobDescription",j.gx,[])]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),":",(0,j.SP)("About me","aboutMe",j.gx,[])]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"})," ",Object.keys(n.contacts).map((function(e){return(0,x.jsx)("div",{className:f,children:(0,x.jsxs)("b",{children:[e,": ",(0,j.SP)(e,"contacts."+e,j.II,[])]})},e)}))]})]})})),C=function(e){var t=e.profile,n=e.isOwner,s=e.goToEditMode;return(0,x.jsxs)("div",{children:[n&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{onClick:s,children:"edit"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name:"})," ",t.fullName]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job:"})," ",t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills:"})," ",t.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me:"})," ",t.aboutMe]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts"})," ",Object.keys(t.contacts).map((function(e){return(0,x.jsx)(P,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},P=function(e){var t=e.contactTitle,n=e.contactValue;return(0,x.jsxs)("div",{className:f,children:[(0,x.jsxs)("b",{children:[" ",t," "]})," : ",n," "]})},S=function(e){var t=e.profile,n=e.status,s=e.updateStatus,r=e.isOwner,i=e.savePhoto,o=e.saveProfile,a=(0,l.useState)(!1),u=(0,c.Z)(a,2),f=u[0],E=u[1];if(!t)return(0,x.jsx)(d.Z,{});return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("img",{src:t.photos.large||m,className:h}),r&&(0,x.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}}),f?(0,x.jsx)(b,{initialValues:t,profile:t,onSubmit:function(e){o(e).then((function(){E(!1)}))}}):(0,x.jsx)(C,{goToEditMode:function(){E(!0)},profile:t,isOwner:r}),(0,x.jsx)(v,{status:n,updateStatus:s})]})})},y=n(6070),N=n(2982),k=n(5861),_=n(7757),Z=n.n(_),M="MyPosts_postsBlock__1XxYT",T="MyPosts_page__wrapper__VtxQ4",w="MyPosts_page__2IqJL",A="MyPosts_page__current__ISVha",I=n(6139),O=n(5304),D=function(e){var t=e.options,n=e.defaultValue,s=e.value,r=e.onChange;return(0,x.jsxs)("select",{value:s,onChange:function(e){return r(e.target.value)},children:[(0,x.jsx)("option",{disabled:!0,value:"",children:n}),t.map((function(e){return(0,x.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},L="MyModal_myModal__rIB+o",V="MyModal_myModalContent__tseBa",F="MyModal_active__nINpm",R=function(e){var t=e.children,n=e.visible,s=e.setVisible,r=[L];return n&&r.push(F),(0,x.jsx)("div",{className:r.join(" "),onClick:function(){return s(!1)},children:(0,x.jsx)("div",{className:V,onClick:function(e){return e.stopPropagation()},children:t})})},U=n(3366),B=n(7462),J=n(7326),$=n(4578),W=l.createContext(null);function X(e,t){var n=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,l.isValidElement)(e)?t(e):e}(e)})),n}function q(e,t,n){return null!=n[t]?n[t]:e.props[t]}function z(e,t,n){var s=X(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var s,r=Object.create(null),i=[];for(var o in e)o in t?i.length&&(r[o]=i,i=[]):i.push(o);var a={};for(var l in t){if(r[l])for(s=0;s<r[l].length;s++){var u=r[l][s];a[r[l][s]]=n(u)}a[l]=n(l)}for(s=0;s<i.length;s++)a[i[s]]=n(i[s]);return a}(t,s);return Object.keys(r).forEach((function(i){var o=r[i];if((0,l.isValidElement)(o)){var a=i in t,u=i in s,c=t[i],d=(0,l.isValidElement)(c)&&!c.props.in;!u||a&&!d?u||!a||d?u&&a&&(0,l.isValidElement)(c)&&(r[i]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:c.props.in,exit:q(o,"exit",e),enter:q(o,"enter",e)})):r[i]=(0,l.cloneElement)(o,{in:!1}):r[i]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:q(o,"exit",e),enter:q(o,"enter",e)})}})),r}var G=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},Y=function(e){function t(t,n){var s,r=(s=e.call(this,t,n)||this).handleExited.bind((0,J.Z)(s));return s.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},s}(0,$.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,s,r=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,s=i,X(n.children,(function(e){return(0,l.cloneElement)(e,{onExited:s.bind(null,e),in:!0,appear:q(e,"appear",n),enter:q(e,"enter",n),exit:q(e,"exit",n)})}))):z(e,r,i),firstRender:!1}},n.handleExited=function(e,t){var n=X(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,B.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,s=(0,U.Z)(e,["component","childFactory"]),r=this.state.contextValue,i=G(this.state.children).map(n);return delete s.appear,delete s.enter,delete s.exit,null===t?l.createElement(W.Provider,{value:r},i):l.createElement(W.Provider,{value:r},l.createElement(t,s,i))},t}(l.Component);Y.propTypes={},Y.defaultProps={component:"div",childFactory:function(e){return e}};var H=Y;function K(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var Q=n(4164),ee=!1,te="unmounted",ne="exited",se="entering",re="entered",ie="exiting",oe=function(e){function t(t,n){var s;s=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return s.appearStatus=null,t.in?i?(r=ne,s.appearStatus=se):r=re:r=t.unmountOnExit||t.mountOnEnter?te:ne,s.state={status:r},s.nextCallback=null,s}(0,$.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===te?{status:ne}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==se&&n!==re&&(t=se):n!==se&&n!==re||(t=ie)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,s=this.props.timeout;return e=t=n=s,null!=s&&"number"!==typeof s&&(e=s.exit,t=s.enter,n=void 0!==s.appear?s.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===se?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===ne&&this.setState({status:te})},n.performEnter=function(e){var t=this,n=this.props.enter,s=this.context?this.context.isMounting:e,r=this.props.nodeRef?[s]:[Q.findDOMNode(this),s],i=r[0],o=r[1],a=this.getTimeouts(),l=s?a.appear:a.enter;!e&&!n||ee?this.safeSetState({status:re},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:se},(function(){t.props.onEntering(i,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:re},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:Q.findDOMNode(this);t&&!ee?(this.props.onExit(s),this.safeSetState({status:ie},(function(){e.props.onExiting(s),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:ne},(function(){e.props.onExited(s)}))}))}))):this.safeSetState({status:ne},(function(){e.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,t.nextCallback=null,e(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:Q.findDOMNode(this),s=null==e&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===te)return null;var t=this.props,n=t.children,s=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,U.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.createElement(W.Provider,{value:null},"function"===typeof n?n(e,s):l.cloneElement(l.Children.only(n),s))},t}(l.Component);function ae(){}oe.contextType=W,oe.propTypes={},oe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ae,onEntering:ae,onEntered:ae,onExit:ae,onExiting:ae,onExited:ae},oe.UNMOUNTED=te,oe.EXITED=ne,oe.ENTERING=se,oe.ENTERED=re,oe.EXITING=ie;var le=oe,ue=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.remove(s):"string"===typeof n.className?n.className=K(n.className,s):n.setAttribute("class",K(n.className&&n.className.baseVal||"",s)));var n,s}))},ce=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1];t.removeClasses(r,"exit"),t.addClass(r,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1]?"appear":"enter";t.addClass(r,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1]?"appear":"enter";t.removeClasses(r,i),t.addClass(r,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,s="string"===typeof n,r=s?""+(s&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:s?r+"-active":n[e+"Active"],doneClassName:s?r+"-done":n[e+"Done"]}},t}(0,$.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var s=this.getClassNames(t)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&r&&(s+=" "+r),"active"===n&&e&&e.scrollTop,s&&(this.appliedClasses[t][n]=s,function(e,t){e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.add(s):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(e,s))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],s=n.base,r=n.active,i=n.done;this.appliedClasses[t]={},s&&ue(e,s),r&&ue(e,r),i&&ue(e,i)},n.render=function(){var e=this.props,t=(e.classNames,(0,U.Z)(e,["classNames"]));return l.createElement(le,(0,B.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.Component);ce.defaultProps={classNames:""},ce.propTypes={};var de=ce,pe=n(5987),he="MyButton_myButton__MKZEH",fe=["children"],xe=function(e){var t=e.children,n=(0,pe.Z)(e,fe);return(0,x.jsx)("button",(0,s.Z)((0,s.Z)({},n),{},{className:he,children:t}))},ve="PostItem_post__03fP+",me=function(e){var t=e.post,n=e.number,s=e.remove;return(0,x.jsxs)("div",{className:ve,children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("strong",{children:[n,". ",t.title," "]}),(0,x.jsx)("div",{children:t.body})]}),(0,x.jsx)("div",{children:(0,x.jsx)(xe,{onClick:function(){return s(t.id)},children:"Delete"})})]})},Ee=function(e){var t=e.posts,n=e.title,s=e.remove;return t.length?(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{style:{textAlign:"center"},children:n}),(0,x.jsx)(H,{children:t.map((function(e,t){return(0,x.jsx)(de,{timeout:500,className:"post",children:(0,x.jsx)(me,{remove:s,number:t+1,post:e})},e.id)}))})]}):(0,x.jsx)("h1",{style:{textAlign:"center"},children:"Posts not found..."})},je=n(9265),ge="Loader_loader__pVxtD",be=function(){return(0,x.jsx)("div",{className:ge})},Ce=n(6713),Pe=l.memo((function(e){for(var t=(0,l.useState)(""),n=(0,c.Z)(t,2),s=n[0],r=n[1],i=(0,l.useState)(""),o=(0,c.Z)(i,2),a=o[0],u=o[1],d=(0,l.useState)(!1),p=(0,c.Z)(d,2),h=p[0],f=p[1],v=(0,l.useState)(0),m=(0,c.Z)(v,2),E=m[0],j=m[1],g=(0,l.useState)(10),b=(0,c.Z)(g,2),C=b[0],P=(b[1],(0,l.useState)(1)),S=(0,c.Z)(P,2),y=S[0],_=(S[1],[]),I=0;I<E;I++)_.push(I+1);var O=function(e,t){return Math.ceil(e/t)},L=function(e){var t=(0,l.useState)(!1),n=(0,c.Z)(t,2),s=n[0],r=n[1],i=(0,l.useState)(""),o=(0,c.Z)(i,2),a=o[0],u=o[1],d=function(){var t=(0,k.Z)(Z().mark((function t(){return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),u(t.t0.message);case 9:return t.prev=9,r(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[d,s,a]}((0,k.Z)(Z().mark((function e(){var t,n;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce.FZ.getPosts(C,y);case 2:t=e.sent,n=t.headers["x-total-count"],j(O(n,C));case 5:case"end":return e.stop()}}),e)})))),V=(0,c.Z)(L,3),F=V[0],U=V[1],B=V[2];(0,l.useEffect)((function(){e.getPostList(),F()}),[]);var J=(0,l.useMemo)((function(){return(0,N.Z)(e.posts).filter((function(e){return e.body.toLowerCase().includes(a.toLowerCase())}))}),[a,s,e.posts]);return(0,x.jsxs)("div",{className:M,children:[(0,x.jsx)("h3",{children:"My posts "}),(0,x.jsxs)("div",{children:[(0,x.jsx)(xe,{onClick:function(){return f(!0)},children:" Create new post "}),(0,x.jsx)(R,{visible:h,setVisible:f,children:(0,x.jsx)(ye,{onSubmit:function(t){e.addPostActionCreator(t.newPostText,t.newTitle),f(!1)},newPostText:e.newPostText,newTitle:e.newTitle})}),(0,x.jsx)("div",{children:(0,x.jsx)(D,{value:s,onChange:function(t){r(t),e.sortPostsActionCreator(t)},defaultValue:"Sorting",options:[{value:"body",name:"By message"},{value:"title",name:"By title"}]})}),(0,x.jsx)("div",{style:{width:"200px",margin:"15px"},children:(0,x.jsx)(je.Z,{value:a,onChange:function(e){return u(e.target.value)},placeholder:"Search..."})})]}),B&&(0,x.jsxs)("h1",{children:["Error $",B]}),U?(0,x.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(be,{})}):(0,x.jsx)(Ee,{posts:J,remove:e.deletePost}),(0,x.jsx)("div",{className:T,children:_.map((function(e){return(0,x.jsx)("span",{className:y===e?"".concat(w," ").concat(A):"".concat(w),children:e},e)}))})]})})),Se=(0,O.D)(100),ye=(0,E.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,x.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,x.jsx)("div",{children:(0,x.jsx)(I.Z,{component:j.gx,name:"newTitle",validate:[O.F,Se],placeholder:"Post title"})}),(0,x.jsx)("div",{children:(0,x.jsx)(I.Z,{component:j.gx,name:"newPostText",validate:[O.F,Se],placeholder:"Post message"})}),(0,x.jsx)("div",{children:(0,x.jsx)(xe,{children:"Add post"})})]})})),Ne=Pe,ke=(0,u.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,newTitle:e.profilePage.newTitle,profile:e.profilePage}}),{incrementLikesCount:y.tM,decrementLikesCount:y.eD,deletePost:y.fR,addPostActionCreator:y.Wl,sortPostsActionCreator:y.bU,searchPost:y.Bf,setPosts:y.dM,getPostList:y.UI})(Ne),_e=function(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S,{savePhoto:e.savePhoto,profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),(0,x.jsx)(ke,{profile:e.profile})]})},Ze=n(6871),Me=n(1103),Te=n(7781),we=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"refreshProfile",value:function(){var e,t,n,s=null===(e=this.props)||void 0===e||null===(t=e.match)||void 0===t||null===(n=t.params)||void 0===n?void 0:n.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){var s,r,i,o,a;(null===(s=this.props)||void 0===s||null===(r=s.match)||void 0===r||null===(i=r.params)||void 0===i?void 0:i.userId)!=(null===(o=e.match)||void 0===o||null===(a=o.params)||void 0===a?void 0:a.userId)&&this.refreshProfile()}},{key:"render",value:function(){var e,t,n;return(0,x.jsx)(_e,(0,s.Z)((0,s.Z)({},this.props),{},{isOwner:!(null!==(e=this.props)&&void 0!==e&&null!==(t=e.match)&&void 0!==t&&null!==(n=t.params)&&void 0!==n&&n.userId),profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),n}(l.Component),Ae=(0,Te.qC)((0,u.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:y.et,getStatus:y.lR,updateStatus:y.Nf,savePhoto:y.Ju,saveProfile:y.Ii}),(function(e){return function(t){var n=(0,Ze.bS)("/profile/:userId");return(0,x.jsx)(e,(0,s.Z)((0,s.Z)({},t),{},{match:n}))}}),Me.D)(we)}}]);
//# sourceMappingURL=813.96ade6c4.chunk.js.map