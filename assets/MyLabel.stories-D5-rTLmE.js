import{j}from"./jsx-runtime-D_zvdyIk.js";const n=({label:c="No Label",size:L="normal",allCaps:V=!1,color:N="primary",customColor:E,backgroundColor:M="transparent"})=>j.jsx("span",{className:`label ${L} text-${N}`,style:{color:E,backgroundColor:M},children:V?c.toUpperCase():c});try{n.displayName="MyLabel",n.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"This is the message for the label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of the label: 'normal', 'h1', 'h2', 'h3'",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Optional capital letter",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"What color of font to slect",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},customColor:{defaultValue:null,description:"What custom color of font to use",name:"customColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"What custom color of the background",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const A={title:"UI/MyLabel",component:n,argTypes:{size:{control:"select"},color:{control:"select"},customColor:{control:"color"}},tags:["autodocs"]},e={args:{label:"Etiqueta básica",size:"normal",allCaps:!1}},a={args:{label:"Capital Text",size:"h1",allCaps:!0}},r={args:{label:"Secundary",size:"h2",color:"secondary"}},o={args:{label:"Tertiary",size:"normal",color:"tertiary"}},s={args:{label:"FontColor",size:"h1",customColor:"#57ff0f"}},l={args:{label:"FontColorTest",size:"h1",customColor:"#09f"}},t={args:{label:"BackgroundColor",size:"h1",backgroundColor:"black"}};var u,i,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Etiqueta básica',
    size: 'normal',
    allCaps: false
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,C;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Capital Text',
    size: 'h1',
    allCaps: true
  }
}`,...(C=(d=a.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var g,b,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Secundary',
    size: 'h2',
    color: 'secondary'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,z;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    size: 'normal',
    color: 'tertiary'
  }
}`,...(z=(h=o.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var v,S,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'FontColor',
    size: 'h1',
    customColor: "#57ff0f"
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var k,_,q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'FontColorTest',
    size: 'h1',
    customColor: "#09f"
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var x,F,B;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'BackgroundColor',
    size: 'h1',
    backgroundColor: "black"
  }
}`,...(B=(F=t.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const I=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor","CustomFontColorTest","CustomBackgroundColor"];export{a as AllCaps,e as Basic,t as CustomBackgroundColor,s as CustomFontColor,l as CustomFontColorTest,r as Secondary,o as Tertiary,I as __namedExportsOrder,A as default};
