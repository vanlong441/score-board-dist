var Ie=Object.defineProperty,Ke=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var ze=(t,e,l)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,Y=(t,e)=>{for(var l in e||(e={}))Ge.call(e,l)&&ze(t,l,e[l]);if(ye)for(var l of ye(e))He.call(e,l)&&ze(t,l,e[l]);return t},Z=(t,e)=>Ke(t,Re(e));import{S as $,i as x,s as ee,e as m,t as A,a as h,b as p,c as Le,d as j,f as c,l as w,g as q,h as E,r as ce,j as Ve,n as O,k as Ne,m as R,p as te,o as Se,q as fe,u as de,v as Ae,w as M,x as F,y as _e,z as je,A as le,B as Ee,C as Te,D as We,E as Je,F as qe,G as Ce,H as Qe}from"./vendor.147cf874.js";const Xe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=l(s);fetch(s.href,n)}};Xe();function De(t,e,l){const r=t.slice();return r[6]=e[l],r[8]=l,r}function Me(t){let e,l,r=t[6].value+"",s,n,o,i,a=t[6].count+"",u,f,z,k,L,C,W;function P(){return t[4](t[6])}function U(){return t[5](t[6])}return{c(){e=m("div"),l=m("div"),s=A(r),n=h(),o=m("div"),i=A("("),u=A(a),f=A(")"),z=h(),k=m("div"),k.textContent="x",L=h(),p(o,"class","mistake svelte-12schfz"),p(l,"class","value svelte-12schfz"),p(k,"class","float-icon svelte-12schfz"),Le(e,"order",t[6].order),p(e,"class","word svelte-12schfz")},m(N,b){j(N,e,b),c(e,l),c(l,s),c(l,n),c(l,o),c(o,i),c(o,u),c(o,f),c(e,z),c(e,k),c(e,L),C||(W=[w(l,"click",P),w(k,"click",U)],C=!0)},p(N,b){t=N,b&1&&r!==(r=t[6].value+"")&&q(s,r),b&1&&a!==(a=t[6].count+"")&&q(u,a),b&1&&Le(e,"order",t[6].order)},d(N){N&&E(e),C=!1,ce(W)}}}function Ye(t){let e,l=t[0].sort(Oe),r=[];for(let s=0;s<l.length;s+=1)r[s]=Me(De(t,l,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=Ve()},m(s,n){for(let o=0;o<r.length;o+=1)r[o].m(s,n);j(s,e,n)},p(s,[n]){if(n&7){l=s[0].sort(Oe);let o;for(o=0;o<l.length;o+=1){const i=De(s,l,o);r[o]?r[o].p(i,n):(r[o]=Me(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=l.length}},i:O,o:O,d(s){Ne(r,s),s&&E(e)}}}function Ze(t){return t.replace(/[.,!?]/g,"")}const Oe=(t,e)=>e.count-t.count;function $e(t,e,l){let r,{state:s}=e;function n(u){for(let f of s.words)f.value.startsWith(u.value)&&(f.blank=!f.blank);l(3,s)}function o(u){s.words.forEach(f=>{f.value.startsWith(u.value)&&(f.mistake=0)}),l(3,s),console.log(s.words)}const i=u=>n(u),a=u=>o(u);return t.$$set=u=>{"state"in u&&l(3,s=u.state)},t.$$.update=()=>{t.$$.dirty&8&&l(0,r=s.words.filter(u=>u.mistake>0).reduce((u,f)=>{let z=Ze(f.value),k=u.find(L=>L.value===z);if(k)k.count+=1;else{let L=Z(Y({},f),{count:1,value:z});u.push(L)}return u},[]))},[r,n,o,s,i,a]}class xe extends ${constructor(e){super();x(this,e,$e,Ye,ee,{state:3})}}function Fe(t,e,l){const r=t.slice();return r[3]=e[l],r[4]=e,r[5]=l,r}function et(t){let e=t[3].value+"",l;return{c(){l=A(e)},m(r,s){j(r,l,s)},p(r,s){s&1&&e!==(e=r[3].value+"")&&q(l,e)},d(r){r&&E(l)}}}function tt(t){let e=[t[3].value.slice(0,t[0].leadingLetter),...t[3].value.slice(t[0].leadingLetter,99).split("").map(Ue)].join("")+"",l;return{c(){l=A(e)},m(r,s){j(r,l,s)},p(r,s){s&1&&e!==(e=[r[3].value.slice(0,r[0].leadingLetter),...r[3].value.slice(r[0].leadingLetter,99).split("").map(Ue)].join("")+"")&&q(l,e)},d(r){r&&E(l)}}}function Pe(t){let e,l,r,s;function n(u,f){return u[3].blank===!0&&u[3].correct===null?tt:et}let o=n(t),i=o(t);function a(){return t[2](t[3],t[4],t[5])}return{c(){e=m("div"),i.c(),l=h(),p(e,"class","word"),R(e,"current",t[5]===t[0].word_index),R(e,"wrong",t[3].correct===!1),R(e,"correct",t[3].correct===!0)},m(u,f){j(u,e,f),i.m(e,null),c(e,l),r||(s=w(e,"contextmenu",te(a)),r=!0)},p(u,f){t=u,o===(o=n(t))&&i?i.p(t,f):(i.d(1),i=o(t),i&&(i.c(),i.m(e,l))),f&1&&R(e,"current",t[5]===t[0].word_index),f&1&&R(e,"wrong",t[3].correct===!1),f&1&&R(e,"correct",t[3].correct===!0)},d(u){u&&E(e),i.d(),r=!1,s()}}}function lt(t){let e,l,r,s=t[0].words,n=[];for(let o=0;o<s.length;o+=1)n[o]=Pe(Fe(t,s,o));return{c(){e=m("div");for(let o=0;o<n.length;o+=1)n[o].c();p(e,"class","text svelte-1h04sl4")},m(o,i){j(o,e,i);for(let a=0;a<n.length;a+=1)n[a].m(e,null);l||(r=w(e,"contextmenu",te(t[1])),l=!0)},p(o,[i]){if(i&1){s=o[0].words;let a;for(a=0;a<s.length;a+=1){const u=Fe(o,s,a);n[a]?n[a].p(u,i):(n[a]=Pe(u),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=s.length}},i:O,o:O,d(o){o&&E(e),Ne(n,o),l=!1,r()}}}const Ue=t=>"_";function nt(t,e,l){let{state:r}=e;function s(o){Se.call(this,t,o)}const n=(o,i,a)=>{l(0,i[a].blank=!o.blank,r),l(0,i[a].mistake+=1,r)};return t.$$set=o=>{"state"in o&&l(0,r=o.state)},[r,s,n]}class st extends ${constructor(e){super();x(this,e,nt,lt,ee,{state:0})}}function rt(t){let e,l,r;function s(o){t[10](o)}let n={};return t[0]!==void 0&&(n.state=t[0]),e=new st({props:n}),qe.push(()=>Ce(e,"state",s)),{c(){fe(e.$$.fragment)},m(o,i){de(e,o,i),r=!0},p(o,i){const a={};!l&&i&1&&(l=!0,a.state=o[0],Ae(()=>l=!1)),e.$set(a)},i(o){r||(M(e.$$.fragment,o),r=!0)},o(o){F(e.$$.fragment,o),r=!1},d(o){_e(e,o)}}}function ot(t){let e,l,r;return{c(){e=m("textarea"),p(e,"id","textarea"),p(e,"cols","30"),p(e,"rows","10"),p(e,"class","svelte-1dd4kaz")},m(s,n){j(s,e,n),le(e,t[0].text),l||(r=[w(e,"keyup",t[3]),w(e,"input",t[9])],l=!0)},p(s,n){n&1&&le(e,s[0].text)},i:O,o:O,d(s){s&&E(e),l=!1,ce(r)}}}function Be(t){let e,l,r,s;function n(i){t[13](i)}let o={};return t[0]!==void 0&&(o.state=t[0]),l=new xe({props:o}),qe.push(()=>Ce(l,"state",n)),{c(){e=m("div"),fe(l.$$.fragment),p(e,"class","level-3 svelte-1dd4kaz")},m(i,a){j(i,e,a),de(l,e,null),s=!0},p(i,a){const u={};!r&&a&1&&(r=!0,u.state=i[0],Ae(()=>r=!1)),l.$set(u)},i(i){s||(M(l.$$.fragment,i),s=!0)},o(i){F(l.$$.fragment,i),s=!1},d(i){i&&E(e),_e(l)}}}function it(t){let e,l,r=(t[0].editting?"Done":"Edit")+"",s,n,o,i,a,u,f,z,k=(t[0].showNote?"\u{1F441}\uFE0F":"\u{1F576}\uFE0F")+"",L,C,W,P,U,N,b,d,y,pe,G,me,B,I,ne,ge,H,V=(t[0].isSad?"\u{1F622}":"")+"",se,ve,K,re,he,J,Q=(t[0].isSad?"":"\u{1F604}")+"",oe,ie,T,X,S,ae,ke;const be=[ot,rt],D=[];function we(_,v){return _[0].editting===!0?0:1}i=we(t),a=D[i]=be[i](t);let g=t[0].showNote&&Be(t);return{c(){e=m("div"),l=m("button"),s=A(r),o=h(),a.c(),u=h(),f=m("div"),z=m("div"),L=A(k),C=h(),W=m("div"),W.textContent="\u{1F3B2}",P=h(),g&&g.c(),U=h(),N=m("div"),b=m("input"),d=h(),y=m("input"),pe=h(),G=m("button"),G.textContent="Again",me=h(),B=m("div"),I=m("div"),ne=A(t[2]),ge=h(),H=m("div"),se=A(V),ve=h(),K=m("div"),re=A(t[1]),he=h(),J=m("div"),oe=A(Q),ie=h(),T=m("img"),l.disabled=n=!t[0].text.length,p(z,"class","icon"),p(W,"class","icon"),p(f,"class","level-2 svelte-1dd4kaz"),p(b,"type","number"),p(N,"class","level-2 svelte-1dd4kaz"),p(y,"type","file"),p(G,"class","again"),p(H,"class","emoji svelte-1dd4kaz"),p(I,"class","block wrong svelte-1dd4kaz"),p(J,"class","emoji svelte-1dd4kaz"),p(K,"class","block correct svelte-1dd4kaz"),p(B,"class","board svelte-1dd4kaz"),p(e,"class","level-1 svelte-1dd4kaz"),je(T.src,X=t[0].image)||p(T,"src",X),p(T,"alt",""),p(T,"class","svelte-1dd4kaz")},m(_,v){j(_,e,v),c(e,l),c(l,s),c(e,o),D[i].m(e,null),c(e,u),c(e,f),c(f,z),c(z,L),c(f,C),c(f,W),c(f,P),g&&g.m(f,null),c(e,U),c(e,N),c(N,b),le(b,t[0].leadingLetter),c(e,d),c(e,y),c(e,pe),c(e,G),c(e,me),c(e,B),c(B,I),c(I,ne),c(I,ge),c(I,H),c(H,se),c(B,ve),c(B,K),c(K,re),c(K,he),c(K,J),c(J,oe),j(_,ie,v),j(_,T,v),S=!0,ae||(ke=[w(window,"keyup",t[4]),w(l,"click",t[5]),w(z,"click",t[11]),w(W,"click",t[12]),w(b,"input",t[14]),w(y,"change",t[7]),w(G,"click",t[6]),w(T,"contextmenu",te(t[15])),w(T,"mousedown",te(t[8]))],ae=!0)},p(_,[v]){(!S||v&1)&&r!==(r=(_[0].editting?"Done":"Edit")+"")&&q(s,r),(!S||v&1&&n!==(n=!_[0].text.length))&&(l.disabled=n);let ue=i;i=we(_),i===ue?D[i].p(_,v):(Ee(),F(D[ue],1,1,()=>{D[ue]=null}),Te(),a=D[i],a?a.p(_,v):(a=D[i]=be[i](_),a.c()),M(a,1),a.m(e,u)),(!S||v&1)&&k!==(k=(_[0].showNote?"\u{1F441}\uFE0F":"\u{1F576}\uFE0F")+"")&&q(L,k),_[0].showNote?g?(g.p(_,v),v&1&&M(g,1)):(g=Be(_),g.c(),M(g,1),g.m(f,null)):g&&(Ee(),F(g,1,1,()=>{g=null}),Te()),v&1&&We(b.value)!==_[0].leadingLetter&&le(b,_[0].leadingLetter),(!S||v&4)&&q(ne,_[2]),(!S||v&1)&&V!==(V=(_[0].isSad?"\u{1F622}":"")+"")&&q(se,V),(!S||v&2)&&q(re,_[1]),(!S||v&1)&&Q!==(Q=(_[0].isSad?"":"\u{1F604}")+"")&&q(oe,Q),(!S||v&1&&!je(T.src,X=_[0].image))&&p(T,"src",X)},i(_){S||(M(a),M(g),S=!0)},o(_){F(a),F(g),S=!1},d(_){_&&E(e),D[i].d(),g&&g.d(),_&&E(ie),_&&E(T),ae=!1,ce(ke)}}}function at(t,e,l){let r,s,n={text:"",words:[],problematicWords:[],editting:!0,showNote:!0,word_index:0,isSad:!1,leadingLetter:0,image:""},o={x:0,y:0};function i(){l(0,n.words=n.text.replace(/\r?\n/g," ").split(" ").filter(Boolean).map(d=>({value:d,correct:null,blank:!1,mistake:0})),n)}function a(d){if(d.target.id!=="textarea"&&n.words.length>n.word_index){let y=n.words[n.word_index];d.key==="F2"&&(y.correct=!0,l(0,n.word_index+=1,n),l(0,n.isSad=!1,n),d.preventDefault()),d.key==="F4"&&(y.mistake+=1,y.correct=!1,l(0,n.word_index+=1,n),l(0,n.isSad=!0,n),d.preventDefault())}}function u(){l(0,n.editting=!n.editting,n)}function f(){l(0,n.words=n.words.map(d=>Z(Y({},d),{correct:null})),n),l(0,n.word_index=0,n)}function z(d){l(0,n.image=URL.createObjectURL(d.target.files[0]),n)}Je(()=>{setTimeout(()=>{Qe(".image-wrapper").draggable({listeners:{start(d){},move(d){o.x+=d.dx,o.y+=d.dy,d.target.style.transform=`translate(${o.x}px, ${o.y}px)`}}})},0)});function k(d){Se.call(this,t,d)}function L(){n.text=this.value,l(0,n)}function C(d){n=d,l(0,n)}const W=()=>l(0,n.showNote=!n.showNote,n),P=()=>{let d=n.words.filter(y=>y.mistake>0);l(0,n.words=n.words.map(y=>y.mistake>0?Z(Y({},y),{order:Math.floor(Math.random()*d.length)}):y),n)};function U(d){n=d,l(0,n)}function N(){n.leadingLetter=We(this.value),l(0,n)}const b=()=>l(0,n.image="",n);return t.$$.update=()=>{t.$$.dirty&1&&l(2,r=n.words.filter(d=>d.correct===!1).length),t.$$.dirty&1&&l(1,s=n.words.filter(d=>d.correct===!0).length)},[n,s,r,i,a,u,f,z,k,L,C,W,P,U,N,b]}class ut extends ${constructor(e){super();x(this,e,at,it,ee,{})}}function ct(t){let e,l,r;return l=new ut({}),{c(){e=m("div"),fe(l.$$.fragment),p(e,"class","wrapper svelte-cq9sz3")},m(s,n){j(s,e,n),de(l,e,null),r=!0},p:O,i(s){r||(M(l.$$.fragment,s),r=!0)},o(s){F(l.$$.fragment,s),r=!1},d(s){s&&E(e),_e(l)}}}class ft extends ${constructor(e){super();x(this,e,null,ct,ee,{})}}new ft({target:document.getElementById("app")});
