import{_ as v,u as b,o as D,c as y,a,r as _,n as h,C as V,b as w,d as u,w as c,e as p,t as f,f as F}from"./vendor.9245aa40.js";const k=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerpolicy&&(e.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?e.credentials="include":i.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(i){if(i.ep)return;i.ep=!0;const e=l(i);fetch(i.href,e)}};k();const C={name:"DragerCol",props:{leftPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{left:this.leftPercent,isDragging:!1}},methods:{mobileDragCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,l=this.left,s=0,i=0;const e=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),s=g.changedTouches[0].clientX;const m=parseFloat(((n-s)/e*100).toFixed(3));i=l-m,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.ontouchmove=null,document.ontouchend=null}},dragCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,l=this.left,s=0,i=0;const e=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.preventDefault(),g.stopPropagation(),s=g.clientX;const m=parseFloat(((n-s)/e*100).toFixed(3));i=l-m,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},W=()=>{b(t=>({cf07d08a:t.sliderBgColor,"61921780":t.sliderColor,ca952ba2:t.sliderBgHoverColor}))},H=C.setup;C.setup=H?(t,n)=>(W(),H(t,n)):W;const M=C;function E(t,n,l,s,i,e){return D(),y("div",{class:"drager_col",ref:"container",style:h({width:l.width,height:l.height})},[a("div",{class:"drager_left",style:h({width:i.left+"%"})},[a("div",null,[_(t.$slots,"left")])],4),a("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileDragCol&&e.mobileDragCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.dragCol&&e.dragCol(...o)),style:h({width:l.sliderWidth+"px",marginLeft:-l.sliderWidth/2+"px",marginRight:-l.sliderWidth/2+"px"})},null,36),a("div",{class:"drager_right",style:h({width:100-i.left+"%"})},[a("div",null,[_(t.$slots,"right")])],4)],4)}var J=v(M,[["render",E]]);const R={name:"Drager",props:{topPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{top:this.topPercent,isDragging:!1}},methods:{mobileDragRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,l=this.top,s=0,i=0;const e=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),s=g.changedTouches[0].clientY;const m=parseFloat(((n-s)/e*100).toFixed(3));i=l-m,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},dragRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,l=this.top,s=0,i=0;const e=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),s=g.clientY;const m=parseFloat(((n-s)/e*100).toFixed(3));i=l-m,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},B=()=>{b(t=>({c58ad292:t.sliderBgColor,"6e41023c":t.sliderColor,e54a2e9a:t.sliderBgHoverColor}))},N=R.setup;R.setup=N?(t,n)=>(B(),N(t,n)):B;const L=R;function A(t,n,l,s,i,e){return D(),y("div",{class:"drager_row",ref:"container",style:h({width:l.width,height:l.height})},[a("div",{class:"drager_top",style:h({height:i.top+"%"})},[a("div",null,[_(t.$slots,"top")])],4),a("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileDragRow&&e.mobileDragRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.dragRow&&e.dragRow(...o)),style:h({height:l.sliderWidth+"px",marginTop:-l.sliderWidth/2+"px",marginBottom:-l.sliderWidth/2+"px"})},null,36),a("div",{class:"drager_bottom",style:h({height:100-i.top+"%"})},[a("div",null,[_(t.$slots,"bottom")])],4)],4)}var O=v(L,[["render",A]]);const x={name:"ResizeCol",props:{sliderWidth:{type:Number,default:20},width:{type:Number,default:400},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,isDragging:!1}},methods:{mobileResizeCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,l=this.reWidth,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),s=r.changedTouches[0].clientX;const g=n-s;i=parseInt(l-g),i<=20?e.reWidth=20:e.reWidth=i,e.$emit("dragging",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,l=this.reWidth,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),s=r.clientX;const g=n-s;i=parseInt(l-g),i<=20?e.reWidth=20:e.reWidth=i,e.$emit("dragging",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},I=()=>{b(t=>({"1680d622":t.sliderBgColor,"1e3fa318":t.sliderColor,"16d40d7b":t.sliderBgHoverColor}))},T=x.setup;x.setup=T?(t,n)=>(I(),T(t,n)):I;const q=x,K={class:"resize_col_body"};function U(t,n,l,s,i,e){return D(),y("div",{class:"resize_col",style:h({width:i.reWidth+"px",height:l.height})},[a("div",K,[_(t.$slots,"default")]),a("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeCol&&e.mobileResizeCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeCol&&e.resizeCol(...o)),style:h({width:l.sliderWidth+"px"})},null,36)],4)}var G=v(q,[["render",U]]);const P={name:"ResizeRow",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,l=this.reHeight,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),s=r.changedTouches[0].clientY;const g=n-s;i=parseInt(l-g),i<=20?e.reHeight=20:e.reHeight=i,e.$emit("dragging",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,l=this.reHeight,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),s=r.clientY;const g=n-s;i=parseInt(l-g),i<=20?e.reHeight=20:e.reHeight=i,e.$emit("dragging",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},Y=()=>{b(t=>({"165e0506":t.sliderBgColor,"6bae6282":t.sliderColor,"389864a6":t.sliderBgHoverColor}))},$=P.setup;P.setup=$?(t,n)=>(Y(),$(t,n)):Y;const Q=P,Z={class:"resize_row_body"};function ee(t,n,l,s,i,e){return D(),y("div",{class:"resize_row",style:h({height:i.reHeight+"px",width:l.width})},[a("div",Z,[_(t.$slots,"default")]),a("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeRow&&e.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeRow&&e.resizeRow(...o)),style:h({height:l.sliderWidth+"px"})},null,36)],4)}var te=v(Q,[["render",ee]]);const z={name:"Resize",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:Number,default:400},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,l=this.reHeight,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),s=r.changedTouches[0].clientY;const g=n-s;i=parseInt(l-g),i<=20?e.reHeight=20:e.reHeight=i,e.$emit("draggingRow",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDraggingRow",e.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,l=this.reHeight,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),s=r.clientY;const g=n-s;i=parseInt(l-g),i<=20?e.reHeight=20:e.reHeight=i,e.$emit("draggingRow",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDraggingRow",e.isDragging),document.onmouseup=null,document.onmousemove=null}},mobileResizeCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,l=this.reWidth,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),s=r.changedTouches[0].clientX;const g=n-s;i=parseInt(l-g),i<=20?e.reWidth=20:e.reWidth=i,e.$emit("draggingCol",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDraggingCol",e.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,l=this.reWidth,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),s=r.clientX;const g=n-s;i=parseInt(l-g),i<=20?e.reWidth=20:e.reWidth=i,e.$emit("draggingCol",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDraggingCol",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},j=()=>{b(t=>({b83f5374:t.sliderBgColor,"331f598b":t.sliderColor,"710ceaf8":t.sliderBgHoverColor}))},X=z.setup;z.setup=X?(t,n)=>(j(),X(t,n)):j;const ie=z,oe={class:"resize_body"};function ne(t,n,l,s,i,e){return D(),y("div",{class:"resize",style:h({height:i.reHeight+"px",width:i.reWidth+"px"})},[a("div",oe,[_(t.$slots,"default")]),a("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeRow&&e.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeRow&&e.resizeRow(...o)),style:h({height:l.sliderWidth+"px"})},null,36),a("div",{class:"slider_col",onTouchstartPassive:n[2]||(n[2]=(...o)=>e.mobileResizeCol&&e.mobileResizeCol(...o)),onMousedown:n[3]||(n[3]=(...o)=>e.resizeCol&&e.resizeCol(...o)),style:h({width:l.sliderWidth+"px"})},null,36)],4)}var re=v(ie,[["render",ne]]);const le={components:{DragerCol:J,DragerRow:O,ResizeCol:G,ResizeRow:te,Resize:re,CodeEditor:V},data(){return{example:`import DragerCol from "vue-slider";
import DragerRow from "vue-slider";
import ResizeCol from "vue-slider";
import ResizeRow from "vue-slider";
import Resize from "vue-slider";
`,example_1:`<!-- Usage -->
<DragerCol>
  <template #left>
    <!-- your content -->
  </template>
  <template #right>
    <!-- your content -->
  </template>
</DragerCol>`,example_1_1:`// Props
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
  // bg color of the slider on hover
  sliderBgHoverColor: {
    type: String,
    default: "#16222a",
  }
}
`,example_2:`<DragerRow>
  <template #top>
    <!-- your content -->
  </template>
  <template #bottom>
    <!-- your content -->
  </template>
</DragerRow>`,example_2_1:`props: {
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
    // bg color of the slider on hover
    sliderBgHoverColor: {
      type: String,
      default: "#16222a",
    }
  },`,example_6:`<Resize>
  <DragerRow height="100%" width="100%">
    <template #top>
      <DragerCol height="100%" width="100%" :leftPercent="30">
        <template #left>
          <!-- your content -->
        </template>
        <template #right>
          <!-- your content -->
        </template>
      </DragerCol>
    </template>
    <template #bottom>
      <DragerCol height="100%" width="100%" :leftPercent="70">
        <template #left>
          <!-- your content -->
        </template>
        <template #right>
          <!-- your content -->
        </template>
      </DragerCol>
    </template>
  </DragerRow>
</Resize>`,install:"npm install vue-slider",data_1:"50%",data_1_1:"50%",data_2:"50%",data_2_1:"50%",data_3:"320px",data_4:"400px",data_5_1:"320px",data_5_2:"400px",example_7:`<!-- Open the Console of the browser and drag any slider in the above examples, you will see the real-time states -->

<DragerCol
  @isDragging="func"
  @dragging="func"
/>
<!--
@isDragging will be activated while you start or stop dragging, it will pass a boolean parameter which is the state of dragging

@dragging will be activated while you keep dragging, it will pass a number parameter which is the percentage of the left part 
-->
<DragerRow
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
-->`}},computed:{data_5(){return`${this.data_5_1} * ${this.data_5_2}`}},methods:{draggingCol(t){const n=parseInt(t);this.data_1=n+"%",this.data_1_1=100-n+"%"},draggingRow(t){const n=parseInt(t);this.data_2=n+"%",this.data_2_1=100-n+"%"},resizingCol(t){this.data_3=t+"px"},resizingRow(t){this.data_4=t+"px"},resizingC(t){this.data_5_1=t+"px"},resizingR(t){this.data_5_2=t+"px"},isDragging(t){console.log("Dragging: "+t)}}},se={class:"container"},ae=a("h1",null,"Vue Slider",-1),ge=a("p",null,"A series of the resizer components for Vue.js",-1),de=a("br",null,null,-1),ue=a("h2",null,"Examples",-1),he=a("br",null,null,-1),ce=a("br",null,null,-1),me=a("br",null,null,-1),pe=a("br",null,null,-1),fe=a("br",null,null,-1),_e=a("br",null,null,-1),we=a("br",null,null,-1),ve=a("br",null,null,-1),De=a("br",null,null,-1),ye=a("br",null,null,-1),be=a("br",null,null,-1),Ce=a("br",null,null,-1),Re=a("br",null,null,-1),xe=a("br",null,null,-1),Pe=a("h2",null,"Nesting",-1),ze=a("p",null,"They can be nested freely",-1),Se=a("br",null,null,-1),We=a("h3",null,"Real-time State and Data",-1);function He(t,n,l,s,i,e){const o=w("CodeEditor"),d=w("DragerCol"),r=w("DragerRow"),g=w("ResizeCol"),m=w("ResizeRow"),S=w("Resize");return D(),y("div",se,[ae,ge,u(o,{width:"100%",value:i.install,read_only:!0,languages:[["shell","NPM"]]},null,8,["value"]),de,u(o,{width:"100%",value:i.example,read_only:!0,font_size:"16px",languages:[["javascript","JS"]]},null,8,["value"]),ue,u(d,{class:"example_1",onIsDragging:e.isDragging,onDragging:e.draggingCol,width:"100%"},{left:c(()=>[p(f(i.data_1),1)]),right:c(()=>[p(f(i.data_1_1),1)]),_:1},8,["onIsDragging","onDragging"]),he,u(o,{font_size:"16px",width:"100%",value:i.example_1,read_only:!0,languages:[["html","template"]]},null,8,["value"]),ce,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_1_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),me,u(r,{class:"example_2",onIsDragging:e.isDragging,onDragging:e.draggingRow,width:"100%"},{top:c(()=>[p(f(i.data_2),1)]),bottom:c(()=>[p(f(i.data_2_1),1)]),_:1},8,["onIsDragging","onDragging"]),pe,u(o,{font_size:"16px",width:"100%",value:i.example_2,read_only:!0,languages:[["html","template"]]},null,8,["value"]),fe,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_2_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),_e,u(g,{width:320,class:"example_3",onIsDragging:e.isDragging,onDragging:e.resizingCol},{default:c(()=>[p(f(i.data_3),1)]),_:1},8,["onIsDragging","onDragging"]),we,u(o,{font_size:"16px",width:"100%",value:i.example_3,read_only:!0,languages:[["html","template"]]},null,8,["value"]),ve,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_3_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),De,u(m,{width:"100%",class:"example_4",onIsDragging:e.isDragging,onDragging:e.resizingRow},{default:c(()=>[p(f(i.data_4),1)]),_:1},8,["onIsDragging","onDragging"]),ye,u(o,{font_size:"16px",width:"100%",value:i.example_4,read_only:!0,languages:[["html","template"]]},null,8,["value"]),be,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_4_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),Ce,u(S,{width:320,class:"example_5",onIsDraggingRow:e.isDragging,onIsDraggingCol:e.isDragging,onDraggingRow:e.resizingR,onDraggingCol:e.resizingC},{default:c(()=>[p(f(e.data_5),1)]),_:1},8,["onIsDraggingRow","onIsDraggingCol","onDraggingRow","onDraggingCol"]),Re,u(o,{font_size:"16px",width:"100%",value:i.example_5,read_only:!0,languages:[["html","template"]]},null,8,["value"]),xe,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_5_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),Pe,ze,u(S,{width:320},{default:c(()=>[u(r,{height:"100%",width:"100%"},{top:c(()=>[u(d,{height:"100%",width:"100%",leftPercent:30},{left:c(()=>[]),right:c(()=>[]),_:1})]),bottom:c(()=>[u(d,{height:"100%",width:"100%",leftPercent:70},{left:c(()=>[]),right:c(()=>[]),_:1})]),_:1})]),_:1}),Se,u(o,{font_size:"16px",width:"100%",value:i.example_6,read_only:!0,languages:[["html","template"]]},null,8,["value"]),We,u(o,{font_size:"16px",wrap_code:!0,width:"100%",value:i.example_7,read_only:!0,languages:[["html","template"]]},null,8,["value"])])}var Be=v(le,[["render",He]]);F(Be).mount("#app");
