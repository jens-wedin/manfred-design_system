import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as s}from"./TextInput-BWJ-gX7a.js";import"./Icon-Cg_6evgg.js";const z={title:"Components/TextInput",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},status:{control:"select",options:["default","error","success"]}}},t={args:{size:"md",status:"default",placeholder:"Enter text…"}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[e.jsx(s,{placeholder:"Search…",leadingIcon:"search"}),e.jsx(s,{placeholder:"Email",leadingIcon:"info",trailingIcon:"check-circle"}),e.jsx(s,{placeholder:"Password",leadingIcon:"eye-off"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[e.jsx(s,{placeholder:"Default",status:"default"}),e.jsx(s,{placeholder:"Error state",status:"error",defaultValue:"bad input"}),e.jsx(s,{placeholder:"Success state",status:"success",defaultValue:"valid input"}),e.jsx(s,{placeholder:"Disabled",disabled:!0,defaultValue:"disabled"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[e.jsx(s,{placeholder:"Small",size:"sm"}),e.jsx(s,{placeholder:"Medium",size:"md"}),e.jsx(s,{placeholder:"Large",size:"lg"})]})},d={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{placeholder:"Full width input",fullWidth:!0})})};var o,c,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'md',
    status: 'default',
    placeholder: 'Enter text…'
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,n,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '280px'
  }}>
      <TextInput placeholder="Search…" leadingIcon="search" />
      <TextInput placeholder="Email" leadingIcon="info" trailingIcon="check-circle" />
      <TextInput placeholder="Password" leadingIcon="eye-off" />
    </div>
}`,...(u=(n=r.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var x,m,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '280px'
  }}>
      <TextInput placeholder="Default" status="default" />
      <TextInput placeholder="Error state" status="error" defaultValue="bad input" />
      <TextInput placeholder="Success state" status="success" defaultValue="valid input" />
      <TextInput placeholder="Disabled" disabled defaultValue="disabled" />
    </div>
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,g,I;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '280px'
  }}>
      <TextInput placeholder="Small" size="sm" />
      <TextInput placeholder="Medium" size="md" />
      <TextInput placeholder="Large" size="lg" />
    </div>
}`,...(I=(g=l.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var y,j,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <TextInput placeholder="Full width input" fullWidth />
    </div>
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const D=["Playground","WithIcons","States","Sizes","FullWidth"];export{d as FullWidth,t as Playground,l as Sizes,a as States,r as WithIcons,D as __namedExportsOrder,z as default};
