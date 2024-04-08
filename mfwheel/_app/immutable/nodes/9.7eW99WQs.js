import{s as z,a as C,k as I,c as x,b as N,p as O,m as P,d as b,q as y,i as T,h as m,n as q,o as F,t as j,f as E,j as A,r as V,y as G}from"../chunks/scheduler.jlYw4Pw6.js";import{e as Y}from"../chunks/each.-oqiv04n.js";import{S as W,i as K}from"../chunks/index.afzxeEEq.js";import{g as Q}from"../chunks/getSaveVersion.KkvTnZhM.js";function U(l,e,n){const o=l.slice();return o[13]=e[n][0],o[14]=e[n][1],o}function H(l){let e,n,o,u,i;return{c(){e=C("p"),n=j("Your current data is saved as version "),o=j(l[0]),u=j(" while the site currently runs on version "),i=j(l[4])},l(t){e=x(t,"P",{});var r=N(e);n=E(r,"Your current data is saved as version "),o=E(r,l[0]),u=E(r," while the site currently runs on version "),i=E(r,l[4]),r.forEach(b)},m(t,r){T(t,e,r),m(e,n),m(e,o),m(e,u),m(e,i)},p(t,r){r&1&&A(o,t[0])},d(t){t&&b(e)}}}function X(l){let e,n,o="Unfortunately, there's no way to migrate your data.",u,i,t="You have two options, either bully Taro into manually migrating it",r,h,p="orrr... you can press that juicy button below",s,d,v="Delete data",c,f;return{c(){e=C("div"),n=C("p"),n.textContent=o,u=I(),i=C("p"),i.textContent=t,r=I(),h=C("p"),h.textContent=p,s=I(),d=C("button"),d.textContent=v,this.h()},l(g){e=x(g,"DIV",{id:!0,class:!0});var _=N(e);n=x(_,"P",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-3fra60"&&(n.textContent=o),u=P(_),i=x(_,"P",{class:!0,"data-svelte-h":!0}),O(i)!=="svelte-76orz7"&&(i.textContent=t),r=P(_),h=x(_,"P",{class:!0,"data-svelte-h":!0}),O(h)!=="svelte-11usmqs"&&(h.textContent=p),s=P(_),d=x(_,"BUTTON",{class:!0,"data-svelte-h":!0}),O(d)!=="svelte-341uws"&&(d.textContent=v),_.forEach(b),this.h()},h(){y(n,"class","text-red-800"),y(i,"class","text-red-800"),y(h,"class","text-red-800"),y(d,"class","text-red-800 border border-red-800 p-2 mt-8 hover:opacity-80"),y(e,"id","migratebox"),y(e,"class","events min-w-96 min-h-96 border border-red-300 mt-8 svelte-j5xmri")},m(g,_){T(g,e,_),m(e,n),m(e,u),m(e,i),m(e,r),m(e,h),m(e,s),m(e,d),c||(f=V(d,"click",l[8]),c=!0)},p:q,d(g){g&&b(e),c=!1,f()}}}function Z(l){let e,n,o="-- DATA MIGRATION --",u,i,t,r,h,p,s,d,v=l[0]===1&&J(l);return{c(){e=C("div"),n=C("p"),n.textContent=o,u=I(),i=C("p"),t=j("You have "),r=j(l[2]),h=j(" steps to complete:"),p=I(),s=C("br"),d=I(),v&&v.c(),this.h()},l(c){e=x(c,"DIV",{id:!0,class:!0});var f=N(e);n=x(f,"P",{"data-svelte-h":!0}),O(n)!=="svelte-1dqo8c4"&&(n.textContent=o),u=P(f),i=x(f,"P",{});var g=N(i);t=E(g,"You have "),r=E(g,l[2]),h=E(g," steps to complete:"),g.forEach(b),p=P(f),s=x(f,"BR",{}),d=P(f),v&&v.l(f),f.forEach(b),this.h()},h(){y(e,"id","migratebox"),y(e,"class","events min-w-96 min-h-96 border border-green-300 mt-8 svelte-j5xmri")},m(c,f){T(c,e,f),m(e,n),m(e,u),m(e,i),m(i,t),m(i,r),m(i,h),m(e,p),m(e,s),m(e,d),v&&v.m(e,null)},p(c,f){f&4&&A(r,c[2]),c[0]===1?v?v.p(c,f):(v=J(c),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},d(c){c&&b(e),v&&v.d()}}}function J(l){let e,n="Okay, welcome to the migration from version 1->2",o,u,i="Basically in this update we seperated the events in hostile/friendly, and you can now control them seperately",t,r,h="But as your old events don't yet have the field, we need to add it.",p,s,d='Please check the box on the <span class="text-red-300">hostile</span> events, rest of them will be considered <span class="text-green-300">friendly</span>',v,c,f,g,_="Confirm changes (there is no going back)",M,B,D=Y(Object.entries(l[3])),k=[];for(let a=0;a<D.length;a+=1)k[a]=R(U(l,D,a));return{c(){e=C("p"),e.textContent=n,o=I(),u=C("p"),u.textContent=i,t=I(),r=C("p"),r.textContent=h,p=I(),s=C("p"),s.innerHTML=d,v=I(),c=C("div");for(let a=0;a<k.length;a+=1)k[a].c();f=I(),g=C("button"),g.textContent=_,this.h()},l(a){e=x(a,"P",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-cvp73e"&&(e.textContent=n),o=P(a),u=x(a,"P",{class:!0,"data-svelte-h":!0}),O(u)!=="svelte-1ikf2s7"&&(u.textContent=i),t=P(a),r=x(a,"P",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-lkc4ey"&&(r.textContent=h),p=P(a),s=x(a,"P",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-ay59lk"&&(s.innerHTML=d),v=P(a),c=x(a,"DIV",{class:!0});var S=N(c);for(let w=0;w<k.length;w+=1)k[w].l(S);S.forEach(b),f=P(a),g=x(a,"BUTTON",{class:!0,"data-svelte-h":!0}),O(g)!=="svelte-16lq1yn"&&(g.textContent=_),this.h()},h(){y(e,"class","px-4"),y(u,"class","px-4"),y(r,"class","px-4"),y(s,"class","px-4"),y(c,"class","border border-orange-600 flex flex-col items-center"),y(g,"class","mt-2 text-orange-600 border border-orange-600 p-2 hover:opacity-80")},m(a,S){T(a,e,S),T(a,o,S),T(a,u,S),T(a,t,S),T(a,r,S),T(a,p,S),T(a,s,S),T(a,v,S),T(a,c,S);for(let w=0;w<k.length;w+=1)k[w]&&k[w].m(c,null);T(a,f,S),T(a,g,S),M||(B=V(g,"click",l[6]),M=!0)},p(a,S){if(S&40){D=Y(Object.entries(a[3]));let w;for(w=0;w<D.length;w+=1){const L=U(a,D,w);k[w]?k[w].p(L,S):(k[w]=R(L),k[w].c(),k[w].m(c,null))}for(;w<k.length;w+=1)k[w].d(1);k.length=D.length}},d(a){a&&(b(e),b(o),b(u),b(t),b(r),b(p),b(s),b(v),b(c),b(f),b(g)),G(k,a),M=!1,B()}}}function R(l){let e,n,o=l[14].name+"",u,i,t,r,h,p,s,d;function v(...c){return l[7](l[13],...c)}return{c(){e=C("div"),n=C("p"),u=j(o),i=j(" - "),t=C("input"),p=I(),this.h()},l(c){e=x(c,"DIV",{class:!0});var f=N(e);n=x(f,"P",{});var g=N(n);u=E(g,o),g.forEach(b),i=E(f," - "),t=x(f,"INPUT",{type:!0,id:!0,name:!0,class:!0}),p=P(f),f.forEach(b),this.h()},h(){y(t,"type","checkbox"),y(t,"id",r=l[13]),y(t,"name",h=l[13]),y(t,"class","svelte-j5xmri"),y(e,"class","px-2 flex flex-row")},m(c,f){T(c,e,f),m(e,n),m(n,u),m(e,i),m(e,t),m(e,p),s||(d=V(t,"change",v),s=!0)},p(c,f){l=c,f&8&&o!==(o=l[14].name+"")&&A(u,o),f&8&&r!==(r=l[13])&&y(t,"id",r),f&8&&h!==(h=l[13])&&y(t,"name",h)},d(c){c&&b(e),s=!1,d()}}}function $(l){let e,n,o="TLDR; We detected your save data was old, so we redirected you here!",u,i,t=l[0]&&H(l);function r(s,d){return s[1]?Z:X}let h=r(l),p=h(l);return{c(){e=C("div"),n=C("p"),n.textContent=o,u=I(),t&&t.c(),i=I(),p.c(),this.h()},l(s){e=x(s,"DIV",{id:!0,class:!0});var d=N(e);n=x(d,"P",{"data-svelte-h":!0}),O(n)!=="svelte-8znlnq"&&(n.textContent=o),u=P(d),t&&t.l(d),i=P(d),p.l(d),d.forEach(b),this.h()},h(){y(e,"id","container"),y(e,"class","svelte-j5xmri")},m(s,d){T(s,e,d),m(e,n),m(e,u),t&&t.m(e,null),m(e,i),p.m(e,null)},p(s,[d]){s[0]?t?t.p(s,d):(t=H(s),t.c(),t.m(e,i)):t&&(t.d(1),t=null),h===(h=r(s))&&p?p.p(s,d):(p.d(1),p=h(s),p&&(p.c(),p.m(e,null)))},i:q,o:q,d(s){s&&b(e),t&&t.d(),p.d()}}}function ee(l,e){localStorage.setItem("save-version",e),localStorage.setItem("save",JSON.stringify(l))}function te(l,e){if(l==e)return!1;for(let n=l;n<e;n++)if(!ne(n,n+1))return!1;return!0}function ne(l,e){return l===1&&e===2}function le(l,e){return e-l}function re(l,e,n){let o,u=Q(),i=!1,t=-1,r={},h;function p(){const _=localStorage.getItem("save");_===null&&(window.location.href="/"),n(3,h=JSON.parse(_))}function s(_){if(localStorage.setItem("migration-backup",JSON.stringify(h)),localStorage.setItem("migration-backup-version",o),_===1)return d()}function d(){r.originalData=h,r["event-friendlystatuses"]={};for(const _ in h)r["event-friendlystatuses"][_]=!1}function v({item:_,checked:M}){r["event-friendlystatuses"][_]=M}function c(){const _=r.originalData,M=r["event-friendlystatuses"];let B={};for(const D in _){const k=_[D],a=M[D];B[D]={...k,hostile:a}}ee(B,2),window.location.reload()}return F(()=>{if(p(),n(0,o=Number(localStorage.getItem("save-version"))),o===u){window.location.href="/";return}n(1,i=te(o,u)),n(2,t=le(o,u)),i&&s(o)}),[o,i,t,h,u,v,c,(_,M)=>{v({item:_,checked:M.target.checked})},()=>{confirm("Are 100% sure you wanna wipe your data")&&confirm("Are 9999% sure you wanna wipe your data")&&confirm("Are ∞% sure you wanna wipe your data")&&(localStorage.removeItem("save-version"),localStorage.removeItem("save"),alert("Fine, data has been wiped."),window.location.reload())}]}class ce extends W{constructor(e){super(),K(this,e,re,$,z,{})}}export{ce as component};