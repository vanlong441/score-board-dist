var Ie=Object.defineProperty,Ke=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var we=(t,e,l)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,ye=(t,e)=>{for(var l in e||(e={}))Re.call(e,l)&&we(t,l,e[l]);if(ke)for(var l of ke(e))Ge.call(e,l)&&we(t,l,e[l]);return t},Le=(t,e)=>Ke(t,Me(e));import{S as Y,i as Z,s as $,e as m,t as N,a as h,b as p,c as S,d as c,l as k,f as T,g as A,r as ie,h as Ve,n as P,j as Ne,k as M,p as ae,m as Se,o as ue,q as ce,u as Ae,v as C,w as F,x as fe,y as We,z as x,A as je,B as Ee,C as Te,D as He,E as ze,F as Oe,G as Je}from"./vendor.f8db8596.js";const Qe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}};Qe();function qe(t,e,l){const o=t.slice();return o[6]=e[l],o[8]=l,o}function Ce(t){let e,l,o=t[6].value+"",n,s,r,i,a=t[6].count+"",f,d,w,b,y,O,D;function W(){return t[4](t[6])}function z(){return t[5](t[6])}return{c(){e=m("div"),l=m("div"),n=N(o),s=h(),r=m("div"),i=N("("),f=N(a),d=N(")"),w=h(),b=m("div"),b.textContent="x",y=h(),p(r,"class","mistake svelte-12schfz"),p(l,"class","value svelte-12schfz"),p(b,"class","float-icon svelte-12schfz"),p(e,"class","word svelte-12schfz")},m(j,u){S(j,e,u),c(e,l),c(l,n),c(l,s),c(l,r),c(r,i),c(r,f),c(r,d),c(e,w),c(e,b),c(e,y),O||(D=[k(l,"click",W),k(b,"click",z)],O=!0)},p(j,u){t=j,u&1&&o!==(o=t[6].value+"")&&T(n,o),u&1&&a!==(a=t[6].count+"")&&T(f,a)},d(j){j&&A(e),O=!1,ie(D)}}}function Xe(t){let e,l=t[0].sort(De),o=[];for(let n=0;n<l.length;n+=1)o[n]=Ce(qe(t,l,n));return{c(){for(let n=0;n<o.length;n+=1)o[n].c();e=Ve()},m(n,s){for(let r=0;r<o.length;r+=1)o[r].m(n,s);S(n,e,s)},p(n,[s]){if(s&7){l=n[0].sort(De);let r;for(r=0;r<l.length;r+=1){const i=qe(n,l,r);o[r]?o[r].p(i,s):(o[r]=Ce(i),o[r].c(),o[r].m(e.parentNode,e))}for(;r<o.length;r+=1)o[r].d(1);o.length=l.length}},i:P,o:P,d(n){Ne(o,n),n&&A(e)}}}function Ye(t){return t.replace(/[.,!?]/g,"")}const De=(t,e)=>e.count-t.count;function Ze(t,e,l){let o,{state:n}=e;function s(f){for(let d of n.words)d.value.startsWith(f.value)&&(d.blank=!d.blank);l(3,n)}function r(f){n.words.forEach(d=>{d.value.startsWith(f.value)&&(d.mistake=0)}),l(3,n),console.log(n.words)}const i=f=>s(f),a=f=>r(f);return t.$$set=f=>{"state"in f&&l(3,n=f.state)},t.$$.update=()=>{t.$$.dirty&8&&l(0,o=n.words.filter(f=>f.mistake>0).reduce((f,d)=>{let w=Ye(d.value),b=f.find(y=>y.value===w);if(b)b.count+=1;else{let y={count:1,value:w};f.push(y)}return f},[]))},[o,s,r,n,i,a]}class $e extends Y{constructor(e){super();Z(this,e,Ze,Xe,$,{state:3})}}function Pe(t,e,l){const o=t.slice();return o[3]=e[l],o[4]=e,o[5]=l,o}function xe(t){let e=t[3].value+"",l;return{c(){l=N(e)},m(o,n){S(o,l,n)},p(o,n){n&1&&e!==(e=o[3].value+"")&&T(l,e)},d(o){o&&A(l)}}}function et(t){let e=[t[3].value.slice(0,t[0].leadingLetter),...t[3].value.slice(t[0].leadingLetter,99).split("").map(Ue)].join("")+"",l;return{c(){l=N(e)},m(o,n){S(o,l,n)},p(o,n){n&1&&e!==(e=[o[3].value.slice(0,o[0].leadingLetter),...o[3].value.slice(o[0].leadingLetter,99).split("").map(Ue)].join("")+"")&&T(l,e)},d(o){o&&A(l)}}}function Fe(t){let e,l,o,n;function s(f,d){return f[3].blank===!0&&f[3].correct===null?et:xe}let r=s(t),i=r(t);function a(){return t[2](t[3],t[4],t[5])}return{c(){e=m("div"),i.c(),l=h(),p(e,"class","word"),M(e,"current",t[5]===t[0].word_index),M(e,"wrong",t[3].correct===!1),M(e,"correct",t[3].correct===!0)},m(f,d){S(f,e,d),i.m(e,null),c(e,l),o||(n=k(e,"contextmenu",ae(a)),o=!0)},p(f,d){t=f,r===(r=s(t))&&i?i.p(t,d):(i.d(1),i=r(t),i&&(i.c(),i.m(e,l))),d&1&&M(e,"current",t[5]===t[0].word_index),d&1&&M(e,"wrong",t[3].correct===!1),d&1&&M(e,"correct",t[3].correct===!0)},d(f){f&&A(e),i.d(),o=!1,n()}}}function tt(t){let e,l,o,n=t[0].words,s=[];for(let r=0;r<n.length;r+=1)s[r]=Fe(Pe(t,n,r));return{c(){e=m("div");for(let r=0;r<s.length;r+=1)s[r].c();p(e,"class","text svelte-1h04sl4")},m(r,i){S(r,e,i);for(let a=0;a<s.length;a+=1)s[a].m(e,null);l||(o=k(e,"contextmenu",ae(t[1])),l=!0)},p(r,[i]){if(i&1){n=r[0].words;let a;for(a=0;a<n.length;a+=1){const f=Pe(r,n,a);s[a]?s[a].p(f,i):(s[a]=Fe(f),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=n.length}},i:P,o:P,d(r){r&&A(e),Ne(s,r),l=!1,o()}}}const Ue=t=>"_";function lt(t,e,l){let{state:o}=e;function n(r){Se.call(this,t,r)}const s=(r,i,a)=>l(0,i[a].blank=!r.blank,o);return t.$$set=r=>{"state"in r&&l(0,o=r.state)},[o,n,s]}class st extends Y{constructor(e){super();Z(this,e,lt,tt,$,{state:0})}}function nt(t){let e,l,o;function n(r){t[11](r)}let s={};return t[0]!==void 0&&(s.state=t[0]),e=new st({props:s}),ze.push(()=>Oe(e,"state",n)),{c(){ue(e.$$.fragment)},m(r,i){ce(e,r,i),o=!0},p(r,i){const a={};!l&&i&1&&(l=!0,a.state=r[0],Ae(()=>l=!1)),e.$set(a)},i(r){o||(C(e.$$.fragment,r),o=!0)},o(r){F(e.$$.fragment,r),o=!1},d(r){fe(e,r)}}}function rt(t){let e,l,o;return{c(){e=m("textarea"),p(e,"id","textarea"),p(e,"cols","30"),p(e,"rows","10"),p(e,"class","svelte-3smisl")},m(n,s){S(n,e,s),x(e,t[0].text),l||(o=[k(e,"keyup",t[3]),k(e,"input",t[10])],l=!0)},p(n,s){s&1&&x(e,n[0].text)},i:P,o:P,d(n){n&&A(e),l=!1,ie(o)}}}function Be(t){let e,l,o;function n(r){t[13](r)}let s={};return t[0]!==void 0&&(s.state=t[0]),e=new $e({props:s}),ze.push(()=>Oe(e,"state",n)),{c(){ue(e.$$.fragment)},m(r,i){ce(e,r,i),o=!0},p(r,i){const a={};!l&&i&1&&(l=!0,a.state=r[0],Ae(()=>l=!1)),e.$set(a)},i(r){o||(C(e.$$.fragment,r),o=!0)},o(r){F(e.$$.fragment,r),o=!1},d(r){fe(e,r)}}}function ot(t){let e,l,o=(t[0].editting?"Done":"Edit")+"",n,s,r,i,a,f,d,w,b=(t[0].showNote?"\u{1F441}\uFE0F":"\u{1F576}\uFE0F")+"",y,O,D,W,z,j,u,U,G,de,R,_e,B,I,ee,pe,V,H=(t[0].isSad?"\u{1F622}":"")+"",te,me,K,le,ge,J,Q=(t[0].isSad?"":"\u{1F604}")+"",se,ne,E,X,L,re,ve;const he=[rt,nt],q=[];function be(_,v){return _[0].editting===!0?0:1}i=be(t),a=q[i]=he[i](t);let g=t[0].showNote&&Be(t);return{c(){e=m("div"),l=m("button"),n=N(o),r=h(),a.c(),f=h(),d=m("div"),w=m("div"),y=N(b),O=h(),g&&g.c(),D=h(),W=m("div"),z=m("div"),z.textContent="\u{1F4E4}",j=h(),u=m("input"),U=h(),G=m("input"),de=h(),R=m("button"),R.textContent="Again",_e=h(),B=m("div"),I=m("div"),ee=N(t[2]),pe=h(),V=m("div"),te=N(H),me=h(),K=m("div"),le=N(t[1]),ge=h(),J=m("div"),se=N(Q),ne=h(),E=m("img"),l.disabled=s=!t[0].text.length,p(w,"class","icon"),p(d,"class","level-2 svelte-3smisl"),p(z,"class","icon"),p(u,"type","number"),p(W,"class","level-2 svelte-3smisl"),p(G,"type","file"),p(R,"class","again"),p(V,"class","emoji svelte-3smisl"),p(I,"class","block wrong svelte-3smisl"),p(J,"class","emoji svelte-3smisl"),p(K,"class","block correct svelte-3smisl"),p(B,"class","board svelte-3smisl"),p(e,"class","level-1 svelte-3smisl"),We(E.src,X=t[0].image)||p(E,"src",X),p(E,"alt",""),p(E,"class","svelte-3smisl")},m(_,v){S(_,e,v),c(e,l),c(l,n),c(e,r),q[i].m(e,null),c(e,f),c(e,d),c(d,w),c(w,y),c(d,O),g&&g.m(d,null),c(e,D),c(e,W),c(W,z),c(W,j),c(W,u),x(u,t[0].leadingLetter),c(e,U),c(e,G),c(e,de),c(e,R),c(e,_e),c(e,B),c(B,I),c(I,ee),c(I,pe),c(I,V),c(V,te),c(B,me),c(B,K),c(K,le),c(K,ge),c(K,J),c(J,se),S(_,ne,v),S(_,E,v),L=!0,re||(ve=[k(window,"keyup",t[4]),k(l,"click",t[5]),k(w,"click",t[12]),k(z,"click",t[7]),k(u,"input",t[14]),k(G,"change",t[8]),k(R,"click",t[6]),k(E,"mousedown",ae(t[9]))],re=!0)},p(_,[v]){(!L||v&1)&&o!==(o=(_[0].editting?"Done":"Edit")+"")&&T(n,o),(!L||v&1&&s!==(s=!_[0].text.length))&&(l.disabled=s);let oe=i;i=be(_),i===oe?q[i].p(_,v):(je(),F(q[oe],1,1,()=>{q[oe]=null}),Ee(),a=q[i],a?a.p(_,v):(a=q[i]=he[i](_),a.c()),C(a,1),a.m(e,f)),(!L||v&1)&&b!==(b=(_[0].showNote?"\u{1F441}\uFE0F":"\u{1F576}\uFE0F")+"")&&T(y,b),_[0].showNote?g?(g.p(_,v),v&1&&C(g,1)):(g=Be(_),g.c(),C(g,1),g.m(d,null)):g&&(je(),F(g,1,1,()=>{g=null}),Ee()),v&1&&Te(u.value)!==_[0].leadingLetter&&x(u,_[0].leadingLetter),(!L||v&4)&&T(ee,_[2]),(!L||v&1)&&H!==(H=(_[0].isSad?"\u{1F622}":"")+"")&&T(te,H),(!L||v&2)&&T(le,_[1]),(!L||v&1)&&Q!==(Q=(_[0].isSad?"":"\u{1F604}")+"")&&T(se,Q),(!L||v&1&&!We(E.src,X=_[0].image))&&p(E,"src",X)},i(_){L||(C(a),C(g),L=!0)},o(_){F(a),F(g),L=!1},d(_){_&&A(e),q[i].d(),g&&g.d(),_&&A(ne),_&&A(E),re=!1,ie(ve)}}}function it(t,e,l){let o,n,s={text:"",words:[],problematicWords:[],editting:!0,showNote:!0,word_index:0,isSad:!1,leadingLetter:0,image:""},r={x:0,y:0};function i(){l(0,s.words=s.text.replace(/\r?\n/g," ").split(" ").filter(Boolean).map(u=>({value:u,correct:null,blank:!1,mistake:0})),s)}function a(u){if(u.target.id!=="textarea"&&s.words.length>s.word_index){let U=s.words[s.word_index];u.key==="F2"&&(U.correct=!0,l(0,s.word_index+=1,s),l(0,s.isSad=!1,s),u.preventDefault()),u.key==="F4"&&(U.mistake+=1,U.correct=!1,l(0,s.word_index+=1,s),l(0,s.isSad=!0,s),u.preventDefault())}}function f(){l(0,s.editting=!s.editting,s)}function d(){l(0,s.words=s.words.map(u=>Le(ye({},u),{correct:null})),s),l(0,s.word_index=0,s)}function w(){for(let u of s.words)u.mistake>0&&(u.blank=!u.blank);l(0,s)}function b(u){l(0,s.image=URL.createObjectURL(u.target.files[0]),s)}He(()=>{setTimeout(()=>{Je(".image-wrapper").draggable({listeners:{start(u){},move(u){r.x+=u.dx,r.y+=u.dy,u.target.style.transform=`translate(${r.x}px, ${r.y}px)`}}})},0)});function y(u){Se.call(this,t,u)}function O(){s.text=this.value,l(0,s)}function D(u){s=u,l(0,s)}const W=()=>l(0,s.showNote=!s.showNote,s);function z(u){s=u,l(0,s)}function j(){s.leadingLetter=Te(this.value),l(0,s)}return t.$$.update=()=>{t.$$.dirty&1&&l(2,o=s.words.filter(u=>u.correct===!1).length),t.$$.dirty&1&&l(1,n=s.words.filter(u=>u.correct===!0).length)},[s,n,o,i,a,f,d,w,b,y,O,D,W,z,j]}class at extends Y{constructor(e){super();Z(this,e,it,ot,$,{})}}function ut(t){let e,l,o;return l=new at({}),{c(){e=m("div"),ue(l.$$.fragment),p(e,"class","wrapper svelte-cq9sz3")},m(n,s){S(n,e,s),ce(l,e,null),o=!0},p:P,i(n){o||(C(l.$$.fragment,n),o=!0)},o(n){F(l.$$.fragment,n),o=!1},d(n){n&&A(e),fe(l)}}}class ct extends Y{constructor(e){super();Z(this,e,null,ut,$,{})}}new ct({target:document.getElementById("app")});
