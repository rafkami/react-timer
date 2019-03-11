(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(5),r=n.n(c),o=(n(19),n(6)),i=n(7),l=n(8),u=n(12),m=n(9),d=n(13),h=(n(20),n(21),function(e){var t=function(e){return e<10?"0".concat(e).substring(0,2):e.toString().substring(0,2)};return s.a.createElement("div",{className:"display__container"},s.a.createElement("div",{className:"display--inner"},null!==e.status?s.a.createElement("div",{className:"display--countdown"},function(e){var n=e,a=t(Math.floor(n/36e5));n%=36e5;var s=t(Math.floor(n/6e4));n%=6e4;var c=t(Math.floor(n/1e3)),r=t(n%1e3);return"".concat(a," : ").concat(s," : ").concat(c," : ").concat(r)}(e.countdown)):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"display--unit"},s.a.createElement("input",{className:"display--input",type:"number",autoFocus:!0,name:"hours",maxLength:"2",placeholder:"00",min:"00",max:"99",value:e.hours,onChange:e.inputChange}),s.a.createElement("label",{htmlFor:"hours"},"hours")),s.a.createElement("div",{className:"display--separate"},":"),s.a.createElement("div",{className:"display--unit"},s.a.createElement("input",{className:"display--input",type:"number",name:"minutes",maxLength:"2",placeholder:"00",min:"00",max:"59",value:e.minutes,onChange:e.inputChange}),s.a.createElement("label",{htmlFor:"minutes"},"minutes")),s.a.createElement("div",{className:"display--separate"},":"),s.a.createElement("div",{className:"display--unit"},s.a.createElement("input",{className:"display--input",type:"number",name:"seconds",maxLength:"2",placeholder:"00",min:"00",max:"59",value:e.seconds,onChange:e.inputChange}),s.a.createElement("label",{htmlFor:"seconds"},"seconds")))))}),p=(n(22),function(e){var t=e.status,n=e.clickStart,a=e.clickStop,c=e.clickResume,r=e.clickRestart,o=e.clickReset;return s.a.createElement("div",null,s.a.createElement("div",{className:"controls"},"started"!==t&&"stopped"!==t?s.a.createElement("button",{className:"controls__button controls--start",onClick:n},"START"):"started"===t?s.a.createElement("button",{className:"controls__button controls--stop",onClick:a},"STOP"):s.a.createElement("button",{className:"controls__button controls--resume",onClick:c},"RESUME"),s.a.createElement("button",{className:"controls__button controls--restart",onClick:r},"RESTART"),s.a.createElement("button",{className:"controls__button controls--reset",onClick:o},"RESET")))}),v=(n(23),function(e){return s.a.createElement("div",{className:"timer__container"},s.a.createElement("div",{className:"timer--commands"},"Provide the time values and run timer"),s.a.createElement(h,{hours:e.hours,minutes:e.minutes,seconds:e.seconds,countdown:e.countdown,status:e.status,inputChange:e.inputChange,focusChange:e.focusChange}),s.a.createElement(p,{status:e.status,clickStart:e.clickStart,clickStop:e.clickStop,clickResume:e.clickResume,clickRestart:e.clickRestart,clickReset:e.clickReset}))}),f=n(3),g=n(10),E=n(11);f.b.add(E.a);var S=function(){return s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"header__container"},s.a.createElement("div",{className:"header--title"},s.a.createElement(g.a,{icon:"stopwatch",className:"header--icon"}),"Our time is running out...")))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={canRun:!1,hours:"00",minutes:"00",seconds:"00",countdown:0,status:null,errors:{empty:!1,minutes:!1,seconds:!1},message:""},n.messages={empty_incorrect:"Put a number in at least one of the above fields",minutes_incorrect:"Maximum number of minutes cannot exceed 59",seconds_incorrect:"Maximum number of seconds cannot exceed 59"},n.handleStart=function(){var e=1e3*(60*n.state.hours*60+60*n.state.minutes+1*n.state.seconds),t=n.formValidation();"started"!==n.state.status&&(n.state.hours>0||n.state.minutes>0||n.state.seconds>0)&&t.correct?(n.setState({status:"started",canRun:!0,countdown:e,errors:{empty:!1,minutes:!1,seconds:!1}}),n.interval=setInterval(function(){n.setState(function(e){return{countdown:e.countdown-10}}),0===n.state.countdown&&(clearInterval(n.interval),n.setState(function(){return{status:null}}))},10)):n.setState({errors:{empty:!t.empty,minutes:!t.minutes,seconds:!t.seconds}})},n.formValidation=function(){var e=!1,t=!1,a=!1,s=!1;return(n.state.hours>0||n.state.minutes>0||n.state.seconds>0)&&(e=!0),n.state.minutes<60&&(t=!0),n.state.seconds<60&&(a=!0),e&&t&&a&&(s=!0),{correct:s,empty:e,minutes:t,seconds:a}},n.handleStop=function(){clearInterval(n.interval),n.setState({status:"stopped"})},n.handleResume=function(){n.interval=setInterval(function(){n.setState(function(e){return{status:"started",countdown:e.countdown-10}}),0===n.state.countdown&&(clearInterval(n.interval),n.setState(function(){return{status:null}}))},10)},n.handleRestart=function(){clearInterval(n.interval),n.setState({status:null,countdown:null})},n.handleReset=function(){clearInterval(n.interval),n.setState({canRun:!1,hours:"00",minutes:"00",seconds:"00",countdown:null,status:null})},n.formatTime=function(e){return e<10?"0"+e.toString().slice(e.toString().length-1):e.toString().slice(e.toString().length-2)},n.handleInputChange=function(e){var t=e.target,a=t.value,s=t.name;n.setState(Object(o.a)({},s,n.formatTime(a)))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(S,null),s.a.createElement(v,{canRun:this.state.canRun,hours:this.state.hours,minutes:this.state.minutes,seconds:this.state.seconds,countdown:this.state.countdown,status:this.state.status,clickStart:this.handleStart,clickStop:this.handleStop,clickResume:this.handleResume,clickRestart:this.handleRestart,clickReset:this.handleReset,inputChange:this.handleInputChange,focusChange:this.handleFocusChange,errors:this.state.errors,message:this.message}),this.state.errors.empty&&s.a.createElement("h4",{className:"timer__message"}," ",this.messages.empty_incorrect," "),this.state.errors.minutes&&s.a.createElement("h4",{className:"timer__message"}," ",this.messages.minutes_incorrect," "),this.state.errors.seconds&&s.a.createElement("h4",{className:"timer__message"}," ",this.messages.seconds_incorrect," "))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.342623e4.chunk.js.map