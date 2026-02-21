import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./iframe-BdJUDR3i.js";import{T as O}from"./TextInput-BWJ-gX7a.js";import{I as A}from"./Icon-Cg_6evgg.js";import"./preload-helper-C1FmrZbK.js";const G="_root_1505b_1",H="_fullWidth_1505b_6",J="_clearBtn_1505b_10",f={root:G,fullWidth:H,clearBtn:J};function a({size:u="md",placeholder:t="Search…",value:r,defaultValue:p,onChange:s,onSearch:x,onClear:m,disabled:S=!1,fullWidth:g=!1,className:R}){const l=r!==void 0,[v,b]=y.useState(p??""),j=l?r:v,k=h=>{const w=h.target.value;l||b(w),s==null||s(w)},F=h=>{h.key==="Enter"&&x&&x(j??"")},K=()=>{l||b(""),s==null||s(""),m==null||m()},M=(j??"").length>0&&!S;return e.jsxs("div",{className:[f.root,g?f.fullWidth:"",R].filter(Boolean).join(" "),children:[e.jsx(O,{size:u,placeholder:t,value:l?r:v,onChange:k,onKeyDown:F,leadingIcon:"search",disabled:S,fullWidth:g,"aria-label":"Search"}),M&&e.jsx("button",{type:"button",className:f.clearBtn,onClick:K,"aria-label":"Clear search",children:e.jsx(A,{name:"x",size:"sm"})})]})}a.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search…'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ee={title:"Components/SearchBar",component:a,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]}}},n={args:{size:"md",placeholder:"Search…"}},o={render:()=>e.jsx(a,{defaultValue:"manfred design",style:{width:"280px"}})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"280px"},children:[e.jsx(a,{size:"sm",placeholder:"Small search"}),e.jsx(a,{size:"md",placeholder:"Medium search"}),e.jsx(a,{size:"lg",placeholder:"Large search"})]})},c={render:()=>e.jsx(a,{disabled:!0,defaultValue:"disabled",style:{width:"280px"}})},d={render:()=>{const[u,t]=y.useState(""),[r,p]=y.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"320px"},children:[e.jsx(a,{value:u,onChange:t,onSearch:p,onClear:()=>t(""),placeholder:"Type and press Enter…",fullWidth:!0}),r&&e.jsxs("span",{style:{fontSize:"12px",color:"var(--color-text-muted)",fontFamily:"var(--font-family-base)"},children:['Last search: "',r,'"']})]})}};var z,T,B;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'md',
    placeholder: 'Search…'
  }
}`,...(B=(T=n.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var q,V,_;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <SearchBar defaultValue="manfred design" style={{
    width: '280px'
  } as React.CSSProperties} />
}`,...(_=(V=o.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var D,W,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '280px'
  }}>
      <SearchBar size="sm" placeholder="Small search" />
      <SearchBar size="md" placeholder="Medium search" />
      <SearchBar size="lg" placeholder="Large search" />
    </div>
}`,...(C=(W=i.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var L,E,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <SearchBar disabled defaultValue="disabled" style={{
    width: '280px'
  } as React.CSSProperties} />
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var N,P,Q;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('');
    const [lastSearch, setLastSearch] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      width: '320px'
    }}>
        <SearchBar value={query} onChange={setQuery} onSearch={setLastSearch} onClear={() => setQuery('')} placeholder="Type and press Enter…" fullWidth />
        {lastSearch && <span style={{
        fontSize: '12px',
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-family-base)'
      }}>
            Last search: "{lastSearch}"
          </span>}
      </div>;
  }
}`,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const ae=["Playground","WithClear","Sizes","Disabled","Controlled"];export{d as Controlled,c as Disabled,n as Playground,i as Sizes,o as WithClear,ae as __namedExportsOrder,ee as default};
