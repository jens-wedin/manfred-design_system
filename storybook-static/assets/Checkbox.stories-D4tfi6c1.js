import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./iframe-BdJUDR3i.js";import{I as x}from"./Icon-Cg_6evgg.js";import"./preload-helper-C1FmrZbK.js";const q="_root_z2fzt_1",w="_disabledLabel_z2fzt_9",F="_nativeInput_z2fzt_14",O="_control_z2fzt_26",P="_checkIcon_z2fzt_52",V="_labelText_z2fzt_56",W="_error_z2fzt_63",a={root:q,disabledLabel:w,nativeInput:F,control:O,checkIcon:P,labelText:V,error:W};function t({label:r,indeterminate:s=!1,error:i=!1,className:R,checked:T,defaultChecked:E,onChange:L,disabled:m,id:A,...U}){const p=u.useRef(null);return u.useEffect(()=>{p.current&&(p.current.indeterminate=s)},[s]),e.jsxs("label",{className:[a.root,i?a.error:"",m?a.disabledLabel:"",R].filter(Boolean).join(" "),children:[e.jsx("input",{ref:p,type:"checkbox",className:a.nativeInput,checked:T,defaultChecked:E,onChange:L,disabled:m,id:A,...U}),e.jsx("span",{className:a.control,"aria-hidden":"true",children:s?e.jsx(x,{name:"minus",size:"xs",className:a.checkIcon}):e.jsx(x,{name:"check",size:"xs",className:a.checkIcon})}),r&&e.jsx("span",{className:a.labelText,children:r})]})}t.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const J={title:"Components/Checkbox",component:t,parameters:{layout:"centered"}},c={args:{label:"Accept terms and conditions"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",defaultChecked:!0}),e.jsx(t,{label:"Indeterminate",indeterminate:!0}),e.jsx(t,{label:"Disabled unchecked",disabled:!0}),e.jsx(t,{label:"Disabled checked",disabled:!0,defaultChecked:!0})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{label:"Subscribe to newsletter",defaultChecked:!0}),e.jsx(t,{label:"Remember me on this device"}),e.jsx(t,{label:"Agree to privacy policy"})]})},n={render:()=>e.jsx(t,{label:"You must accept the terms to continue",error:!0})},d={render:()=>{const[r,s]=u.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"},children:[e.jsx(t,{label:r?"Checked":"Unchecked",checked:r,onChange:i=>s(i.target.checked)}),e.jsxs("span",{style:{fontSize:"12px",color:"var(--color-text-muted)",fontFamily:"var(--font-family-base)"},children:["State: ",r?"true":"false"]})]})}};var b,h,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,y,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var _,g,j;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox label="Subscribe to newsletter" defaultChecked />
      <Checkbox label="Remember me on this device" />
      <Checkbox label="Agree to privacy policy" />
    </div>
}`,...(j=(g=l.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var v,z,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Checkbox label="You must accept the terms to continue" error />
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,D,N;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'flex-start'
    }}>
        <Checkbox label={checked ? 'Checked' : 'Unchecked'} checked={checked} onChange={e => setChecked(e.target.checked)} />
        <span style={{
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-family-base)'
      }}>
          State: {checked ? 'true' : 'false'}
        </span>
      </div>;
  }
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const K=["Playground","States","WithLabel","ErrorState","Controlled"];export{d as Controlled,n as ErrorState,c as Playground,o as States,l as WithLabel,K as __namedExportsOrder,J as default};
