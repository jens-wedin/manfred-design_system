import{j as e}from"./jsx-runtime-BjG_zV1W.js";const v="_root_fhz8a_1",z="_srOnly_fhz8a_8",h="_sm_fhz8a_20",j="_md_fhz8a_25",k="_lg_fhz8a_30",S="_svg_fhz8a_35",b="_spin_fhz8a_40",n={root:v,srOnly:z,sm:h,md:j,lg:k,svg:S,spin:b};function s({size:r="md",label:y="Loading",className:_}){const l=2*Math.PI*9;return e.jsxs("span",{className:[n.root,n[r],_].filter(Boolean).join(" "),role:"status",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",className:n.svg,"aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:9,stroke:"currentColor",strokeWidth:"2.5",strokeOpacity:"0.2"}),e.jsx("circle",{cx:"12",cy:"12",r:9,stroke:"currentColor",strokeWidth:"2.5",strokeDasharray:l,strokeDashoffset:l*.75,strokeLinecap:"round",className:n.spin})]}),e.jsx("span",{className:n.srOnly,children:y})]})}s.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Loading'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Components/Spinner",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},a={args:{size:"md",label:"Loading"}},o={render:()=>e.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:["sm","md","lg"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{size:r}),e.jsx("span",{style:{fontSize:"12px",color:"var(--color-text-muted)",fontFamily:"var(--font-family-base)"},children:r})]},r))})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center",padding:"32px",borderRadius:"12px",backgroundColor:"#2c28ec",color:"#ffffff"},children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]})};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Spinner size={size} />
          <span style={{
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-family-base)'
      }}>
            {size}
          </span>
        </div>)}
    </div>
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    padding: '32px',
    borderRadius: '12px',
    backgroundColor: '#2c28ec',
    color: '#ffffff'
  }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const N=["Playground","AllSizes","OnDarkBackground"];export{o as AllSizes,t as OnDarkBackground,a as Playground,N as __namedExportsOrder,D as default};
