(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/iconfinder_weather01_4102328.3077681e.svg"},13:function(e,t,n){e.exports=n(24)},19:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(11),i=n.n(o),c=(n(19),n(0)),s=n(1),u=n(5),l=n(2),d=n(4),m=n(12),p=n.n(m);n(20),n(23),a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(9),f=n.n(h),v=function(e){function t(e,n){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e,n))).state={isLoaded:!1,items:"TEst"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"prepareData",value:function(e){return"clear-night"===e.currently.icon&&f.a,{isLoaded:!1,items:e.currently.summary,icon:f.a,temperature:e.currently.temperature}}},{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a2e9fc452d514f082cc3d7a0adbda5d5/45.64861,%2025.60613?units=si&lang=ro").then(function(e){return e.json()}).then(function(t){console.table(t);var n=e.prepareData(t);e.setState(n)},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.state.items),r.a.createElement("img",{src:this.state.icon,alt:"logo"}),r.a.createElement("div",null,"Temperatura : ",this.state.temperature))}}]),t}(a.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n.p+"static/media/cloud_sun_1.8d2c0b2d.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.7729f644.chunk.js.map