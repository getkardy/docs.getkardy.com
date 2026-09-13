"use strict";(()=>{var w=Object.defineProperty;var k=(t,e,s)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>k(t,typeof e!="symbol"?e+"":e,s);function f(t,e,s){return Math.max(e,Math.min(t,s))}function m(t,e){return e==="rtl"?(1-t)*100:(-1+t)*100}function l(t,e,s){if(typeof e=="string")s!==void 0&&(t.style[e]=s);else for(let i in e)if(e.hasOwnProperty(i)){let r=e[i];r!==void 0&&(t.style[i]=r)}}function p(t,e){t.classList.add(e)}function y(t,e){t.classList.remove(e)}function b(t){t&&t.parentNode&&t.parentNode.removeChild(t)}var v={minimum:.08,maximum:1,template:`<div class="bar"><div class="peg"></div></div>
             <div class="spinner"><div class="spinner-icon"></div></div>
             <div class="indeterminate"><div class="inc"></div><div class="dec"></div></div>`,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,indeterminate:!1,indeterminateSelector:".indeterminate",barSelector:".bar",spinnerSelector:".spinner",parent:"body",direction:"ltr"},c,g=(c=class{static reset(){return this.status=null,this.isPaused=!1,this.pending=[],this.settings=v,this}static configure(t){return Object.assign(this.settings,t),this}static isStarted(){return typeof this.status=="number"}static set(t){if(this.isPaused)return this;let e=this.isStarted();t=f(t,this.settings.minimum,this.settings.maximum),this.status=t===this.settings.maximum?null:t;let s=this.render(!e),i=this.settings.speed,r=this.settings.easing;return s.forEach(n=>n.offsetWidth),this.queue(n=>{s.forEach(o=>{if(!this.settings.indeterminate){let a=o.querySelector(this.settings.barSelector);l(a,this.barPositionCSS({n:t,speed:i,ease:r}))}}),t===this.settings.maximum?(s.forEach(o=>{l(o,{transition:"none",opacity:"1"}),o.offsetWidth}),setTimeout(()=>{s.forEach(o=>{l(o,{transition:`all ${i}ms ${r}`,opacity:"0"})}),setTimeout(()=>{s.forEach(o=>{this.remove(o),this.settings.template===null&&l(o,{transition:"none",opacity:"1"})}),n()},i)},i)):setTimeout(n,i)}),this}static start(){this.status||this.set(0);let t=()=>{this.isPaused||setTimeout(()=>{this.status&&(this.trickle(),t())},this.settings.trickleSpeed)};return this.settings.trickle&&t(),this}static done(t){return!t&&!this.status?this:this.inc(.3+.5*Math.random()).set(1)}static inc(t){if(this.isPaused||this.settings.indeterminate)return this;let e=this.status;return e?e>1?this:(typeof t!="number"&&(e>=0&&e<.2?t=.1:e>=.2&&e<.5?t=.04:e>=.5&&e<.8?t=.02:e>=.8&&e<.99?t=.005:t=0),e=f(e+t,0,.994),this.set(e)):this.start()}static dec(t){if(this.isPaused||this.settings.indeterminate)return this;let e=this.status;return typeof e!="number"?this:(typeof t!="number"&&(e>.8?t=.1:e>.5?t=.05:e>.2?t=.02:t=.01),e=f(e-t,0,.994),this.set(e))}static trickle(){return this.isPaused||this.settings.indeterminate?this:this.inc()}static promise(t){if(!t||t.state()==="resolved")return this;let e=0,s=0;return s===0&&this.start(),e++,s++,t.always(()=>{s--,s===0?(e=0,this.done()):this.set((e-s)/e)}),this}static render(t=!1){let e=typeof this.settings.parent=="string"?document.querySelector(this.settings.parent):this.settings.parent,s=e?Array.from(e.querySelectorAll(".bprogress")):[];if(this.settings.template!==null&&s.length===0){p(document.documentElement,"bprogress-busy");let i=document.createElement("div");p(i,"bprogress"),i.innerHTML=this.settings.template,e!==document.body&&p(e,"bprogress-custom-parent"),e.appendChild(i),s.push(i)}return s.forEach(i=>{if(this.settings.template===null&&(i.style.display=""),p(document.documentElement,"bprogress-busy"),e!==document.body&&p(e,"bprogress-custom-parent"),this.settings.indeterminate){let r=i.querySelector(this.settings.barSelector);r&&(r.style.display="none");let n=i.querySelector(this.settings.indeterminateSelector);n&&(n.style.display="")}else{let r=i.querySelector(this.settings.barSelector),n=t?m(0,this.settings.direction):m(this.status||0,this.settings.direction);l(r,this.barPositionCSS({n:this.status||0,speed:this.settings.speed,ease:this.settings.easing,perc:n}));let o=i.querySelector(this.settings.indeterminateSelector);o&&(o.style.display="none")}if(this.settings.template===null){let r=i.querySelector(this.settings.spinnerSelector);r&&(r.style.display=this.settings.showSpinner?"block":"none")}else if(!this.settings.showSpinner){let r=i.querySelector(this.settings.spinnerSelector);r&&b(r)}}),s}static remove(t){t?this.settings.template===null?t.style.display="none":b(t):(y(document.documentElement,"bprogress-busy"),(typeof this.settings.parent=="string"?document.querySelectorAll(this.settings.parent):[this.settings.parent]).forEach(i=>{y(i,"bprogress-custom-parent")}),document.querySelectorAll(".bprogress").forEach(i=>{let r=i;this.settings.template===null?r.style.display="none":b(r)}))}static pause(){return!this.isStarted()||this.settings.indeterminate?this:(this.isPaused=!0,this)}static resume(){if(!this.isStarted()||this.settings.indeterminate)return this;if(this.isPaused=!1,this.settings.trickle){let t=()=>{this.isPaused||setTimeout(()=>{this.status&&(this.trickle(),t())},this.settings.trickleSpeed)};t()}return this}static isRendered(){return document.querySelectorAll(".bprogress").length>0}static getPositioningCSS(){let t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return`${e}Perspective`in t?"translate3d":`${e}Transform`in t?"translate":"margin"}static queue(t){this.pending.push(t),this.pending.length===1&&this.next()}static next(){let t=this.pending.shift();t&&t(this.next.bind(this))}static initPositionUsing(){this.settings.positionUsing===""&&(this.settings.positionUsing=this.getPositioningCSS())}static barPositionCSS({n:t,speed:e,ease:s,perc:i}){this.initPositionUsing();let r={},n=i??m(t,this.settings.direction);return this.settings.positionUsing==="translate3d"?r={transform:`translate3d(${n}%,0,0)`}:this.settings.positionUsing==="translate"?r={transform:`translate(${n}%,0)`}:this.settings.positionUsing==="width"?r={width:`${this.settings.direction==="rtl"?100-n:n+100}%`,...this.settings.direction==="rtl"?{right:"0",left:"auto"}:{}}:this.settings.positionUsing==="margin"&&(r=this.settings.direction==="rtl"?{"margin-left":`${-n}%`}:{"margin-right":`${-n}%`}),r.transition=`all ${e}ms ${s}`,r}},h(c,"settings",v),h(c,"status",null),h(c,"pending",[]),h(c,"isPaused",!1),c),S=({color:t="#29d",height:e="2px",spinnerPosition:s="top-right"})=>`
:root {
  --bprogress-color: ${t};
  --bprogress-height: ${e};
  --bprogress-spinner-size: 18px;
  --bprogress-spinner-animation-duration: 400ms;
  --bprogress-spinner-border-size: 2px;
  --bprogress-box-shadow: 0 0 10px ${t}, 0 0 5px ${t};
  --bprogress-z-index: 99999;
  --bprogress-spinner-top: ${s==="top-right"||s==="top-left"?"15px":"auto"};
  --bprogress-spinner-bottom: ${s==="bottom-right"||s==="bottom-left"?"15px":"auto"};
  --bprogress-spinner-right: ${s==="top-right"||s==="bottom-right"?"15px":"auto"};
  --bprogress-spinner-left: ${s==="top-left"||s==="bottom-left"?"15px":"auto"};
}

.bprogress {
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: var(--bprogress-z-index);
}

.bprogress .bar {
  background: var(--bprogress-color);
  position: fixed;
  z-index: var(--bprogress-z-index);
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bprogress-height);
}

/* Fancy blur effect */
.bprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: var(--bprogress-box-shadow);
  opacity: 1.0;
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
.bprogress .spinner {
  display: block;
  position: fixed;
  z-index: var(--bprogress-z-index);
  top: var(--bprogress-spinner-top);
  bottom: var(--bprogress-spinner-bottom);
  right: var(--bprogress-spinner-right);
  left: var(--bprogress-spinner-left);
}

.bprogress .spinner-icon {
  width: var(--bprogress-spinner-size);
  height: var(--bprogress-spinner-size);
  box-sizing: border-box;
  border: solid var(--bprogress-spinner-border-size) transparent;
  border-top-color: var(--bprogress-color);
  border-left-color: var(--bprogress-color);
  border-radius: 50%;
  -webkit-animation: bprogress-spinner var(--bprogress-spinner-animation-duration) linear infinite;
  animation: bprogress-spinner var(--bprogress-spinner-animation-duration) linear infinite;
}

.bprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.bprogress-custom-parent .bprogress .spinner,
.bprogress-custom-parent .bprogress .bar {
  position: absolute;
}

.bprogress .indeterminate {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bprogress-height);
  overflow: hidden;
}

.bprogress .indeterminate .inc,
.bprogress .indeterminate .dec {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: var(--bprogress-color);
}

.bprogress .indeterminate .inc {
  animation: bprogress-indeterminate-increase 2s infinite;
}

.bprogress .indeterminate .dec {
  animation: bprogress-indeterminate-decrease 2s 0.5s infinite;
}

@-webkit-keyframes bprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}

@keyframes bprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bprogress-indeterminate-increase {
  from { left: -5%; width: 5%; }
  to { left: 130%; width: 100%; }
}

@keyframes bprogress-indeterminate-decrease {
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%; }
}
`;var x=document.documentElement;if(!document.getElementById("kardy-navigation-progress")){let t=document.createElement("style");t.id="kardy-navigation-progress",t.textContent=`${S({color:"#ca1c67",height:"2px"})}
    html.dark { --bprogress-color: #ff8fbe; }
    @media (prefers-reduced-motion: reduce) {
      .bprogress, .bprogress * { transition: none !important; animation: none !important; }
    }`,document.head.appendChild(t);let e=matchMedia("(prefers-reduced-motion: reduce)"),s,i,r=location.pathname,n=()=>{clearTimeout(s),i=void 0,r=location.pathname,g.done()},o=a=>{clearTimeout(s),i=a,g.configure({showSpinner:!1,trickle:!e.matches,speed:e.matches?0:200}),g.start(),s=setTimeout(n,15e3)};document.addEventListener("click",a=>{if(a.button!==0||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey)return;let d=a.target instanceof Element?a.target.closest("a[href]"):null;if(!(d instanceof HTMLAnchorElement)||d.hasAttribute("download")||d.target&&d.target!=="_self")return;let u=new URL(d.href,location.href);u.origin!==location.origin||u.pathname===location.pathname||o(u.pathname)},!0),new MutationObserver(()=>{i&&x.dataset.currentPath===i&&n()}).observe(x,{attributes:!0,attributeFilter:["data-current-path"]}),window.addEventListener("popstate",()=>{location.pathname!==r&&o(location.pathname)}),window.addEventListener("pagehide",n),window.addEventListener("pageshow",n)}})();
