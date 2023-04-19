import{_ as D,u as b,o as C,c as y,a as l,r as w,n as v,b as h,C as F,d as _,e as u,w as c,f as B,v as N,F as E,g as J,h as p,t as m,i as O}from"./vendor.2c7a087c.js";const U=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}};U();const x={name:"DragCol",props:{draggerRightClasses:{default:void 0},draggerLeftClasses:{default:void 0},sliderClasses:{default:void 0},leftPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{left:this.leftPercent,isDragging:!1}},methods:{mobileDragCol(e){e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientX,s=this.left,a=0,i=0;const t=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.changedTouches[0].clientX;const f=parseFloat(((n-a)/t*100).toFixed(3));i=s-f,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.ontouchmove=null,document.ontouchend=null}},dragCol(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientX,s=this.left,a=0,i=0;const t=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.preventDefault(),g.stopPropagation(),a=g.clientX;const f=parseFloat(((n-a)/t*100).toFixed(3));i=s-f,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},k=()=>{b(e=>({"970d4cf2":e.sliderBgColor,"6cf2390c":e.sliderColor,"0bb71904":e.sliderHoverColor,"8815303a":e.sliderBgHoverColor}))},T=x.setup;x.setup=T?(e,n)=>(k(),T(e,n)):k;const G=x;function Z(e,n,s,a,i,t){return C(),y("div",{class:"drager_col",ref:"container",style:h({width:s.width,height:s.height})},[l("div",{class:v(["drager_left",s.draggerLeftClasses]),style:h({width:i.left+"%"})},[l("div",null,[w(e.$slots,"left")])],6),l("div",{class:v(["slider_col",s.sliderClasses]),onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileDragCol&&t.mobileDragCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.dragCol&&t.dragCol(...o)),style:h({width:s.sliderWidth+"px",marginLeft:-s.sliderWidth/2+"px",marginRight:-s.sliderWidth/2+"px"})},null,38),l("div",{class:v(["drager_right",s.draggerRightClasses]),style:h({width:100-i.left+"%"})},[l("div",null,[w(e.$slots,"right")])],6)],4)}var q=D(G,[["render",Z]]);const z={name:"DragRow",props:{draggerTopClasses:{default:void 0},draggerBottomClasses:{default:void 0},sliderClasses:{default:void 0},topPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{top:this.topPercent,isDragging:!1}},methods:{mobileDragRow(e){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientY,s=this.top,a=0,i=0;const t=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.changedTouches[0].clientY;const f=parseFloat(((n-a)/t*100).toFixed(3));i=s-f,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},dragRow(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientY,s=this.top,a=0,i=0;const t=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.clientY;const f=parseFloat(((n-a)/t*100).toFixed(3));i=s-f,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},I=()=>{b(e=>({"0d624bca":e.sliderBgColor,"2e2e3fe2":e.sliderColor,f346934a:e.sliderHoverColor,"1b286780":e.sliderBgHoverColor}))},A=z.setup;z.setup=A?(e,n)=>(I(),A(e,n)):I;const K=z;function $(e,n,s,a,i,t){return C(),y("div",{class:"drager_row",ref:"container",style:h({width:s.width,height:s.height})},[l("div",{class:v(["drager_top",s.draggerTopClasses]),style:h({height:i.top+"%"})},[l("div",null,[w(e.$slots,"top")])],6),l("div",{class:v(["slider_row",s.sliderClasses]),onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileDragRow&&t.mobileDragRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.dragRow&&t.dragRow(...o)),style:h({height:s.sliderWidth+"px",marginTop:-s.sliderWidth/2+"px",marginBottom:-s.sliderWidth/2+"px"})},null,38),l("div",{class:v(["drager_bottom",s.draggerBottomClasses]),style:h({height:100-i.top+"%"})},[l("div",null,[w(e.$slots,"bottom")])],6)],4)}var Q=D(K,[["render",$]]);const P={name:"ResizeCol",props:{sliderWidth:{type:Number,default:20},width:{type:Number,default:400},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,isDragging:!1}},methods:{mobileResizeCol(e){e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientX,s=this.reWidth,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientX;const g=n-a;i=parseInt(s-g),i<=20?t.reWidth=20:t.reWidth=i,t.$emit("dragging",t.reWidth)}function d(){t.isDragging=!1,t.$emit("isDragging",t.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientX,s=this.reWidth,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientX;const g=n-a;i=parseInt(s-g),i<=20?t.reWidth=20:t.reWidth=i,t.$emit("dragging",t.reWidth)}function d(){t.isDragging=!1,t.$emit("isDragging",t.isDragging),document.onmouseup=null,document.onmousemove=null}}}},L=()=>{b(e=>({b59cf3d4:e.sliderBgColor,"679a3d5b":e.sliderColor,"7aa46ee2":e.sliderHoverColor,f1048698:e.sliderBgHoverColor}))},Y=P.setup;P.setup=Y?(e,n)=>(L(),Y(e,n)):L;const ee=P,te={class:"resize_col_body"};function ie(e,n,s,a,i,t){return C(),y("div",{class:"resize_col",style:h({width:i.reWidth+"px",height:s.height})},[l("div",te,[w(e.$slots,"default")]),l("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileResizeCol&&t.mobileResizeCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.resizeCol&&t.resizeCol(...o)),style:h({width:s.sliderWidth+"px"})},null,36)],4)}var oe=D(ee,[["render",ie]]);const S={name:"ResizeRow",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(e){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientY,s=this.reHeight,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientY;const g=n-a;i=parseInt(s-g),i<=20?t.reHeight=20:t.reHeight=i,t.$emit("dragging",t.reHeight)}function d(){t.isDragging=!1,t.$emit("isDragging",t.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientY,s=this.reHeight,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientY;const g=n-a;i=parseInt(s-g),i<=20?t.reHeight=20:t.reHeight=i,t.$emit("dragging",t.reHeight)}function d(){t.isDragging=!1,t.$emit("isDragging",t.isDragging),document.onmouseup=null,document.onmousemove=null}}}},j=()=>{b(e=>({ce725056:e.sliderBgColor,b8f21a4c:e.sliderColor,"5fbcab20":e.sliderHoverColor,"0780aa55":e.sliderBgHoverColor}))},V=S.setup;S.setup=V?(e,n)=>(j(),V(e,n)):j;const ne=S,le={class:"resize_row_body"};function re(e,n,s,a,i,t){return C(),y("div",{class:"resize_row",style:h({height:i.reHeight+"px",width:s.width})},[l("div",le,[w(e.$slots,"default")]),l("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileResizeRow&&t.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.resizeRow&&t.resizeRow(...o)),style:h({height:s.sliderWidth+"px"})},null,36)],4)}var se=D(ne,[["render",re]]);const H={name:"Resize",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:Number,default:400},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(e){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientY,s=this.reHeight,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientY;const g=n-a;i=parseInt(s-g),i<=20?t.reHeight=20:t.reHeight=i,t.$emit("draggingRow",t.reHeight)}function d(){t.isDragging=!1,t.$emit("isDraggingRow",t.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientY,s=this.reHeight,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientY;const g=n-a;i=parseInt(s-g),i<=20?t.reHeight=20:t.reHeight=i,t.$emit("draggingRow",t.reHeight)}function d(){t.isDragging=!1,t.$emit("isDraggingRow",t.isDragging),document.onmouseup=null,document.onmousemove=null}},mobileResizeCol(e){e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientX,s=this.reWidth,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientX;const g=n-a;i=parseInt(s-g),i<=20?t.reWidth=20:t.reWidth=i,t.$emit("draggingCol",t.reWidth)}function d(){t.isDragging=!1,t.$emit("isDraggingCol",t.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientX,s=this.reWidth,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientX;const g=n-a;i=parseInt(s-g),i<=20?t.reWidth=20:t.reWidth=i,t.$emit("draggingCol",t.reWidth)}function d(){t.isDragging=!1,t.$emit("isDraggingCol",t.isDragging),document.onmouseup=null,document.onmousemove=null}}}},M=()=>{b(e=>({"1ecdb564":e.sliderBgColor,"2d142fae":e.sliderColor,addaa2fe:e.sliderHoverColor,"6840ee26":e.sliderBgHoverColor}))},X=H.setup;H.setup=X?(e,n)=>(M(),X(e,n)):M;const ae=H,ge={class:"resize_body"};function de(e,n,s,a,i,t){return C(),y("div",{class:"resize",style:h({height:i.reHeight+"px",width:i.reWidth+"px"})},[l("div",ge,[w(e.$slots,"default")]),l("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileResizeRow&&t.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.resizeRow&&t.resizeRow(...o)),style:h({height:s.sliderWidth+"px"})},null,36),l("div",{class:"slider_col",onTouchstartPassive:n[2]||(n[2]=(...o)=>t.mobileResizeCol&&t.mobileResizeCol(...o)),onMousedown:n[3]||(n[3]=(...o)=>t.resizeCol&&t.resizeCol(...o)),style:h({width:s.sliderWidth+"px"})},null,36)],4)}var ue=D(ae,[["render",de]]);const he={components:{DragCol:q,DragRow:Q,ResizeCol:oe,ResizeRow:se,Resize:ue,CodeEditor:F},data(){return{enableAdditionalDragColClasses:!1,enableAdditionalDragRowClasses:!1,example:`import {
  DragCol,
  DragRow,
  ResizeCol,
  ResizeRow,
  Resize,
} from "vue-resizer";`,example_1:`<!-- Usage -->
<DragCol>
  <template #left>
    <!-- your content -->
  </template>
  <template #right>
    <!-- your content -->
  </template>
</DragCol>
`,example_1_1:`// Props
props: {
  // Additional classes that will be attached to matching elements
  draggerRightClasses: {
    default: undefined
  },
  draggerLeftClasses: {
    default: undefined
  },
  sliderClasses: {
    default: undefined
  },
  // width percentage of the left part
  // units: %
  leftPercent: { 
    type: Number,
    default: 50,
  },
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // width of the container
  // units: any
  width: {
    type: String,
    default: "400px",
  },
  // height of the container
  // units: any
  height: {
    type: String,
    default: "400px",
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}
`,example_2:`<DragRow>
  <template #top>
    <!-- your content -->
  </template>
  <template #bottom>
    <!-- your content -->
  </template>
</DragRow>`,example_2_1:`props: {
  // height percentage of the top part
  // units: %
  topPercent: {
    type: Number,
    default: 50,
  },
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // width of the container
  // units: any
  width: {
    type: String,
    default: "400px",
  },
  // height of the container
  // units: any
  height: {
    type: String,
    default: "400px",
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}`,example_3:`<ResizeCol>
    <!-- your content -->
</ResizeCol>`,example_3_1:`props: {
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // width of the container
  // units: px
  width: {
    type: Number,
    default: 400,
  },
  // height of the container
  // units: any
  height: {
    type: String,
    default: "400px",
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}`,example_4:`<ResizeRow>
    <!-- your content -->
</ResizeRow>`,example_4_1:`props: {
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // height of the container
  // units: px
  height: {
    type: Number,
    default: 400,
  },
  // width of the container
  // units: any
  width: {
    type: String,
    default: "400px",
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}`,example_5:`<Resize>
    <!-- your content -->
</Resize>`,example_5_1:`props: {
  // width of the slider
  // units: px
  sliderWidth: {
    type: Number,
    default: 20,
  },
  // height of the container
  // units: px
  height: {
    type: Number,
    default: 400,
  },
  // width of the container
  // units: px
  width: {
    type: Number,
    default: 400,
  },
  // color of the slider
  sliderColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider
  sliderBgColor: {
    type: String,
    default: "#1f2e3a",
  },
  // color of the slider on hover
  sliderHoverColor: {
    type: String,
    default: "#6f808d",
  },
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
},`,example_6:`<Resize>
  <DragRow height="100%" width="100%">
    <template #top>
      <DragCol height="100%" width="100%" :leftPercent="30">
        <template #left>
          <!-- your content -->
        </template>
        <template #right>
          <!-- your content -->
        </template>
      </DragCol>
    </template>
    <template #bottom>
      <DragCol height="100%" width="100%" :leftPercent="70">
        <template #left>
          <!-- your content -->
        </template>
        <template #right>
          <!-- your content -->
        </template>
      </DragCol>
    </template>
  </DragRow>
</Resize>`,install:"npm install vue-resizer",data_1:"50%",data_1_1:"50%",data_2:"50%",data_2_1:"50%",data_3:"320px",data_4:"400px",data_5_1:"320px",data_5_2:"400px",example_7:`<!-- Open the Console of the browser and drag any slider in the above examples, you will see the real-time states -->

<DragCol
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the percentage of the left part 
-->
<DragRow
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the percentage of the top part
-->
<ResizeCol
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the width of the container
-->
<ResizeRow
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the height of the container
-->
<Resize
  @isDraggingRow="func"
  @isDraggingCol="func"
  @draggingRow="func"
  @draggingCol="func"
/>
<!-- 
@isDraggingRow will be activated while you start or stop vertical dragging, it will pass a boolean parameter which is the state of vertical dragging

@isDraggingCol will be activated while you start or stop horizontal dragging, it will pass a boolean parameter which is the state of horizontal dragging

@draggingRow will be activated while you keep vertical dragging, it will pass a number parameter which is the height of the container

@draggingCol will be activated while you keep horizontal dragging, it will pass a number parameter which is the width of the container
-->`}},computed:{data_5(){return`${this.data_5_1} * ${this.data_5_2}`}},methods:{draggingCol(e){const n=parseInt(e);this.data_1=n+"%",this.data_1_1=100-n+"%"},draggingRow(e){const n=parseInt(e);this.data_2=n+"%",this.data_2_1=100-n+"%"},resizingCol(e){this.data_3=e+"px"},resizingRow(e){this.data_4=e+"px"},resizingC(e){this.data_5_1=e+"px"},resizingR(e){this.data_5_2=e+"px"},isDragging(e){console.log("Dragging: "+e)}}},ce=J('<a target="_blank" href="https://github.com/justcaliturner/vue-resizer"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#61aeee;color:#fff;position:absolute;top:0;border:0;right:0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>',1),fe={class:"container"},pe=l("h1",null,"Vue Resizer",-1),me=l("p",null,"A series of the resizer components for Vue.js",-1),we=l("br",null,null,-1),_e=l("a",{href:"https://github.com/justcaliturner/vue-resizer",target:"_blank",class:"link"},[l("span",null,"View on Github"),l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[l("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l("polyline",{points:"12 5 19 12 12 19"})])],-1),ve=l("h2",null,"Examples",-1),De=l("label",{for:"addClasses"}," Enable additional classes ",-1),Ce=l("br",null,null,-1),ye=l("br",null,null,-1),be=l("br",null,null,-1),Re=l("label",{for:"addRowClasses"}," Enable additional classes ",-1),xe=l("br",null,null,-1),ze=l("br",null,null,-1),Pe=l("br",null,null,-1),Se=l("br",null,null,-1),He=l("br",null,null,-1),We=l("br",null,null,-1),Be=l("br",null,null,-1),Ne=l("br",null,null,-1),ke=l("br",null,null,-1),Te=l("br",null,null,-1),Ie=l("br",null,null,-1),Ae=l("h2",null,"Nesting",-1),Le=l("br",null,null,-1),Ye=l("h3",null,"Real-time State and Data",-1),je=l("a",{href:"https://github.com/justcaliturner/vue-resizer",target:"_blank",class:"link",style:{"margin-top":"40px"}},[l("span",null,"View on Github"),l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[l("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l("polyline",{points:"12 5 19 12 12 19"})])],-1);function Ve(e,n,s,a,i,t){const o=_("CodeEditor"),d=_("DragCol"),r=_("DragRow"),g=_("ResizeCol"),f=_("ResizeRow"),W=_("Resize");return C(),y(E,null,[ce,l("div",fe,[pe,me,u(o,{width:"100%",value:i.install,read_only:!0,languages:[["shell","NPM"]]},null,8,["value"]),we,u(o,{width:"100%",value:i.example,read_only:!0,font_size:"16px",languages:[["javascript","JS"]]},null,8,["value"]),_e,ve,u(d,{class:"example_1",onIsDragging:t.isDragging,onDragging:t.draggingCol,draggerRightClasses:{additional:i.enableAdditionalDragColClasses},draggerLeftClasses:{additional:i.enableAdditionalDragColClasses},sliderClasses:{additional:i.enableAdditionalDragColClasses},width:"100%"},{left:c(()=>[p(m(i.data_1),1)]),right:c(()=>[p(m(i.data_1_1),1)]),_:1},8,["onIsDragging","onDragging","draggerRightClasses","draggerLeftClasses","sliderClasses"]),l("p",null,[B(l("input",{id:"addClasses",type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=R=>i.enableAdditionalDragColClasses=R)},null,512),[[N,i.enableAdditionalDragColClasses]]),De]),Ce,u(o,{font_size:"16px",width:"100%",value:i.example_1,read_only:!0,languages:[["html","template"]]},null,8,["value"]),ye,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_1_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),be,u(r,{class:"example_2",onIsDragging:t.isDragging,onDragging:t.draggingRow,width:"100%",draggerTopClasses:{additional:i.enableAdditionalDragRowClasses},draggerBottomClasses:{additional:i.enableAdditionalDragRowClasses},sliderClasses:{additional:i.enableAdditionalDragRowClasses}},{top:c(()=>[p(m(i.data_2),1)]),bottom:c(()=>[p(m(i.data_2_1),1)]),_:1},8,["onIsDragging","onDragging","draggerTopClasses","draggerBottomClasses","sliderClasses"]),l("p",null,[B(l("input",{id:"addRowClasses",type:"checkbox","onUpdate:modelValue":n[1]||(n[1]=R=>i.enableAdditionalDragRowClasses=R)},null,512),[[N,i.enableAdditionalDragRowClasses]]),Re]),xe,u(o,{font_size:"16px",width:"100%",value:i.example_2,read_only:!0,languages:[["html","template"]]},null,8,["value"]),ze,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_2_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),Pe,u(g,{width:320,class:"example_3",onIsDragging:t.isDragging,onDragging:t.resizingCol},{default:c(()=>[p(m(i.data_3),1)]),_:1},8,["onIsDragging","onDragging"]),Se,u(o,{font_size:"16px",width:"100%",value:i.example_3,read_only:!0,languages:[["html","template"]]},null,8,["value"]),He,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_3_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),We,u(f,{width:"100%",class:"example_4",onIsDragging:t.isDragging,onDragging:t.resizingRow},{default:c(()=>[p(m(i.data_4),1)]),_:1},8,["onIsDragging","onDragging"]),Be,u(o,{font_size:"16px",width:"100%",value:i.example_4,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Ne,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_4_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),ke,u(W,{width:320,class:"example_5",onIsDraggingRow:t.isDragging,onIsDraggingCol:t.isDragging,onDraggingRow:t.resizingR,onDraggingCol:t.resizingC},{default:c(()=>[p(m(t.data_5),1)]),_:1},8,["onIsDraggingRow","onIsDraggingCol","onDraggingRow","onDraggingCol"]),Te,u(o,{font_size:"16px",width:"100%",value:i.example_5,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Ie,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_5_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),Ae,u(W,{width:320},{default:c(()=>[u(r,{height:"100%",width:"100%"},{top:c(()=>[u(d,{height:"100%",width:"100%",leftPercent:30},{left:c(()=>[]),right:c(()=>[]),_:1})]),bottom:c(()=>[u(d,{height:"100%",width:"100%",leftPercent:70},{left:c(()=>[]),right:c(()=>[]),_:1})]),_:1})]),_:1}),Le,u(o,{font_size:"16px",width:"100%",value:i.example_6,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Ye,u(o,{font_size:"16px",wrap_code:!0,width:"100%",value:i.example_7,read_only:!0,languages:[["html","template"]]},null,8,["value"]),je])],64)}var Me=D(he,[["render",Ve]]);O(Me).mount("#app");
