import{p as m,H as y,s as w,h}from"./sl-splitter.CIJEVKm5.js";function l(t,e){if(t){const o=t.closest(e);return o||(t.parentNode instanceof ShadowRoot?l(t.parentNode.host,e):l(t.parentElement,e))}return null}function a(t,e){if(t){if(t.contains(e))return!0;if(t instanceof Element&&t.shadowRoot)return a(t.shadowRoot,e)}return!1}function d(t,e){if(t){if(t instanceof Element&&t.matches(e))return t;if(t instanceof Element&&t.shadowRoot){const o=d(t.shadowRoot,e);if(o)return o}if(t instanceof HTMLSlotElement)for(const o of t.assignedNodes()){const i=d(o,e);if(i)return i}if(t.children)for(const o of Array.from(t.children)){const i=d(o,e);if(i)return i}}return null}function u(t,e){return[...new Set(p(t,e))]}function p(t,e){const o=[];if(t){if(t instanceof Element&&t.matches(e)&&o.push(t),t instanceof Element&&t.shadowRoot&&o.push(...u(t.shadowRoot,e)),t instanceof HTMLSlotElement)for(const i of t.assignedNodes())o.push(...u(i,e));if(t.children)for(const i of Array.from(t.children))o.push(...u(i,e))}return o}function E(t){let e=t.getAttribute("tooltip"),o;new MutationObserver(s=>{s.forEach(c=>{c.type==="attributes"&&(e=t.getAttribute("tooltip"))})}).observe(t,{attributes:!0});function n(s){e&&(o=document.createElement("sl-tooltip"),o.target=t,o.position=[s.clientX,s.clientY],o.appendChild(document.createTextNode(e)),o.show(),document.body.appendChild(o))}function r(){o&&o.hide()}t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",r)}function g(t){return t.assignedNodes().filter(e=>e.nodeName!=="#text"||e.textContent.length>0)}function S(t){return g(t).length===0}async function b(t=1){return new Promise(e=>{setTimeout(()=>{e()},t)})}class f{constructor(){this.promise=new Promise((e,o)=>{this._resolve=e,this._reject=o})}resolve(e){this._resolve(e)}reject(e){this._reject(e)}}function x(t,e){const o=new Set;let i;return(...n)=>{const r=new f;return window.clearTimeout(i),i=window.setTimeout(()=>{try{const s=t(...n);for(const c of o)c.resolve(s)}catch(s){r.reject(s)}},e),o.add(r),r.promise}}const T=m(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ready=new f,this.target=void 0,this.position=[0,0],this.debounce=.25,this.opacity=0}get style(){const e={opacity:this.opacity.toString(),transition:`opacity ${this.debounce}s ease-in-out`},o=this.position[1]+15,i=this.position[0]+15,n=this.host.getBoundingClientRect();return o+n.height>=window.innerHeight?e.bottom="8px":e.top=`${o}px`,i+n.width>=window.innerWidth?e.right="8px":e.left=`${i}px`,e}async show(){await this.ready.promise,this.opacity=1}async hide(){this.opacity=0,await b(this.debounce*1e3),this.host.remove()}handleMouseMove(e){a(e.target,this.target)&&(this.position=[e.clientX,e.clientY])}connectedCallback(){w(this.host)}componentDidLoad(){this.ready.resolve()}render(){return h("div",{key:"895566b8142cf3517b02e711a4be5166e7db8836",class:"sl-tooltip",style:this.style},h("slot",{key:"5c39d7e9d3b2f78f0a2b8fadda29024214c7b9f1"}))}static get delegatesFocus(){return!0}get host(){return this}},[17,"sl-tooltip",{target:[16],position:[16],debounce:[2],opacity:[32],show:[64],hide:[64]},[[9,"mousemove","handleMouseMove"]]]);export{f as D,T as S,E as a,d as b,l as c,x as d,b as e,a as f,g,S as i,u as q};
