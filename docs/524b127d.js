const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(s)})(t):t;var n;const r=window.trustedTypes,l=r?r.emptyScript:"",a=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=c){var i,o;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==o?o:h.toAttribute)(e,s.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var s,i,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,a=null!==(o=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==o?o:h.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var u;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:p}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.0.2");const v=globalThis.trustedTypes,$=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,g="?"+m,f=`<${g}>`,_=document,A=(t="")=>_.createComment(t),y=t=>null===t||"object"!=typeof t&&"function"!=typeof t,b=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,k=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,T=/"/g,C=/^(?:script|style|textarea)$/i,U=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),H=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),P=new WeakMap,M=_.createTreeWalker(_,129,null,!1),z=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":"",r=w;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,d=0;for(;d<s.length&&(r.lastIndex=d,a=r.exec(s),null!==a);)d=r.lastIndex,r===w?"!--"===a[1]?r=E:void 0!==a[1]?r=k:void 0!==a[2]?(C.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=x):void 0!==a[3]&&(r=x):r===x?">"===a[0]?(r=null!=o?o:w,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?x:'"'===a[3]?T:S):r===T||r===S?r=x:r===E||r===k?r=w:(r=x,o=void 0);const c=r===x&&t[e+1].startsWith("/>")?" ":"";n+=r===w?s+f:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+m+c):s+m+(-2===h?(i.push(void 0),e):c)}const l=n+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==$?$.createHTML(l):l,i]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=z(t,e);if(this.el=O.createElement(a,s),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=M.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const s=h[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?j:"@"===e[1]?W:B})}else l.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(C.test(i.tagName)){const t=i.textContent.split(m),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],A()),M.nextNode(),l.push({type:2,index:++o});i.append(t[e],A())}}}else if(8===i.nodeType)if(i.data===g)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(m,t+1));)l.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,e){const s=_.createElement("template");return s.innerHTML=t,s}}function R(t,e,s=t,i){var o,n,r,l;if(e===H)return e;let a=void 0!==i?null===(o=s._$Cl)||void 0===o?void 0:o[i]:s._$Cu;const h=y(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(r=(l=s)._$Cl)&&void 0!==r?r:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=R(t,a._$AS(t,e.values),a,i)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(s,!0);M.currentNode=o;let n=M.nextNode(),r=0,l=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new V(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new q(n,this,t)),this.v.push(e),a=i[++l]}r!==(null==a?void 0:a.index)&&(n=M.nextNode(),r++)}return o}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class V{constructor(t,e,s,i){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),y(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return b(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==N&&y(this._$AH)?this._$AA.nextSibling.data=t:this.S(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=O.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(s);else{const t=new D(o,this),e=t.p(this.options);t.m(s),this.S(e),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new O(t)),e}M(t){b(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new V(this.A(A()),this.A(A()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,s,i,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=R(this,t,e,0),n=!y(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const i=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=R(this,i[s+r],e,r),l===H&&(l=this._$AH[r]),n||(n=!y(l)||l!==this._$AH[r]),l===N?t=N:t!==N&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!i&&this.k(t)}k(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===N?void 0:t}}const L=v?v.emptyScript:"";class j extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==N?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class W extends B{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=R(this,t,e,0))&&void 0!==s?s:N)===H)return;const i=this._$AH,o=t===N&&i!==N||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==N&&(i===N||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const J=window.litHtmlPolyfillSupport;var K,Z;null==J||J(O,V),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.2");class F extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,o;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new V(e.insertBefore(A(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}F.finalized=!0,F._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:F});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:F}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.0.2");const Q=U`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="green"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,X=U`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1c73a9"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg>`,Y=U`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#c71686"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,tt=U`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#dc1212"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,et=((t,...s)=>{const o=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(o,e)})`
:host {
  contain: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: #1a2b42;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--todo-app-background-color);
}

h2 {
    color: #337a4d;
}

.container {
    width: 40%;
    background-color: #cfe8d8;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
}

new-todo {
    margin-bottom: 1.2rem;
}

.input-container label {
    font-size: .9rem;
    color: #0c6848
}

.input-container input {
    border: solid 2px #0c6848;
    border-radius: .3rem;
}

.input-container input:focus {
    outline: solid 1px #0c6848;
    border-radius: .3rem;
}



button {
    font-size: .6rem;
    border: none;
    margin-left: .2rem;
}

.add-button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: .3rem;
}

.all-todos-container {
    width: 100%;
    padding: 0rem;
    margin-bottom: 1rem;
}

.undone-todos {
    background-color: lightpink;
    width: 100%;
    padding-bottom: .6rem;
}

.done-todos {
    background-color: lightskyblue;
    width: 100%;
    padding-bottom: .6rem;
}

todo-item {
    border-top: 2px solid white;
    border-radius: 3rem;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    animation: showing 1s;
}

.todo-options {
    margin: 0 0 0 .7rem;
    display: flex;
    align-items: center;
}

.todo-options button {
}

h3, h4 {
    margin: 0;
}

h3 {
    background-color: black;
    color: lightyellow;
    margin-bottom: .5rem;
    padding: .4rem;
    font-size: 1.2rem;
    font-weight: 500;
}

h4 {
    font-size: 1rem;
    text-align: left;
}

@keyframes showing {
    0%    { opacity: 0.1; }
  80%   { opacity: 0.8; }
  100%  { opacity: 1; }
}
`;customElements.define("todo-app",class extends F{static get properties(){return{tasks:{type:Array,attribute:!1,converter:t=>JSON.parse(t).map(((t,e)=>({id:e+1,task:t,completed:!1})))},thereAreDoneTasks:{type:Boolean,attribute:!1},thereAreUndoneTasks:{type:Boolean,attribute:!1}}}static get styles(){return et}constructor(){super(),this.title="Todo app",this.tasks=[],this.thereAreDoneTasks=!1,this.thereAreUndoneTasks=!1}tasksTemplate(t){return this.tasks.filter((e=>e.completed===t)).map((t=>U`<todo-item @delete-todo=${this.handleDeleteTodoEvent} @complete-todo=${this.handleCompleteTodoEvent} .task=${t}></todo-item>`))}handleAddTodoEvent(t){this.addTodo(t.detail.taskName)}addTodo(t){this.tasks=[...this.tasks,{id:this.tasks.length?Math.max(...this.tasks.map((t=>t.id)))+1:1,task:t,completed:!1}]}handleCompleteTodoEvent(t){this.completeTodo(t.detail.todoId)}completeTodo(t){const e=this.tasks.find((e=>e.id===t));e.completed=!0,this.tasks=[...this.tasks.filter((e=>e.id!==t)),e]}handleDeleteTodoEvent(t){this.deleteTodo(t.detail.todoId)}deleteTodo(t){this.tasks=this.tasks.filter((e=>e.id!==t))}get undoneTodos(){return this.tasks.find((t=>!t.completed))?this.thereAreUndoneTasks=!0:this.thereAreUndoneTasks=!1,U`
      ${this.thereAreUndoneTasks?U`
          <div class="undone-todos">
            <h3>Tasks to do</h3>
            ${this.tasksTemplate(!1)}
          </div>
        `:U`<div><p>Start adding tasks</p><div>`}
    `}get doneTodos(){return this.tasks.find((t=>t.completed))?this.thereAreDoneTasks=!0:this.thereAreDoneTasks=!1,U`
      ${this.thereAreDoneTasks?U`
          <div class="done-todos">
            <h3>Done tasks</h3>
            ${this.tasksTemplate(!0)}
          </div>
        `:null}
    `}render(){return U`
    <h2>Tasks</h2>
    <div class="container">
      <new-todo thereAreUndoneTasks=${this.thereAreUndoneTasks} @add-todo=${this.handleAddTodoEvent}></new-todo>
      <div class="all-todos-container">
        ${this.undoneTodos}
        ${this.doneTodos}
      </div>
    </div>
    `}}),customElements.define("new-todo",class extends F{static get properties(){return{inputVal:{type:String,attribute:!1}}}static get styles(){return et}constructor(){super(),this.inputVal=""}notifyNewTodo(){const t=new CustomEvent("add-todo",{detail:{taskName:this.inputVal}});this.dispatchEvent(t),this.inputVal=""}handleNewTaskInput(t){this.inputVal=t.target.value,this.inputVal&&"Enter"===t.key&&this.notifyNewTodo()}handleAddClick(t){return t.preventDefault(),this.inputVal&&this.notifyNewTodo()}render(){return U`
        <div class="input-container">
                <label>Add task
                <input
                    id="task-input"
                    type="text"
                    .value=${this.inputVal}
                    @keypress=${this.handleNewTaskInput}
                />
                </label>
        </div>
        <div class="add-button-container">
            <a id='add-button' aria-label='Add task' href='#' @click=${this.handleAddClick}>${Q}</a>
        </div>
        `}}),customElements.define("todo-item",class extends F{static get properties(){return{task:{type:Object}}}static get styles(){return et}constructor(){super(),this.task={}}notifyDeleteTodo(t){t.preventDefault();const e=new CustomEvent("delete-todo",{detail:{todoId:this.task.id}});this.dispatchEvent(e)}notifyCompleteTodo(t){t.preventDefault();const e=new CustomEvent("complete-todo",{detail:{todoId:this.task.id}});this.dispatchEvent(e)}render(){return U`
            <h4>${this.task.task}</h4>
            <div class="todo-options">
                ${this.task.completed?U`<span>${X}</span>`:U`<a href='#' @click=${this.notifyCompleteTodo}>${Y}</a>`}
                <a href='#' @click=${this.notifyDeleteTodo}>${tt}</a>
            </div>
        `}});
