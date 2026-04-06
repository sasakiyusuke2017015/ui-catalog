import{j as r}from"./iframe-D9uhVg1b.js";const m=[{position:"top-0 left-1/4",size:"w-96 h-96",gradient:"from-purple-400/10 to-pink-400/15",blur:"blur-3xl"},{position:"bottom-0 right-1/4",size:"w-80 h-80",gradient:"from-blue-400/12 to-cyan-400/20",blur:"blur-3xl",animationDelay:"2s"},{position:"top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",size:"w-72 h-72",gradient:"from-indigo-400/8 to-violet-400/15",blur:"blur-2xl",animationDelay:"1s"},{position:"top-1/4 right-1/3",size:"w-64 h-64",gradient:"from-rose-400/10 to-orange-400/12",blur:"blur-2xl",animationDelay:"3s"},{position:"bottom-1/3 left-1/6",size:"w-88 h-88",gradient:"from-teal-400/8 to-emerald-400/15",blur:"blur-2xl",animationDelay:"1.5s"}],a=({src:n,opacity:t=60,position:i="center",size:o="cover",repeat:l="no-repeat",showFloatingElements:s=!1,floatingElements:u=m})=>r.jsxs("div",{"data-component":"background-image",children:[r.jsx("div",{className:`absolute inset-0 opacity-${t}`,style:{backgroundImage:`url(${n})`,backgroundSize:o,backgroundPosition:i,backgroundRepeat:l}}),s&&u.map((e,d)=>r.jsx("div",{className:`absolute ${e.position} ${e.size} bg-gradient-to-r ${e.gradient} rounded-full ${e.blur} animate-pulse`,style:e.animationDelay?{animationDelay:e.animationDelay}:void 0},d))]});try{a.displayName="BackgroundImage",a.__docgenInfo={description:"",displayName:"BackgroundImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},opacity:{defaultValue:{value:"60"},description:"",name:"opacity",required:!1,type:{name:"number"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"string"}},size:{defaultValue:{value:"cover"},description:"",name:"size",required:!1,type:{name:"string"}},repeat:{defaultValue:{value:"no-repeat"},description:"",name:"repeat",required:!1,type:{name:"string"}},showFloatingElements:{defaultValue:{value:"false"},description:"",name:"showFloatingElements",required:!1,type:{name:"boolean"}},floatingElements:{defaultValue:{value:`[\r
  {\r
    position: 'top-0 left-1/4',\r
    size: 'w-96 h-96',\r
    gradient: 'from-purple-400/10 to-pink-400/15',\r
    blur: 'blur-3xl',\r
  },\r
  {\r
    position: 'bottom-0 right-1/4',\r
    size: 'w-80 h-80',\r
    gradient: 'from-blue-400/12 to-cyan-400/20',\r
    blur: 'blur-3xl',\r
    animationDelay: '2s',\r
  },\r
  {\r
    position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',\r
    size: 'w-72 h-72',\r
    gradient: 'from-indigo-400/8 to-violet-400/15',\r
    blur: 'blur-2xl',\r
    animationDelay: '1s',\r
  },\r
  {\r
    position: 'top-1/4 right-1/3',\r
    size: 'w-64 h-64',\r
    gradient: 'from-rose-400/10 to-orange-400/12',\r
    blur: 'blur-2xl',\r
    animationDelay: '3s',\r
  },\r
  {\r
    position: 'bottom-1/3 left-1/6',\r
    size: 'w-88 h-88',\r
    gradient: 'from-teal-400/8 to-emerald-400/15',\r
    blur: 'blur-2xl',\r
    animationDelay: '1.5s',\r
  },\r
]`},description:"",name:"floatingElements",required:!1,type:{name:"FloatingElement[]"}}}}}catch{}export{a as B};
