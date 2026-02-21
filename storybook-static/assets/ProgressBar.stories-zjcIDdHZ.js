import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as F}from"./iframe-BdJUDR3i.js";import"./preload-helper-C1FmrZbK.js";const T="_root_11j44_1",q="_header_11j44_8",E="_label_11j44_15",k="_value_11j44_21",M="_track_11j44_26",C="_sm_11j44_33",I="_md_11j44_37",A="_lg_11j44_41",L="_fill_11j44_45",U="_brand_11j44_55",W="_success_11j44_59",O="_warning_11j44_63",R="_error_11j44_67",$="_animated_11j44_71",G="_stripes_11j44_1",r={root:T,header:q,label:E,value:k,track:M,sm:C,md:I,lg:A,fill:L,default:"_default_11j44_51",brand:U,success:W,warning:O,error:R,animated:$,stripes:G};function a({value:s,variant:u="brand",size:c="md",label:l,showValue:p=!1,animated:N=!1,className:D}){const m=Math.min(100,Math.max(0,s));return e.jsxs("div",{className:[r.root,D].filter(Boolean).join(" "),children:[(l||p)&&e.jsxs("div",{className:r.header,children:[l&&e.jsx("span",{className:r.label,children:l}),p&&e.jsxs("span",{className:r.value,children:[m,"%"]})]}),e.jsx("div",{role:"progressbar","aria-valuenow":m,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l,className:[r.track,r[c]].filter(Boolean).join(" "),children:e.jsx("div",{className:[r.fill,r[u],N?r.animated:""].filter(Boolean).join(" "),style:{width:`${m}%`}})})]})}a.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'brand' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'brand'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Q={title:"Components/ProgressBar",component:a,parameters:{layout:"padded"},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"select",options:["default","brand","success","warning","error"]},size:{control:"select",options:["sm","md","lg"]}}},t={args:{value:65,variant:"brand",size:"md",label:"Upload progress",showValue:!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(a,{value:70,variant:"brand",label:"Brand",showValue:!0}),e.jsx(a,{value:85,variant:"success",label:"Success",showValue:!0}),e.jsx(a,{value:45,variant:"warning",label:"Warning",showValue:!0}),e.jsx(a,{value:30,variant:"error",label:"Error",showValue:!0}),e.jsx(a,{value:60,variant:"default",label:"Default",showValue:!0})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--font-family-base)",fontSize:"12px",color:"var(--color-text-muted)",marginBottom:"8px"},children:"Small (4px)"}),e.jsx(a,{value:60,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--font-family-base)",fontSize:"12px",color:"var(--color-text-muted)",marginBottom:"8px"},children:"Medium (8px)"}),e.jsx(a,{value:60,size:"md"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--font-family-base)",fontSize:"12px",color:"var(--color-text-muted)",marginBottom:"8px"},children:"Large (12px)"}),e.jsx(a,{value:60,size:"lg"})]})]})},i={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{value:65,animated:!0,label:"Processing…"})})},d={render:()=>{const[s,u]=F.useState(40);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(a,{value:s,label:"File upload",showValue:!0}),e.jsx("input",{type:"range",min:0,max:100,value:s,onChange:c=>u(Number(c.target.value)),style:{width:"100%"}})]})}};var v,x,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 65,
    variant: 'brand',
    size: 'md',
    label: 'Upload progress',
    showValue: true
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,_,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <ProgressBar value={70} variant="brand" label="Brand" showValue />
      <ProgressBar value={85} variant="success" label="Success" showValue />
      <ProgressBar value={45} variant="warning" label="Warning" showValue />
      <ProgressBar value={30} variant="error" label="Error" showValue />
      <ProgressBar value={60} variant="default" label="Default" showValue />
    </div>
}`,...(y=(_=o.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var h,j,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '400px'
  }}>
      <div>
        <div style={{
        fontFamily: 'var(--font-family-base)',
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        marginBottom: '8px'
      }}>Small (4px)</div>
        <ProgressBar value={60} size="sm" />
      </div>
      <div>
        <div style={{
        fontFamily: 'var(--font-family-base)',
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        marginBottom: '8px'
      }}>Medium (8px)</div>
        <ProgressBar value={60} size="md" />
      </div>
      <div>
        <div style={{
        fontFamily: 'var(--font-family-base)',
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        marginBottom: '8px'
      }}>Large (12px)</div>
        <ProgressBar value={60} size="lg" />
      </div>
    </div>
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,B,V;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <ProgressBar value={65} animated label="Processing…" />
    </div>
}`,...(V=(B=i.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var S,z,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(40);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <ProgressBar value={value} label="File upload" showValue />
        <input type="range" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} style={{
        width: '100%'
      }} />
      </div>;
  }
}`,...(P=(z=d.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const X=["Playground","Variants","Sizes","Animated","Interactive"];export{i as Animated,d as Interactive,t as Playground,n as Sizes,o as Variants,X as __namedExportsOrder,Q as default};
