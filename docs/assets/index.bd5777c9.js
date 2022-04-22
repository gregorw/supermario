const te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}};te();function j(){}function R(e){return e()}function B(){return Object.create(null)}function C(e){e.forEach(R)}function ne(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function le(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function U(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function k(){return S(" ")}function re(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return Array.from(e.childNodes)}function ue(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function b(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let z;function x(e){z=e}const $=[],F=[],L=[],K=[],se=Promise.resolve();let P=!1;function ce(){P||(P=!0,se.then(V))}function G(e){L.push(e)}const A=new Set;let E=0;function V(){const e=z;do{for(;E<$.length;){const t=$[E];E++,x(t),ie(t.$$)}for(x(null),$.length=0,E=0;F.length;)F.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];A.has(n)||(A.add(n),n())}L.length=0}while($.length);for(;K.length;)K.pop()();P=!1,A.clear(),x(e)}function ie(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}const O=new Set;let fe;function I(e,t){e&&e.i&&(O.delete(e),e.i(t))}function Z(e,t,n,o){if(e&&e.o){if(O.has(e))return;O.add(e),fe.c.push(()=>{O.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function ee(e){e&&e.c()}function M(e,t,n,o){const{fragment:l,on_mount:r,on_destroy:u,after_update:s}=e.$$;l&&l.m(t,n),o||G(()=>{const c=r.map(R).filter(ne);u?u.push(...c):C(c),e.$$.on_mount=[]}),s.forEach(G)}function H(e,t){const n=e.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){e.$$.dirty[0]===-1&&($.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,o,l,r,u,s=[-1]){const c=z;x(e);const i=e.$$={fragment:null,ctx:null,props:r,update:j,not_equal:l,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:B(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};u&&u(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(a,g,...f)=>{const m=f.length?f[0]:g;return i.ctx&&l(i.ctx[a],i.ctx[a]=m)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](m),d&&ae(e,a)),g}):[],i.update(),d=!0,C(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const a=oe(t.target);i.fragment&&i.fragment.l(a),a.forEach(_)}else i.fragment&&i.fragment.c();t.intro&&I(e.$$.fragment),M(e,t.target,t.anchor,t.customElement),V()}x(c)}class q{$destroy(){H(this,1),this.$destroy=j}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e,t,n){const o=e.slice();return o[2]=t[n],o}function X(e,t,n){const o=e.slice();return o[5]=t[n],o}function D(e){let t,n=e[5]+"",o;return{c(){t=p("div"),o=S(n),y(t,"class","object")},m(l,r){v(l,t,r),h(t,o)},p(l,r){r&1&&n!==(n=l[5]+"")&&ue(o,n)},d(l){l&&_(t)}}}function J(e){let t,n,o=e[2]||[],l=[];for(let r=0;r<o.length;r+=1)l[r]=D(X(e,o,r));return{c(){t=p("div");for(let r=0;r<l.length;r+=1)l[r].c();n=k(),y(t,"class","column")},m(r,u){v(r,t,u);for(let s=0;s<l.length;s+=1)l[s].m(t,null);h(t,n)},p(r,u){if(u&1){o=r[2]||[];let s;for(s=0;s<o.length;s+=1){const c=X(r,o,s);l[s]?l[s].p(c,u):(l[s]=D(c),l[s].c(),l[s].m(t,n))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}},d(r){r&&_(t),U(l,r)}}}function de(e){let t,n=e[0],o=[];for(let l=0;l<n.length;l+=1)o[l]=J(W(e,n,l));return{c(){t=p("div");for(let l=0;l<o.length;l+=1)o[l].c();y(t,"class","world"),b(t,"left","-"+e[1]+"px")},m(l,r){v(l,t,r);for(let u=0;u<o.length;u+=1)o[u].m(t,null)},p(l,[r]){if(r&1){n=l[0];let u;for(u=0;u<n.length;u+=1){const s=W(l,n,u);o[u]?o[u].p(s,r):(o[u]=J(s),o[u].c(),o[u].m(t,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=n.length}r&2&&b(t,"left","-"+l[1]+"px")},i:j,o:j,d(l){l&&_(t),U(o,l)}}}function me(e,t,n){let{objects:o=[]}=t,{time:l=0}=t;return e.$$set=r=>{"objects"in r&&n(0,o=r.objects),"time"in r&&n(1,l=r.time)},[o,l]}class he extends q{constructor(t){super(),Y(this,t,me,de,T,{objects:0,time:1})}}function pe(e){let t,n,o,l,r,u,s,c,i,d,a,g;return u=new he({props:{objects:e[4],time:e[2]}}),{c(){t=p("div"),n=p("button"),o=S("Start"),l=k(),r=p("div"),ee(u.$$.fragment),s=k(),c=p("div"),i=S("\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F"),n.disabled=e[3],y(n,"class","svelte-75swov"),y(t,"class","center svelte-75swov"),y(c,"class","player"),b(c,"bottom",e[0]+"px"),b(c,"left",e[1]+"px"),y(r,"class","game")},m(f,m){v(f,t,m),h(t,n),h(n,o),v(f,l,m),v(f,r,m),M(u,r,null),h(r,s),h(r,c),h(c,i),d=!0,a||(g=re(n,"click",e[5]),a=!0)},p(f,[m]){(!d||m&8)&&(n.disabled=f[3]);const w={};m&4&&(w.time=f[2]),u.$set(w),(!d||m&1)&&b(c,"bottom",f[0]+"px"),(!d||m&2)&&b(c,"left",f[1]+"px")},i(f){d||(I(u.$$.fragment,f),d=!0)},o(f){Z(u.$$.fragment,f),d=!1},d(f){f&&_(t),f&&_(l),f&&_(r),H(u),a=!1,g()}}}const _e=10,N=35;let Q=.2;function ge(e,t,n){const o=[null,null,null,null,null,null,null,["\u{1F6E2}","\u{1F6E2}"],["\u{1F6E2}","\u{1F6E2}"],null,null,null,null,null,null,null,["\u262E\uFE0F","\u262E\uFE0F"],["\u262E\uFE0F","\u262E\uFE0F","\u262E\uFE0F"],["\u262E\uFE0F","\u262E\uFE0F"],null,null,null,["\u{1F335}"],["\u{1F335}"],null,null,null,null,null,null,null,null,null,null,["\u{1F3C1}"],null,null,null,null,null,null,null,["\u{1F4AF}"]];let l,r,u,s;const c=function(){n(2,u=0),n(1,r=N),n(0,l=0),n(3,s=!1)};c();const i=o.length*N,d=_e*N;let a=null;const g=function(){a=setInterval(f,1/Q),n(3,s=!0)},f=function(){u<i-d?n(2,u+=1):(clearInterval(a),alert("You win!"),m())},m=function(){const w=function(){n(1,r=r+1),r<d?setTimeout(w,.5/Q):c()};w()};return[l,r,u,s,o,g]}class ye extends q{constructor(t){super(),Y(this,t,ge,pe,T,{})}}function be(e){let t,n,o,l,r,u,s;return l=new ye({}),{c(){t=p("main"),n=p("h1"),n.textContent="Supermario",o=k(),ee(l.$$.fragment),r=k(),u=p("aside"),u.innerHTML=`<p>Please find the source code on <a href="https://github.com/gregorw/supermario">Github</a>.</p> 
		<p>Can you create your own world?<br/>
			Can you make the player jump?<br/>
			Can you detect collisions and display \u201CGame Over\u201D?</p>`,b(u,"text-align","center")},m(c,i){v(c,t,i),h(t,n),h(t,o),M(l,t,null),h(t,r),h(t,u),s=!0},p:j,i(c){s||(I(l.$$.fragment,c),s=!0)},o(c){Z(l.$$.fragment,c),s=!1},d(c){c&&_(t),H(l)}}}class ve extends q{constructor(t){super(),Y(this,t,null,be,T,{})}}new ve({target:document.body});