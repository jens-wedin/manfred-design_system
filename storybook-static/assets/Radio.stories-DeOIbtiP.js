import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./iframe-BdJUDR3i.js";import"./preload-helper-C1FmrZbK.js";const _="_root_dsdgu_1",j="_disabledLabel_dsdgu_9",k="_nativeInput_dsdgu_14",R="_control_dsdgu_26",C="_labelText_dsdgu_65",S="_error_dsdgu_72",s={root:_,disabledLabel:j,nativeInput:k,control:R,labelText:C,error:S};function a({label:t,error:o=!1,className:h,disabled:d,...v}){return e.jsxs("label",{className:[s.root,o?s.error:"",d?s.disabledLabel:"",h].filter(Boolean).join(" "),children:[e.jsx("input",{type:"radio",className:s.nativeInput,disabled:d,...v}),e.jsx("span",{className:s.control,"aria-hidden":"true"}),t&&e.jsx("span",{className:s.labelText,children:t})]})}a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const N={title:"Components/Radio",component:a,parameters:{layout:"centered"}},r={args:{label:"Option A",name:"playground"}},l={render:()=>{const[t,o]=y.useState("a");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{label:"Option A",name:"group",value:"a",checked:t==="a",onChange:()=>o("a")}),e.jsx(a,{label:"Option B",name:"group",value:"b",checked:t==="b",onChange:()=>o("b")}),e.jsx(a,{label:"Option C",name:"group",value:"c",checked:t==="c",onChange:()=>o("c")}),e.jsxs("span",{style:{fontSize:"12px",color:"var(--color-text-muted)",fontFamily:"var(--font-family-base)",marginTop:"4px"},children:["Selected: ",t]})]})}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{label:"Unchecked",name:"states"}),e.jsx(a,{label:"Checked",name:"states",defaultChecked:!0}),e.jsx(a,{label:"Disabled unchecked",disabled:!0,name:"states-d"}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0,name:"states-d"}),e.jsx(a,{label:"Error state",error:!0,name:"states-e"})]})};var c,i,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    name: 'playground'
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,m,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('a');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Radio label="Option A" name="group" value="a" checked={value === 'a'} onChange={() => setValue('a')} />
        <Radio label="Option B" name="group" value="b" checked={value === 'b'} onChange={() => setValue('b')} />
        <Radio label="Option C" name="group" value="c" checked={value === 'c'} onChange={() => setValue('c')} />
        <span style={{
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-family-base)',
        marginTop: '4px'
      }}>
          Selected: {value}
        </span>
      </div>;
  }
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,g,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Radio label="Unchecked" name="states" />
      <Radio label="Checked" name="states" defaultChecked />
      <Radio label="Disabled unchecked" disabled name="states-d" />
      <Radio label="Disabled checked" disabled defaultChecked name="states-d" />
      <Radio label="Error state" error name="states-e" />
    </div>
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const V=["Playground","RadioGroup","States"];export{r as Playground,l as RadioGroup,n as States,V as __namedExportsOrder,N as default};
