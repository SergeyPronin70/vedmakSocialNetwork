"use strict";(self.webpackChunkreact_01=self.webpackChunkreact_01||[]).push([[784],{6784:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ie}});var s=n(1413),i=n(5671),r=n(3144),o=n(136),a=n(8557),l=n(2791),u=n(364),c=n(885),d=n(9558),p={descriptionBlock:"ProfileInfo_descriptionBlock__rLfn1",mainPhoto:"ProfileInfo_mainPhoto__dlEIJ"},h=n(184),f=function(e){var t=(0,l.useState)(!1),n=(0,c.Z)(t,2),s=n[0],i=n[1],r=(0,l.useState)(e.status),o=(0,c.Z)(r,2),a=o[0],u=o[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,h.jsxs)("div",{children:[!s&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Status:"})," ",(0,h.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[" ",e.status||"---","  "]})]}),s&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(a)},onChange:function(e){u(e.currentTarget.value)},value:a})})]})},x=n(8478),v=n(704),m=n(5413),g=n(9234),E=(0,v.Z)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,s=e.error;return(0,h.jsxs)("form",{onSubmit:t,children:[(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Save"})}),s&&(0,h.jsx)("div",{className:g.Z.formSummaryError,children:s}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name"}),":",(0,m.SP)("Full name","fullName",m.II,[])]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job"}),":",(0,m.SP)("","lookingForAJob",m.II,[],{type:"checkbox"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills"}),":",(0,m.SP)("My professional skills","lookingForAJobDescription",m.gx,[])]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me"}),":",(0,m.SP)("About me","aboutMe",m.gx,[])]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"})," ",Object.keys(n.contacts).map((function(e){return(0,h.jsx)("div",{className:p.contact,children:(0,h.jsxs)("b",{children:[e,": ",(0,m.SP)(e,"contacts."+e,m.II,[])]})},e)}))]})]})})),j=function(e){var t=e.profile,n=e.isOwner,s=e.goToEditMode;return(0,h.jsxs)("div",{children:[n&&(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:s,children:"edit"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name:"})," ",t.fullName]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job:"})," ",t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills:"})," ",t.lookingForAJobDescription]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me:"})," ",t.aboutMe]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"})," ",Object.keys(t.contacts).map((function(e){return(0,h.jsx)(P,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},P=function(e){var t=e.contactTitle,n=e.contactValue;return(0,h.jsxs)("div",{className:p.contact,children:[(0,h.jsxs)("b",{children:[" ",t," "]})," : ",n," "]})},b=function(e){var t=e.profile,n=e.status,s=e.updateStatus,i=e.isOwner,r=e.savePhoto,o=e.saveProfile,a=(0,l.useState)(!1),u=(0,c.Z)(a,2),v=u[0],m=u[1];if(!t)return(0,h.jsx)(d.Z,{});return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:p.descriptionBlock,children:[(0,h.jsx)("img",{src:t.photos.large||x,className:p.mainPhoto}),i&&(0,h.jsx)("input",{type:"file",onChange:function(e){var t;null!==(t=e.target.files)&&void 0!==t&&t.length&&r(e.target.files[0])}}),v?(0,h.jsx)(E,{initialValues:t,profile:t,onSubmit:function(e){o(e).then((function(){m(!1)}))}}):(0,h.jsx)(j,{goToEditMode:function(){m(!0)},profile:t,isOwner:i}),(0,h.jsx)(f,{status:n,updateStatus:s})]})})},C=n(81),S=n(2982),N={postsBlock:"MyPosts_postsBlock__1XxYT",posts:"MyPosts_posts__xQNWy"},y=n(3079),k=function(e){var t=e.options,n=e.defaultValue,s=e.value,i=e.onChange;return(0,h.jsxs)("select",{value:s,onChange:function(e){return i(e.target.value)},children:[(0,h.jsx)("option",{disabled:!0,value:"",children:n}),t.map((function(e){return(0,h.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},w="MyModal_myModal__rIB+o",A="MyModal_myModalContent__tseBa",T="MyModal_active__nINpm",Z=function(e){var t=e.children,n=e.visible,s=e.setVisible,i=[w];return n&&i.push(T),(0,h.jsx)("div",{className:i.join(" "),onClick:function(){return s(!1)},children:(0,h.jsx)("div",{className:A,onClick:function(e){return e.stopPropagation()},children:t})})},M=n(3366),O=n(7462),_=n(7326),I=n(4578),F=l.createContext(null);function D(e,t){var n=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,l.isValidElement)(e)?t(e):e}(e)})),n}function R(e,t,n){return null!=n[t]?n[t]:e.props[t]}function L(e,t,n){var s=D(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var s,i=Object.create(null),r=[];for(var o in e)o in t?r.length&&(i[o]=r,r=[]):r.push(o);var a={};for(var l in t){if(i[l])for(s=0;s<i[l].length;s++){var u=i[l][s];a[i[l][s]]=n(u)}a[l]=n(l)}for(s=0;s<r.length;s++)a[r[s]]=n(r[s]);return a}(t,s);return Object.keys(i).forEach((function(r){var o=i[r];if((0,l.isValidElement)(o)){var a=r in t,u=r in s,c=t[r],d=(0,l.isValidElement)(c)&&!c.props.in;!u||a&&!d?u||!a||d?u&&a&&(0,l.isValidElement)(c)&&(i[r]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:c.props.in,exit:R(o,"exit",e),enter:R(o,"enter",e)})):i[r]=(0,l.cloneElement)(o,{in:!1}):i[r]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:R(o,"exit",e),enter:R(o,"enter",e)})}})),i}var V=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},z=function(e){function t(t,n){var s,i=(s=e.call(this,t,n)||this).handleExited.bind((0,_.Z)(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}(0,I.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,s,i=t.children,r=t.handleExited;return{children:t.firstRender?(n=e,s=r,D(n.children,(function(e){return(0,l.cloneElement)(e,{onExited:s.bind(null,e),in:!0,appear:R(e,"appear",n),enter:R(e,"enter",n),exit:R(e,"exit",n)})}))):L(e,i,r),firstRender:!1}},n.handleExited=function(e,t){var n=D(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,O.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,s=(0,M.Z)(e,["component","childFactory"]),i=this.state.contextValue,r=V(this.state.children).map(n);return delete s.appear,delete s.enter,delete s.exit,null===t?l.createElement(F.Provider,{value:i},r):l.createElement(F.Provider,{value:i},l.createElement(t,s,r))},t}(l.Component);z.propTypes={},z.defaultProps={component:"div",childFactory:function(e){return e}};var B=z;function U(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var J=n(4164),$=!1,W=function(e){return e.scrollTop},X="unmounted",G="exited",Y="entering",q="entered",H="exiting",K=function(e){function t(t,n){var s;s=e.call(this,t,n)||this;var i,r=n&&!n.isMounting?t.enter:t.appear;return s.appearStatus=null,t.in?r?(i=G,s.appearStatus=Y):i=q:i=t.unmountOnExit||t.mountOnEnter?X:G,s.state={status:i},s.nextCallback=null,s}(0,I.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===X?{status:G}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==Y&&n!==q&&(t=Y):n!==Y&&n!==q||(t=H)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,s=this.props.timeout;return e=t=n=s,null!=s&&"number"!==typeof s&&(e=s.exit,t=s.enter,n=void 0!==s.appear?s.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===Y){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:J.findDOMNode(this);n&&W(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===G&&this.setState({status:X})},n.performEnter=function(e){var t=this,n=this.props.enter,s=this.context?this.context.isMounting:e,i=this.props.nodeRef?[s]:[J.findDOMNode(this),s],r=i[0],o=i[1],a=this.getTimeouts(),l=s?a.appear:a.enter;!e&&!n||$?this.safeSetState({status:q},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,o),this.safeSetState({status:Y},(function(){t.props.onEntering(r,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:q},(function(){t.props.onEntered(r,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:J.findDOMNode(this);t&&!$?(this.props.onExit(s),this.safeSetState({status:H},(function(){e.props.onExiting(s),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:G},(function(){e.props.onExited(s)}))}))}))):this.safeSetState({status:G},(function(){e.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,t.nextCallback=null,e(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:J.findDOMNode(this),s=null==e&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=i[0],o=i[1];this.props.addEndListener(r,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===X)return null;var t=this.props,n=t.children,s=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,M.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.createElement(F.Provider,{value:null},"function"===typeof n?n(e,s):l.cloneElement(l.Children.only(n),s))},t}(l.Component);function Q(){}K.contextType=F,K.propTypes={},K.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Q,onEntering:Q,onEntered:Q,onExit:Q,onExiting:Q,onExited:Q},K.UNMOUNTED=X,K.EXITED=G,K.ENTERING=Y,K.ENTERED=q,K.EXITING=H;var ee=K,te=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.remove(s):"string"===typeof n.className?n.className=U(n.className,s):n.setAttribute("class",U(n.className&&n.className.baseVal||"",s)));var n,s}))},ne=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var s=t.resolveArguments(e,n),i=s[0],r=s[1];t.removeClasses(i,"exit"),t.addClass(i,r?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var s=t.resolveArguments(e,n),i=s[0],r=s[1]?"appear":"enter";t.addClass(i,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var s=t.resolveArguments(e,n),i=s[0],r=s[1]?"appear":"enter";t.removeClasses(i,r),t.addClass(i,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,s="string"===typeof n,i=s?""+(s&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:s?i+"-active":n[e+"Active"],doneClassName:s?i+"-done":n[e+"Done"]}},t}(0,I.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var s=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(s+=" "+i),"active"===n&&e&&W(e),s&&(this.appliedClasses[t][n]=s,function(e,t){e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.add(s):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(e,s))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],s=n.base,i=n.active,r=n.done;this.appliedClasses[t]={},s&&te(e,s),i&&te(e,i),r&&te(e,r)},n.render=function(){var e=this.props,t=(e.classNames,(0,M.Z)(e,["classNames"]));return l.createElement(ee,(0,O.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.Component);ne.defaultProps={classNames:""},ne.propTypes={};var se=ne,ie=n(501),re=n(5987),oe="MyButton_myButton__MKZEH",ae=["children"],le=function(e){var t=e.children,n=(0,re.Z)(e,ae);return(0,h.jsx)("button",(0,s.Z)((0,s.Z)({},n),{},{className:oe,children:t}))},ue="PostItem_post__03fP+",ce=function(e){var t=e.post,n=(e.number,e.remove);return(0,h.jsxs)("div",{className:ue,children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("strong",{children:[t.id,". ",t.title," "]}),(0,h.jsx)("div",{children:t.body})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)(ie.OL,{to:"/profile/posts/"+t.id,children:(0,h.jsx)(le,{onClick:function(){return n(t.id)},children:"Open"})})}),(0,h.jsx)("div",{children:(0,h.jsx)(le,{onClick:function(){return n(t.id)},children:"Delete"})})]})]})},de=function(e){var t=e.posts,n=e.title,s=e.remove;return t.length?(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{style:{textAlign:"center"},children:n}),(0,h.jsx)(B,{children:t.map((function(e,t){return(0,h.jsx)(se,{timeout:500,classNames:"post",children:(0,h.jsx)(ce,{remove:s,number:t+1,post:e})},e.id)}))})]}):(0,h.jsx)("h1",{style:{textAlign:"center"},children:"Posts not found..."})},pe=n(2859),he=n(4143),fe=n(6202),xe=(0,y.D)(100),ve=(0,v.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,h.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,h.jsx)("div",{children:(0,m.SP)("Post title","newTitle",m.gx,[y.F,xe])}),(0,h.jsx)("div",{children:(0,m.SP)("Post message","newPostText",m.gx,[y.F,xe])}),(0,h.jsx)("div",{children:(0,h.jsx)(le,{children:"Add post"})})]})})),me=function(e){var t=(0,l.useState)(""),n=(0,c.Z)(t,2),s=n[0],i=n[1],r=(0,l.useState)(""),o=(0,c.Z)(r,2),a=o[0],u=o[1],d=(0,l.useState)(!1),p=(0,c.Z)(d,2),f=p[0],x=p[1],v=(0,l.useRef)();(0,l.useRef)();(0,l.useEffect)((function(){e.getPostList(e.pageSize,e.currentPage)}),[e.currentPage,e.pageSize]),function(e,t,n,s){var i=(0,l.useRef)();(0,l.useEffect)((function(){n||(i.current&&i.current.disconnect(),i.current=new IntersectionObserver((function(e,n){e[0].isIntersecting&&t&&s()})),i.current.observe(e.current))}),[n])}(v,e.currentPage<11,e.isFetching,(function(){e.setCurrentPage(e.currentPage+1)}));var m=(0,l.useMemo)((function(){return(0,S.Z)(e.posts).filter((function(e){return e.body.toLowerCase().includes(a.toLowerCase())}))}),[a,s,e.posts]);return(0,h.jsxs)("div",{className:N.postsBlock,children:[(0,h.jsx)("h3",{children:"My posts "}),(0,h.jsxs)("div",{children:[(0,h.jsx)(le,{onClick:function(){return x(!0)},children:" Create new post "}),(0,h.jsx)(Z,{visible:f,setVisible:x,children:(0,h.jsx)(ve,{onSubmit:function(t){e.addPostActionCreator(t.newPostText,t.newTitle),x(!1)},newPostText:e.newPostText,newTitle:e.newTitle})}),(0,h.jsx)("div",{children:(0,h.jsx)(k,{value:s,onChange:function(t){i(t),e.sortPostsActionCreator(t)},defaultValue:"Sorting",options:[{value:"body",name:"By message"},{value:"title",name:"By title"}]})}),(0,h.jsx)("div",{style:{width:"200px",margin:"15px"},children:(0,h.jsx)(pe.Z,{value:a,onChange:function(e){return u(e.target.value)},placeholder:"Search..."})})]}),(0,h.jsx)(k,{value:e.pageSize,onChange:function(t){return e.setPageSize(t)},defaultValue:"Count of posts on page",options:[{value:5,name:"5"},{value:10,name:"10"},{value:25,name:"25"},{value:-1,name:"All"}]}),(0,h.jsx)(de,{posts:m,remove:e.deletePost}),(0,h.jsx)("div",{ref:v,style:{height:"20px"}}),e.isFetching&&(0,h.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,h.jsx)(he.a,{})}),(0,h.jsx)("div",{className:N.page__wrapper,children:(0,h.jsx)(fe.Z,{currentPage:e.currentPage,onPageChanged:function(t){e.setCurrentPage(t),e.getPostList(e.pageSize,t)},totalItemsCount:e.totalPostCount,pageSize:e.pageSize})})]})},ge=C.Nw.addPostActionCreator,Ee=C.Nw.sortPostsActionCreator,je=C.Nw.searchPost,Pe=C.Nw.setUserProfile,be=C.Nw.setStatus,Ce=C.Nw.deletePost,Se=C.Nw.savePhotoSuccess,Ne=C.Nw.setPosts,ye=C.Nw.setPageSize,ke=C.Nw.setCurrentPage,we=C.Nw.toggleIsFetching,Ae=(0,u.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,newTitle:e.profilePage.newTitle,profile:e.profilePage,pageSize:e.profilePage.pageSize,totalPostCount:e.profilePage.totalPostCount,currentPage:e.profilePage.currentPage,isFetching:e.profilePage.isFetching}}),{addPostActionCreator:ge,sortPostsActionCreator:Ee,searchPost:je,setUserProfile:Pe,setStatus:be,deletePost:Ce,savePhotoSuccess:Se,setPosts:Ne,setPageSize:ye,setCurrentPage:ke,toggleIsFetching:we,getPostList:C.UI})(me),Te=function(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b,{savePhoto:e.savePhoto,profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),(0,h.jsx)(Ae,{profile:e.profile})]})},Ze=n(6871),Me=n(3221),Oe=n(7781),_e=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"refreshProfile",value:function(){var e,t=null===(e=this.props)||void 0===e?void 0:e.match;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getUserProfile(t),this.props.getStatus(t)):console.error("ID should exists")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){var n;(null===(n=this.props)||void 0===n?void 0:n.match)!=e.match&&this.refreshProfile()}},{key:"render",value:function(){var e;return(0,h.jsx)(Te,(0,s.Z)((0,s.Z)({},this.props),{},{isOwner:!(null!==(e=this.props)&&void 0!==e&&e.match),profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),n}(l.Component);var Ie=(0,Oe.qC)((0,u.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:C.et,getStatus:C.lR,updateStatus:C.Nf,savePhoto:C.Ju,saveProfile:C.Ii}),(function(e){return function(t){var n,i=null===(n=(0,Ze.bS)("/profile/:userId"))||void 0===n?void 0:n.params.userId;return(0,h.jsx)(e,(0,s.Z)((0,s.Z)({},t),{},{match:i}))}}),Me.D)(_e)},3221:function(e,t,n){n.d(t,{D:function(){return c}});var s=n(1413),i=n(5987),r=(n(2791),n(364)),o=n(6871),a=n(184),l=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}};function c(e){return(0,r.$j)(u)((function(t){var n=t.isAuth,r=(0,i.Z)(t,l);return n?(0,a.jsx)(e,(0,s.Z)({},r)):(0,a.jsx)(o.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=784.c4c8e239.chunk.js.map