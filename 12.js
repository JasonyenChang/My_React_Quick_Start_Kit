(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{259:function(e,t,n){"use strict";n.r(t);var a=n(59),r=n.n(a),o=n(233),c=n.n(o),i=n(234),l=n.n(i),u=n(235),s=n.n(u),p=n(236),f=n.n(p),m=n(1),y=n.n(m),d=n(301),h=n(300),g=(n(2),n(238)),v=n.n(g);function b(){var e=v()(["\n  width: 1300px;\n  text-align: center;\n  overflow-x: scroll;\n"]);return b=function(){return e},e}var E,x=n(239).a.div(b()),A=(n(485),function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=l()(this,(e=s()(t)).call.apply(e,[this].concat(o)))).scale=function(){return{item:{alias:""},count:{min:0,tickCount:7,alias:""},percentage:{min:0,tickCount:7,alias:""}}},n.geomLabel=function(){var e=1;return{count:{labelLine:{lineWidth:1,stroke:"#ffffff",lineDash:[2,2],offset:0},content:["item*count",function(e,t){return"".concat(t)}],textStyle:function(){var t={textAlign:"center"};return e<=10&&(t.fill=h.a[e]),(e+=1)>10&&(e=1),t}},percentage:{labelLine:{lineWidth:1,stroke:"#ffffff",lineDash:[2,2],offset:0},content:["item*percentage",function(e,t){return"".concat(t.toFixed(2),"%")}]}}},n.label=function(){return{item:{formatter:function(e){return"".concat(e)},textStyle:{fill:"#000000",rotate:7,textAlign:"start"},autoRotate:!1},count:{formatter:function(e){return"".concat(e)},textStyle:{fill:"#000000",rotate:0},autoRotate:!1},percentage:{formatter:function(e){return"".concat(e,"%")},textStyle:{fill:"#A6A6A6",rotate:0},autoRotate:!1}}},n}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props.barData,t=e.reduce(function(e,t){return e+t.count},0),n=e,a=0;return n.map(function(e){return a+=e.count,e.percentage=a/t*100,e}),y.a.createElement(x,null,y.a.createElement(d.Chart,{className:"barChart",height:500,width:120*e.length,data:n,scale:this.scale(),padding:[60,70,160,60]},y.a.createElement(d.Axis,{name:"item",label:this.label().item}),y.a.createElement(d.Axis,{name:"count",label:this.label().count}),y.a.createElement(d.Axis,{name:"percentage",label:this.label().percentage}),y.a.createElement(d.Legend,{position:"bottom",visible:!1}),y.a.createElement(d.Geom,{type:"interval",position:"item*count",color:["item",h.b]},y.a.createElement(d.Label,{content:this.geomLabel().count.content,labelLine:this.geomLabel().count.labelLine,textStyle:this.geomLabel().count.textStyle,offset:10})),y.a.createElement(d.Geom,{type:"line",position:"item*percentage",color:"#000000",shape:"smooth",size:2,label:this.label().percentage}),y.a.createElement(d.Geom,{type:"point",position:"item*percentage",color:"#000000",shape:"circle",size:4},y.a.createElement(d.Label,{content:this.geomLabel().percentage.content,labelLine:this.geomLabel().percentage.labelLine,offset:20}))))}}]),t}(y.a.PureComponent)),C=(n(333),function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=l()(this,(e=s()(t)).call.apply(e,[this].concat(o)))).label=function(){return{percentage:{formatter:function(e){return"".concat(e,"%")},textStyle:{fill:"#A6A6A6",rotate:0},autoRotate:!1}}},n}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.runData,n=e.lineKey,a=e.xKey,r=e.yKey,o=e.legendKey;return y.a.createElement("div",null,y.a.createElement(d.Chart,{height:400,data:t,padding:[10,40,70,50],scale:{yKey:{type:"linear",min:0,tickCount:6,formatter:function(e){return"".concat(e.toLocaleString("en-US"))}},lineKey:{type:"linear",min:0,tickCount:6}},forceFit:!0},y.a.createElement(d.Legend,null),y.a.createElement(d.Axis,{name:a}),y.a.createElement(d.Axis,{name:r}),y.a.createElement(d.Tooltip,{containerTpl:'<div class="g2-tooltip"><p class="g2-tooltip-title"></p><table class="g2-tooltip-list"></table></div>',itemTpl:'<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}</li>',offset:50,showTitle:!1,shared:!1,"g2-tooltip":{position:"absolute",visibility:"hidden",border:"1px solid #efefef",backgroundColor:"white",color:"#000",opacity:"0.8",padding:"5px 15px",width:"180px"},"g2-tooltip-list":{margin:"10px"}}),y.a.createElement(d.Geom,{type:"intervalStack",position:"".concat(a,"*").concat(r),color:o}),y.a.createElement(d.Geom,{type:"line",position:"".concat(a,"*").concat(n),color:"#fdae6b",size:3,shape:"smooth"}),y.a.createElement(d.Geom,{type:"point",position:"".concat(a,"*").concat(n),color:"#fdae6b",size:3,shape:"circle"},y.a.createElement(d.Label,{content:n}))))}}]),t}(y.a.PureComponent)),k=n(266),L=n(60),w={data:[{item:"AA",count:20,percentage:0},{item:"BB",count:18,percentage:0},{item:"CC",count:16,percentage:0},{item:"DD",count:14,percentage:0},{item:"EE",count:12,percentage:0},{item:"FF",count:10,percentage:0},{item:"GG",count:8,percentage:0}]},S={data:[{country:"Europe",year:"1750",values:163,costs:95},{country:"Europe",year:"1800",values:203,costs:90},{country:"Europe",year:"1850",values:276,costs:80},{country:"Europe",year:"1900",values:408,costs:70},{country:"Europe",year:"1950",values:547,costs:60},{country:"Europe",year:"1999",values:729,costs:50},{country:"Europe",year:"2050",values:628,costs:40},{country:"Europe",year:"2100",values:828,costs:10},{country:"Asia",year:"1750",values:95,costs:95},{country:"Asia",year:"1800",values:635,costs:90},{country:"Asia",year:"1850",values:809,costs:80},{country:"Asia",year:"1900",values:947,costs:70},{country:"Asia",year:"1950",values:1402,costs:60},{country:"Asia",year:"1999",values:3634,costs:50},{country:"Asia",year:"2050",values:5268,costs:40},{country:"Asia",year:"2100",values:7268,costs:10},{country:"Australia",year:"2100",values:6500,costs:1}]};n.d(t,"default",function(){return K});var K=Object(L.b)("translateStore")(E=function(e){function t(){return r()(this,t),l()(this,s()(t).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props.translateStore.translateObj;return console.log("run.data",S.data),y.a.createElement("div",null,y.a.createElement(k.a,{title:e.MIX_CHART}),y.a.createElement("br",null),y.a.createElement(A,{barData:w.data}),y.a.createElement("br",null),y.a.createElement(C,{runData:S.data,lineKey:"costs",xKey:"year",yKey:"values",legendKey:"country"}))}}]),t}(y.a.Component))||E},266:function(e,t,n){"use strict";var a=n(59),r=n.n(a),o=n(233),c=n.n(o),i=n(234),l=n.n(i),u=n(235),s=n.n(u),p=n(236),f=n.n(p),m=n(1),y=n.n(m),d=n(238),h=n.n(d),g=n(239);function v(){var e=h()(["\n  flex: 1;\n  color: black;\n  font-size: 20px;\n  padding-left: 15px;\n"]);return v=function(){return e},e}function b(){var e=h()(["\n  width: 5px;\n  height: 30px;\n  background: black;\n"]);return b=function(){return e},e}function E(){var e=h()(["\n  display: flex;\n"]);return E=function(){return e},e}var x=g.a.div(E()),A=g.a.div(b()),C=g.a.div(v());n.d(t,"a",function(){return k});var k=function(e){function t(){return r()(this,t),l()(this,s()(t).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){return y.a.createElement(x,null,y.a.createElement(A,null),y.a.createElement(C,null,this.props.title))}}]),t}(y.a.PureComponent)},300:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var a=function(e){return e.length>20?"".concat(e.substring(0,20),"..."):e},r=["#00A99D","#F7931E","#E93922","#7C90A9","#A7B7CB","#CCCCCC","#333333","#70A4A1","#416585","#6A6A6A"],o={1:r[0],2:r[1],3:r[2],4:r[3],5:r[4],6:r[5],7:r[6],8:r[7],9:r[8],10:r[9]}},485:function(e,t,n){var a=n(486);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(96)(a,r);a.locals&&(e.exports=a.locals)},486:function(e,t,n){(e.exports=n(63)(!1)).push([e.i,".barChart{display:flex}",""])}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lQmFyQ2hhcnQvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZUJhckNoYXJ0L0xpbmVCYXJDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lU3RhY2tCYXJDaGFydC9MaW5lU3RhY2tCYXJDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qb3J0Zm9saW8vTWl4Q2hhcnQvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qb3J0Zm9saW8vTWl4Q2hhcnQvcnVuX2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUG9ydGZvbGlvL01peENoYXJ0L01peENoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmRUaXRsZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkVGl0bGUvQ2FyZFRpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZUJhckNoYXJ0L0xpbmVCYXJDaGFydC5sZXNzPzliMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZUJhckNoYXJ0L0xpbmVCYXJDaGFydC5sZXNzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsImRpdiIsIl90ZW1wbGF0ZU9iamVjdCIsIkxpbmVCYXJDaGFydF9MaW5lQmFyQ2hhcnRfTGluZUJhckNoYXJ0Iiwic2NhbGUiLCJpdGVtIiwiYWxpYXMiLCJjb3VudCIsIm1pbiIsInRpY2tDb3VudCIsInBlcmNlbnRhZ2UiLCJnZW9tTGFiZWwiLCJjb2xvckluZGV4IiwibGFiZWxMaW5lIiwibGluZVdpZHRoIiwic3Ryb2tlIiwibGluZURhc2giLCJvZmZzZXQiLCJjb250ZW50IiwiY29uY2F0IiwidGV4dFN0eWxlIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJmaWxsIiwiY29tbW9uIiwidG9GaXhlZCIsImxhYmVsIiwiZm9ybWF0dGVyIiwidmFsIiwicm90YXRlIiwiYXV0b1JvdGF0ZSIsImJhckRhdGEiLCJ0aGlzIiwicHJvcHMiLCJ0b3RhbENvdW50IiwicmVkdWNlIiwidG90YWwiLCJuZXdCYXJEYXRhIiwidGVtcENvdW50IiwibWFwIiwiZGF0YSIsInJlYWN0X2RlZmF1bHQiLCJhIiwiY3JlYXRlRWxlbWVudCIsIkJpekNoYXJ0cyIsImNsYXNzTmFtZSIsImhlaWdodCIsIndpZHRoIiwibGVuZ3RoIiwicGFkZGluZyIsIm5hbWUiLCJwb3NpdGlvbiIsInZpc2libGUiLCJ0eXBlIiwiY29sb3IiLCJzaGFwZSIsInNpemUiLCJQdXJlQ29tcG9uZW50IiwiTGluZVN0YWNrQmFyQ2hhcnRfTGluZVN0YWNrQmFyQ2hhcnQiLCJfdGhpcyRwcm9wcyIsInJ1bkRhdGEiLCJsaW5lS2V5IiwieEtleSIsInlLZXkiLCJsZWdlbmRLZXkiLCJ2YWx1ZSIsInRvTG9jYWxlU3RyaW5nIiwiZm9yY2VGaXQiLCJjb250YWluZXJUcGwiLCJpdGVtVHBsIiwic2hvd1RpdGxlIiwic2hhcmVkIiwiZzItdG9vbHRpcCIsInZpc2liaWxpdHkiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwiZzItdG9vbHRpcC1saXN0IiwibWFyZ2luIiwiTWl4Q2hhcnRfZGF0YSIsInJ1bl9kYXRhIiwiY291bnRyeSIsInllYXIiLCJ2YWx1ZXMiLCJjb3N0cyIsIk1peENoYXJ0X01peENoYXJ0IiwiT2JqZWN0IiwiaW5kZXhfbW9kdWxlIiwidHJhbnNsYXRlT2JqIiwidHJhbnNsYXRlU3RvcmUiLCJjb25zb2xlIiwibG9nIiwiQ2FyZFRpdGxlIiwidGl0bGUiLCJNSVhfQ0hBUlQiLCJDb21wb25lbnQiLCJzdHlsZWRfY29tcG9uZW50c19icm93c2VyX2VzbSIsIkxpbmUiLCJfdGVtcGxhdGVPYmplY3QyIiwiVGl0bGUiLCJfdGVtcGxhdGVPYmplY3QzIiwiQ2FyZFRpdGxlX0NhcmRUaXRsZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJkIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsImdldFNob3J0VGVzdCIsIkNIQVJUX0NPTE9SX0xJU1QiLCJDSEFSVF9DT0xPUiIsInRleHQiLCJzdWJzdHJpbmciLCIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiLCIxMCIsIm1vZHVsZSIsImkiLCJvcHRpb25zIiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsInVuZGVmaW5lZCIsImxvY2FscyIsImV4cG9ydHMiLCJwdXNoIl0sIm1hcHBpbmdzIjoieVhBRU8sTUFBTUEsU0FBWSxFQUFPQyxJQUFWQyxLQ09EQyw2TEFDbkJDLE1BQVEsa0JBQ05DLE1BQ0VDLE1BQU8sSUFFVEMsT0FDRUMsSUFBSyxFQUNMQyxVQUFXLEVBQ1hILE1BQU8sSUFFVEksWUFDRUYsSUFBSyxFQUNMQyxVQUFXLEVBQ1hILE1BQU8sUUFJWEssVUFBWSxXQUNWLElBQUlDLEVBQWEsRUFDakIsT0FDRUwsT0FDRU0sV0FDRUMsVUFBVyxFQUVYQyxPQUFRLFVBRVJDLFVBQVcsRUFBRyxHQUNkQyxPQUFRLEdBRVZDLFNBQVUsYUFBYyxTQUFDYixFQUFNRSxHQUFQLFNBQUFZLE9BQW9CWixLQUM1Q2EsVUFBVyxXQUNULElBQU1DLEdBQVVDLFVBQVcsVUFJM0IsT0FISVYsR0FBYyxLQUFJUyxFQUFNRSxLQUFPQyxFQUFBLEVBQVlaLEtBQy9DQSxHQUFjLEdBQ0csS0FBSUEsRUFBYSxHQUMzQlMsSUFHWFgsWUFDRUcsV0FDRUMsVUFBVyxFQUVYQyxPQUFRLFVBRVJDLFVBQVcsRUFBRyxHQUNkQyxPQUFRLEdBRVZDLFNBQVUsa0JBQW1CLFNBQUNiLEVBQU1LLEdBQVAsU0FBQVMsT0FBeUJULEVBQVdlLFFBQVEsR0FBNUMsWUFLbkNDLE1BQVEsa0JBQ05yQixNQUNFc0IsVUFBVyxTQUFBQyxHQUFHLFNBQUFULE9BQU9TLElBRXJCUixXQUNFRyxLQUFNLFVBQ05N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LFdBQ3ZIQyxHQUNYRyxFQUFHSixFQUFpQixHQUNwQkssRUFBR0wsRUFBaUIsR0FDcEJNLEVBQUdOLEVBQWlCLEdBQ3BCTyxFQUFHUCxFQUFpQixHQUNwQlEsRUFBR1IsRUFBaUIsR0FDcEJTLEVBQUdULEVBQWlCLEdBQ3BCVSxFQUFHVixFQUFpQixHQUNwQlcsRUFBR1gsRUFBaUIsR0FDcEJZLEVBQUdaLEVBQWlCLEdBQ3BCYSxHQUFJYixFQUFpQix5QkNqQnZCLElBQUF4RixFQUFjb0YsRUFBUSxLQUV0QixpQkFBQXBGLFFBQTRDc0csRUFBQUMsRUFBU3ZHLEVBQUEsTUFPckQsSUFBQXdHLEdBQWVDLEtBQUEsRUFFZkMsZUFQQUEsRUFRQUMsZ0JBQUFDLEdBRWF4QixFQUFRLEdBQVJBLENBQThEcEYsRUFBQXdHLEdBRTNFeEcsRUFBQTZHLFNBQUFQLEVBQUFRLFFBQUE5RyxFQUFBNkcsOEJDakJBUCxFQUFBUSxRQUEyQjFCLEVBQVEsR0FBUkEsRUFBMEQsSUFLckYyQixNQUFjVCxFQUFBQyxFQUFTLDBCQUEwQiIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIENoYXJ0LCBHZW9tLCBBeGlzLCBMZWdlbmQsIExhYmVsXG59IGZyb20gJ2JpemNoYXJ0cyc7XG5pbXBvcnQgeyBDSEFSVF9DT0xPUiwgQ0hBUlRfQ09MT1JfTElTVCB9IGZyb20gJ3V0aWxzL2NvbW1vbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgJy4vTGluZUJhckNoYXJ0Lmxlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQmFyQ2hhcnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc2NhbGUgPSAoKSA9PiAoe1xuICAgIGl0ZW06IHtcbiAgICAgIGFsaWFzOiAnJyxcbiAgICB9LFxuICAgIGNvdW50OiB7XG4gICAgICBtaW46IDAsXG4gICAgICB0aWNrQ291bnQ6IDcsXG4gICAgICBhbGlhczogJycsXG4gICAgfSxcbiAgICBwZXJjZW50YWdlOiB7XG4gICAgICBtaW46IDAsXG4gICAgICB0aWNrQ291bnQ6IDcsXG4gICAgICBhbGlhczogJycsXG4gICAgfSxcbiAgfSk7XG5cbiAgZ2VvbUxhYmVsID0gKCkgPT4ge1xuICAgIGxldCBjb2xvckluZGV4ID0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgY291bnQ6IHtcbiAgICAgICAgbGFiZWxMaW5lOiB7XG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIC8vIOe6v+eahOeyl+e7hlxuICAgICAgICAgIHN0cm9rZTogJyNmZmZmZmYnLFxuICAgICAgICAgIC8vIOe6v+eahOminOiJslxuICAgICAgICAgIGxpbmVEYXNoOiBbMiwgMl0sIC8vIOiZmue6v+agt+W8j1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogWydpdGVtKmNvdW50JywgKGl0ZW0sIGNvdW50KSA9PiBgJHtjb3VudH1gXSxcbiAgICAgICAgdGV4dFN0eWxlOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSB7IHRleHRBbGlnbjogJ2NlbnRlcicgfTtcbiAgICAgICAgICBpZiAoY29sb3JJbmRleCA8PSAxMCkgc3R5bGUuZmlsbCA9IENIQVJUX0NPTE9SW2NvbG9ySW5kZXhdO1xuICAgICAgICAgIGNvbG9ySW5kZXggKz0gMTtcbiAgICAgICAgICBpZiAoY29sb3JJbmRleCA+IDEwKSBjb2xvckluZGV4ID0gMTtcbiAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcGVyY2VudGFnZToge1xuICAgICAgICBsYWJlbExpbmU6IHtcbiAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgLy8g57q/55qE57KX57uGXG4gICAgICAgICAgc3Ryb2tlOiAnI2ZmZmZmZicsXG4gICAgICAgICAgLy8g57q/55qE6aKc6ImyXG4gICAgICAgICAgbGluZURhc2g6IFsyLCAyXSwgLy8g6Jma57q/5qC35byPXG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiBbJ2l0ZW0qcGVyY2VudGFnZScsIChpdGVtLCBwZXJjZW50YWdlKSA9PiBgJHtwZXJjZW50YWdlLnRvRml4ZWQoMil9JWBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGxhYmVsID0gKCkgPT4gKHtcbiAgICBpdGVtOiB7XG4gICAgICBmb3JtYXR0ZXI6IHZhbCA9PiBgJHt2YWx9YCxcbiAgICAgIC8vIOagvOW8j+WMluWdkOagh+i9tOaYvuekulxuICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgIGZpbGw6ICcjMDAwMDAwJyxcbiAgICAgICAgcm90YXRlOiA3LFxuICAgICAgICB0ZXh0QWxpZ246ICdzdGFydCcsXG4gICAgICB9LFxuICAgICAgYXV0b1JvdGF0ZTogZmFsc2UsXG4gICAgfSxcbiAgICBjb3VudDoge1xuICAgICAgZm9ybWF0dGVyOiB2YWwgPT4gYCR7dmFsfWAsXG4gICAgICAvLyDmoLzlvI/ljJblnZDmoIfovbTmmL7npLpcbiAgICAgIHRleHRTdHlsZToge1xuICAgICAgICBmaWxsOiAnIzAwMDAwMCcsXG4gICAgICAgIHJvdGF0ZTogMCxcbiAgICAgIH0sXG4gICAgICBhdXRvUm90YXRlOiBmYWxzZSxcbiAgICB9LFxuICAgIHBlcmNlbnRhZ2U6IHtcbiAgICAgIGZvcm1hdHRlcjogdmFsID0+IGAke3ZhbH0lYCxcbiAgICAgIC8vIOagvOW8j+WMluWdkOagh+i9tOaYvuekulxuICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgIGZpbGw6ICcjQTZBNkE2JyxcbiAgICAgICAgcm90YXRlOiAwLFxuICAgICAgfSxcbiAgICAgIGF1dG9Sb3RhdGU6IGZhbHNlLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJhckRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdG90YWxDb3VudCA9IGJhckRhdGEucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4geyByZXR1cm4gdG90YWwgKyBpdGVtLmNvdW50OyB9LCAwKTtcbiAgICBjb25zdCBuZXdCYXJEYXRhID0gYmFyRGF0YTtcbiAgICBsZXQgdGVtcENvdW50ID0gMDtcbiAgICBuZXdCYXJEYXRhLm1hcChkYXRhID0+IHtcbiAgICAgIHRlbXBDb3VudCArPSBkYXRhLmNvdW50O1xuICAgICAgZGF0YS5wZXJjZW50YWdlID0gKHRlbXBDb3VudCAvIHRvdGFsQ291bnQpICogMTAwO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZS5Db250YWluZXI+XG4gICAgICAgIDxDaGFydCBjbGFzc05hbWU9XCJiYXJDaGFydFwiIGhlaWdodD17NTAwfSB3aWR0aD17YmFyRGF0YS5sZW5ndGggKiAxMjB9IGRhdGE9e25ld0JhckRhdGF9IHNjYWxlPXt0aGlzLnNjYWxlKCl9IHBhZGRpbmc9e1s2MCwgNzAsIDE2MCwgNjBdfT5cbiAgICAgICAgICA8QXhpcyBuYW1lPVwiaXRlbVwiIGxhYmVsPXt0aGlzLmxhYmVsKCkuaXRlbX0gLz5cbiAgICAgICAgICA8QXhpcyBuYW1lPVwiY291bnRcIiBsYWJlbD17dGhpcy5sYWJlbCgpLmNvdW50fSAvPlxuICAgICAgICAgIDxBeGlzIG5hbWU9XCJwZXJjZW50YWdlXCIgbGFiZWw9e3RoaXMubGFiZWwoKS5wZXJjZW50YWdlfSAvPlxuICAgICAgICAgIDxMZWdlbmQgcG9zaXRpb249XCJib3R0b21cIiB2aXNpYmxlPXtmYWxzZX0gLz5cbiAgICAgICAgICB7LyogPFRvb2x0aXAgY3Jvc3NoYWlycz17Y3Jvc3NoYWlyc30gc2hhcmVkPXtmYWxzZX0gcG9zaXRpb249XCJ0b3BcIiAvPiAqL31cbiAgICAgICAgICA8R2VvbSB0eXBlPVwiaW50ZXJ2YWxcIiBwb3NpdGlvbj1cIml0ZW0qY291bnRcIiBjb2xvcj17WydpdGVtJywgQ0hBUlRfQ09MT1JfTElTVF19PlxuICAgICAgICAgICAgPExhYmVsIGNvbnRlbnQ9e3RoaXMuZ2VvbUxhYmVsKCkuY291bnQuY29udGVudH0gbGFiZWxMaW5lPXt0aGlzLmdlb21MYWJlbCgpLmNvdW50LmxhYmVsTGluZX0gdGV4dFN0eWxlPXt0aGlzLmdlb21MYWJlbCgpLmNvdW50LnRleHRTdHlsZX0gb2Zmc2V0PXsxMH0gLz5cbiAgICAgICAgICA8L0dlb20+XG4gICAgICAgICAgPEdlb20gdHlwZT1cImxpbmVcIiBwb3NpdGlvbj1cIml0ZW0qcGVyY2VudGFnZVwiIGNvbG9yPVwiIzAwMDAwMFwiIHNoYXBlPVwic21vb3RoXCIgc2l6ZT17Mn0gbGFiZWw9e3RoaXMubGFiZWwoKS5wZXJjZW50YWdlfSAvPlxuICAgICAgICAgIDxHZW9tIHR5cGU9XCJwb2ludFwiIHBvc2l0aW9uPVwiaXRlbSpwZXJjZW50YWdlXCIgY29sb3I9XCIjMDAwMDAwXCIgc2hhcGU9XCJjaXJjbGVcIiBzaXplPXs0fT5cbiAgICAgICAgICAgIDxMYWJlbCBjb250ZW50PXt0aGlzLmdlb21MYWJlbCgpLnBlcmNlbnRhZ2UuY29udGVudH0gbGFiZWxMaW5lPXt0aGlzLmdlb21MYWJlbCgpLnBlcmNlbnRhZ2UubGFiZWxMaW5lfSBvZmZzZXQ9ezIwfSAvPlxuICAgICAgICAgIDwvR2VvbT5cbiAgICAgICAgPC9DaGFydD5cbiAgICAgIDwvU3R5bGUuQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEcyLFxuICBDaGFydCxcbiAgR2VvbSxcbiAgQXhpcyxcbiAgVG9vbHRpcCxcbiAgQ29vcmQsXG4gIExhYmVsLFxuICBMZWdlbmQsXG4gIFZpZXcsXG4gIEd1aWRlLFxuICBTaGFwZSxcbiAgRmFjZXQsXG4gIFV0aWwsXG59IGZyb20gJ2JpemNoYXJ0cyc7XG5pbXBvcnQgRGF0YVNldCBmcm9tICdAYW50di9kYXRhLXNldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVTdGFja0JhckNoYXJ0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGxhYmVsID0gKCkgPT4gKHtcbiAgICBwZXJjZW50YWdlOiB7XG4gICAgICBmb3JtYXR0ZXI6IHZhbCA9PiBgJHt2YWx9JWAsXG4gICAgICAvLyDmoLzlvI/ljJblnZDmoIfovbTmmL7npLpcbiAgICAgIHRleHRTdHlsZToge1xuICAgICAgICBmaWxsOiAnI0E2QTZBNicsXG4gICAgICAgIHJvdGF0ZTogMFxuICAgICAgfSxcbiAgICAgIGF1dG9Sb3RhdGU6IGZhbHNlXG4gICAgfVxuICB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBydW5EYXRhLCBsaW5lS2V5LCB4S2V5LCB5S2V5LCBsZWdlbmRLZXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2NhbGUgPSB7XG4gICAgICB5S2V5OiB7XG4gICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIHRpY2tDb3VudDogNixcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsdWUpID0+IGAke3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfWAsXG4gICAgICB9LFxuICAgICAgbGluZUtleToge1xuICAgICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB0aWNrQ291bnQ6IDYsXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgaXRlbVRwbCA9ICc8bGkgZGF0YS1pbmRleD17aW5kZXh9PidcbiAgICAgICsgJzxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7Y29sb3J9O3dpZHRoOjhweDtoZWlnaHQ6OHB4O2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDo4cHg7XCI+PC9zcGFuPidcbiAgICAgICsgJ3tuYW1lfToge3ZhbHVlfSdcbiAgICAgICsgJzwvbGk+JztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENoYXJ0IGhlaWdodD17NDAwfSBkYXRhPXtydW5EYXRhfSBwYWRkaW5nPXtbMTAsIDQwLCA3MCwgNTBdfSBzY2FsZT17c2NhbGV9IGZvcmNlRml0PlxuICAgICAgICA8TGVnZW5kIC8+XG4gICAgICAgICAgPEF4aXMgbmFtZT17eEtleX0gLz5cbiAgICAgICAgICA8QXhpcyBuYW1lPXt5S2V5fSAvPlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBjb250YWluZXJUcGw9JzxkaXYgY2xhc3M9XCJnMi10b29sdGlwXCI+PHAgY2xhc3M9XCJnMi10b29sdGlwLXRpdGxlXCI+PC9wPjx0YWJsZSBjbGFzcz1cImcyLXRvb2x0aXAtbGlzdFwiPjwvdGFibGU+PC9kaXY+J1xuICAgICAgICAgICAgaXRlbVRwbD17aXRlbVRwbH1cbiAgICAgICAgICAgIG9mZnNldD17NTB9XG4gICAgICAgICAgICBzaG93VGl0bGU9e2ZhbHNlfVxuICAgICAgICAgICAgc2hhcmVkPXtmYWxzZX1cbiAgICAgICAgICAgIGcyLXRvb2x0aXA9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2VmZWZlZicsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAgICAgb3BhY2l0eTogJzAuOCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggMTVweCcsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTgwcHgnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZzItdG9vbHRpcC1saXN0PXt7XG4gICAgICAgICAgICAgIG1hcmdpbjogJzEwcHgnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEdlb21cbiAgICAgICAgICAgIHR5cGU9XCJpbnRlcnZhbFN0YWNrXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPXtgJHt4S2V5fSoke3lLZXl9YH1cbiAgICAgICAgICAgIGNvbG9yPXtsZWdlbmRLZXl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R2VvbVxuICAgICAgICAgICAgdHlwZT1cImxpbmVcIlxuICAgICAgICAgICAgcG9zaXRpb249e2Ake3hLZXl9KiR7bGluZUtleX1gfVxuICAgICAgICAgICAgY29sb3I9XCIjZmRhZTZiXCJcbiAgICAgICAgICAgIHNpemU9ezN9XG4gICAgICAgICAgICBzaGFwZT1cInNtb290aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8R2VvbVxuICAgICAgICAgICAgdHlwZT1cInBvaW50XCJcbiAgICAgICAgICAgIHBvc2l0aW9uPXtgJHt4S2V5fSoke2xpbmVLZXl9YH1cbiAgICAgICAgICAgIGNvbG9yPVwiI2ZkYWU2YlwiXG4gICAgICAgICAgICBzaXplPXszfVxuICAgICAgICAgICAgc2hhcGU9XCJjaXJjbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMYWJlbCBjb250ZW50PXtsaW5lS2V5fSAvPlxuICAgICAgICAgIDwvR2VvbT5cbiAgICAgICAgPC9DaGFydD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YTogW1xuICAgIHtcbiAgICAgIGl0ZW06ICdBQScsXG4gICAgICBjb3VudDogMjAsXG4gICAgICBwZXJjZW50YWdlOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgaXRlbTogJ0JCJyxcbiAgICAgIGNvdW50OiAxOCxcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBpdGVtOiAnQ0MnLFxuICAgICAgY291bnQ6IDE2LFxuICAgICAgcGVyY2VudGFnZTogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGl0ZW06ICdERCcsXG4gICAgICBjb3VudDogMTQsXG4gICAgICBwZXJjZW50YWdlOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgaXRlbTogJ0VFJyxcbiAgICAgIGNvdW50OiAxMixcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBpdGVtOiAnRkYnLFxuICAgICAgY291bnQ6IDEwLFxuICAgICAgcGVyY2VudGFnZTogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGl0ZW06ICdHRycsXG4gICAgICBjb3VudDogOCxcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgfSxcbiAgXSxcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiBbXG4gICAge1xuICAgICAgY291bnRyeTogXCJFdXJvcGVcIixcbiAgICAgIHllYXI6IFwiMTc1MFwiLFxuICAgICAgdmFsdWVzOiAxNjMsXG4gICAgICBjb3N0czogOTUsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiBcIkV1cm9wZVwiLFxuICAgICAgeWVhcjogXCIxODAwXCIsXG4gICAgICB2YWx1ZXM6IDIwMyxcbiAgICAgIGNvc3RzOiA5MCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6IFwiRXVyb3BlXCIsXG4gICAgICB5ZWFyOiBcIjE4NTBcIixcbiAgICAgIHZhbHVlczogMjc2LFxuICAgICAgY29zdHM6IDgwLFxuICAgIH0sXG4gICAge1xuICAgICAgY291bnRyeTogXCJFdXJvcGVcIixcbiAgICAgIHllYXI6IFwiMTkwMFwiLFxuICAgICAgdmFsdWVzOiA0MDgsXG4gICAgICBjb3N0czogNzAsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiBcIkV1cm9wZVwiLFxuICAgICAgeWVhcjogXCIxOTUwXCIsXG4gICAgICB2YWx1ZXM6IDU0NyxcbiAgICAgIGNvc3RzOiA2MCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6IFwiRXVyb3BlXCIsXG4gICAgICB5ZWFyOiBcIjE5OTlcIixcbiAgICAgIHZhbHVlczogNzI5LFxuICAgICAgY29zdHM6IDUwLFxuICAgIH0sXG4gICAge1xuICAgICAgY291bnRyeTogXCJFdXJvcGVcIixcbiAgICAgIHllYXI6IFwiMjA1MFwiLFxuICAgICAgdmFsdWVzOiA2MjgsXG4gICAgICBjb3N0czogNDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiBcIkV1cm9wZVwiLFxuICAgICAgeWVhcjogXCIyMTAwXCIsXG4gICAgICB2YWx1ZXM6IDgyOCxcbiAgICAgIGNvc3RzOiAxMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6IFwiQXNpYVwiLFxuICAgICAgeWVhcjogXCIxNzUwXCIsXG4gICAgICB2YWx1ZXM6IDk1LFxuICAgICAgY29zdHM6IDk1XG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiBcIkFzaWFcIixcbiAgICAgIHllYXI6IFwiMTgwMFwiLFxuICAgICAgdmFsdWVzOiA2MzUsXG4gICAgICBjb3N0czogOTAsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiBcIkFzaWFcIixcbiAgICAgIHllYXI6IFwiMTg1MFwiLFxuICAgICAgdmFsdWVzOiA4MDksXG4gICAgICBjb3N0czogODAsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiBcIkFzaWFcIixcbiAgICAgIHllYXI6IFwiMTkwMFwiLFxuICAgICAgdmFsdWVzOiA5NDcsXG4gICAgICBjb3N0czogNzAsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiBcIkFzaWFcIixcbiAgICAgIHllYXI6IFwiMTk1MFwiLFxuICAgICAgdmFsdWVzOiAxNDAyLFxuICAgICAgY29zdHM6IDYwLFxuICAgIH0sXG4gICAge1xuICAgICAgY291bnRyeTogXCJBc2lhXCIsXG4gICAgICB5ZWFyOiBcIjE5OTlcIixcbiAgICAgIHZhbHVlczogMzYzNCxcbiAgICAgIGNvc3RzOiA1MCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdW50cnk6IFwiQXNpYVwiLFxuICAgICAgeWVhcjogXCIyMDUwXCIsXG4gICAgICB2YWx1ZXM6IDUyNjgsXG4gICAgICBjb3N0czogNDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3VudHJ5OiBcIkFzaWFcIixcbiAgICAgIHllYXI6IFwiMjEwMFwiLFxuICAgICAgdmFsdWVzOiA3MjY4LFxuICAgICAgY29zdHM6IDEwLFxuICAgIH0sXG4gICAge1xuICAgICAgY291bnRyeTogXCJBdXN0cmFsaWFcIixcbiAgICAgIHllYXI6IFwiMjEwMFwiLFxuICAgICAgdmFsdWVzOiA2NTAwLFxuICAgICAgY29zdHM6IDEsXG4gICAgfVxuICBdXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5lQmFyQ2hhcnQgZnJvbSAnY29tcG9uZW50cy9MaW5lQmFyQ2hhcnQvTGluZUJhckNoYXJ0JztcbmltcG9ydCBMaW5lU3RhY2tCYXJDaGFydCBmcm9tICdjb21wb25lbnRzL0xpbmVTdGFja0JhckNoYXJ0L0xpbmVTdGFja0JhckNoYXJ0JztcbmltcG9ydCBDYXJkVGl0bGUgZnJvbSAnY29tcG9uZW50cy9DYXJkVGl0bGUvQ2FyZFRpdGxlJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IGJhciBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHN0YWNrIGZyb20gJy4vc3RhY2tfZGF0YSc7XG5pbXBvcnQgcnVuIGZyb20gJy4vcnVuX2RhdGEnO1xuXG5AaW5qZWN0KCd0cmFuc2xhdGVTdG9yZScpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXhDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0ZU9iaiB9ID0gdGhpcy5wcm9wcy50cmFuc2xhdGVTdG9yZTtcbiAgICBjb25zb2xlLmxvZygncnVuLmRhdGEnLCBydW4uZGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDYXJkVGl0bGUgdGl0bGU9e3RyYW5zbGF0ZU9iai5NSVhfQ0hBUlR9IC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8TGluZUJhckNoYXJ0IGJhckRhdGE9e2Jhci5kYXRhfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPExpbmVTdGFja0JhckNoYXJ0IHJ1bkRhdGE9e3J1bi5kYXRhfSBsaW5lS2V5PVwiY29zdHNcIiB4S2V5PVwieWVhclwiIHlLZXk9XCJ2YWx1ZXNcIiBsZWdlbmRLZXk9XCJjb3VudHJ5XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICcuL3N0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFRpdGxlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlcy5Db250YWluZXI+XG4gICAgICAgIDxTdHlsZXMuTGluZSAvPlxuICAgICAgICA8U3R5bGVzLlRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfTwvU3R5bGVzLlRpdGxlPlxuICAgICAgPC9TdHlsZXMuQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBnZXRTaG9ydFRlc3QgPSAodGV4dCkgPT4ge1xuICBpZiAodGV4dC5sZW5ndGggPiAyMCkge1xuICAgIHJldHVybiBgJHt0ZXh0LnN1YnN0cmluZygwLCAyMCl9Li4uYDtcbiAgfVxuICByZXR1cm4gdGV4dDtcbn07XG5cbmV4cG9ydCBjb25zdCBDSEFSVF9DT0xPUl9MSVNUID0gWycjMDBBOTlEJywgJyNGNzkzMUUnLCAnI0U5MzkyMicsICcjN0M5MEE5JywgJyNBN0I3Q0InLCAnI0NDQ0NDQycsICcjMzMzMzMzJywgJyM3MEE0QTEnLCAnIzQxNjU4NScsICcjNkE2QTZBJ107XG5leHBvcnQgY29uc3QgQ0hBUlRfQ09MT1IgPSB7XG4gIDE6IENIQVJUX0NPTE9SX0xJU1RbMF0sXG4gIDI6IENIQVJUX0NPTE9SX0xJU1RbMV0sXG4gIDM6IENIQVJUX0NPTE9SX0xJU1RbMl0sXG4gIDQ6IENIQVJUX0NPTE9SX0xJU1RbM10sXG4gIDU6IENIQVJUX0NPTE9SX0xJU1RbNF0sXG4gIDY6IENIQVJUX0NPTE9SX0xJU1RbNV0sXG4gIDc6IENIQVJUX0NPTE9SX0xJU1RbNl0sXG4gIDg6IENIQVJUX0NPTE9SX0xJU1RbN10sXG4gIDk6IENIQVJUX0NPTE9SX0xJU1RbOF0sXG4gIDEwOiBDSEFSVF9DT0xPUl9MSVNUWzldXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTIhLi9MaW5lQmFyQ2hhcnQubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMiEuL0xpbmVCYXJDaGFydC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctMiEuL0xpbmVCYXJDaGFydC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYmFyQ2hhcnR7ZGlzcGxheTpmbGV4fVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=