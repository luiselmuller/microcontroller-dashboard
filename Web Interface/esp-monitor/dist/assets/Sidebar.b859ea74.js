import{a,j as e,T as o,m as s,N as r}from"./vendor.0a8597db.js";import{d as n,a as d,b as c}from"./GridViewOutlined.77f18138.js";const p=({sideIsOpen:m})=>{const i="outline-none flex items-center gap-2 bg-main-bg hover:bg-main-bg dark:bg-main-dark-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out",l="outline-none flex items-center gap-2 hover:bg-main-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out";return a("div",{className:"h-screen w-72 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-2 dark:text-[#e4e5f1]",children:[a("div",{className:"flex justify-center items-center border-b-1 dark:border-slate-300 border-slate-900 mb-4 py-4 gap-4",children:[e("p",{className:"text-xl font-semibold",children:"Micro Dashboard"}),e(o,{title:"Github repository",children:e("button",{type:"button",className:"active:scale-100 hover:scale-110 transition-all duration-100 ease-in-out\r ",children:e("a",{href:"https://github.com/luiselmuller/microcontroller-dashboard",target:"_blank",children:e(s,{fontSize:"large"})})})})]}),a("div",{className:"flex flex-col gap-4",children:[a("div",{className:"flex flex-col gap-2",children:[e("p",{className:"ml-2 dark:opacity-50 opacity-90",children:"Data"}),a(r,{to:"/",className:({isActive:t})=>t?i:l,children:[e(n,{}),"Overview"]}),a(r,{to:"/detailed-view",className:({isActive:t})=>t?i:l,children:[e(d,{}),"Detailed View"]})]}),a("div",{className:"flex flex-col gap-2",children:[e("p",{className:"ml-2 dark:opacity-50 opacity-90",children:"Device"}),a(r,{to:"/device-statistics",className:({isActive:t})=>t?i:l,children:[e(c,{}),"Device Statistics"]})]})]})]})};export{p as default};