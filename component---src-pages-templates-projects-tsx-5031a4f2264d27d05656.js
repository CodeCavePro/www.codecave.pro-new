(self.webpackChunkcode_cave=self.webpackChunkcode_cave||[]).push([[650],{1929:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var n=l(7294),a=l(4471),r=l.n(a),s=l(1164);var i=e=>{let{className:t}=e;return n.createElement("div",{className:"flex justify-center items-center h-full w-full "+t},n.createElement("svg",{"aria-hidden":"true",className:"w-8 h-8 mr-2 text-main-10 animate-spin dark:text-secondary-10 fill-main-100",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),n.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})))};var c=()=>{const{0:e,1:t}=(0,n.useState)(!1),a=(0,n.useRef)(!0),r=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(!a.current||!r.current||"undefined"==typeof window)return;a.current=!1;const e=new Worker(new URL(l.p+l.u(475),l.b),{type:void 0});e.onmessage=e=>{let{data:l}=e;"ready"===l&&t(!0)};const n=r.current;n.width=n.clientWidth,n.height=n.clientHeight;const s=n.transferControlToOffscreen();e.postMessage({canvas:s},[s]);const i=()=>{e.postMessage({width:n.clientWidth,height:n.clientHeight})};window.addEventListener("resize",i);const c=t=>{t.preventDefault(),e.postMessage({wheel:t.deltaY})};n.addEventListener("wheel",c);const o=t=>{e.postMessage({x:t.movementX,y:t.movementY})};return n.addEventListener("pointerdown",(e=>{e.preventDefault(),window.addEventListener("pointermove",o),window.addEventListener("pointerup",(()=>window.removeEventListener("pointermove",o)),{once:!0})})),()=>{window&&(window.removeEventListener("resize",i),window.removeEventListener("pointermove",o)),n&&n.removeEventListener("wheel",c),e.postMessage({dispose:!0})}}),[]),n.createElement("div",{className:"h-full w-full relative"},n.createElement("canvas",{ref:r,className:"bg-main-100 h-160 w-full flex items-center justify-center cursor-pointer"}),e?null:n.createElement(i,{className:"absolute top-0 left-0 right-0 bottom-0 z-10"}))};var o=e=>{let{heightClass:t="min-h-160",title:l,text:a,className:i,borderBottom:o,borderTop:m,babylon:u}=e;const{0:f,1:d}=(0,n.useState)("translate-y-full");return(0,n.useEffect)((()=>{d("translate-y-0")}),[]),n.createElement("div",{className:"w-full flex items-center bg-main-100 relative overflow-hidden px-6 "+t+" "+i},m?n.createElement(r(),{className:"absolute top-0 left-0 right-0 w-full"}):null,n.createElement(s.Z,{className:"h-full flex flex-col lg:flex-row py-12 lg:py-0 items-center text-secondary-100 flex-grow"},n.createElement("div",{className:"flex flex-col overflow-hidden items-left h-full justify-center text-secondary-100 h-full w-full lg:w-1/2 bg-main-100"},n.createElement("h2",{className:"overflow-hidden mb-8 w-full"},n.createElement("span",{className:"inline-block font-['Rubik_Glitch'] text-5xl sm:text-6xl w-full text-center lg:text-start transition-all duration-1000 "+f},l.toUpperCase())),n.createElement("p",{className:"overflow-hidden w-full"},n.createElement("span",{className:"inline-block w-full text-3xl sm:text-4xl font-light text-center lg:text-start transition-all duration-1000 "+f},a.toUpperCase()))),u?n.createElement("div",{className:"w-[85%] lg:w-1/2 lg:h-full flex"},n.createElement(c,null)):null),o?n.createElement(r(),{className:"absolute bottom-0 left-0 right-0 w-full"}):null)}},4568:function(e,t,l){"use strict";var n=l(7294),a=l(1883),r=l(1434);t.Z=e=>{let{section:t,pagesQuantity:l,currentPage:s,className:i}=e;const c=Array.from({length:l},((e,t)=>t+1)),o=s+1;return n.createElement("div",{className:"my-16 flex justify-between w-full "+i},s<l?n.createElement(a.Link,{to:"/"+t+"/page/"+o,className:"basis-1/2"},n.createElement(r.Z,{size:"large",variant:"dark",className:"w-max"},"NEXT PAGE")):null,n.createElement("nav",{className:"w-full flex justify-end"},l>1?c.map((e=>n.createElement(a.Link,{key:"pagination-link-"+e,to:"/"+t+"/page/"+e},n.createElement(r.Z,{size:"large",variant:e===s?"dark":"light",border:e!==s,className:"mx-[-1px]"},e)))):null))}},3997:function(e,t,l){"use strict";l.r(t),l.d(t,{Head:function(){return c}});var n=l(7294),a=l(1929),r=l(1164),s=l(6745),i=l(4568);t.default=e=>{let{data:t,pageContext:l}=e;const c=t.allMarkdownRemark.nodes,{currentPage:o,pagesQuantity:m}=l;return n.createElement(n.Fragment,null,n.createElement(a.Z,{heightClass:"h-136",title:"CodeCave projects",text:"Our super amazing projects",borderBottom:!0}),n.createElement(r.Z,{className:"flex-col items-center p-6 md:p-12"},n.createElement("div",{className:"flex flex-wrap w-full justify-center py-14"},c?c.map((e=>n.createElement(s.Z,{key:e.id,project:e,theme:"dark",className:"basis-full md:basis-3/4 lg:basis-2/5 my-10 md:m-12"}))):null),m>1?n.createElement(i.Z,{section:"projects",pagesQuantity:m,currentPage:o}):null))};const c=()=>n.createElement("title",null,"CodeCave Projects")},4471:function(e,t,l){var n=l(7294);function a(e){return n.createElement("svg",e,[n.createElement("line",{width:"800",height:"8",stroke:"white",strokeWidth:"8",strokeDasharray:"8 8",x1:"0",x2:"100%",y1:"4",y2:"4",key:0}),n.createElement("line",{width:"800",height:"8",stroke:"black",strokeWidth:"8",strokeDasharray:"8 8",x1:"8",x2:"100%",y1:"4",y2:"4",key:1})])}a.defaultProps={height:"8"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-templates-projects-tsx-5031a4f2264d27d05656.js.map