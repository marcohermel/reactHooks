(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=(a(25),a(26),function(e){return l.a.createElement("div",{className:"row divider"},l.a.createElement("div",{className:"col-lg-12 text-center"},l.a.createElement("h5",null,e.title)),l.a.createElement("div",{className:"col-lg-6 mycontent-left pr-5 "},e.left),l.a.createElement("div",{className:"col-lg-6 mycontent-right pl-5 "},e.right))}),m=a(8);function u(){var e=Object(n.useState)({name:"Marco"}),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",null,"Name "),l.a.createElement("input",{className:"form-control ",onChange:function(e){return r({name:e.target.value})},value:a.name}),l.a.createElement("small",null," Nome: ",a.name))}var s=a(1),i=a(2),h=a(4),d=a(3),f=a(9),v=a(5),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={name:"Marco"},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange,value:this.state.name}),l.a.createElement("small",null,"Name: ",this.state.name))}}]),t}(l.a.Component),b=a(6),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={line1:"",line2:"",postalCode:"",StateCode:"",CountryCode:""},a.handleChangeLine1=a.handleChangeLine1.bind(Object(f.a)(a)),a.handleChangeLine2=a.handleChangeLine2.bind(Object(f.a)(a)),a.handleChangePostalCode=a.handleChangePostalCode.bind(Object(f.a)(a)),a.handleChangeState=a.handleChangeState.bind(Object(f.a)(a)),a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"handleChangeLine1",value:function(e){this.setState(Object(b.a)({},this.state,{line1:e.target.value}))}},{key:"handleChangeLine2",value:function(e){this.setState(Object(b.a)({},this.state,{line2:e.target.value}))}},{key:"handleChangePostalCode",value:function(e){this.setState(Object(b.a)({},this.state,{postalCode:e.target.value}))}},{key:"handleChangeState",value:function(e){this.setState(Object(b.a)({},this.state,{StateCode:e.target.value}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Line 1"),l.a.createElement("input",{type:"text",className:"form-control form-control-sm",onChange:this.handleChangeLine1,value:this.state.line1})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Line 2"),l.a.createElement("input",{type:"text",className:"form-control form-control-sm",onChange:this.handleChangeLine2,value:this.state.line2})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Postal Code"),l.a.createElement("input",{type:"text",className:"form-control form-control-sm",onChange:this.handleChangePostalCode,value:this.state.postalCode})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"State "),l.a.createElement("input",{type:"text",className:"form-control form-control-sm",onChange:this.handleChangeState,value:this.state.StateCode})))}}]),t}(l.a.Component),p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Object(n.useState)(e),l=Object(m.a)(a,2),r=l[0],c=l[1],o=Object(n.useState)(!0),u=Object(m.a)(o,2),s=u[0],i=u[1];return{value:r,onChange:function(e){c(e.target.value),t&&i(e.target.value.length>0)},type:"text",style:{borderColor:s?"":"red"},className:"form-control form-control-sm"}};function C(){var e=p(""),t=p("",!1),a=p(""),n=p("");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Line 1"),l.a.createElement("input",e)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Line 2"),l.a.createElement("input",t)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Postal Code"),l.a.createElement("input",a)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"State "),l.a.createElement("input",n)))}var O=a(7),j=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"divBorder"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"value: ",l.a.createElement("strong",null,this.props.count))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-danger",onClick:this.props.decrement},"Decrement - ")," \xa0",l.a.createElement("button",{className:"btn btn-primary",onClick:this.props.increment},"Increment + ")," \xa0"))}}]),t}(n.Component),N=Object(O.b)(function(e){return{count:e.count}},function(e){return{increment:function(){return e({type:"INC"})},decrement:function(){return e({type:"DEC"})}}})(j),y=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"divBorder"},l.a.createElement("div",{className:"form-group"}),"Component child  level 3",l.a.createElement(N,null))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"divBorder"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"value: ",l.a.createElement("strong",null,this.props.count))),"Component child level 2",l.a.createElement(y,null))}}]),t}(n.Component),S=Object(O.b)(function(e){return{count:e.count}})(k),w=a(12),L={count:0};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;switch((arguments.length>1?arguments[1]:void 0).type){case"INC":return Object(b.a)({},e,{count:e.count+1});case"DEC":return Object(b.a)({},e,{count:e.count-1});default:return e}}function I(){var e=Object(w.b)(x);return l.a.createElement(O.a,{store:e},"Redux Provider Wrapper",l.a.createElement("br",null),l.a.createElement("div",{className:"divBorder"},"Component child level 1",l.a.createElement(S,null)))}var B=function(){var e=Object(n.useReducer)(x,{count:0}),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"divBorder"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"value: ",l.a.createElement("strong",null,a.count))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return r({type:"DEC"})}},"Decrement - ")," \xa0",l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return r({type:"INC"})}},"Increment + ")," \xa0"))},D=function(){return l.a.createElement("div",{className:"divBorder"},l.a.createElement("div",{className:"form-group"}),"Component child  level 3",l.a.createElement(B,null))};function P(){var e=Object(O.c)(function(e){return e.count});return l.a.createElement("div",{className:"divBorder"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"value: ",l.a.createElement("strong",null,e))),"Component child level 2",l.a.createElement(D,null))}function H(){var e=Object(w.b)(x);return l.a.createElement(O.a,{store:e},"Redux Provider Wrapper",l.a.createElement("br",null),l.a.createElement("div",{className:"divBorder"},"Component child level 1",l.a.createElement(P,null)))}var R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={name:"Marco",age:29},a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){localStorage.setItem("stetefull name",this.state.name),localStorage.setItem("stetefull age",this.state.age)}},{key:"componentDidUpdate",value:function(){localStorage.setItem("stetefull name",this.state.name),localStorage.setItem("stetefull age",this.state.age)}},{key:"handleNameChange",value:function(e){this.setState(Object(b.a)({},this.state,{name:e.target.value}))}},{key:"handleAgeChange",value:function(e){this.setState(Object(b.a)({},this.state,{age:e.target.value}))}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"form-inline mb-4"},l.a.createElement("label",null,"Name: "),l.a.createElement("input",{type:"text",className:"form-control form-control-sm ml-2 mr-2",onChange:function(t){return e.handleNameChange(t)},value:this.state.name}),l.a.createElement("label",null,"Age: "),l.a.createElement("input",{type:"number",className:"form-control form-control-sm ml-2 mr-2",onChange:function(t){return e.handleAgeChange(t)},value:this.state.age}))}}]),t}(l.a.Component);function A(){var e=Object(n.useState)("Marco"),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(29),o=Object(m.a)(c,2),u=o[0],s=o[1];return Object(n.useEffect)(function(){localStorage.setItem("stateless name",a),localStorage.setItem("stateless age",u)},[a,u]),l.a.createElement("form",{className:"form-inline mb-4"},l.a.createElement("label",null,"Name: "),l.a.createElement("input",{type:"text",className:"form-control form-control-sm ml-2 mr-2",onChange:function(e){return r(e.target.value)},value:a}),l.a.createElement("label",null,"Age: "),l.a.createElement("input",{type:"number",className:"form-control form-control-sm ml-2 mr-2",onChange:function(e){return s(e.target.value)},value:u}))}var M=function(){return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h3",null,"React Hooks"),l.a.createElement("label",null,l.a.createElement("strong",null,"RULES:")),l.a.createElement("ul",null,l.a.createElement("li",null,"Only call Hooks at the top level. Don\u2019t call Hooks inside loops, conditions, or nested functions."),l.a.createElement("li",null,"Only call Hooks from React function components or your own custom hooks. Don\u2019t call Hooks from regular JavaScript functions."),l.a.createElement("li",null,"A custom Hook is a JavaScript function whose name starts with \u201duse\u201d and that may call other Hooks.")))};var J=function(){return l.a.createElement("div",{className:"App container"},l.a.createElement(M,null),l.a.createElement(o,{title:"useState",left:l.a.createElement(E,null),right:l.a.createElement(u,null)}),l.a.createElement(o,{title:"useEffect",left:l.a.createElement(R,null),right:l.a.createElement(A,null)}),l.a.createElement(o,{title:"useCustom",left:l.a.createElement(g,null),right:l.a.createElement(C,null)}),l.a.createElement(o,{title:"useReducer",left:l.a.createElement(I,null),right:l.a.createElement(H,null)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31);c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.c7c18df7.chunk.js.map