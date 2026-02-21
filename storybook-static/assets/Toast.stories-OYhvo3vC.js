import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./iframe-BdJUDR3i.js";import{R as D}from"./index-D44ZF64D.js";import{A as y}from"./Alert-30MgPat4.js";import{B as i}from"./Button-Bmyanjs3.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-Cg_6evgg.js";const z="_container_176bz_1",A="_topRight_176bz_11",E="_topCenter_176bz_17",I="_bottomRight_176bz_24",P="_bottomCenter_176bz_30",W="_toastItem_176bz_37",F="_exiting_176bz_46",m={container:z,topRight:A,topCenter:E,bottomRight:I,bottomCenter:P,toastItem:W,exiting:F},M={"top-right":m.topRight,"top-center":m.topCenter,"bottom-right":m.bottomRight,"bottom-center":m.bottomCenter};function N({item:s,onDismiss:o}){const[n,e]=c.useState(!1),r=c.useRef(null),a=c.useCallback(()=>{e(!0),setTimeout(()=>o(s.id),250)},[s.id,o]);return c.useEffect(()=>{const d=s.duration??4e3;return d>0&&(r.current=setTimeout(a,d)),()=>{r.current&&clearTimeout(r.current)}},[s.duration,a]),t.jsx("div",{className:[m.toastItem,n?m.exiting:""].filter(Boolean).join(" "),children:t.jsx(y,{variant:s.variant,title:s.title,onClose:a,children:s.message})})}function l({toasts:s,onDismiss:o,position:n="top-right"}){return typeof document>"u"?null:D.createPortal(t.jsx("div",{className:[m.container,M[n]].filter(Boolean).join(" "),children:s.map(e=>t.jsx(N,{item:e,onDismiss:o},e.id))}),document.body)}function u(){const[s,o]=c.useState([]),n=c.useCallback(r=>{const a=Math.random().toString(36).slice(2);o(d=>[...d,{...r,id:a}])},[]),e=c.useCallback(r=>{o(a=>a.filter(d=>d.id!==r))},[]);return{toasts:s,show:n,dismiss:e}}const L={title:"Components/Toast",parameters:{layout:"centered"}},p={render:()=>{const{toasts:s,show:o,dismiss:n}=u();return t.jsxs(t.Fragment,{children:[t.jsx(i,{variant:"brand",onClick:()=>o({variant:"info",message:"This is a toast notification!",duration:4e3}),children:"Show Toast"}),t.jsx(l,{toasts:s,onDismiss:n})]})}},g={render:()=>{const{toasts:s,show:o,dismiss:n}=u();return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.jsx(i,{onClick:()=>o({variant:"info",title:"Info",message:"Informational toast."}),children:"Info"}),t.jsx(i,{onClick:()=>o({variant:"success",title:"Success",message:"Action completed!"}),children:"Success"}),t.jsx(i,{onClick:()=>o({variant:"warning",title:"Warning",message:"Please review."}),children:"Warning"}),t.jsx(i,{onClick:()=>o({variant:"error",title:"Error",message:"Something failed."}),children:"Error"})]}),t.jsx(l,{toasts:s,onDismiss:n})]})}},h={render:()=>{const{toasts:s,show:o,dismiss:n}=u();return t.jsxs(t.Fragment,{children:[t.jsx(i,{onClick:()=>o({variant:"success",message:"Auto-dismisses in 2 seconds.",duration:2e3}),children:"Show (2s auto-dismiss)"}),t.jsx(l,{toasts:s,onDismiss:n})]})}},C={render:()=>{const s=u(),o=u(),n=u(),e=u();return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[t.jsx(i,{variant:"outline",size:"sm",onClick:()=>s.show({variant:"info",message:"Top right"}),children:"Top Right"}),t.jsx(i,{variant:"outline",size:"sm",onClick:()=>o.show({variant:"success",message:"Top center"}),children:"Top Center"}),t.jsx(i,{variant:"outline",size:"sm",onClick:()=>n.show({variant:"warning",message:"Bottom right"}),children:"Bottom Right"}),t.jsx(i,{variant:"outline",size:"sm",onClick:()=>e.show({variant:"error",message:"Bottom center"}),children:"Bottom Center"})]}),t.jsx(l,{toasts:s.toasts,onDismiss:s.dismiss,position:"top-right"}),t.jsx(l,{toasts:o.toasts,onDismiss:o.dismiss,position:"top-center"}),t.jsx(l,{toasts:n.toasts,onDismiss:n.dismiss,position:"bottom-right"}),t.jsx(l,{toasts:e.toasts,onDismiss:e.dismiss,position:"bottom-center"})]})}};var f,x,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const {
      toasts,
      show,
      dismiss
    } = useToast();
    return <>
        <Button variant="brand" onClick={() => show({
        variant: 'info',
        message: 'This is a toast notification!',
        duration: 4000
      })}>
          Show Toast
        </Button>
        <ToastContainer toasts={toasts} onDismiss={dismiss} />
      </>;
  }
}`,...(v=(x=p.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,T,w;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const {
      toasts,
      show,
      dismiss
    } = useToast();
    return <>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          <Button onClick={() => show({
          variant: 'info',
          title: 'Info',
          message: 'Informational toast.'
        })}>
            Info
          </Button>
          <Button onClick={() => show({
          variant: 'success',
          title: 'Success',
          message: 'Action completed!'
        })}>
            Success
          </Button>
          <Button onClick={() => show({
          variant: 'warning',
          title: 'Warning',
          message: 'Please review.'
        })}>
            Warning
          </Button>
          <Button onClick={() => show({
          variant: 'error',
          title: 'Error',
          message: 'Something failed.'
        })}>
            Error
          </Button>
        </div>
        <ToastContainer toasts={toasts} onDismiss={dismiss} />
      </>;
  }
}`,...(w=(T=g.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,j,k;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const {
      toasts,
      show,
      dismiss
    } = useToast();
    return <>
        <Button onClick={() => show({
        variant: 'success',
        message: 'Auto-dismisses in 2 seconds.',
        duration: 2000
      })}>
          Show (2s auto-dismiss)
        </Button>
        <ToastContainer toasts={toasts} onDismiss={dismiss} />
      </>;
  }
}`,...(k=(j=h.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var _,R,S;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const tr = useToast();
    const tc = useToast();
    const br = useToast();
    const bc = useToast();
    return <>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px'
      }}>
          <Button variant="outline" size="sm" onClick={() => tr.show({
          variant: 'info',
          message: 'Top right'
        })}>
            Top Right
          </Button>
          <Button variant="outline" size="sm" onClick={() => tc.show({
          variant: 'success',
          message: 'Top center'
        })}>
            Top Center
          </Button>
          <Button variant="outline" size="sm" onClick={() => br.show({
          variant: 'warning',
          message: 'Bottom right'
        })}>
            Bottom Right
          </Button>
          <Button variant="outline" size="sm" onClick={() => bc.show({
          variant: 'error',
          message: 'Bottom center'
        })}>
            Bottom Center
          </Button>
        </div>
        <ToastContainer toasts={tr.toasts} onDismiss={tr.dismiss} position="top-right" />
        <ToastContainer toasts={tc.toasts} onDismiss={tc.dismiss} position="top-center" />
        <ToastContainer toasts={br.toasts} onDismiss={br.dismiss} position="bottom-right" />
        <ToastContainer toasts={bc.toasts} onDismiss={bc.dismiss} position="bottom-center" />
      </>;
  }
}`,...(S=(R=C.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const Q=["Playground","AllVariants","AutoDismiss","Positions"];export{g as AllVariants,h as AutoDismiss,p as Playground,C as Positions,Q as __namedExportsOrder,L as default};
