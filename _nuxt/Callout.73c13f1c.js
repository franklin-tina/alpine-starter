import p from"./ContentSlot.e2275734.js";import{d,r as l,b as m,c as f,e as t,g as o,n as c,I as r,ae as v,af as g,W as h,l as y}from"./entry.2ff8c4b2.js";const C={class:"summary"},V={class:"content"},w=d({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(s,{emit:u}){const e=l(s.modelValue),i=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(a,b)=>{const n=p,_=h;return m(),f("div",{class:c(["callout",[s.type]])},[t("span",{class:"preview",onClick:i},[t("span",C,[o(n,{use:a.$slots.summary},null,8,["use"])]),o(_,{name:"heroicons-outline:chevron-right",class:c(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),v(t("div",V,[o(n,{use:a.$slots.content},null,8,["use"])],512),[[g,r(e)]])],2)}}});const B=y(w,[["__scopeId","data-v-961b73c7"]]);export{B as default};
