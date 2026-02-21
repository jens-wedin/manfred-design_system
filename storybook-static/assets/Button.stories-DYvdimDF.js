import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./Button-Bmyanjs3.js";const S={title:"Components/Button",component:r,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","brand","outline","ghost","inverse"]},size:{control:"select",options:["sm","md","lg"]}}},t={args:{variant:"primary",size:"md",children:"Click me"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"brand",children:"Brand"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"32px",borderRadius:"12px",backgroundColor:"#2c28ec"},children:[e.jsx(r,{variant:"inverse",children:"Inverse"}),e.jsx(r,{variant:"inverse",children:"Get in touch"})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{children:"Default"}),e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{isLoading:!0,children:"Loading…"})]})},i={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{fullWidth:!0,children:"Full Width Button"})})};var l,o,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click me'
  }
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary">Primary</Button>
        <Button variant="brand">Brand</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      padding: '32px',
      borderRadius: '12px',
      backgroundColor: '#2c28ec'
    }}>
        <Button variant="inverse">Inverse</Button>
        <Button variant="inverse">Get in touch</Button>
      </div>
    </div>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,x,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,h,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button isLoading>Loading…</Button>
    </div>
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,f,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const I=["Playground","AllVariants","AllSizes","States","FullWidth"];export{a as AllSizes,n as AllVariants,i as FullWidth,t as Playground,s as States,I as __namedExportsOrder,S as default};
