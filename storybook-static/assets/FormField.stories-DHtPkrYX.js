import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as D}from"./Icon-Cg_6evgg.js";import{T as s}from"./TextInput-BWJ-gX7a.js";const J="_root_thv6h_1",U="_label_thv6h_7",M="_required_thv6h_15",A="_message_thv6h_20",B="_hint_thv6h_29",H="_error_thv6h_33",z="_success_thv6h_37",a={root:J,label:U,required:M,message:A,hint:B,error:H,success:z},C={error:"alert-circle",success:"check-circle",hint:"info"};function r({label:P,htmlFor:S,status:l="default",message:m,required:V=!1,children:k,className:R}){const c=l!=="default"?C[l]:void 0;return e.jsxs("div",{className:[a.root,R].filter(Boolean).join(" "),children:[e.jsxs("label",{className:a.label,htmlFor:S,children:[P,V&&e.jsx("span",{className:a.required,"aria-hidden":"true",children:"*"})]}),k,m&&e.jsxs("span",{className:[a.message,l!=="default"?a[l]:a.hint].filter(Boolean).join(" "),children:[c&&e.jsx(D,{name:c,size:"xs"}),m]})]})}r.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"string"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success' | 'hint'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'hint'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},message:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Components/FormField",component:r,parameters:{layout:"centered"}},t={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{label:"Email address",htmlFor:"email-play",children:e.jsx(s,{id:"email-play",placeholder:"you@example.com",fullWidth:!0})})})},i={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{label:"Email address",htmlFor:"email-error",status:"error",message:"Please enter a valid email address.",children:e.jsx(s,{id:"email-error",defaultValue:"notanemail",status:"error",fullWidth:!0})})})},d={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{label:"Username",htmlFor:"username-ok",status:"success",message:"Username is available!",children:e.jsx(s,{id:"username-ok",defaultValue:"jens_wedin",status:"success",fullWidth:!0})})})},o={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{label:"Password",htmlFor:"password-hint",status:"hint",message:"Must be at least 8 characters with a number.",children:e.jsx(s,{id:"password-hint",type:"password",placeholder:"Enter password",fullWidth:!0})})})},n={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{label:"Full name",htmlFor:"fullname",required:!0,children:e.jsx(s,{id:"fullname",placeholder:"Jane Doe",fullWidth:!0})})})},u={render:()=>e.jsxs("div",{style:{width:"360px",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(r,{label:"Full name",htmlFor:"ff-name",required:!0,children:e.jsx(s,{id:"ff-name",placeholder:"Jane Doe",fullWidth:!0})}),e.jsx(r,{label:"Email",htmlFor:"ff-email",required:!0,status:"error",message:"This email is already in use.",children:e.jsx(s,{id:"ff-email",defaultValue:"jane@taken.com",status:"error",fullWidth:!0})}),e.jsx(r,{label:"Password",htmlFor:"ff-pw",status:"hint",message:"At least 8 characters with a number.",children:e.jsx(s,{id:"ff-pw",type:"password",placeholder:"••••••••",fullWidth:!0})})]})};var h,p,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Email address" htmlFor="email-play">
        <TextInput id="email-play" placeholder="you@example.com" fullWidth />
      </FormField>
    </div>
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var F,x,w;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Email address" htmlFor="email-error" status="error" message="Please enter a valid email address.">
        <TextInput id="email-error" defaultValue="notanemail" status="error" fullWidth />
      </FormField>
    </div>
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,v,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Username" htmlFor="username-ok" status="success" message="Username is available!">
        <TextInput id="username-ok" defaultValue="jens_wedin" status="success" fullWidth />
      </FormField>
    </div>
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var b,g,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Password" htmlFor="password-hint" status="hint" message="Must be at least 8 characters with a number.">
        <TextInput id="password-hint" type="password" placeholder="Enter password" fullWidth />
      </FormField>
    </div>
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var W,q,T;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Full name" htmlFor="fullname" required>
        <TextInput id="fullname" placeholder="Jane Doe" fullWidth />
      </FormField>
    </div>
}`,...(T=(q=n.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var I,E,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '360px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <FormField label="Full name" htmlFor="ff-name" required>
        <TextInput id="ff-name" placeholder="Jane Doe" fullWidth />
      </FormField>
      <FormField label="Email" htmlFor="ff-email" required status="error" message="This email is already in use.">
        <TextInput id="ff-email" defaultValue="jane@taken.com" status="error" fullWidth />
      </FormField>
      <FormField label="Password" htmlFor="ff-pw" status="hint" message="At least 8 characters with a number.">
        <TextInput id="ff-pw" type="password" placeholder="••••••••" fullWidth />
      </FormField>
    </div>
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const Q=["Playground","WithError","WithSuccess","WithHint","Required","FullForm"];export{u as FullForm,t as Playground,n as Required,i as WithError,o as WithHint,d as WithSuccess,Q as __namedExportsOrder,L as default};
