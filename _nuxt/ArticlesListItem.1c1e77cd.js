import{d as x,M as v,P as C,b as c,c as r,e as n,F as N,N as p,f as o,g as u,w as m,K as w,t as s,I as f,n as B,Q as I,E as D,R as L,l as E}from"./entry.2ff8c4b2.js";import{f as V}from"./date.824a539b.js";const b=["data-content-id"],z={class:"image"},A={key:0},F={class:"content"},P={class:"description"},S=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const _=t,h=v(()=>{var a,i;return(a=C())!=null&&a.isEnabled()?(i=_.article)==null?void 0:i._id:void 0});return(a,i)=>{var d;const y=I,l=D;return t.article._path&&t.article.title?(c(),r("article",{key:0,class:B({featured:t.featured}),"data-content-id":f(h)},[n("div",z,[(d=t.article)!=null&&d.badges?(c(),r("div",A,[(c(!0),r(N,null,p(t.article.badges,(e,k)=>(c(),r("span",{key:k,style:L({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},s(typeof e=="string"?e:e.content),5))),128))])):o("",!0),u(l,{to:t.article._path},{default:m(()=>[t.article.cover?(c(),w(y,{key:0,src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])):o("",!0)]),_:1},8,["to"])]),n("div",F,[u(l,{to:t.article._path,class:"headline"},{default:m(()=>[n("h1",null,s(t.article.title),1)]),_:1},8,["to"]),n("p",P,s(t.article.description),1),n("time",null,s(("formatDate"in a?a.formatDate:f(V))(t.article.date)),1)])],10,b)):o("",!0)}}});const j=E(S,[["__scopeId","data-v-bcc0ebbc"]]);export{j as default};
