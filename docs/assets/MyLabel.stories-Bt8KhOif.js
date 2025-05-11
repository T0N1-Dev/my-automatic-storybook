import{j as q}from"./jsx-runtime-D_zvdyIk.js";const t=({label:l="No Label",size:S="normal",allCaps:_=!1,color:x="primary",customColor:T})=>q.jsx("span",{className:`label ${S} text-${x}`,style:{color:T},children:_?l.toUpperCase():l});try{t.displayName="MyLabel",t.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"This is the message for the label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of the label: 'normal', 'h1', 'h2', 'h3'",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Optional capital letter",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"What color of font to slect",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},customColor:{defaultValue:null,description:"What custom color of font to use",name:"customColor",required:!1,type:{name:"string"}}}}}catch{}const N={title:"UI/MyLabel",component:t,argTypes:{size:{control:"select"},color:{control:"select"},customColor:{control:"color"}},tags:["autodocs"]},e={args:{label:"Etiqueta básica",size:"normal",allCaps:!1}},a={args:{label:"Capital Text",size:"h1",allCaps:!0}},r={args:{label:"Secundary",size:"h2",color:"secondary"}},o={args:{label:"Tertiary",size:"normal",color:"tertiary"}},s={args:{label:"FontColor",size:"h1",customColor:"#57ff0f"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Etiqueta básica',
    size: 'normal',
    allCaps: false
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Capital Text',
    size: 'h1',
    allCaps: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,y,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secundary',
    size: 'h2',
    color: 'secondary'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,g,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    size: 'normal',
    color: 'tertiary'
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,z,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'FontColor',
    size: 'h1',
    customColor: "#57ff0f"
  }
}`,...(v=(z=s.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const V=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,s as CustomFontColor,r as Secondary,o as Tertiary,V as __namedExportsOrder,N as default};
