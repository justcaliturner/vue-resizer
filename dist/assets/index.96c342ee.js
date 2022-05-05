import{_ as v,u as C,o as D,c as y,a as l,r as w,n as h,C as V,b as _,d as u,w as c,F as L,e as X,f,t as m,g as F}from"./vendor.71e97c65.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}};M();const b={name:"DragCol",props:{leftPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{left:this.leftPercent,isDragging:!1}},methods:{mobileDragCol(e){e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientX,s=this.left,a=0,i=0;const t=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.changedTouches[0].clientX;const p=parseFloat(((n-a)/t*100).toFixed(3));i=s-p,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.ontouchmove=null,document.ontouchend=null}},dragCol(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientX,s=this.left,a=0,i=0;const t=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.preventDefault(),g.stopPropagation(),a=g.clientX;const p=parseFloat(((n-a)/t*100).toFixed(3));i=s-p,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},H=()=>{C(e=>({"0203b1b2":e.sliderBgColor,"1afa9ff7":e.sliderColor,"706ea773":e.sliderHoverColor,"6efb1ad0":e.sliderBgHoverColor}))},W=b.setup;b.setup=W?(e,n)=>(H(),W(e,n)):H;const E=b;function J(e,n,s,a,i,t){return D(),y("div",{class:"drager_col",ref:"container",style:h({width:s.width,height:s.height})},[l("div",{class:"drager_left",style:h({width:i.left+"%"})},[l("div",null,[w(e.$slots,"left")])],4),l("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileDragCol&&t.mobileDragCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.dragCol&&t.dragCol(...o)),style:h({width:s.sliderWidth+"px",marginLeft:-s.sliderWidth/2+"px",marginRight:-s.sliderWidth/2+"px"})},null,36),l("div",{class:"drager_right",style:h({width:100-i.left+"%"})},[l("div",null,[w(e.$slots,"right")])],4)],4)}var A=v(E,[["render",J]]);const R={name:"DragRow",props:{topPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{top:this.topPercent,isDragging:!1}},methods:{mobileDragRow(e){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientY,s=this.top,a=0,i=0;const t=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.changedTouches[0].clientY;const p=parseFloat(((n-a)/t*100).toFixed(3));i=s-p,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},dragRow(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientY,s=this.top,a=0,i=0;const t=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),a=g.clientY;const p=parseFloat(((n-a)/t*100).toFixed(3));i=s-p,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},B=()=>{C(e=>({"0dfab1de":e.sliderBgColor,"526889ba":e.sliderColor,"65a8b072":e.sliderHoverColor,"2bfea428":e.sliderBgHoverColor}))},N=R.setup;R.setup=N?(e,n)=>(B(),N(e,n)):B;const O=R;function G(e,n,s,a,i,t){return D(),y("div",{class:"drager_row",ref:"container",style:h({width:s.width,height:s.height})},[l("div",{class:"drager_top",style:h({height:i.top+"%"})},[l("div",null,[w(e.$slots,"top")])],4),l("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileDragRow&&t.mobileDragRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.dragRow&&t.dragRow(...o)),style:h({height:s.sliderWidth+"px",marginTop:-s.sliderWidth/2+"px",marginBottom:-s.sliderWidth/2+"px"})},null,36),l("div",{class:"drager_bottom",style:h({height:100-i.top+"%"})},[l("div",null,[w(e.$slots,"bottom")])],4)],4)}var Z=v(O,[["render",G]]);const x={name:"ResizeCol",props:{sliderWidth:{type:Number,default:20},width:{type:Number,default:400},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,isDragging:!1}},methods:{mobileResizeCol(e){e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientX,s=this.reWidth,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientX;const g=n-a;i=parseInt(s-g),i<=20?t.reWidth=20:t.reWidth=i,t.$emit("dragging",t.reWidth)}function d(){t.isDragging=!1,t.$emit("isDragging",t.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientX,s=this.reWidth,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientX;const g=n-a;i=parseInt(s-g),i<=20?t.reWidth=20:t.reWidth=i,t.$emit("dragging",t.reWidth)}function d(){t.isDragging=!1,t.$emit("isDragging",t.isDragging),document.onmouseup=null,document.onmousemove=null}}}},I=()=>{C(e=>({"0e8e0ce6":e.sliderBgColor,"72f3badc":e.sliderColor,"22438db8":e.sliderHoverColor,"58b6db9d":e.sliderBgHoverColor}))},k=x.setup;x.setup=k?(e,n)=>(I(),k(e,n)):I;const q=x,K={class:"resize_col_body"};function U(e,n,s,a,i,t){return D(),y("div",{class:"resize_col",style:h({width:i.reWidth+"px",height:s.height})},[l("div",K,[w(e.$slots,"default")]),l("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileResizeCol&&t.mobileResizeCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.resizeCol&&t.resizeCol(...o)),style:h({width:s.sliderWidth+"px"})},null,36)],4)}var Q=v(q,[["render",U]]);const z={name:"ResizeRow",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(e){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientY,s=this.reHeight,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientY;const g=n-a;i=parseInt(s-g),i<=20?t.reHeight=20:t.reHeight=i,t.$emit("dragging",t.reHeight)}function d(){t.isDragging=!1,t.$emit("isDragging",t.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientY,s=this.reHeight,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientY;const g=n-a;i=parseInt(s-g),i<=20?t.reHeight=20:t.reHeight=i,t.$emit("dragging",t.reHeight)}function d(){t.isDragging=!1,t.$emit("isDragging",t.isDragging),document.onmouseup=null,document.onmousemove=null}}}},T=()=>{C(e=>({"9dd5c64e":e.sliderBgColor,"742aae44":e.sliderColor,"4c7316ec":e.sliderHoverColor,"95ae305e":e.sliderBgHoverColor}))},Y=z.setup;z.setup=Y?(e,n)=>(T(),Y(e,n)):T;const ee=z,te={class:"resize_row_body"};function ie(e,n,s,a,i,t){return D(),y("div",{class:"resize_row",style:h({height:i.reHeight+"px",width:s.width})},[l("div",te,[w(e.$slots,"default")]),l("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileResizeRow&&t.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.resizeRow&&t.resizeRow(...o)),style:h({height:s.sliderWidth+"px"})},null,36)],4)}var oe=v(ee,[["render",ie]]);const P={name:"Resize",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:Number,default:400},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderHoverColor:{type:String,default:"#6f808d"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(e){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientY,s=this.reHeight,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientY;const g=n-a;i=parseInt(s-g),i<=20?t.reHeight=20:t.reHeight=i,t.$emit("draggingRow",t.reHeight)}function d(){t.isDragging=!1,t.$emit("isDraggingRow",t.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientY,s=this.reHeight,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientY;const g=n-a;i=parseInt(s-g),i<=20?t.reHeight=20:t.reHeight=i,t.$emit("draggingRow",t.reHeight)}function d(){t.isDragging=!1,t.$emit("isDraggingRow",t.isDragging),document.onmouseup=null,document.onmousemove=null}},mobileResizeCol(e){e=e||window.event,e.stopPropagation();let n=e.changedTouches[0].clientX,s=this.reWidth,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),a=r.changedTouches[0].clientX;const g=n-a;i=parseInt(s-g),i<=20?t.reWidth=20:t.reWidth=i,t.$emit("draggingCol",t.reWidth)}function d(){t.isDragging=!1,t.$emit("isDraggingCol",t.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(e){e=e||window.event,e.preventDefault(),e.stopPropagation();let n=e.clientX,s=this.reWidth,a=0,i=0;const t=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),a=r.clientX;const g=n-a;i=parseInt(s-g),i<=20?t.reWidth=20:t.reWidth=i,t.$emit("draggingCol",t.reWidth)}function d(){t.isDragging=!1,t.$emit("isDraggingCol",t.isDragging),document.onmouseup=null,document.onmousemove=null}}}},j=()=>{C(e=>({"54a7f13e":e.sliderBgColor,"96fd5afa":e.sliderColor,efa4a732:e.sliderHoverColor,"26d7eae8":e.sliderBgHoverColor}))},$=P.setup;P.setup=$?(e,n)=>(j(),$(e,n)):j;const ne=P,re={class:"resize_body"};function le(e,n,s,a,i,t){return D(),y("div",{class:"resize",style:h({height:i.reHeight+"px",width:i.reWidth+"px"})},[l("div",re,[w(e.$slots,"default")]),l("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>t.mobileResizeRow&&t.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>t.resizeRow&&t.resizeRow(...o)),style:h({height:s.sliderWidth+"px"})},null,36),l("div",{class:"slider_col",onTouchstartPassive:n[2]||(n[2]=(...o)=>t.mobileResizeCol&&t.mobileResizeCol(...o)),onMousedown:n[3]||(n[3]=(...o)=>t.resizeCol&&t.resizeCol(...o)),style:h({width:s.sliderWidth+"px"})},null,36)],4)}var se=v(ne,[["render",le]]);const ae={components:{DragCol:A,DragRow:Z,ResizeCol:Q,ResizeRow:oe,Resize:se,CodeEditor:V},data(){return{example:`import {
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
</DragCol>`,example_1_1:`// Props
props: {
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
-->`}},computed:{data_5(){return`${this.data_5_1} * ${this.data_5_2}`}},methods:{draggingCol(e){const n=parseInt(e);this.data_1=n+"%",this.data_1_1=100-n+"%"},draggingRow(e){const n=parseInt(e);this.data_2=n+"%",this.data_2_1=100-n+"%"},resizingCol(e){this.data_3=e+"px"},resizingRow(e){this.data_4=e+"px"},resizingC(e){this.data_5_1=e+"px"},resizingR(e){this.data_5_2=e+"px"},isDragging(e){console.log("Dragging: "+e)}}},ge=X('<a target="_blank" href="https://github.com/justcaliturner/vue-resizer"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#61aeee;color:#fff;position:absolute;top:0;border:0;right:0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>',1),de={class:"container"},ue=l("h1",null,"Vue Resizer",-1),he=l("p",null,"A series of the resizer components for Vue.js",-1),ce=l("br",null,null,-1),pe=l("a",{href:"https://github.com/justcaliturner/vue-resizer",target:"_blank",class:"link"},[l("span",null,"View on Github"),l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[l("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l("polyline",{points:"12 5 19 12 12 19"})])],-1),fe=l("h2",null,"Examples",-1),me=l("br",null,null,-1),we=l("br",null,null,-1),_e=l("br",null,null,-1),ve=l("br",null,null,-1),De=l("br",null,null,-1),ye=l("br",null,null,-1),Ce=l("br",null,null,-1),be=l("br",null,null,-1),Re=l("br",null,null,-1),xe=l("br",null,null,-1),ze=l("br",null,null,-1),Pe=l("br",null,null,-1),Se=l("br",null,null,-1),He=l("br",null,null,-1),We=l("h2",null,"Nesting",-1),Be=l("br",null,null,-1),Ne=l("h3",null,"Real-time State and Data",-1),Ie=l("a",{href:"https://github.com/justcaliturner/vue-resizer",target:"_blank",class:"link",style:{"margin-top":"40px"}},[l("span",null,"View on Github"),l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[l("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l("polyline",{points:"12 5 19 12 12 19"})])],-1);function ke(e,n,s,a,i,t){const o=_("CodeEditor"),d=_("DragCol"),r=_("DragRow"),g=_("ResizeCol"),p=_("ResizeRow"),S=_("Resize");return D(),y(L,null,[ge,l("div",de,[ue,he,u(o,{width:"100%",value:i.install,read_only:!0,languages:[["shell","NPM"]]},null,8,["value"]),ce,u(o,{width:"100%",value:i.example,read_only:!0,font_size:"16px",languages:[["javascript","JS"]]},null,8,["value"]),pe,fe,u(d,{class:"example_1",onIsDragging:t.isDragging,onDragging:t.draggingCol,width:"100%"},{left:c(()=>[f(m(i.data_1),1)]),right:c(()=>[f(m(i.data_1_1),1)]),_:1},8,["onIsDragging","onDragging"]),me,u(o,{font_size:"16px",width:"100%",value:i.example_1,read_only:!0,languages:[["html","template"]]},null,8,["value"]),we,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_1_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),_e,u(r,{class:"example_2",onIsDragging:t.isDragging,onDragging:t.draggingRow,width:"100%"},{top:c(()=>[f(m(i.data_2),1)]),bottom:c(()=>[f(m(i.data_2_1),1)]),_:1},8,["onIsDragging","onDragging"]),ve,u(o,{font_size:"16px",width:"100%",value:i.example_2,read_only:!0,languages:[["html","template"]]},null,8,["value"]),De,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_2_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),ye,u(g,{width:320,class:"example_3",onIsDragging:t.isDragging,onDragging:t.resizingCol},{default:c(()=>[f(m(i.data_3),1)]),_:1},8,["onIsDragging","onDragging"]),Ce,u(o,{font_size:"16px",width:"100%",value:i.example_3,read_only:!0,languages:[["html","template"]]},null,8,["value"]),be,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_3_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),Re,u(p,{width:"100%",class:"example_4",onIsDragging:t.isDragging,onDragging:t.resizingRow},{default:c(()=>[f(m(i.data_4),1)]),_:1},8,["onIsDragging","onDragging"]),xe,u(o,{font_size:"16px",width:"100%",value:i.example_4,read_only:!0,languages:[["html","template"]]},null,8,["value"]),ze,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_4_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),Pe,u(S,{width:320,class:"example_5",onIsDraggingRow:t.isDragging,onIsDraggingCol:t.isDragging,onDraggingRow:t.resizingR,onDraggingCol:t.resizingC},{default:c(()=>[f(m(t.data_5),1)]),_:1},8,["onIsDraggingRow","onIsDraggingCol","onDraggingRow","onDraggingCol"]),Se,u(o,{font_size:"16px",width:"100%",value:i.example_5,read_only:!0,languages:[["html","template"]]},null,8,["value"]),He,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_5_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),We,u(S,{width:320},{default:c(()=>[u(r,{height:"100%",width:"100%"},{top:c(()=>[u(d,{height:"100%",width:"100%",leftPercent:30},{left:c(()=>[]),right:c(()=>[]),_:1})]),bottom:c(()=>[u(d,{height:"100%",width:"100%",leftPercent:70},{left:c(()=>[]),right:c(()=>[]),_:1})]),_:1})]),_:1}),Be,u(o,{font_size:"16px",width:"100%",value:i.example_6,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Ne,u(o,{font_size:"16px",wrap_code:!0,width:"100%",value:i.example_7,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Ie])],64)}var Te=v(ae,[["render",ke]]);F(Te).mount("#app");
