import{d as r,ad as l,I as u,N as n,a6 as p,k as _}from"./entry.a876c961.js";import{u as f,f as m,_ as d}from"./MDCSlot.a8db3f55.js";const y=()=>({unwrap:f,flatUnwrap:m}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const a=l(),{flatUnwrap:o,unwrap:s}=y(),c=u(()=>e.icon||h[e.type]);return()=>{const i=o((a.default&&a.default())??[],["ul"]).map(t=>s(t,["li"]));return n("ul",i.map(t=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(d,{use:()=>t}))])))}}});const v=_(g,[["__scopeId","data-v-cfe1a5f2"]]);export{v as default};
