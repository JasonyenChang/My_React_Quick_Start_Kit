(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{240:function(e,t,n){e.exports=n.p+"0a58edec978bdb337e256917b1ba1e16.png"},37:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=(n(21),n(248)),u=n(246),i=n(6),c=n(11),l=n(52);function f(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  &.ant-menu-item-selected.ant-menu-item-selected {\n    background-color: #50B087;\n  }\n"]);return f=function(){return e},e}var p,s=Object(l.a)(u.a.Item)(f());function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=u.a.SubMenu,v=Object(c.b)("translateStore")(p=Object(c.c)(p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,m(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.a.Component),function(e,t,n){t&&y(e.prototype,t),n&&y(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.props.translateStore.translateObj;return o.a.createElement(u.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},o.a.createElement(s,{key:"1",onClick:function(){return e.props.navigate("/app/about")}},o.a.createElement(i.a,{type:"user"}),o.a.createElement("span",null,t.ABOUT_ME)),o.a.createElement(d,{key:"sub1",title:o.a.createElement("span",null,o.a.createElement(i.a,{type:"video-camera"}),o.a.createElement("span",null,t.PORTFOLIO))},o.a.createElement(u.a.Item,{key:"2",onClick:function(){return e.props.navigate("/app/badge")}},t.BADGE)))}}]),t}())||p)||p,O=n(245),w=n(1),E=n.n(w);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=O.a.Option,C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,_(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,o.a.PureComponent),function(e,t,n){t&&S(e.prototype,t),n&&S(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.selectorWidth,n=e.defaultValue,r=e.onSelectChange,a=e.optionList;return o.a.createElement(O.a,{className:"listSelector",defaultValue:n,style:{width:t},onChange:r},a.map(function(e){return o.a.createElement(P,{key:e.value,value:e.value},e.text)}))}}]),t}();C.defaultProps={onSelectChange:function(){},defaultValue:"",selectorWidth:120,optionList:[]},C.propTypes={onSelectChange:E.a.func,defaultValue:E.a.string,selectorWidth:E.a.number,optionList:E.a.instanceOf(Array)};var T=n(250),L=n(251),z=n(249),I=n(10);function U(){var e=J(["\n  padding-top: 15px;\n"]);return U=function(){return e},e}function W(){var e=J(["\n  margin: 24px 16px;\n  background: #F0F2F5;\n  min-height: 280;\n  overflow-y: auto;\n"]);return W=function(){return e},e}function A(){var e=J(["\n  &.anticon svg {\n    cursor: pointer;\n  }\n"]);return A=function(){return e},e}function V(){var e=J(["\n  width: 32px;\n  height: 32px;\n  color: white;\n  margin-top: 15px;\n  margin-left: 10px;\n  cursor: pointer;\n"]);return V=function(){return e},e}function F(){var e=J(["\n  width: 110px;\n  height: 64px;\n  text-align: right;\n  padding-right: 10px;\n"]);return F=function(){return e},e}function R(){var e=J(["\n  width: auto;\n  height: 64px;\n  text-align: right;\n  padding-right: 10px;\n"]);return R=function(){return e},e}function B(){var e=J(["\n  float: right;\n  display: flex;\n  width: auto;\n  height: 64px;\n"]);return B=function(){return e},e}function G(){var e=J(["\n  background-color: rgba(128, 128, 128, 1);\n  padding-left: 15px;\n  padding-right: 0px;\n  color: white;\n"]);return G=function(){return e},e}function H(){var e=J(["\n  height: 100vh;\n"]);return H=function(){return e},e}function J(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var M,N=a.a.Header,D=a.a.Content,K=Object(l.a)(a.a)(H()),q=Object(l.a)(N)(G()),Q=l.a.div(B()),X=l.a.div(R()),Y=l.a.div(F()),Z=l.a.img(V()),$=(Object(l.a)(i.a)(A()),Object(l.a)(D)(W())),ee=l.a.div(U()),te=n(240),ne=n.n(te),re=function(){sessionStorage.clear()},oe=function(){return null!==sessionStorage.getItem("AccessToken")};function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return pe});var fe=[{value:"zhTW",text:"繁體中文"},{value:"enUS",text:"English"}],pe=Object(c.b)("translateStore")(M=Object(c.c)(M=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=ie(this,(e=ce(t)).call.apply(e,[this].concat(o)))).state={collapsed:!1},n.toggle=function(){n.setState({collapsed:!n.state.collapsed})},n.navigateToUrl=function(e){n.props.history.push(e)},n.onLanguageChange=function(e){n.props.translateStore.setLanguage(e)},n.onLogout=function(){re(),oe()||n.props.history.push("/")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(t,o.a.Component),function(e,t,n){t&&ue(e.prototype,t),n&&ue(e,n)}(t,[{key:"render",value:function(){var e=this.props.translateStore.translateObj;return o.a.createElement(K,null,o.a.createElement(a.a.Sider,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},o.a.createElement(ee,null),o.a.createElement(v,{navigate:this.navigateToUrl})),o.a.createElement(a.a,null,o.a.createElement(q,null,o.a.createElement(Q,null,o.a.createElement(X,null,e.HI,sessionStorage.getItem("UserName")),o.a.createElement(Y,null,o.a.createElement(C,{selectorWidth:110,defaultValue:"zhTW",optionList:fe,onSelectChange:this.onLanguageChange})),o.a.createElement(Z,{src:ne.a,title:e.LOGOUT,onClick:this.onLogout}))),o.a.createElement($,null,oe()?o.a.createElement(T.a,null,o.a.createElement(L.a,{default:!0,path:"/app/about",component:I.a}),o.a.createElement(L.a,{path:"/app/portfolio",component:I.e}),o.a.createElement(L.a,{path:"/app/badge",component:I.c})):o.a.createElement(z.a,{to:"/"}))))}}]),t}())||M)||M}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ291dF9pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlTWVudS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlTWVudS9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWxlY3Rvci9TZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHAuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJwIiwiTWVudUl0ZW0iLCJPYmplY3QiLCJzdHlsZWRfY29tcG9uZW50c19icm93c2VyX2VzbSIsIm1lbnUiLCJJdGVtIiwiX3RlbXBsYXRlT2JqZWN0IiwiU3ViTWVudSIsIlNpZGVNZW51X1NpZGVNZW51IiwiaW5kZXhfbW9kdWxlIiwicmVhY3RfZGVmYXVsdCIsImEiLCJDb21wb25lbnQiLCJfdGhpcyIsInRoaXMiLCJ0cmFuc2xhdGVPYmoiLCJwcm9wcyIsInRyYW5zbGF0ZVN0b3JlIiwiY3JlYXRlRWxlbWVudCIsInRoZW1lIiwibW9kZSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJrZXkiLCJvbkNsaWNrIiwibmF2aWdhdGUiLCJpY29uIiwidHlwZSIsIkFCT1VUX01FIiwidGl0bGUiLCJQT1JURk9MSU8iLCJCQURHRSIsIk9wdGlvbiIsImVzX3NlbGVjdCIsIlNlbGVjdG9yX1NlbGVjdG9yIiwiUHVyZUNvbXBvbmVudCIsIl90aGlzJHByb3BzIiwic2VsZWN0b3JXaWR0aCIsImRlZmF1bHRWYWx1ZSIsIm9uU2VsZWN0Q2hhbmdlIiwib3B0aW9uTGlzdCIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJvbkNoYW5nZSIsIm1hcCIsIm9wIiwidmFsdWUiLCJ0ZXh0IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwicHJvcF90eXBlc19kZWZhdWx0IiwiZnVuYyIsInN0cmluZyIsIm51bWJlciIsImluc3RhbmNlT2YiLCJBcnJheSIsIkhlYWRlciIsImxheW91dCIsIkNvbnRlbnQiLCJBcHBMYXlvdXQiLCJzdHlsZV90ZW1wbGF0ZU9iamVjdCIsIkFwcEhlYWRlciIsIl90ZW1wbGF0ZU9iamVjdDIiLCJBcHBIZWFkZXJDb250ZW50IiwiZGl2IiwiX3RlbXBsYXRlT2JqZWN0MyIsIkFwcEhlYWRlckNvbnRlbnROYW1lIiwiX3RlbXBsYXRlT2JqZWN0NCIsIkFwcEhlYWRlckNvbnRlbnRMYW5ndWFnZSIsIl90ZW1wbGF0ZU9iamVjdDUiLCJBcHBIZWFkZXJDb250ZW50TG9nb3V0IiwiaW1nIiwiX3RlbXBsYXRlT2JqZWN0NiIsIk1lbnVDb250ZW50IiwiX3RlbXBsYXRlT2JqZWN0NyIsIl90ZW1wbGF0ZU9iamVjdDgiLCJNZW51VGl0bGUiLCJfdGVtcGxhdGVPYmplY3Q5IiwibG9nb3V0Iiwic2Vzc2lvblN0b3JhZ2UiLCJjbGVhciIsImlzQXV0aGVudGljYXRlZCIsImdldEl0ZW0iLCJsYW5ndWFnZURhdGEiLCJBcHBfQXBwIiwic3RhdGUiLCJjb2xsYXBzZWQiLCJ0b2dnbGUiLCJzZXRTdGF0ZSIsIm5hdmlnYXRlVG9VcmwiLCJ1cmwiLCJoaXN0b3J5IiwicHVzaCIsIm9uTGFuZ3VhZ2VDaGFuZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25Mb2dvdXQiLCJTaWRlciIsInRyaWdnZXIiLCJjb2xsYXBzaWJsZSIsIkhJIiwic3JjIiwibG9nb3V0X2ljb25fZGVmYXVsdCIsIkxPR09VVCIsIlN3aXRjaCIsIlJvdXRlIiwiZGVmYXVsdCIsInBhdGgiLCJjb21wb25lbnQiLCJjb21tb24iLCJSZWRpcmVjdCIsInRvIl0sIm1hcHBpbmdzIjoiNkVBQUFBLEVBQUFDLFFBQWlCQyxFQUFBQyxFQUF1QiwwWkNHakMs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LGNBQUN1RCxFQUFELEtBRUlRLEtBQ0F2RSxFQUFBQyxFQUFBTyxjQUFDc0YsRUFBQSxFQUFELEtBQ0U5RixFQUFBQyxFQUFBTyxjQUFDdUYsRUFBQSxHQUFNQyxTQUFPLEVBQUNDLEtBQUssYUFBYUMsVUFBV0MsRUFBQSxJQUM1Q25HLEVBQUFDLEVBQUFPLGNBQUN1RixFQUFBLEdBQU1FLEtBQUssaUJBQWlCQyxVQUFXQyxFQUFBLElBQ3hDbkcsRUFBQUMsRUFBQU8sY0FBQ3VGLEVBQUEsR0FBTUUsS0FBSyxhQUFhQyxVQUFXQyxFQUFBLEtBRXBDbkcsRUFBQUMsRUFBQU8sY0FBQzRGLEVBQUEsR0FBU0MsR0FBRyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGE1OGVkZWM5NzhiZGIzMzdlMjU2OTE3YjFiYTFlMTYucG5nXCI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBNZW51LCBJY29uIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBjb25zdCBNZW51SXRlbSA9IHN0eWxlZChNZW51Lkl0ZW0pYFxuICAmLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwQjA4NztcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51LCBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnLi9zdHlsZSc7XG5cbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbkBpbmplY3QoJ3RyYW5zbGF0ZVN0b3JlJylcbkBvYnNlcnZlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVPYmogfSA9IHRoaXMucHJvcHMudHJhbnNsYXRlU3RvcmU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51IHRoZW1lPVwiZGFya1wiIG1vZGU9XCJpbmxpbmVcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX0+XG4gICAgICAgIDxTdHlsZXMuTWVudUl0ZW0ga2V5PVwiMVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubmF2aWdhdGUoJy9hcHAvYWJvdXQnKX0+XG4gICAgICAgICAgPEljb24gdHlwZT1cInVzZXJcIiAvPlxuICAgICAgICAgIDxzcGFuPnt0cmFuc2xhdGVPYmouQUJPVVRfTUV9PC9zcGFuPlxuICAgICAgICA8L1N0eWxlcy5NZW51SXRlbT5cbiAgICAgICAgPFN1Yk1lbnVcbiAgICAgICAgICBrZXk9XCJzdWIxXCJcbiAgICAgICAgICB0aXRsZT17PHNwYW4+PEljb24gdHlwZT1cInZpZGVvLWNhbWVyYVwiIC8+PHNwYW4+e3RyYW5zbGF0ZU9iai5QT1JURk9MSU99PC9zcGFuPjwvc3Bhbj59XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm5hdmlnYXRlKCcvYXBwL2JhZGdlJyl9Pnt0cmFuc2xhdGVPYmouQkFER0V9PC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvU3ViTWVudT5cbiAgICAgIDwvTWVudT5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0b3JXaWR0aCwgZGVmYXVsdFZhbHVlLCBvblNlbGVjdENoYW5nZSwgb3B0aW9uTGlzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cImxpc3RTZWxlY3RvclwiIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfSBzdHlsZT17eyB3aWR0aDogc2VsZWN0b3JXaWR0aCB9fSBvbkNoYW5nZT17b25TZWxlY3RDaGFuZ2V9PlxuICAgICAgICB7XG4gICAgICAgICAgb3B0aW9uTGlzdC5tYXAob3AgPT4gKFxuICAgICAgICAgICAgPE9wdGlvbiBrZXk9e29wLnZhbHVlfSB2YWx1ZT17b3AudmFsdWV9PntvcC50ZXh0fTwvT3B0aW9uPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvU2VsZWN0PlxuICAgICk7XG4gIH1cbn1cblxuU2VsZWN0b3IuZGVmYXVsdFByb3BzID0ge1xuICBvblNlbGVjdENoYW5nZTogKCkgPT4ge30sXG4gIGRlZmF1bHRWYWx1ZTogJycsXG4gIHNlbGVjdG9yV2lkdGg6IDEyMCxcbiAgb3B0aW9uTGlzdDogW11cbn07XG5cblNlbGVjdG9yLnByb3BUeXBlcyA9IHtcbiAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdG9yV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9wdGlvbkxpc3Q6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KVxufTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGF5b3V0LCBJY29uIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XG5leHBvcnQgY29uc3QgQXBwTGF5b3V0ID0gc3R5bGVkKExheW91dClgXG4gIGhlaWdodDogMTAwdmg7XG5gO1xuXG5leHBvcnQgY29uc3QgQXBwSGVhZGVyID0gc3R5bGVkKEhlYWRlcilgXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMSk7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgQXBwSGVhZGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNjRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcHBIZWFkZXJDb250ZW50TmFtZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFwcEhlYWRlckNvbnRlbnRMYW5ndWFnZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcHBIZWFkZXJDb250ZW50TG9nb3V0ID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVDdXJzb3JJY29uID0gc3R5bGVkKEljb24pYFxuICAmLmFudGljb24gc3ZnIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51Q29udGVudCA9IHN0eWxlZChDb250ZW50KWBcbiAgbWFyZ2luOiAyNHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNGMEYyRjU7XG4gIG1pbi1oZWlnaHQ6IDI4MDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXRvcDogMTVweDtcbmA7XG4iLCJleHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpID0+IHtcbiAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0FjY2Vzc1Rva2VuJykgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hcHAuY3NzJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFNpZGVNZW51IGZyb20gJ2NvbXBvbmVudHMvU2lkZU1lbnUvU2lkZU1lbnUnO1xuaW1wb3J0IFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvU2VsZWN0b3IvU2VsZWN0b3InO1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7XG4gIExvYWRhYmxlQWJvdXRNZSwgTG9hZGFibGVQb3J0Zm9saW8sIExvYWRhYmxlQmFkZ2Vcbn0gZnJvbSAnbG9hZGFibGVzL2NvbW1vbic7XG5pbXBvcnQgeyBpbmplY3QsIG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgbG9nb3V0X2ljb24gZnJvbSAnaW1hZ2VzL2xvZ291dF9pY29uLnBuZyc7XG5pbXBvcnQgeyBsb2dvdXQsIGNoZWNrU2Vzc2lvbiB9IGZyb20gJ3NlcnZpY2VzL0F1dGgnO1xuaW1wb3J0IHsgaXNBdXRoZW50aWNhdGVkIH0gZnJvbSAnLi4vc2VydmljZXMvQXV0aCc7XG5cbmNvbnN0IGxhbmd1YWdlRGF0YSA9IFtcbiAgeyB2YWx1ZTogJ3poVFcnLCB0ZXh0OiAn57mB6auU5Lit5paHJyB9LFxuICB7IHZhbHVlOiAnZW5VUycsIHRleHQ6ICdFbmdsaXNoJyB9XG5dO1xuXG5AaW5qZWN0KCd0cmFuc2xhdGVTdG9yZScpXG5Ab2JzZXJ2ZXJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvbGxhcHNlZDogZmFsc2VcbiAgfTtcblxuICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZFxuICAgIH0pO1xuICB9XG5cbiAgbmF2aWdhdGVUb1VybCA9ICh1cmwpID0+IHtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpO1xuICB9XG5cbiAgb25MYW5ndWFnZUNoYW5nZSA9IChsYW5ndWFnZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhbnNsYXRlU3RvcmUuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICB9XG5cbiAgb25Mb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9nb3V0KCk7XG4gICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVPYmogfSA9IHRoaXMucHJvcHMudHJhbnNsYXRlU3RvcmU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZXMuQXBwTGF5b3V0PlxuICAgICAgICA8TGF5b3V0LlNpZGVyXG4gICAgICAgICAgdHJpZ2dlcj17bnVsbH1cbiAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgIGNvbGxhcHNlZD17dGhpcy5zdGF0ZS5jb2xsYXBzZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8U3R5bGVzLk1lbnVUaXRsZSAvPlxuICAgICAgICAgIDxTaWRlTWVudSBuYXZpZ2F0ZT17dGhpcy5uYXZpZ2F0ZVRvVXJsfSAvPlxuICAgICAgICA8L0xheW91dC5TaWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8U3R5bGVzLkFwcEhlYWRlcj5cbiAgICAgICAgICAgIHsvKiA8U3R5bGVzLk1lbnVDdXJzb3JJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyaWdnZXJcIlxuICAgICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLmNvbGxhcHNlZCA/ICdtZW51LXVuZm9sZCcgOiAnbWVudS1mb2xkJ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGV9XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDxTdHlsZXMuQXBwSGVhZGVyQ29udGVudD5cbiAgICAgICAgICAgICAgPFN0eWxlcy5BcHBIZWFkZXJDb250ZW50TmFtZT57dHJhbnNsYXRlT2JqLkhJfXtzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdVc2VyTmFtZScpfTwvU3R5bGVzLkFwcEhlYWRlckNvbnRlbnROYW1lPlxuICAgICAgICAgICAgICA8U3R5bGVzLkFwcEhlYWRlckNvbnRlbnRMYW5ndWFnZT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0b3Igc2VsZWN0b3JXaWR0aD17MTEwfSBkZWZhdWx0VmFsdWU9XCJ6aFRXXCIgb3B0aW9uTGlzdD17bGFuZ3VhZ2VEYXRhfSBvblNlbGVjdENoYW5nZT17dGhpcy5vbkxhbmd1YWdlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8L1N0eWxlcy5BcHBIZWFkZXJDb250ZW50TGFuZ3VhZ2U+XG4gICAgICAgICAgICAgIDxTdHlsZXMuQXBwSGVhZGVyQ29udGVudExvZ291dCBzcmM9e2xvZ291dF9pY29ufSB0aXRsZT17dHJhbnNsYXRlT2JqLkxPR09VVH0gb25DbGljaz17dGhpcy5vbkxvZ291dH0gLz5cbiAgICAgICAgICAgIDwvU3R5bGVzLkFwcEhlYWRlckNvbnRlbnQ+XG4gICAgICAgICAgPC9TdHlsZXMuQXBwSGVhZGVyPlxuICAgICAgICAgIDxTdHlsZXMuTWVudUNvbnRlbnQ+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZCgpID8gXG4gICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGRlZmF1bHQgcGF0aD1cIi9hcHAvYWJvdXRcIiBjb21wb25lbnQ9e0xvYWRhYmxlQWJvdXRNZX0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvcG9ydGZvbGlvXCIgY29tcG9uZW50PXtMb2FkYWJsZVBvcnRmb2xpb30gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvYmFkZ2VcIiBjb21wb25lbnQ9e0xvYWRhYmxlQmFkZ2V9IC8+XG4gICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICA6IDxSZWRpcmVjdCB0bz1cIi9cIiAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU3R5bGVzLk1lbnVDb250ZW50PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvU3R5bGVzLkFwcExheW91dD5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9