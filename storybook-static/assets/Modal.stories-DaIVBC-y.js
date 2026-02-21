import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./iframe-BdJUDR3i.js";import{R as N}from"./index-D44ZF64D.js";import{I as U}from"./Icon-Cg_6evgg.js";import{B as l}from"./Button-Bmyanjs3.js";import"./preload-helper-C1FmrZbK.js";const D="_backdrop_1whfi_1",R="_fadeIn_1whfi_1",P="_panel_1whfi_13",K="_scaleIn_1whfi_1",W="_sm_1whfi_25",Y="_md_1whfi_29",$="_lg_1whfi_33",G="_header_1whfi_37",H="_title_1whfi_47",J="_closeBtn_1whfi_55",Q="_body_1whfi_80",V="_footer_1whfi_88",a={backdrop:D,fadeIn:R,panel:P,scaleIn:K,sm:W,md:Y,lg:$,header:G,title:H,closeBtn:J,body:Q,footer:V},b='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function d({isOpen:t,onClose:n,title:o,size:g="md",closeOnBackdrop:I=!0,closeOnEscape:y=!0,children:L,footer:x,className:F}){const u=i.useRef(null),_=i.useId();i.useEffect(()=>{if(!t||!y)return;const s=r=>{r.key==="Escape"&&n()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t,y,n]),i.useEffect(()=>{var c;if(!t)return;const s=document.body.style.overflow;document.body.style.overflow="hidden";const r=(c=u.current)==null?void 0:c.querySelector(b);return r==null||r.focus(),()=>{document.body.style.overflow=s}},[t]);const A=s=>{if(s.key!=="Tab"||!u.current)return;const r=Array.from(u.current.querySelectorAll(b));if(r.length===0)return;const c=r[0],C=r[r.length-1];s.shiftKey?document.activeElement===c&&(s.preventDefault(),C.focus()):document.activeElement===C&&(s.preventDefault(),c.focus())};return!t||typeof document>"u"?null:N.createPortal(e.jsx("div",{className:a.backdrop,onClick:I?n:void 0,"aria-modal":"true",children:e.jsxs("div",{ref:u,role:"dialog","aria-labelledby":o?_:void 0,className:[a.panel,a[g],F].filter(Boolean).join(" "),onClick:s=>s.stopPropagation(),onKeyDown:A,children:[e.jsxs("div",{className:a.header,children:[o&&e.jsx("span",{id:_,className:a.title,children:o}),e.jsx("button",{type:"button",className:a.closeBtn,onClick:n,"aria-label":"Close dialog",children:e.jsx(U,{name:"x",size:"md"})})]}),e.jsx("div",{className:a.body,children:L}),x&&e.jsx("div",{className:a.footer,children:x})]})}),document.body)}const se={title:"Components/Modal",component:d,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},m={render:t=>{const[n,o]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Modal"}),e.jsx(d,{...t,isOpen:n,onClose:()=>o(!1)})]})},args:{title:"Modal Title",size:"md",children:e.jsx("p",{style:{margin:0},children:"This is the modal body content. You can place any content here including forms, media, or plain text."})}},p={render:()=>{const[t,n]=i.useState(null);return e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[["sm","md","lg"].map(o=>e.jsxs(l,{variant:"outline",onClick:()=>n(o),children:[o.toUpperCase()," Modal"]},o)),e.jsx(d,{isOpen:t!==null,onClose:()=>n(null),title:`${(t??"md").toUpperCase()} Modal`,size:t??"md",children:e.jsxs("p",{style:{margin:0},children:['Modal content at size "',t,'".']})})]})}},f={render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n(!0),children:"Open with Footer"}),e.jsx(d,{isOpen:t,onClose:()=>n(!1),title:"Confirm action",footer:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(l,{variant:"brand",onClick:()=>n(!1),children:"Confirm"})]}),children:e.jsx("p",{style:{margin:0},children:"Are you sure you want to continue? This action cannot be undone."})})]})}},h={render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n(!0),children:"Long Content Modal"}),e.jsx(d,{isOpen:t,onClose:()=>n(!1),title:"Terms & Conditions",children:Array.from({length:10}).map((o,g)=>e.jsx("p",{style:{marginTop:0,marginBottom:"16px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},g))})]})}};var j,v,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    title: 'Modal Title',
    size: 'md',
    children: <p style={{
      margin: 0
    }}>
        This is the modal body content. You can place any content here including forms, media, or plain text.
      </p>
  }
}`,...(O=(v=m.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var k,w,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState<'sm' | 'md' | 'lg' | null>(null);
    return <div style={{
      display: 'flex',
      gap: '12px'
    }}>
        {(['sm', 'md', 'lg'] as const).map(size => <Button key={size} variant="outline" onClick={() => setOpen(size)}>
            {size.toUpperCase()} Modal
          </Button>)}
        <Modal isOpen={open !== null} onClose={() => setOpen(null)} title={\`\${(open ?? 'md').toUpperCase()} Modal\`} size={open ?? 'md'}>
          <p style={{
          margin: 0
        }}>Modal content at size "{open}".</p>
        </Modal>
      </div>;
  }
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var M,S,z;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open with Footer</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action" footer={<>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="brand" onClick={() => setOpen(false)}>Confirm</Button>
            </>}>
          <p style={{
          margin: 0
        }}>
            Are you sure you want to continue? This action cannot be undone.
          </p>
        </Modal>
      </>;
  }
}`,...(z=(S=f.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,q,E;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Long Content Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Terms & Conditions">
          {Array.from({
          length: 10
        }).map((_, i) => <p key={i} style={{
          marginTop: 0,
          marginBottom: '16px'
        }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>)}
        </Modal>
      </>;
  }
}`,...(E=(q=h.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const re=["Playground","Sizes","WithFooter","LongContent"];export{h as LongContent,m as Playground,p as Sizes,f as WithFooter,re as __namedExportsOrder,se as default};
