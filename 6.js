(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{252:function(e,t,n){"use strict";t.a={API_URL:"http://18.140.63.188:8080/",ENABLE_GA:!0,GA_ID:"UA-163875302-1"}},260:function(e,t,n){"use strict";n.r(t);var a=n(59),r=n.n(a),o=n(233),i=n.n(o),l=n(234),c=n.n(l),u=n(235),s=n.n(u),p=n(236),g=n.n(p),m=n(1),h=n.n(m),d=(n(95),n(493)),f=n(491),v=n(245),E=n(60),S=n(238),b=n.n(S),w=n(239);function y(){var e=b()(["\n  &.ant-menu-item-selected.ant-menu-item-selected {\n    background-color: #50B087;\n  }\n"]);return y=function(){return e},e}var k,x=Object(w.a)(f.a.Item)(y()),C=f.a.SubMenu,O=Object(E.b)("translateStore")(k=Object(E.c)(k=function(e){function t(){return r()(this,t),c()(this,s()(t).apply(this,arguments))}return g()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.props.translateStore.translateObj;return h.a.createElement(f.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],inlineCollapsed:this.props.collapsed},h.a.createElement(x,{key:"1",onClick:function(){return e.props.navigate("/app/about")}},h.a.createElement(v.a,{type:"user"}),h.a.createElement("span",null,t.ABOUT_ME)),h.a.createElement(C,{key:"sub1",title:h.a.createElement("span",null,h.a.createElement(v.a,{type:"video-camera"}),h.a.createElement("span",null,t.PORTFOLIO))},h.a.createElement(f.a.Item,{key:"2",onClick:function(){return e.props.navigate("/app/badge")}},t.BADGE),h.a.createElement(f.a.Item,{key:"3",onClick:function(){return e.props.navigate("/app/card")}},t.CARD),h.a.createElement(f.a.Item,{key:"4",onClick:function(){return e.props.navigate("/app/ringchart")}},t.RING_CHART),h.a.createElement(f.a.Item,{key:"5",onClick:function(){return e.props.navigate("/app/mixchart")}},t.MIX_CHART)))}}]),t}(h.a.Component))||k)||k,I=n(490),A=n(2),L=n.n(A),j=I.a.Option,N=function(e){function t(){return r()(this,t),c()(this,s()(t).apply(this,arguments))}return g()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.selectorWidth,n=e.defaultValue,a=e.onSelectChange,r=e.optionList;return h.a.createElement(I.a,{className:"listSelector",defaultValue:n,style:{width:t},onChange:a},r.map(function(e){return h.a.createElement(j,{key:e.value,value:e.value},e.text)}))}}]),t}(h.a.PureComponent);N.defaultProps={onSelectChange:function(){},defaultValue:"",selectorWidth:120,optionList:[]},N.propTypes={onSelectChange:L.a.func,defaultValue:L.a.string,selectorWidth:L.a.number,optionList:L.a.instanceOf(Array)};var T=n(494),U=n(495),_=n(45);function G(){var e=b()(["\n  padding-top: 15px;\n"]);return G=function(){return e},e}function R(){var e=b()(["\n  margin: 24px 16px;\n  background: #F0F2F5;\n  min-height: 280;\n  overflow-y: auto;\n"]);return R=function(){return e},e}function V(){var e=b()(["\n  &.anticon svg {\n    cursor: pointer;\n  }\n"]);return V=function(){return e},e}function D(){var e=b()(["\n  width: 32px;\n  height: 32px;\n  color: white;\n  margin-top: 15px;\n  margin-left: 10px;\n  cursor: pointer;\n"]);return D=function(){return e},e}function W(){var e=b()(["\n  width: 110px;\n  height: 64px;\n  text-align: right;\n  padding-right: 10px;\n"]);return W=function(){return e},e}function B(){var e=b()(["\n  width: auto;\n  height: 64px;\n  text-align: right;\n  padding-right: 10px;\n"]);return B=function(){return e},e}function J(){var e=b()(["\n  float: right;\n  display: flex;\n  width: auto;\n  height: 64px;\n"]);return J=function(){return e},e}function M(){var e=b()(["\n  background-color: rgba(128, 128, 128, 1);\n  padding-left: 15px;\n  padding-right: 0px;\n  color: white;\n"]);return M=function(){return e},e}function F(){var e=b()(["\n  height: 100vh;\n"]);return F=function(){return e},e}var H,P=d.a.Header,z=d.a.Content,K=Object(w.a)(d.a)(F()),Q=Object(w.a)(P)(M()),X=w.a.div(J()),q=w.a.div(B()),Y=w.a.div(W()),Z=w.a.img(D()),$=Object(w.a)(v.a)(V()),ee=Object(w.a)(z)(R()),te=w.a.div(G()),ne=n(480),ae=n.n(ne),re=function(e){switch(e.key){case"logout":ie(),localStorage.removeItem("logout"),localStorage.removeItem("getSessionStorage");break;case"getSessionStorage":localStorage.setItem("sessionStorage",JSON.stringify(sessionStorage.getItem("User")));break;case"sessionStorage":e.newValue&&(sessionStorage.setItem("User",JSON.parse(e.newValue)),localStorage.removeItem("sessionStorage"))}},oe=function(){"localhost"===window.location.hostname?window.location.href="/":window.location.href="https://jasonyenchang.github.io/My_React_Quick_Start_Kit/#/login"},ie=function(){window.removeEventListener("storage",re),localStorage.setItem("logout","logout"),sessionStorage.clear(),oe()},le=function(){window.addEventListener("storage",re),localStorage.getSessionStorage=new Date,setTimeout(function(){sessionStorage.getItem("User")||oe()},500)},ce=n(252),ue=n(488);n.d(t,"default",function(){return pe});var se=[{value:"zhTW",text:"繁體中文"},{value:"enUS",text:"English"}],pe=Object(E.b)("translateStore")(H=Object(E.c)(H=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=c()(this,(e=s()(t)).call.apply(e,[this].concat(o)))).state={collapsed:!1,userName:""},n.componentDidMount=function(){le(),ce.a.ENABLE_GA&&n.initialGA(),setTimeout(function(){var e=JSON.parse(sessionStorage.getItem("User"));n.setState({userName:e.UserName})},500)},n.initialGA=function(){var e=n.props,t=e.history,a=e.location;ue.a.initialize(ce.a.GA_ID,{debug:!0}),ue.a.pageview(a.pathname),t.listen(function(e){return ue.a.pageview(e.pathname)})},n.toggle=function(){n.setState({collapsed:!n.state.collapsed})},n.navigateToUrl=function(e){n.props.history.push(e)},n.onLanguageChange=function(e){n.props.translateStore.setLanguage(e)},n}return g()(t,e),i()(t,[{key:"render",value:function(){var e=this.props.translateStore.translateObj,t=this.state.userName;return h.a.createElement(K,null,h.a.createElement(d.a.Sider,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},h.a.createElement(te,null),h.a.createElement(O,{navigate:this.navigateToUrl,collapsed:this.state.collapsed})),h.a.createElement(d.a,null,h.a.createElement(Q,null,h.a.createElement($,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),h.a.createElement(X,null,h.a.createElement(q,null,e.HI,t),h.a.createElement(Y,null,h.a.createElement(N,{selectorWidth:110,defaultValue:"zhTW",optionList:se,onSelectChange:this.onLanguageChange})),h.a.createElement(Z,{src:ae.a,title:e.LOGOUT,onClick:ie}))),h.a.createElement(ee,null,h.a.createElement(T.a,null,h.a.createElement(U.a,{default:!0,path:"/app/about",component:_.a}),h.a.createElement(U.a,{path:"/app/portfolio",component:_.g}),h.a.createElement(U.a,{path:"/app/badge",component:_.c}),h.a.createElement(U.a,{path:"/app/card",component:_.d}),h.a.createElement(U.a,{path:"/app/ringchart",component:_.h}),h.a.createElement(U.a,{path:"/app/mixchart",component:_.f})))))}}]),t}(h.a.Component))||H)||H},480:function(e,t,n){e.exports=n.p+"0a58edec978bdb337e256917b1ba1e16.png"}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVNZW51L3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVNZW51L1NpZGVNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdG9yL1NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9BdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ291dF9pY29uLnBuZyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfZXhwb3J0c19fIiwiQVBJX1VSTCIsIkVOQUJMRV9HQSIsIkdBX0lEIiwiTWVudUl0ZW0iLCJPYmplY3QiLCJzdHlsZWRfY29tcG9uZW50c19icm93c2VyX2VzbSIsIm1lbnUiLCJJdGVtIiwiX3RlbXBsYXRlT2JqZWN0IiwiU3ViTWVudSIsIlNpZGVNZW51X1NpZGVNZW51IiwiaW5kZXhfbW9kdWxlIiwiX3RoaXMiLCJ0aGlzIiwidHJhbnNsYXRlT2JqIiwicHJvcHMiLCJ0cmFuc2xhdGVTdG9yZSIsInJlYWN0X2RlZmF1bHQiLCJhIiwiY3JlYXRlRWxlbWVudCIsInRoZW1lIiwibW9kZSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJpbmxpbmVDb2xsYXBzZWQiLCJjb2xsYXBzZWQiLCJrZXkiLCJvbkNsaWNrIiwibmF2aWdhdGUiLCJpY29uIiwidHlwZSIsIkFCT1VUX01FIiwidGl0bGUiLCJQT1JURk9MSU8iLCJCQURHRSIsIkNBUkQiLCJSSU5HX0NIQVJUIiwiTUlYX0NIQVJUIiwiQ29tcG9uZW50IiwiT3B0aW9uIiwiZXNfc2VsZWN0IiwiU2VsZWN0b3JfU2VsZWN0b3IiLCJfdGhpcyRwcm9wcyIsInNlbGVjdG9yV2lkdGgiLCJkZWZhdWx0VmFsdWUiLCJvblNlbGVjdENoYW5nZSIsIm9wdGlvbkxpc3QiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwib25DaGFuZ2UiLCJtYXAiLCJvcCIsInZhbHVlIiwidGV4dCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJwcm9wX3R5cGVzX2RlZmF1bHQiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiaW5zdGFuY2VPZiIsIkFycmF5IiwiSGVhZGVyIiwibGF5b3V0IiwiQ29udGVudCIsIkFwcExheW91dCIsInN0eWxlX3RlbXBsYXRlT2JqZWN0IiwiQXBwSGVhZGVyIiwiX3RlbXBsYXRlT2JqZWN0MiIsIkFwcEhlYWRlckNvbnRlbnQiLCJkaXYiLCJfdGVtcGxhdGVPYmplY3QzIiwiQXBwSGVhZGVyQ29udGVudE5hbWUiLCJfdGVtcGxhdGVPYmplY3Q0IiwiQXBwSGVhZGVyQ29udGVudExhbmd1YWdlIiwiX3RlbXBsYXRlT2JqZWN0NSIsIkFwcEhlYWRlckNvbnRlbnRMb2dvdXQiLCJpbWciLCJfdGVtcGxhdGVPYmplY3Q2IiwiTWVudUN1cnNvckljb24iLCJfdGVtcGxhdGVPYmplY3Q3IiwiTWVudUNvbnRlbnQiLCJfdGVtcGxhdGVPYmplY3Q4IiwiTWVudVRpdGxlIiwiX3RlbXBsYXRlT2JqZWN0OSIsInN0b3JhZ2VFdmVudCIsImUiLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJuZXdWYWx1ZSIsInBhcnNlIiwicmVkaXJlY3RUb0xvZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImhyZWYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXIiLCJwYWdlU3luYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRTZXNzaW9uU3RvcmFnZSIsIkRhdGUiLCJzZXRUaW1lb3V0IiwibGFuZ3VhZ2VEYXRhIiwiQXBwX0FwcCIsInN0YXRlIiwidXNlck5hbWUiLCJjb21wb25lbnREaWRNb3VudCIsImVudiIsImluaXRpYWxHQSIsInVzZXIiLCJzZXRTdGF0ZSIsIlVzZXJOYW1lIiwiaGlzdG9yeSIsImVzbSIsImluaXRpYWxpemUiLCJkZWJ1ZyIsInBhZ2V2aWV3IiwicGF0aG5hbWUiLCJsaXN0ZW4iLCJsIiwidG9nZ2xlIiwibmF2aWdhdGVUb1VybCIsInVybCIsInB1c2giLCJvbkxhbmd1YWdlQ2hhbmdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsIlNpZGVyIiwidHJpZ2dlciIsImNvbGxhcHNpYmxlIiwiSEkiLCJzcmMiLCJsb2dvdXRfaWNvbl9kZWZhdWx0IiwiTE9HT1VUIiwiU3dpdGNoIiwiUm91dGUiLCJkZWZhdWx0IiwicGF0aCIsImNvbXBvbmVudCIsImNvbW1vbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicCJdLCJtYXBwaW5ncyI6IjBGQU1lQSxFQUFBLEdBTGJDLFFBQVMsNkJBQ1RDLFdBQVcsRUFDWEMsTUFBTyx1WUNBRixNQUFNQyxFQUFXQyxPQUFBQyxFQUFBLEVBQUFELENBQU9FLEVBQUEsRUFBS0MsS0FBWkgsQ0FBSEksS0NFYkMsRUFBWUgsRUFBQSxFQUFaRyxRQUdhQyxFQUZwQk4sT0FBQU8sRUFBQSxFQUFBUCxDQUFPLG9CQUNQQSxPQUFBTyxFQUFBLEVBQUFQLDRJQUVVLElBQUFRLEVBQUFDLEtBQ0NDLEVBQWlCRCxLQUFLRSxNQUFNQyxlQUE1QkYsYUFDUixPQUNFRyxFQUFBQyxFQUFBQyxjQUFDYixFQUFBLEdBQUtjLE1BQU0sT0FBT0MsS0FBSyxTQUFTQyxxQkFBc0IsS0FBTUMsZ0JBQWlCVixLQUFLRSxNQUFNUyxXQUN2RlAsRUFBQUMsRUFBQUMsY0FBQ2hCLEdBQWdCc0IsSUFBSSxJQUFJQyxRQUFTLGtCQUFNZCxFQUFLRyxNQUFNWSxTQUFTLGdCQUMxRFYsRUFBQUMsRUFBQUMsY0FBQ1MsRUFBQSxHQUFLQyxLQUFLLFNBQ1haLEVB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QUssYUFBYUMsVUFBV0MsRUFBQSxJQUM1Q2xJLEVBQUFDLEVBQUFDLGNBQUM0SCxFQUFBLEdBQU1FLEtBQUssaUJBQWlCQyxVQUFXQyxFQUFBLElBQ3hDbEksRUFBQUMsRUFBQUMsY0FBQzRILEVBQUEsR0FBTUUsS0FBSyxhQUFhQyxVQUFXQyxFQUFBLElBQ3BDbEksRUFBQUMsRUFBQUMsY0FBQzRILEVBQUEsR0FBTUUsS0FBSyxZQUFZQyxVQUFXQyxFQUFBLElBQ25DbEksRUFBQUMsRUFBQUMsY0FBQzRILEVBQUEsR0FBTUUsS0FBSyxpQkFBaUJDLFVBQVdDLEVBQUEsSUFDeENsSSxFQUFBQyxFQUFBQyxjQUFDNEgsRUFBQSxHQUFNRSxLQUFLLGdCQUFnQkMsVUFBV0MsRUFBQSxlQXZFcEJsSSxFQUFBQyxFQUFNbUIsd0NDeEJ2QytHLEVBQUFDLFFBQWlCQyxFQUFBQyxFQUF1QiIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0ge1xuICBBUElfVVJMOiAnaHR0cDovLzE4LjE0MC42My4xODg6ODA4MC8nLFxuICBFTkFCTEVfR0E6IHRydWUsXG4gIEdBX0lEOiAnVUEtMTYzODc1MzAyLTEnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IE1lbnUsIEljb24gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gc3R5bGVkKE1lbnUuSXRlbSlgXG4gICYuYW50LW1lbnUtaXRlbS1zZWxlY3RlZC5hbnQtbWVudS1pdGVtLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBCMDg3O1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGluamVjdCwgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcbmltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICcuL3N0eWxlJztcblxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xuQGluamVjdCgndHJhbnNsYXRlU3RvcmUnKVxuQG9ic2VydmVyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZU9iaiB9ID0gdGhpcy5wcm9wcy50cmFuc2xhdGVTdG9yZTtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImlubGluZVwiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfSBpbmxpbmVDb2xsYXBzZWQ9e3RoaXMucHJvcHMuY29sbGFwc2VkfT5cbiAgICAgICAgPFN0eWxlcy5NZW51SXRlbSBrZXk9XCIxXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5uYXZpZ2F0ZSgnL2FwcC9hYm91dCcpfT5cbiAgICAgICAgICA8SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgPHNwYW4+e3RyYW5zbGF0ZU9iai5BQk9VVF9NRX08L3NwYW4+XG4gICAgICAgIDwvU3R5bGVzLk1lbnVJdGVtPlxuICAgICAgICA8U3ViTWVudVxuICAgICAgICAgIGtleT1cInN1YjFcIlxuICAgICAgICAgIHRpdGxlPXs8c3Bhbj48SWNvbiB0eXBlPVwidmlkZW8tY2FtZXJhXCIgLz48c3Bhbj57dHJhbnNsYXRlT2JqLlBPUlRGT0xJT308L3NwYW4+PC9zcGFuPn1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubmF2aWdhdGUoJy9hcHAvYmFkZ2UnKX0+e3RyYW5zbGF0ZU9iai5CQURHRX08L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm5hdmlnYXRlKCcvYXBwL2NhcmQnKX0+e3RyYW5zbGF0ZU9iai5DQVJEfTwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubmF2aWdhdGUoJy9hcHAvcmluZ2NoYXJ0Jyl9Pnt0cmFuc2xhdGVPYmouUklOR19DSEFSVH08L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm5hdmlnYXRlKCcvYXBwL21peGNoYXJ0Jyl9Pnt0cmFuc2xhdGVPYmouTUlYX0NIQVJUfTwvTWVudS5JdGVtPlxuICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdG9yV2lkdGgsIGRlZmF1bHRWYWx1ZSwgb25TZWxlY3RDaGFuZ2UsIG9wdGlvbkxpc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJsaXN0U2VsZWN0b3JcIiBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0gc3R5bGU9e3sgd2lkdGg6IHNlbGVjdG9yV2lkdGggfX0gb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfT5cbiAgICAgICAge1xuICAgICAgICAgIG9wdGlvbkxpc3QubWFwKG9wID0+IChcbiAgICAgICAgICAgIDxPcHRpb24ga2V5PXtvcC52YWx1ZX0gdmFsdWU9e29wLnZhbHVlfT57b3AudGV4dH08L09wdGlvbj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1NlbGVjdD5cbiAgICApO1xuICB9XG59XG5cblNlbGVjdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25TZWxlY3RDaGFuZ2U6ICgpID0+IHt9LFxuICBkZWZhdWx0VmFsdWU6ICcnLFxuICBzZWxlY3RvcldpZHRoOiAxMjAsXG4gIG9wdGlvbkxpc3Q6IFtdXG59O1xuXG5TZWxlY3Rvci5wcm9wVHlwZXMgPSB7XG4gIG9uU2VsZWN0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RvcldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcHRpb25MaXN0OiBQcm9wVHlwZXMuaW5zdGFuY2VPZihBcnJheSlcbn07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IExheW91dCwgSWNvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xuZXhwb3J0IGNvbnN0IEFwcExheW91dCA9IHN0eWxlZChMYXlvdXQpYFxuICBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuZXhwb3J0IGNvbnN0IEFwcEhlYWRlciA9IHN0eWxlZChIZWFkZXIpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDEpO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEFwcEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbG9hdDogcmlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDY0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQXBwSGVhZGVyQ29udGVudE5hbWUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA2NHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcHBIZWFkZXJDb250ZW50TGFuZ3VhZ2UgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNjRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQXBwSGVhZGVyQ29udGVudExvZ291dCA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51Q3Vyc29ySWNvbiA9IHN0eWxlZChJY29uKWBcbiAgJi5hbnRpY29uIHN2ZyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQoQ29udGVudClgXG4gIG1hcmdpbjogMjRweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjRjBGMkY1O1xuICBtaW4taGVpZ2h0OiAyODA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDE1cHg7XG5gO1xuIiwiY29uc3Qgc3RvcmFnZUV2ZW50ID0gKGUpID0+IHtcbiAgLy8gY29uc29sZS5sb2coJyMjIyMgc3RvcmFnZUV2ZW50ICMjIyMgJywgZS5rZXkpO1xuICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgY2FzZSAnbG9nb3V0JzpcbiAgICAgIC8vIGRvIGxvZ291dFxuICAgICAgbG9nb3V0KCk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbG9nb3V0Jyk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ2V0U2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2dldFNlc3Npb25TdG9yYWdlJzoge1xuICAgICAgLy8gc2VuZCBkYXRhIHRvIGFub3RoZXIgcGFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb25TdG9yYWdlJywgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnVXNlcicpKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnc2Vzc2lvblN0b3JhZ2UnOiB7XG4gICAgICBpZiAoZS5uZXdWYWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnIyMjIHNlc3Npb24gc3RvcmFnZSAjIyMnLCBKU09OLnBhcnNlKGUubmV3VmFsdWUpKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnVXNlcicsIEpTT04ucGFyc2UoZS5uZXdWYWx1ZSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICB9XG59O1xuXG5jb25zdCByZWRpcmVjdFRvTG9naW4gPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly9qYXNvbnllbmNoYW5nLmdpdGh1Yi5pby9NeV9SZWFjdF9RdWlja19TdGFydF9LaXQvIy9sb2dpbic7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgc3RvcmFnZUV2ZW50KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ291dCcsICdsb2dvdXQnKTtcbiAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgcmVkaXJlY3RUb0xvZ2luKCk7XG59O1xuXG5leHBvcnQgY29uc3QgcGFnZVN5bmMgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgc3RvcmFnZUV2ZW50KTtcbiAgbG9jYWxTdG9yYWdlLmdldFNlc3Npb25TdG9yYWdlID0gbmV3IERhdGUoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdVc2VyJykpIHtcbiAgICAgIHJlZGlyZWN0VG9Mb2dpbigpO1xuICAgIH1cbiAgfSwgNTAwKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2FwcC5jc3MnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnY29tcG9uZW50cy9TaWRlTWVudS9TaWRlTWVudSc7XG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9TZWxlY3Rvci9TZWxlY3Rvcic7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtcbiAgTG9hZGFibGVBYm91dE1lLCBMb2FkYWJsZVBvcnRmb2xpbywgTG9hZGFibGVCYWRnZSwgTG9hZGFibGVDYXJkLCBMb2FkYWJsZVJpbmcsXG4gIExvYWRhYmxlTWl4Q2hhcnRcbn0gZnJvbSAnbG9hZGFibGVzL2NvbW1vbic7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgbG9nb3V0X2ljb24gZnJvbSAnaW1hZ2VzL2xvZ291dF9pY29uLnBuZyc7XG5pbXBvcnQgeyBwYWdlU3luYywgbG9nb3V0IH0gZnJvbSAnc2VydmljZXMvQXV0aCc7XG5pbXBvcnQgZW52IGZyb20gJ3V0aWxzL2Vudic7XG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XG5cbmNvbnN0IGxhbmd1YWdlRGF0YSA9IFtcbiAgeyB2YWx1ZTogJ3poVFcnLCB0ZXh0OiAn57mB6auU5Lit5paHJyB9LFxuICB7IHZhbHVlOiAnZW5VUycsIHRleHQ6ICdFbmdsaXNoJyB9XG5dO1xuXG5AaW5qZWN0KCd0cmFuc2xhdGVTdG9yZScpXG5Ab2JzZXJ2ZXJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgdXNlck5hbWU6ICcnXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgcGFnZVN5bmMoKTtcbiAgICBpZiAoZW52LkVOQUJMRV9HQSkgdGhpcy5pbml0aWFsR0EoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1VzZXInKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlck5hbWU6IHVzZXIuVXNlck5hbWUgfSk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGluaXRpYWxHQSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhpc3RvcnksIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShlbnYuR0FfSUQsIHsgZGVidWc6IHRydWUgfSk7XG4gICAgUmVhY3RHQS5wYWdldmlldyhsb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgaGlzdG9yeS5saXN0ZW4obCA9PiBSZWFjdEdBLnBhZ2V2aWV3KGwucGF0aG5hbWUpKTtcbiAgfVxuXG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbGxhcHNlZDogIXRoaXMuc3RhdGUuY29sbGFwc2VkXG4gICAgfSk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvVXJsID0gKHVybCkgPT4ge1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybCk7XG4gIH1cblxuICBvbkxhbmd1YWdlQ2hhbmdlID0gKGxhbmd1YWdlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFuc2xhdGVTdG9yZS5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVPYmogfSA9IHRoaXMucHJvcHMudHJhbnNsYXRlU3RvcmU7XG4gICAgY29uc3QgeyB1c2VyTmFtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlcy5BcHBMYXlvdXQ+XG4gICAgICAgIDxMYXlvdXQuU2lkZXJcbiAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgY29sbGFwc2VkPXt0aGlzLnN0YXRlLmNvbGxhcHNlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdHlsZXMuTWVudVRpdGxlIC8+XG4gICAgICAgICAgPFNpZGVNZW51IG5hdmlnYXRlPXt0aGlzLm5hdmlnYXRlVG9Vcmx9IGNvbGxhcHNlZCA9e3RoaXMuc3RhdGUuY29sbGFwc2VkfSAvPlxuICAgICAgICA8L0xheW91dC5TaWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8U3R5bGVzLkFwcEhlYWRlcj5cbiAgICAgICAgICAgIDxTdHlsZXMuTWVudUN1cnNvckljb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJpZ2dlclwiXG4gICAgICAgICAgICAgIHR5cGU9e3RoaXMuc3RhdGUuY29sbGFwc2VkID8gJ21lbnUtdW5mb2xkJyA6ICdtZW51LWZvbGQnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3R5bGVzLkFwcEhlYWRlckNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxTdHlsZXMuQXBwSGVhZGVyQ29udGVudE5hbWU+e3RyYW5zbGF0ZU9iai5ISX17dXNlck5hbWV9PC9TdHlsZXMuQXBwSGVhZGVyQ29udGVudE5hbWU+XG4gICAgICAgICAgICAgIDxTdHlsZXMuQXBwSGVhZGVyQ29udGVudExhbmd1YWdlPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RvciBzZWxlY3RvcldpZHRoPXsxMTB9IGRlZmF1bHRWYWx1ZT1cInpoVFdcIiBvcHRpb25MaXN0PXtsYW5ndWFnZURhdGF9IG9uU2VsZWN0Q2hhbmdlPXt0aGlzLm9uTGFuZ3VhZ2VDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVzLkFwcEhlYWRlckNvbnRlbnRMYW5ndWFnZT5cbiAgICAgICAgICAgICAgPFN0eWxlcy5BcHBIZWFkZXJDb250ZW50TG9nb3V0IHNyYz17bG9nb3V0X2ljb259IHRpdGxlPXt0cmFuc2xhdGVPYmouTE9HT1VUfSBvbkNsaWNrPXtsb2dvdXR9IC8+XG4gICAgICAgICAgICA8L1N0eWxlcy5BcHBIZWFkZXJDb250ZW50PlxuICAgICAgICAgIDwvU3R5bGVzLkFwcEhlYWRlcj5cbiAgICAgICAgICA8U3R5bGVzLk1lbnVDb250ZW50PlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFJvdXRlIGRlZmF1bHQgcGF0aD1cIi9hcHAvYWJvdXRcIiBjb21wb25lbnQ9e0xvYWRhYmxlQWJvdXRNZX0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL3BvcnRmb2xpb1wiIGNvbXBvbmVudD17TG9hZGFibGVQb3J0Zm9saW99IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9iYWRnZVwiIGNvbXBvbmVudD17TG9hZGFibGVCYWRnZX0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2NhcmRcIiBjb21wb25lbnQ9e0xvYWRhYmxlQ2FyZH0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL3JpbmdjaGFydFwiIGNvbXBvbmVudD17TG9hZGFibGVSaW5nfSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvbWl4Y2hhcnRcIiBjb21wb25lbnQ9e0xvYWRhYmxlTWl4Q2hhcnR9IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICA8L1N0eWxlcy5NZW51Q29udGVudD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1N0eWxlcy5BcHBMYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGE1OGVkZWM5NzhiZGIzMzdlMjU2OTE3YjFiYTFlMTYucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==