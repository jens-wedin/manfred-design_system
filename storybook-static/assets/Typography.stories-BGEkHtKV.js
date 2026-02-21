import{j as e}from"./jsx-runtime-BjG_zV1W.js";const T="_root_1w9hc_1",f="_headline1_1w9hc_8",B="_headline2_1w9hc_15",j="_headline3_1w9hc_22",w="_headline4_1w9hc_28",S="_large_1w9hc_34",k="_body_1w9hc_40",E="_bodySmall_1w9hc_46",R="_label_1w9hc_52",q="_caption_1w9hc_58",H="_colorDefault_1w9hc_66",I="_colorInverse_1w9hc_70",D="_colorBrand_1w9hc_74",L="_colorMuted_1w9hc_78",o={root:T,headline1:f,headline2:B,headline3:j,headline4:w,large:S,body:k,bodySmall:E,label:R,caption:q,colorDefault:H,colorInverse:I,colorBrand:D,colorMuted:L},C={headline1:"h1",headline2:"h2",headline3:"h3",headline4:"h4",large:"p",body:"p",bodySmall:"p",label:"span",caption:"span"};function a({variant:t,as:g,color:i="default",children:x,className:b}){const _=g??C[t];return e.jsx(_,{className:[o.root,o[t],o[`color${i.charAt(0).toUpperCase()}${i.slice(1)}`],b].filter(Boolean).join(" "),children:x})}a.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"union",raw:`| 'headline1'
| 'headline2'
| 'headline3'
| 'headline4'
| 'large'
| 'body'
| 'bodySmall'
| 'label'
| 'caption'`,elements:[{name:"literal",value:"'headline1'"},{name:"literal",value:"'headline2'"},{name:"literal",value:"'headline3'"},{name:"literal",value:"'headline4'"},{name:"literal",value:"'large'"},{name:"literal",value:"'body'"},{name:"literal",value:"'bodySmall'"},{name:"literal",value:"'label'"},{name:"literal",value:"'caption'"}]},description:""},as:{required:!1,tsType:{name:"union",raw:`| 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
| 'p' | 'span' | 'div' | 'label'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"},{name:"literal",value:"'label'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'default' | 'inverse' | 'brand' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverse'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'muted'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"Foundation/Typography",component:a,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["headline1","headline2","headline3","headline4","large","body","bodySmall","label","caption"]},color:{control:"select",options:["default","inverse","brand","muted"]}}},l={args:{variant:"body",color:"default",children:"The quick brown fox jumps over the lazy dog."}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{variant:"headline1",children:"Headline 1 — ExtraBold 56px"}),e.jsx(a,{variant:"headline2",children:"Headline 2 — ExtraBold 40px"}),e.jsx(a,{variant:"headline3",children:"Headline 3 — ExtraBold 32px"}),e.jsx(a,{variant:"headline4",children:"Headline 4 — ExtraBold 24px"}),e.jsx(a,{variant:"large",children:"Large — Light 20px. For single sentences and pull quotes."}),e.jsx(a,{variant:"body",children:"Body — Regular 16px. Used for all main body copy throughout the product."}),e.jsx(a,{variant:"bodySmall",children:"Body Small — Regular 14px. For secondary content areas."}),e.jsx(a,{variant:"label",children:"Label — SemiBold 14px"}),e.jsx(a,{variant:"caption",children:"Caption — Regular 12px"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{variant:"headline3",color:"inverse",children:"Inverse — White on dark"}),e.jsx(a,{variant:"body",color:"inverse",children:"Inverse body text on dark background."}),e.jsx(a,{variant:"headline3",color:"brand",children:"Brand — Business Blue"}),e.jsx(a,{variant:"body",color:"muted",children:"Muted — 60% opacity text for secondary information."})]}),globals:{backgrounds:{value:"dark"}}};var d,s,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'body',
    color: 'default',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(p=(s=l.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,h,y;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="headline1">Headline 1 — ExtraBold 56px</Typography>
      <Typography variant="headline2">Headline 2 — ExtraBold 40px</Typography>
      <Typography variant="headline3">Headline 3 — ExtraBold 32px</Typography>
      <Typography variant="headline4">Headline 4 — ExtraBold 24px</Typography>
      <Typography variant="large">Large — Light 20px. For single sentences and pull quotes.</Typography>
      <Typography variant="body">Body — Regular 16px. Used for all main body copy throughout the product.</Typography>
      <Typography variant="bodySmall">Body Small — Regular 14px. For secondary content areas.</Typography>
      <Typography variant="label">Label — SemiBold 14px</Typography>
      <Typography variant="caption">Caption — Regular 12px</Typography>
    </div>
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var u,m,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Typography variant="headline3" color="inverse">Inverse — White on dark</Typography>
      <Typography variant="body" color="inverse">Inverse body text on dark background.</Typography>
      <Typography variant="headline3" color="brand">Brand — Business Blue</Typography>
      <Typography variant="body" color="muted">Muted — 60% opacity text for secondary information.</Typography>
    </div>,
  globals: {
    backgrounds: {
      value: "dark"
    }
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const N=["Playground","AllVariants","ColorVariants"];export{r as AllVariants,n as ColorVariants,l as Playground,N as __namedExportsOrder,M as default};
