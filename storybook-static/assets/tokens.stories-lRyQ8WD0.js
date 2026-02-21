import{j as e}from"./jsx-runtime-BjG_zV1W.js";const h={50:"#eaeafd",100:"#d5d4fb",200:"#aba9f7",300:"#807ef4",400:"#5653f0",500:"#2c28ec",600:"#2320bd",700:"#1a188e",800:"#12105e",900:"#09082f"},x={50:"#f5f5f6",100:"#e8e8ea",200:"#d1d1d4",300:"#ababaf",400:"#7c7c82",500:"#56565c",600:"#3f3f45",700:"#2e2e34",800:"#1e1e24",900:"#111116"},c={pink:"#efd6d3",beige:"#e6dcc8",beigeLight:"#f4f3e8",white:"#ffffff"},S={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem",40:"10rem",48:"12rem",64:"16rem",80:"20rem",96:"24rem"},u={sm:"var(--size-control-sm)",md:"var(--size-control-md)",lg:"var(--size-control-lg)"},d={xs:"var(--size-icon-xs)",sm:"var(--size-icon-sm)",md:"var(--size-icon-md)",lg:"var(--size-icon-lg)",xl:"var(--size-icon-xl)"},y={sm:"var(--size-container-sm)",md:"var(--size-container-md)",lg:"var(--size-container-lg)",xl:"var(--size-container-xl)","2xl":"var(--size-container-2xl)"},$={title:"Foundation/Tokens",parameters:{layout:"padded"}},n={fontFamily:"monospace",fontSize:11,lineHeight:1.4};function l({name:r,value:t,size:s=48,border:o=!1}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("div",{style:{width:s,height:s,borderRadius:6,backgroundColor:t,flexShrink:0,border:o?"1px solid rgba(0,0,0,0.12)":"none"}}),e.jsxs("div",{children:[e.jsx("div",{style:{...n,fontWeight:600},children:r}),e.jsx("div",{style:{...n,color:"#666"},children:t})]})]})}function p({name:r,scale:t}){const s=Object.keys(t);return e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("div",{style:{...n,fontWeight:700,marginBottom:8,fontSize:12},children:r}),e.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:s.map(o=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:52,height:52,borderRadius:6,backgroundColor:t[o],border:Number(o)<100?"1px solid rgba(0,0,0,0.08)":"none"}}),e.jsx("div",{style:{...n,marginTop:4,color:"#888"},children:o})]},o))})]})}function i({title:r,children:t}){return e.jsxs("div",{style:{marginBottom:40},children:[e.jsx("h2",{style:{fontFamily:"monospace",fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#888",borderBottom:"1px solid #e8e8ea",paddingBottom:8,marginBottom:20},children:r}),t]})}function a({cssVar:r,label:t,light:s=!1}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:10},children:[e.jsx("div",{style:{width:36,height:36,borderRadius:4,backgroundColor:r,flexShrink:0,border:s?"1px solid rgba(0,0,0,0.1)":"none"}}),e.jsxs("div",{children:[e.jsx("div",{style:{...n,fontWeight:600,fontSize:12},children:t}),e.jsx("div",{style:{...n,color:"#999",fontSize:11},children:r})]})]})}const b={name:"Brand Palette",render:()=>e.jsx("div",{style:{fontFamily:"sans-serif",maxWidth:480},children:e.jsx(i,{title:"Brand Colors",children:e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(l,{name:"Business Blue",value:h[500]}),e.jsx(l,{name:"Almost Black",value:x[800]}),e.jsx(l,{name:"Human Pink",value:c.pink,border:!0}),e.jsx(l,{name:"Beige",value:c.beige,border:!0}),e.jsx(l,{name:"Light Beige",value:c.beigeLight,border:!0}),e.jsx(l,{name:"White",value:c.white,border:!0})]})})})},m={name:"Color Scales",render:()=>e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:640},children:[e.jsxs(i,{title:"Blue Scale",children:[e.jsx(p,{name:"Blue",scale:h}),e.jsx("div",{style:{display:"grid",gap:8},children:Object.keys(h).map(r=>e.jsx(l,{name:`--blue-${r}`,value:h[r],border:Number(r)<100},r))})]}),e.jsxs(i,{title:"Neutral Scale",children:[e.jsx(p,{name:"Neutral",scale:x}),e.jsx("div",{style:{display:"grid",gap:8},children:Object.keys(x).map(r=>e.jsx(l,{name:`--neutral-${r}`,value:x[r],border:Number(r)<100},r))})]})]})},v={name:"Semantic Tokens",render:()=>e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:480},children:[e.jsxs(i,{title:"Text",children:[e.jsx(a,{cssVar:"var(--color-text-primary)",label:"text-primary"}),e.jsx(a,{cssVar:"var(--color-text-secondary)",label:"text-secondary"}),e.jsx(a,{cssVar:"var(--color-text-muted)",label:"text-muted"}),e.jsx(a,{cssVar:"var(--color-text-disabled)",label:"text-disabled"}),e.jsx(a,{cssVar:"var(--color-text-inverse)",label:"text-inverse",light:!0}),e.jsx(a,{cssVar:"var(--color-text-brand)",label:"text-brand"}),e.jsx(a,{cssVar:"var(--color-text-on-brand)",label:"text-on-brand",light:!0})]}),e.jsxs(i,{title:"Background",children:[e.jsx(a,{cssVar:"var(--color-bg-default)",label:"bg-default",light:!0}),e.jsx(a,{cssVar:"var(--color-bg-subtle)",label:"bg-subtle",light:!0}),e.jsx(a,{cssVar:"var(--color-bg-muted)",label:"bg-muted",light:!0}),e.jsx(a,{cssVar:"var(--color-bg-inverse)",label:"bg-inverse"}),e.jsx(a,{cssVar:"var(--color-bg-brand)",label:"bg-brand"}),e.jsx(a,{cssVar:"var(--color-bg-warm)",label:"bg-warm",light:!0}),e.jsx(a,{cssVar:"var(--color-bg-warm-muted)",label:"bg-warm-muted",light:!0}),e.jsx(a,{cssVar:"var(--color-bg-accent)",label:"bg-accent",light:!0})]}),e.jsxs(i,{title:"Border",children:[e.jsx(a,{cssVar:"var(--color-border-default)",label:"border-default",light:!0}),e.jsx(a,{cssVar:"var(--color-border-strong)",label:"border-strong"}),e.jsx(a,{cssVar:"var(--color-border-brand)",label:"border-brand"}),e.jsx(a,{cssVar:"var(--color-border-focus)",label:"border-focus"})]}),e.jsxs(i,{title:"Interactive — Primary variant",children:[e.jsx(a,{cssVar:"var(--color-interactive-primary-bg)",label:"primary-bg"}),e.jsx(a,{cssVar:"var(--color-interactive-primary-bg-hover)",label:"primary-bg-hover"}),e.jsx(a,{cssVar:"var(--color-interactive-primary-bg-active)",label:"primary-bg-active"}),e.jsx(a,{cssVar:"var(--color-interactive-primary-fg)",label:"primary-fg",light:!0})]}),e.jsxs(i,{title:"Interactive — Brand variant",children:[e.jsx(a,{cssVar:"var(--color-interactive-brand-bg)",label:"brand-bg"}),e.jsx(a,{cssVar:"var(--color-interactive-brand-bg-hover)",label:"brand-bg-hover"}),e.jsx(a,{cssVar:"var(--color-interactive-brand-bg-active)",label:"brand-bg-active"}),e.jsx(a,{cssVar:"var(--color-interactive-brand-fg)",label:"brand-fg",light:!0})]}),e.jsxs(i,{title:"Interactive — Outline variant",children:[e.jsx(a,{cssVar:"var(--color-interactive-outline-border)",label:"outline-border"}),e.jsx(a,{cssVar:"var(--color-interactive-outline-border-hover)",label:"outline-border-hover"}),e.jsx(a,{cssVar:"var(--color-interactive-outline-bg-hover)",label:"outline-bg-hover",light:!0})]}),e.jsx(i,{title:"Interactive — Ghost variant",children:e.jsx(a,{cssVar:"var(--color-interactive-ghost-bg-hover)",label:"ghost-bg-hover",light:!0})})]})};function T({name:r,value:t}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[e.jsx("div",{style:{width:t,maxWidth:"100%",height:24,borderRadius:4,backgroundColor:"#2c28ec",flexShrink:0,minWidth:4}}),e.jsxs("div",{style:{...n,whiteSpace:"nowrap"},children:[e.jsx("span",{style:{fontWeight:600},children:r}),e.jsx("span",{style:{color:"#888",marginLeft:8},children:t})]})]})}function F({name:r,value:t}){return e.jsxs("div",{style:{marginBottom:10},children:[e.jsxs("div",{style:{...n,fontWeight:600,marginBottom:4},children:[r," ",e.jsx("span",{style:{color:"#888",fontWeight:400},children:t})]}),e.jsx("div",{style:{width:t,maxWidth:"100%",height:20,borderRadius:4,backgroundColor:"#eaeafd",border:"1.5px solid #2c28ec"}})]})}const g={name:"Sizing",render:()=>e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:640},children:[e.jsx(i,{title:"Primitive Size Scale",children:Object.keys(S).map(r=>e.jsx(T,{name:`--size-${r}`,value:S[r]},r))}),e.jsx(i,{title:"Component Heights",children:Object.keys(u).map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[e.jsx("div",{style:{width:120,height:u[r],borderRadius:4,backgroundColor:"#2c28ec",flexShrink:0}}),e.jsxs("div",{style:n,children:[e.jsx("span",{style:{fontWeight:600},children:`--size-control-${r}`}),e.jsx("span",{style:{color:"#888",marginLeft:8},children:u[r]})]})]},r))}),e.jsx(i,{title:"Icon Sizes",children:e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-end"},children:Object.keys(d).map(r=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:d[r],height:d[r],borderRadius:4,backgroundColor:"#2c28ec",margin:"0 auto"}}),e.jsx("div",{style:{...n,marginTop:6,color:"#888"},children:r}),e.jsx("div",{style:{...n,color:"#bbb"},children:d[r]})]},r))})}),e.jsx(i,{title:"Container Max-widths",children:Object.keys(y).map(r=>e.jsx(F,{name:`--size-container-${r}`,value:y[r]},r))})]})};var f,j,w;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Brand Palette',
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 480
  }}>
      <Section title="Brand Colors">
        <div style={{
        display: 'grid',
        gap: 12
      }}>
          <SwatchRow name="Business Blue" value={blue[500]} />
          <SwatchRow name="Almost Black" value={neutral[800]} />
          <SwatchRow name="Human Pink" value={warm.pink} border />
          <SwatchRow name="Beige" value={warm.beige} border />
          <SwatchRow name="Light Beige" value={warm.beigeLight} border />
          <SwatchRow name="White" value={warm.white} border />
        </div>
      </Section>
    </div>
}`,...(w=(j=b.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,V,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Color Scales',
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 640
  }}>
      <Section title="Blue Scale">
        <ScaleRow name="Blue" scale={blue} />
        <div style={{
        display: 'grid',
        gap: 8
      }}>
          {(Object.keys(blue) as unknown as (keyof typeof blue)[]).map(step => <SwatchRow key={step} name={\`--blue-\${step}\`} value={blue[step]} border={Number(step) < 100} />)}
        </div>
      </Section>

      <Section title="Neutral Scale">
        <ScaleRow name="Neutral" scale={neutral} />
        <div style={{
        display: 'grid',
        gap: 8
      }}>
          {(Object.keys(neutral) as unknown as (keyof typeof neutral)[]).map(step => <SwatchRow key={step} name={\`--neutral-\${step}\`} value={neutral[step]} border={Number(step) < 100} />)}
        </div>
      </Section>
    </div>
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,W,R;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Semantic Tokens',
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 480
  }}>

      <Section title="Text">
        <SemanticSwatch cssVar="var(--color-text-primary)" label="text-primary" />
        <SemanticSwatch cssVar="var(--color-text-secondary)" label="text-secondary" />
        <SemanticSwatch cssVar="var(--color-text-muted)" label="text-muted" />
        <SemanticSwatch cssVar="var(--color-text-disabled)" label="text-disabled" />
        <SemanticSwatch cssVar="var(--color-text-inverse)" label="text-inverse" light />
        <SemanticSwatch cssVar="var(--color-text-brand)" label="text-brand" />
        <SemanticSwatch cssVar="var(--color-text-on-brand)" label="text-on-brand" light />
      </Section>

      <Section title="Background">
        <SemanticSwatch cssVar="var(--color-bg-default)" label="bg-default" light />
        <SemanticSwatch cssVar="var(--color-bg-subtle)" label="bg-subtle" light />
        <SemanticSwatch cssVar="var(--color-bg-muted)" label="bg-muted" light />
        <SemanticSwatch cssVar="var(--color-bg-inverse)" label="bg-inverse" />
        <SemanticSwatch cssVar="var(--color-bg-brand)" label="bg-brand" />
        <SemanticSwatch cssVar="var(--color-bg-warm)" label="bg-warm" light />
        <SemanticSwatch cssVar="var(--color-bg-warm-muted)" label="bg-warm-muted" light />
        <SemanticSwatch cssVar="var(--color-bg-accent)" label="bg-accent" light />
      </Section>

      <Section title="Border">
        <SemanticSwatch cssVar="var(--color-border-default)" label="border-default" light />
        <SemanticSwatch cssVar="var(--color-border-strong)" label="border-strong" />
        <SemanticSwatch cssVar="var(--color-border-brand)" label="border-brand" />
        <SemanticSwatch cssVar="var(--color-border-focus)" label="border-focus" />
      </Section>

      <Section title="Interactive — Primary variant">
        <SemanticSwatch cssVar="var(--color-interactive-primary-bg)" label="primary-bg" />
        <SemanticSwatch cssVar="var(--color-interactive-primary-bg-hover)" label="primary-bg-hover" />
        <SemanticSwatch cssVar="var(--color-interactive-primary-bg-active)" label="primary-bg-active" />
        <SemanticSwatch cssVar="var(--color-interactive-primary-fg)" label="primary-fg" light />
      </Section>

      <Section title="Interactive — Brand variant">
        <SemanticSwatch cssVar="var(--color-interactive-brand-bg)" label="brand-bg" />
        <SemanticSwatch cssVar="var(--color-interactive-brand-bg-hover)" label="brand-bg-hover" />
        <SemanticSwatch cssVar="var(--color-interactive-brand-bg-active)" label="brand-bg-active" />
        <SemanticSwatch cssVar="var(--color-interactive-brand-fg)" label="brand-fg" light />
      </Section>

      <Section title="Interactive — Outline variant">
        <SemanticSwatch cssVar="var(--color-interactive-outline-border)" label="outline-border" />
        <SemanticSwatch cssVar="var(--color-interactive-outline-border-hover)" label="outline-border-hover" />
        <SemanticSwatch cssVar="var(--color-interactive-outline-bg-hover)" label="outline-bg-hover" light />
      </Section>

      <Section title="Interactive — Ghost variant">
        <SemanticSwatch cssVar="var(--color-interactive-ghost-bg-hover)" label="ghost-bg-hover" light />
      </Section>

    </div>
}`,...(R=(W=v.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var C,I,O;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Sizing',
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 640
  }}>

      <Section title="Primitive Size Scale">
        {(Object.keys(size) as unknown as (keyof typeof size)[]).map(step => <SizeBar key={step} name={\`--size-\${step}\`} value={size[step]} />)}
      </Section>

      <Section title="Component Heights">
        {(Object.keys(controlSize) as (keyof typeof controlSize)[]).map(key => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8
      }}>
            <div style={{
          width: 120,
          height: controlSize[key],
          borderRadius: 4,
          backgroundColor: '#2c28ec',
          flexShrink: 0
        }} />
            <div style={label}>
              <span style={{
            fontWeight: 600
          }}>{\`--size-control-\${key}\`}</span>
              <span style={{
            color: '#888',
            marginLeft: 8
          }}>{controlSize[key]}</span>
            </div>
          </div>)}
      </Section>

      <Section title="Icon Sizes">
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
        alignItems: 'flex-end'
      }}>
          {(Object.keys(iconSize) as (keyof typeof iconSize)[]).map(key => <div key={key} style={{
          textAlign: 'center'
        }}>
              <div style={{
            width: iconSize[key],
            height: iconSize[key],
            borderRadius: 4,
            backgroundColor: '#2c28ec',
            margin: '0 auto'
          }} />
              <div style={{
            ...label,
            marginTop: 6,
            color: '#888'
          }}>{key}</div>
              <div style={{
            ...label,
            color: '#bbb'
          }}>{iconSize[key]}</div>
            </div>)}
        </div>
      </Section>

      <Section title="Container Max-widths">
        {(Object.keys(containerSize) as (keyof typeof containerSize)[]).map(key => <ContainerBar key={key} name={\`--size-container-\${key}\`} value={containerSize[key]} />)}
      </Section>

    </div>
}`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const N=["BrandPalette","ColorScales","SemanticTokens","SizingTokens"];export{b as BrandPalette,m as ColorScales,v as SemanticTokens,g as SizingTokens,N as __namedExportsOrder,$ as default};
