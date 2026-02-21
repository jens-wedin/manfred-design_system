import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as n,i as f}from"./Icon-Cg_6evgg.js";const v={title:"Components/Icon",component:n,parameters:{layout:"centered"},argTypes:{name:{control:"select",options:Object.keys(f)},size:{control:"select",options:["xs","sm","md","lg","xl"]}}},a={args:{name:"check",size:"md"}},t={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"24px",maxWidth:"600px"},children:Object.keys(f).map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",width:"64px"},children:[e.jsx(n,{name:s,size:"md"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--color-text-muted)",textAlign:"center",fontFamily:"var(--font-family-base)",lineHeight:"1.3"},children:s})]},s))})},r={render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:["xs","sm","md","lg","xl"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(n,{name:"search",size:s}),e.jsx("span",{style:{fontSize:"12px",color:"var(--color-text-muted)",fontFamily:"var(--font-family-base)"},children:s})]},s))})};var o,l,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: 'check',
    size: 'md'
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    maxWidth: '600px'
  }}>
      {(Object.keys(iconPaths) as IconName[]).map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      width: '64px'
    }}>
          <Icon name={name} size="md" />
          <span style={{
        fontSize: '10px',
        color: 'var(--color-text-muted)',
        textAlign: 'center',
        fontFamily: 'var(--font-family-base)',
        lineHeight: '1.3'
      }}>
            {name}
          </span>
        </div>)}
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,x,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Icon name="search" size={size} />
          <span style={{
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-family-base)'
      }}>
            {size}
          </span>
        </div>)}
    </div>
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const h=["Playground","AllIcons","Sizes"];export{t as AllIcons,a as Playground,r as Sizes,h as __namedExportsOrder,v as default};
