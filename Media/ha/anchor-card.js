(()=>{"use strict";var e,t,n,_,r,o,i={},l=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function s(t,n,_){var r,o,i,l={};for(i in n)"key"==i?r=n[i]:"ref"==i?o=n[i]:l[i]=n[i];if(arguments.length>2&&(l.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return f(t,l,r,o,null)}function f(e,_,r,o,i){var l={type:e,props:_,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++n:i};return null==i&&null!=t.vnode&&t.vnode(l),l}function p(e){return e.children}function d(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function y(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!m.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(m)}function m(){for(var e;m.__r=_.length;)e=_.sort((function(e,t){return e.__v.__b-t.__v.__b})),_=[],e.some((function(e){var t,n,_,r,o,i;e.__d&&(o=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],(_=c({},r)).__v=r.__v+1,C(i,r,_,t.__n,void 0!==i.ownerSVGElement,null!=r.__h?[o]:null,n,null==o?h(r):o,r.__h),H(n,r),r.__e!=o&&v(r)))}))}function g(e,t,n,_,r,o,u,c,a,s){var d,v,y,m,g,k,w,P=_&&_.__k||l,E=P.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(m=n.__k[d]=null==(m=t[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?f(null,m,null,null,m):Array.isArray(m)?f(p,{children:m},null,null,null):m.__b>0?f(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=P[d])||y&&m.key==y.key&&m.type===y.type)P[d]=void 0;else for(v=0;v<E;v++){if((y=P[v])&&m.key==y.key&&m.type===y.type){P[v]=void 0;break}y=null}C(e,m,y=y||i,r,o,u,c,a,s),g=m.__e,(v=m.ref)&&y.ref!=v&&(w||(w=[]),y.ref&&w.push(y.ref,null,m),w.push(v,m.__c||g,m)),null!=g?(null==k&&(k=g),"function"==typeof m.type&&m.__k===y.__k?m.__d=a=b(m,a,e):a=S(e,m,y,P,g,a),"function"==typeof n.type&&(n.__d=a)):a&&y.__e==a&&a.parentNode!=e&&(a=h(y))}for(n.__e=k,d=E;d--;)null!=P[d]&&("function"==typeof n.type&&null!=P[d].__e&&P[d].__e==n.__d&&(n.__d=h(_,d+1)),D(P[d],P[d]));if(w)for(d=0;d<w.length;d++)O(w[d],w[++d],w[++d])}function b(e,t,n){for(var _,r=e.__k,o=0;r&&o<r.length;o++)(_=r[o])&&(_.__=e,t="function"==typeof _.type?b(_,t,n):S(n,_,_,r,_.__e,t));return t}function k(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){k(e,t)})):t.push(e)),t}function S(e,t,n,_,r,o){var i,l,u;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||r!=o||null==r.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(r),i=null;else{for(l=o,u=0;(l=l.nextSibling)&&u<_.length;u+=2)if(l==r)break e;e.insertBefore(r,o),i=o}return void 0!==i?i:r.nextSibling}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||u.test(t)?n:n+"px"}function P(e,t,n,_,r){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||w(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||w(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?x:E,o):e.removeEventListener(t,o?x:E,o);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function E(e){this.l[e.type+!1](t.event?t.event(e):e)}function x(e){this.l[e.type+!0](t.event?t.event(e):e)}function C(e,n,_,r,o,i,l,u,a){var s,f,h,v,y,m,b,k,S,w,P,E=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(a=_.__h,u=n.__e=_.__e,n.__h=null,i=[u]),(s=t.__b)&&s(n);try{e:if("function"==typeof E){if(k=n.props,S=(s=E.contextType)&&r[s.__c],w=s?S?S.props.value:s.__:r,_.__c?b=(f=n.__c=_.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(k,w):(n.__c=f=new d(k,w),f.constructor=E,f.render=U),S&&S.sub(f),f.props=k,f.state||(f.state={}),f.context=w,f.__n=r,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,E.getDerivedStateFromProps(k,f.__s))),v=f.props,y=f.state,h)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,w)||n.__v===_.__v){f.props=k,f.state=f.__s,n.__v!==_.__v&&(f.__d=!1),f.__v=n,n.__e=_.__e,n.__k=_.__k,n.__k.forEach((function(e){e&&(e.__=n)})),f.__h.length&&l.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,m)}))}f.context=w,f.props=k,f.state=f.__s,(s=t.__r)&&s(n),f.__d=!1,f.__v=n,f.__P=e,s=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=c(c({},r),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(v,y)),P=null!=s&&s.type===p&&null==s.key?s.props.children:s,g(e,Array.isArray(P)?P:[P],n,_,r,o,i,l,u,a),f.base=n.__e,n.__h=null,f.__h.length&&l.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==i&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=A(_.__e,n,_,r,o,i,l,a);(s=t.diffed)&&s(n)}catch(e){n.__v=null,(a||null!=i)&&(n.__e=u,n.__h=!!a,i[i.indexOf(u)]=null),t.__e(e,n,_)}}function H(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function A(t,n,_,r,o,l,u,c){var s,f,p,d=_.props,v=n.props,y=n.type,m=0;if("svg"===y&&(o=!0),null!=l)for(;m<l.length;m++)if((s=l[m])&&"setAttribute"in s==!!y&&(y?s.localName===y:3===s.nodeType)){t=s,l[m]=null;break}if(null==t){if(null===y)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),l=null,c=!1}if(null===y)d===v||c&&t.data===v||(t.data=v);else{if(l=l&&e.call(t.childNodes),f=(d=_.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=l)for(d={},m=0;m<t.attributes.length;m++)d[t.attributes[m].name]=t.attributes[m].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(e,t,n,_,r){var o;for(o in n)"children"===o||"key"===o||o in t||P(e,o,null,n[o],_);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||P(e,o,t[o],n[o],_)}(t,v,d,o,c),p)n.__k=[];else if(m=n.props.children,g(t,Array.isArray(m)?m:[m],n,_,r,o&&"foreignObject"!==y,l,u,l?l[0]:_.__k&&h(_,0),c),null!=l)for(m=l.length;m--;)null!=l[m]&&a(l[m]);c||("value"in v&&void 0!==(m=v.value)&&(m!==t.value||"progress"===y&&!m||"option"===y&&m!==d.value)&&P(t,"value",m,d.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==t.checked&&P(t,"checked",m,d.checked,!1))}return t}function O(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function D(e,n,_){var r,o;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||O(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&D(r[o],n,"function"!=typeof e.type);_||null==e.__e||a(e.__e),e.__e=e.__d=void 0}function U(e,t,n){return this.constructor(e,n)}e=l.slice,t={__e:function(e,t){for(var n,_,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e}},n=0,d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),y(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},d.prototype.render=p,_=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0;var T=0;function N(e,n,_,r,o){var i,l,u={};for(l in n)"ref"==l?i=n[l]:u[l]=n[l];var c={type:e,props:u,key:_,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--T,__source:r,__self:o};if("function"==typeof e&&(i=e.defaultProps))for(l in i)void 0===u[l]&&(u[l]=i[l]);return t.vnode&&t.vnode(c),c}var R,L,W,M=0,F=[],j=t.__b,V=t.__r,$=t.diffed,B=t.__c,I=t.unmount;function q(e,n){t.__h&&t.__h(L,e,M||n),M=0;var _=L.__H||(L.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({}),_.__[e]}function z(e){return M=5,function(e,t){var n=q(R++,7);return Q(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}((function(){return{current:e}}),[])}function G(){for(var e;e=F.shift();)if(e.__P)try{e.__H.__h.forEach(J),e.__H.__h.forEach(K),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){L=null,j&&j(e)},t.__r=function(e){V&&V(e),R=0;var t=(L=e.__c).__H;t&&(t.__h.forEach(J),t.__h.forEach(K),t.__h=[])},t.diffed=function(e){$&&$(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==F.push(n)&&W===t.requestAnimationFrame||((W=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),Z&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);Z&&(t=requestAnimationFrame(n))})(G)),L=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(J),e.__h=e.__h.filter((function(e){return!e.__||K(e)}))}catch(_){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(_,e.__v)}})),B&&B(e,n)},t.unmount=function(e){I&&I(e);var n,_=e.__c;_&&_.__H&&(_.__H.__.forEach((function(e){try{J(e)}catch(e){n=e}})),n&&t.__e(n,_.__v))};var Z="function"==typeof requestAnimationFrame;function J(e){var t=L,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),L=t}function K(e){var t=L;e.__c=e.__(),L=t}function Q(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function X(e,t){return"function"==typeof t?t(e):t}function Y(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var _ in t)if("__source"!==_&&e[_]!==t[_])return!0;return!1}function ee(e){this.props=e}(ee.prototype=new d).isPureReactComponent=!0,ee.prototype.shouldComponentUpdate=function(e,t){return Y(this.props,e)||Y(this.state,t)};var te=t.__b;t.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),te&&te(e)},"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var ne=t.__e;t.__e=function(e,t,n){if(e.then)for(var _,r=t;r=r.__;)if((_=r.__c)&&_.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),_.__c(e,t);ne(e,t,n)};var _e=t.unmount;function re(){this.__u=0,this.t=null,this.__b=null}function oe(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ie(){this.u=null,this.o=null}t.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),_e&&_e(e)},(re.prototype=new d).__c=function(e,t){var n=t.__c,_=this;null==_.t&&(_.t=[]),_.t.push(n);var r=oe(_.__v),o=!1,i=function(){o||(o=!0,n.__R=null,r?r(l):l())};n.__R=i;var l=function(){if(! --_.__u){if(_.state.__e){var e=_.state.__e;_.__v.__k[0]=function e(t,n,_){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,_)})),t.__c&&t.__c.__P===n&&(t.__e&&_.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=_)),t}(e,e.__c.__P,e.__c.__O)}var t;for(_.setState({__e:_.__b=null});t=_.t.pop();)t.forceUpdate()}},u=!0===t.__h;_.__u++||u||_.setState({__e:_.__b=_.__v.__k[0]}),e.then(i,i)},re.prototype.componentWillUnmount=function(){this.t=[]},re.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,_){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=function(e,t){for(var n in t)e[n]=t[n];return e}({},t)).__c&&(t.__c.__P===_&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,_)}))),t}(this.__b,n,_.__O=_.__P)}this.__b=null}var r=t.__e&&s(p,null,e.fallback);return r&&(r.__h=null),[s(p,null,t.__e?null:e.children),r]};var le=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ie.prototype=new d).__e=function(e){var t=this,n=oe(t.__v),_=t.o.get(e);return _[0]++,function(r){var o=function(){t.props.revealOrder?(_.push(r),le(t,e,_)):r()};n?n(o):o()}},ie.prototype.render=function(e){this.u=null,this.o=new Map;var t=k(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ie.prototype.componentDidUpdate=ie.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){le(e,n,t)}))};var ue="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ce=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ae="undefined"!=typeof document,se=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(d.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var fe=t.event;function pe(){}function de(){return this.cancelBubble}function he(){return this.defaultPrevented}t.event=function(e){return fe&&(e=fe(e)),e.persist=pe,e.isPropagationStopped=de,e.isDefaultPrevented=he,e.nativeEvent=e};var ve={configurable:!0,get:function(){return this.class}},ye=t.vnode;t.vnode=function(e){var t=e.type,n=e.props,_=n;if("string"==typeof t){var r=-1===t.indexOf("-");for(var o in _={},n){var i=n[o];ae&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in n&&null==i||("defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!se(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():r&&ce.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),_[o]=i)}"select"==t&&_.multiple&&Array.isArray(_.value)&&(_.value=k(n.children).forEach((function(e){e.props.selected=-1!=_.value.indexOf(e.props.value)}))),"select"==t&&null!=_.defaultValue&&(_.value=k(n.children).forEach((function(e){e.props.selected=_.multiple?-1!=_.defaultValue.indexOf(e.props.value):_.defaultValue==e.props.value}))),e.props=_,n.class!=n.className&&(ve.enumerable="className"in n,null!=n.className&&(_.class=n.className),Object.defineProperty(_,"className",ve))}e.$$typeof=ue,ye&&ye(e)};var me=t.__r;t.__r=function(e){me&&me(e),e.__c};const ge="undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?function(e,n){var _=q(R++,3);!t.__s&&Q(_.__H,n)&&(_.__=e,_.__H=n,L.__H.__h.push(_))}:function(e,n){var _=q(R++,4);!t.__s&&Q(_.__H,n)&&(_.__=e,_.__H=n,L.__h.push(_))},be=function(e){const n=function(e){let t;const n=new Set,_=(e,_)=>{const r="function"==typeof e?e(t):e;if(r!==t){const e=t;t=_?r:Object.assign({},t,r),n.forEach((n=>n(t,e)))}},r=()=>t,o={setState:_,getState:r,subscribe:(e,_,o)=>_||o?((e,_=r,o=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let i=_(t);function l(){const n=_(t);if(!o(i,n)){const t=i;e(i=n,t)}}return n.add(l),()=>n.delete(l)})(e,_,o):(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return t=e(_,r,o),o}(e),_=(e=n.getState,_=Object.is)=>{const[,r]=function(e,t,n){var _=q(R++,2);return _.t=e,_.__c||(_.__=[n?n(t):X(void 0,t),function(e){var t=_.t(_.__[0],e);_.__[0]!==t&&(_.__=[t,_.__[1]],_.__c.setState({}))}],_.__c=L),_.__}((e=>e+1),0),o=n.getState(),i=z(o),l=z(e),u=z(_),c=z(!1),a=z();let s;void 0===a.current&&(a.current=e(o));let f=!1;(i.current!==o||l.current!==e||u.current!==_||c.current)&&(s=e(o),f=!_(a.current,s)),ge((()=>{f&&(a.current=s),i.current=o,l.current=e,u.current=_,c.current=!1}));const p=z(o);ge((()=>{const e=()=>{try{const e=n.getState(),t=l.current(e);u.current(a.current,t)||(i.current=e,a.current=t,r())}catch(e){c.current=!0,r()}},t=n.subscribe(e);return n.getState()!==p.current&&e(),t}),[]);const d=f?s:a.current;return function(e,n){t.useDebugValue&&t.useDebugValue(n?n(e):e)}(d),d};return Object.assign(_,n),_[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const e=[_,n];return{next(){const t=e.length<=0;return{value:e.shift(),done:t}}}},_}((()=>({}))),ke=be;class Se extends HTMLElement{constructor(){super(...arguments),this.alreadyScrolled=!1,this._render=()=>{!function(n,_,r){var o,l,u;t.__&&t.__(n,_),l=(o="function"==typeof r)?null:r&&r.__k||_.__k,u=[],C(_,n=(!o&&r||_).__k=s(p,null,[n]),l||i,i,void 0!==_.ownerSVGElement,!o&&r?[r]:l?null:_.firstChild?e.call(_.childNodes):null,u,!o&&r?r:l?l.__e:_.firstChild,o),H(u,n)}(N(p,{children:N("ha-card",Object.assign({style:{margin:`-${ke.getState().config.negative_margin||13}px 0`}},{children:!ke.getState().config.anchor_id&&N("ul",Object.assign({style:{padding:"20px"}},{children:[N("li",{children:["anchor_id - set a per-page unique identifier. scroll to this card using the url param"," ",N("strong",{children:"anchor"},void 0),N("br",{},void 0),N("i",{children:"example: lovelace/0?anchor=lights"},void 0)]},void 0),N("li",{children:"negative_margin - set a negative margin of the card to fix spacing visuals. default is 13px."},void 0),N("li",{children:"timeout - set a timeout to wait before scrolling to the card. default is 150ms. increase this if other cards take long to render."},void 0)]}),void 0)}),void 0)},void 0),this)}}connectedCallback(){const e=ke.getState().config.anchor_id,t=new URLSearchParams(window.location.search).get("anchor");this.alreadyScrolled||t&&t===e&&(this.alreadyScrolled=!0,setTimeout((()=>{this.scrollIntoView({behavior:"smooth"})}),ke.getState().config.timeout||150))}setConfig(e){ke.setState({config:e}),this._render()}getCardSize(){return 1}}customElements.define("anchor-card",Se),window.customCards=window.customCards||[],window.customCards.push({type:"anchor-card",name:"Anchor Card",preview:!1,description:"A card that acts as a scroll anchor"})})();