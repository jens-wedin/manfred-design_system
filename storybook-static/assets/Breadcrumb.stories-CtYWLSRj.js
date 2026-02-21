import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as N}from"./iframe-BdJUDR3i.js";import{I as B}from"./Icon-Cg_6evgg.js";import"./preload-helper-C1FmrZbK.js";const H="_root_lraa3_1",P="_list_lraa3_5",k="_item_lraa3_15",D="_separatorItem_lraa3_20",T="_slash_lraa3_26",q="_link_lraa3_32",A="_current_lraa3_44",r={root:H,list:P,item:k,separatorItem:D,slash:T,link:q,current:A};function y({items:c,separator:j="chevron",className:x}){return e.jsx("nav",{"aria-label":"Breadcrumb",className:[r.root,x].filter(Boolean).join(" "),children:e.jsx("ol",{className:r.list,children:c.map((a,o)=>{const I=o===c.length-1;return e.jsxs(N.Fragment,{children:[o>0&&e.jsx("li",{className:r.separatorItem,"aria-hidden":"true",children:j==="chevron"?e.jsx(B,{name:"chevron-right",size:"xs"}):e.jsx("span",{className:r.slash,children:"/"})}),e.jsx("li",{className:r.item,children:I?e.jsx("span",{className:r.current,"aria-current":"page",children:a.label}):a.href?e.jsx("a",{href:a.href,className:r.link,children:a.label}):e.jsx("span",{className:r.link,children:a.label})})]},o)})})})}y.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"union",raw:"'chevron' | 'slash'",elements:[{name:"literal",value:"'chevron'"},{name:"literal",value:"'slash'"}]},description:"",defaultValue:{value:"'chevron'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Components/Breadcrumb",component:y,parameters:{layout:"padded"},argTypes:{separator:{control:"select",options:["chevron","slash"]}}},s={args:{separator:"chevron",items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Shoes"}]}},n={args:{separator:"slash",items:[{label:"Home",href:"#"},{label:"Blog",href:"#"},{label:"Design Systems"}]}},l={args:{separator:"chevron",items:[{label:"Home",href:"#"},{label:"Dashboard",href:"#"},{label:"Settings",href:"#"},{label:"Account",href:"#"},{label:"Security"}]}},t={args:{items:[{label:"Home"}]}};var m,i,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    separator: 'chevron',
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Products',
      href: '#'
    }, {
      label: 'Shoes'
    }]
  }
}`,...(h=(i=s.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    separator: 'slash',
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Blog',
      href: '#'
    }, {
      label: 'Design Systems'
    }]
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,g,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    separator: 'chevron',
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Dashboard',
      href: '#'
    }, {
      label: 'Settings',
      href: '#'
    }, {
      label: 'Account',
      href: '#'
    }, {
      label: 'Security'
    }]
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var _,S,v;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home'
    }]
  }
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const z=["Playground","WithSlashSeparator","LongPath","SingleItem"];export{l as LongPath,s as Playground,t as SingleItem,n as WithSlashSeparator,z as __namedExportsOrder,W as default};
