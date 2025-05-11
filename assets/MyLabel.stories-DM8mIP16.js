import{j as N}from"./jsx-runtime-D_zvdyIk.js";const n=({label:t="No Label",size:x="normal",allCaps:T=!1,color:B="primary",customColor:L,backgroundColor:V="transparent"})=>N.jsx("span",{className:`label ${x} text-${B}`,style:{color:L,backgroundColor:V},children:T?t.toUpperCase():t});try{n.displayName="MyLabel",n.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"This is the message for the label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size of the label: 'normal', 'h1', 'h2', 'h3'",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Optional capital letter",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"What color of font to slect",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},customColor:{defaultValue:null,description:"What custom color of font to use",name:"customColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"What custom color of the background",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}const F={title:"UI/MyLabel",component:n,argTypes:{size:{control:"select"},color:{control:"select"},customColor:{control:"color"}},tags:["autodocs"]},e={args:{label:"Etiqueta básica",size:"normal",allCaps:!1}},a={args:{label:"Capital Text",size:"h1",allCaps:!0}},r={args:{label:"Secundary",size:"h2",color:"secondary"}},o={args:{label:"Tertiary",size:"normal",color:"tertiary"}},s={args:{label:"FontColor",size:"h1",customColor:"#57ff0f"}},l={args:{label:"BackgroundColor",size:"h1",backgroundColor:"black"}};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Etiqueta básica',
    size: 'normal',
    allCaps: false
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Capital Text',
    size: 'h1',
    allCaps: true
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,y,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Secundary',
    size: 'h2',
    color: 'secondary'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,C,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    size: 'normal',
    color: 'tertiary'
  }
}`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var z,v,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'FontColor',
    size: 'h1',
    customColor: "#57ff0f"
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,_,q;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'BackgroundColor',
    size: 'h1',
    backgroundColor: "black"
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const M=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,l as CustomBackgroundColor,s as CustomFontColor,r as Secondary,o as Tertiary,M as __namedExportsOrder,F as default};
