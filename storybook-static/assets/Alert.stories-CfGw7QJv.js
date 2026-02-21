import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./iframe-BdJUDR3i.js";import{A as r}from"./Alert-30MgPat4.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-Cg_6evgg.js";const P={title:"Components/Alert",component:r,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["info","success","warning","error"]}}},n={args:{variant:"info",title:"Information",children:"This is an informational message for the user."}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"480px"},children:[e.jsx(r,{variant:"info",children:"Your account settings have been updated."}),e.jsx(r,{variant:"success",children:"Payment processed successfully."}),e.jsx(r,{variant:"warning",children:"Your subscription expires in 3 days."}),e.jsx(r,{variant:"error",children:"Failed to save changes. Please try again."})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"480px"},children:[e.jsx(r,{variant:"success",title:"Changes saved",children:"Your profile has been updated successfully."}),e.jsx(r,{variant:"error",title:"Something went wrong",children:"We could not process your request. Please try again later."})]})},c={render:()=>{const[t,i]=w.useState(["info","success","warning","error"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"480px"},children:[t.length===0&&e.jsx("span",{style:{fontFamily:"var(--font-family-base)",color:"var(--color-text-muted)",fontSize:"14px"},children:"All alerts dismissed."}),t.includes("info")&&e.jsx(r,{variant:"info",onClose:()=>i(s=>s.filter(a=>a!=="info")),children:"Informational alert — dismiss me."}),t.includes("success")&&e.jsx(r,{variant:"success",onClose:()=>i(s=>s.filter(a=>a!=="success")),children:"Success alert — dismiss me."}),t.includes("warning")&&e.jsx(r,{variant:"warning",onClose:()=>i(s=>s.filter(a=>a!=="warning")),children:"Warning alert — dismiss me."}),t.includes("error")&&e.jsx(r,{variant:"error",onClose:()=>i(s=>s.filter(a=>a!=="error")),children:"Error alert — dismiss me."})]})}};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message for the user.'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,x,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '480px'
  }}>
      <Alert variant="info">Your account settings have been updated.</Alert>
      <Alert variant="success">Payment processed successfully.</Alert>
      <Alert variant="warning">Your subscription expires in 3 days.</Alert>
      <Alert variant="error">Failed to save changes. Please try again.</Alert>
    </div>
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,v,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '480px'
  }}>
      <Alert variant="success" title="Changes saved">
        Your profile has been updated successfully.
      </Alert>
      <Alert variant="error" title="Something went wrong">
        We could not process your request. Please try again later.
      </Alert>
    </div>
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,A,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [alerts, setAlerts] = useState<string[]>(['info', 'success', 'warning', 'error']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxWidth: '480px'
    }}>
        {alerts.length === 0 && <span style={{
        fontFamily: 'var(--font-family-base)',
        color: 'var(--color-text-muted)',
        fontSize: '14px'
      }}>
            All alerts dismissed.
          </span>}
        {alerts.includes('info') && <Alert variant="info" onClose={() => setAlerts(a => a.filter(x => x !== 'info'))}>
            Informational alert — dismiss me.
          </Alert>}
        {alerts.includes('success') && <Alert variant="success" onClose={() => setAlerts(a => a.filter(x => x !== 'success'))}>
            Success alert — dismiss me.
          </Alert>}
        {alerts.includes('warning') && <Alert variant="warning" onClose={() => setAlerts(a => a.filter(x => x !== 'warning'))}>
            Warning alert — dismiss me.
          </Alert>}
        {alerts.includes('error') && <Alert variant="error" onClose={() => setAlerts(a => a.filter(x => x !== 'error'))}>
            Error alert — dismiss me.
          </Alert>}
      </div>;
  }
}`,...(j=(A=c.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const Y=["Playground","AllVariants","WithTitle","Dismissible"];export{l as AllVariants,c as Dismissible,n as Playground,o as WithTitle,Y as __namedExportsOrder,P as default};
