import{j as e}from"./jsx-runtime-BjG_zV1W.js";const w="_root_187u3_1",b="_sm_187u3_11",z="_md_187u3_17",N="_neutral_187u3_23",S="_brand_187u3_28",I="_success_187u3_33",A="_warning_187u3_38",R="_error_187u3_43",T="_info_187u3_48",i={root:w,sm:b,md:z,neutral:N,brand:S,success:I,warning:A,error:R,info:T};function a({variant:_="neutral",size:y="md",children:h,className:j}){return e.jsx("span",{className:[i.root,i[_],i[y],j].filter(Boolean).join(" "),children:h})}a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Components/Badge",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["neutral","brand","success","warning","error","info"]},size:{control:"select",options:["sm","md"]}}},r={args:{variant:"neutral",size:"md",children:"Badge"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"neutral",children:"Neutral"}),e.jsx(a,{variant:"brand",children:"Brand"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"info",children:"Info"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(a,{size:"sm",variant:"brand",children:"Small"}),e.jsx(a,{size:"md",variant:"brand",children:"Medium"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{variant:"error",size:"sm",children:"3"}),e.jsx(a,{variant:"error",children:"12"}),e.jsx(a,{variant:"info",children:"New"}),e.jsx(a,{variant:"success",children:"Active"}),e.jsx(a,{variant:"warning",children:"Pending"})]})};var d,l,o;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    size: 'md',
    children: 'Badge'
  }
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Badge size="sm" variant="brand">Small</Badge>
      <Badge size="md" variant="brand">Medium</Badge>
    </div>
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,f,B;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Badge variant="error" size="sm">3</Badge>
      <Badge variant="error">12</Badge>
      <Badge variant="info">New</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
    </div>
}`,...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const P=["Playground","AllVariants","AllSizes","AsNotificationCount"];export{s as AllSizes,n as AllVariants,t as AsNotificationCount,r as Playground,P as __namedExportsOrder,E as default};
