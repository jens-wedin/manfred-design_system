import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i,R as S}from"./iframe-BdJUDR3i.js";import{R as L}from"./index-D44ZF64D.js";import{B as p}from"./Button-Bmyanjs3.js";import"./preload-helper-C1FmrZbK.js";const D="_tooltip_q97w3_1",F="_visible_q97w3_17",V="_hidden_q97w3_22",k="_top_q97w3_27",H="_bottom_q97w3_31",O="_left_q97w3_35",W="_right_q97w3_39",d={tooltip:D,visible:F,hidden:V,top:k,bottom:H,left:O,right:W};function z(e,l,c,s=8){switch(c){case"top":return{top:e.top-l.height-s,left:e.left+e.width/2-l.width/2};case"bottom":return{top:e.bottom+s,left:e.left+e.width/2-l.width/2};case"left":return{top:e.top+e.height/2-l.height/2,left:e.left-l.width-s};case"right":return{top:e.top+e.height/2-l.height/2,left:e.right+s}}}function a({content:e,placement:l="top",delay:c=200,children:s}){const[I,x]=i.useState(!1),[T,M]=i.useState({top:0,left:0}),f=i.useRef(null),v=i.useRef(null),y=i.useRef(null),b=i.useId(),g=i.useCallback(()=>{y.current=setTimeout(()=>{var r;if(f.current){const o=f.current.getBoundingClientRect(),n=((r=v.current)==null?void 0:r.getBoundingClientRect())??{width:120,height:32};M(z(o,n,l)),x(!0)}},c)},[c,l]),_=i.useCallback(()=>{y.current&&clearTimeout(y.current),x(!1)},[]),B=S.cloneElement(s,{ref:f,onMouseEnter:r=>{var o,n;(n=(o=s.props).onMouseEnter)==null||n.call(o,r),g()},onMouseLeave:r=>{var o,n;(n=(o=s.props).onMouseLeave)==null||n.call(o,r),_()},onFocus:r=>{var o,n;(n=(o=s.props).onFocus)==null||n.call(o,r),g()},onBlur:r=>{var o,n;(n=(o=s.props).onBlur)==null||n.call(o,r),_()},"aria-describedby":b});return typeof document>"u"?B:t.jsxs(t.Fragment,{children:[B,L.createPortal(t.jsx("div",{ref:v,id:b,role:"tooltip",className:[d.tooltip,d[l],I?d.visible:d.hidden].filter(Boolean).join(" "),style:{top:T.top,left:T.left},children:e}),document.body)]})}a.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const X={title:"Components/Tooltip",component:a,parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"]},delay:{control:"number"}}},u={render:e=>t.jsx(a,{...e,children:t.jsx(p,{children:"Hover me"})}),args:{content:"This is a tooltip",placement:"top",delay:200}},m={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",padding:"48px"},children:[t.jsx(a,{content:"Appears above",placement:"top",children:t.jsx(p,{children:"Top"})}),t.jsx(a,{content:"Appears below",placement:"bottom",children:t.jsx(p,{children:"Bottom"})}),t.jsx(a,{content:"Appears to the left",placement:"left",children:t.jsx(p,{children:"Left"})}),t.jsx(a,{content:"Appears to the right",placement:"right",children:t.jsx(p,{children:"Right"})})]})},h={render:()=>t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsx(a,{content:"Instant (0ms delay)",delay:0,placement:"top",children:t.jsx(p,{variant:"outline",children:"No delay"})}),t.jsx(a,{content:"500ms delay",delay:500,placement:"top",children:t.jsx(p,{variant:"outline",children:"500ms delay"})})]})};var j,w,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>,
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    delay: 200
  }
}`,...(q=(w=u.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var A,R,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    padding: '48px'
  }}>
      <Tooltip content="Appears above" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Appears below" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Appears to the left" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Appears to the right" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var C,P,N;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Tooltip content="Instant (0ms delay)" delay={0} placement="top">
        <Button variant="outline">No delay</Button>
      </Tooltip>
      <Tooltip content="500ms delay" delay={500} placement="top">
        <Button variant="outline">500ms delay</Button>
      </Tooltip>
    </div>
}`,...(N=(P=h.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const Y=["Playground","AllPlacements","WithDelay"];export{m as AllPlacements,u as Playground,h as WithDelay,Y as __namedExportsOrder,X as default};
