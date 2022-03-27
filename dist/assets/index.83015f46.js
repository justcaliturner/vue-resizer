import{_ as v,u as C,o as D,c as y,a,r as _,n as h,C as L,b as w,d as u,w as c,F as V,e as X,f as m,t as f,g as F}from"./vendor.718667e7.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerpolicy&&(e.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?e.credentials="include":i.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(i){if(i.ep)return;i.ep=!0;const e=l(i);fetch(i.href,e)}};M();const b={name:"DragerCol",props:{leftPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{left:this.leftPercent,isDragging:!1}},methods:{mobileDragCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,l=this.left,s=0,i=0;const e=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),s=g.changedTouches[0].clientX;const p=parseFloat(((n-s)/e*100).toFixed(3));i=l-p,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.ontouchmove=null,document.ontouchend=null}},dragCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,l=this.left,s=0,i=0;const e=this.$refs.container.offsetWidth,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.preventDefault(),g.stopPropagation(),s=g.clientX;const p=parseFloat(((n-s)/e*100).toFixed(3));i=l-p,i<=0?o.left=0:i>=100?o.left=100:o.left=i,o.$emit("dragging",o.left)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},W=()=>{C(t=>({cf07d08a:t.sliderBgColor,"61921780":t.sliderColor,ca952ba2:t.sliderBgHoverColor}))},H=b.setup;b.setup=H?(t,n)=>(W(),H(t,n)):W;const E=b;function J(t,n,l,s,i,e){return D(),y("div",{class:"drager_col",ref:"container",style:h({width:l.width,height:l.height})},[a("div",{class:"drager_left",style:h({width:i.left+"%"})},[a("div",null,[_(t.$slots,"left")])],4),a("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileDragCol&&e.mobileDragCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.dragCol&&e.dragCol(...o)),style:h({width:l.sliderWidth+"px",marginLeft:-l.sliderWidth/2+"px",marginRight:-l.sliderWidth/2+"px"})},null,36),a("div",{class:"drager_right",style:h({width:100-i.left+"%"})},[a("div",null,[_(t.$slots,"right")])],4)],4)}var A=v(E,[["render",J]]);const R={name:"Drager",props:{topPercent:{type:Number,default:50},sliderWidth:{type:Number,default:20},width:{type:String,default:"400px"},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{top:this.topPercent,isDragging:!1}},methods:{mobileDragRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,l=this.top,s=0,i=0;const e=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=d,document.ontouchend=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),s=g.changedTouches[0].clientY;const p=parseFloat(((n-s)/e*100).toFixed(3));i=l-p,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},dragRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,l=this.top,s=0,i=0;const e=this.$refs.container.offsetHeight,o=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=d,document.onmouseup=r;function d(g){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),g=g||window.event,g.stopPropagation(),s=g.clientY;const p=parseFloat(((n-s)/e*100).toFixed(3));i=l-p,i<=0?o.top=0:i>=100?o.top=100:o.top=i,o.$emit("dragging",o.top)}function r(){o.isDragging=!1,o.$emit("isDragging",o.isDragging),document.onmouseup=null,document.onmousemove=null}}}},B=()=>{C(t=>({c58ad292:t.sliderBgColor,"6e41023c":t.sliderColor,e54a2e9a:t.sliderBgHoverColor}))},N=R.setup;R.setup=N?(t,n)=>(B(),N(t,n)):B;const O=R;function Z(t,n,l,s,i,e){return D(),y("div",{class:"drager_row",ref:"container",style:h({width:l.width,height:l.height})},[a("div",{class:"drager_top",style:h({height:i.top+"%"})},[a("div",null,[_(t.$slots,"top")])],4),a("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileDragRow&&e.mobileDragRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.dragRow&&e.dragRow(...o)),style:h({height:l.sliderWidth+"px",marginTop:-l.sliderWidth/2+"px",marginBottom:-l.sliderWidth/2+"px"})},null,36),a("div",{class:"drager_bottom",style:h({height:100-i.top+"%"})},[a("div",null,[_(t.$slots,"bottom")])],4)],4)}var q=v(O,[["render",Z]]);const x={name:"ResizeCol",props:{sliderWidth:{type:Number,default:20},width:{type:Number,default:400},height:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,isDragging:!1}},methods:{mobileResizeCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,l=this.reWidth,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),s=r.changedTouches[0].clientX;const g=n-s;i=parseInt(l-g),i<=20?e.reWidth=20:e.reWidth=i,e.$emit("dragging",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,l=this.reWidth,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),s=r.clientX;const g=n-s;i=parseInt(l-g),i<=20?e.reWidth=20:e.reWidth=i,e.$emit("dragging",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},I=()=>{C(t=>({"1680d622":t.sliderBgColor,"1e3fa318":t.sliderColor,"16d40d7b":t.sliderBgHoverColor}))},T=x.setup;x.setup=T?(t,n)=>(I(),T(t,n)):I;const G=x,K={class:"resize_col_body"};function U(t,n,l,s,i,e){return D(),y("div",{class:"resize_col",style:h({width:i.reWidth+"px",height:l.height})},[a("div",K,[_(t.$slots,"default")]),a("div",{class:"slider_col",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeCol&&e.mobileResizeCol(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeCol&&e.resizeCol(...o)),style:h({width:l.sliderWidth+"px"})},null,36)],4)}var Q=v(G,[["render",U]]);const z={name:"ResizeRow",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:String,default:"400px"},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,l=this.reHeight,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),s=r.changedTouches[0].clientY;const g=n-s;i=parseInt(l-g),i<=20?e.reHeight=20:e.reHeight=i,e.$emit("dragging",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,l=this.reHeight,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDragging",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),s=r.clientY;const g=n-s;i=parseInt(l-g),i<=20?e.reHeight=20:e.reHeight=i,e.$emit("dragging",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDragging",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},Y=()=>{C(t=>({"165e0506":t.sliderBgColor,"6bae6282":t.sliderColor,"389864a6":t.sliderBgHoverColor}))},$=z.setup;z.setup=$?(t,n)=>(Y(),$(t,n)):Y;const ee=z,te={class:"resize_row_body"};function ie(t,n,l,s,i,e){return D(),y("div",{class:"resize_row",style:h({height:i.reHeight+"px",width:l.width})},[a("div",te,[_(t.$slots,"default")]),a("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeRow&&e.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeRow&&e.resizeRow(...o)),style:h({height:l.sliderWidth+"px"})},null,36)],4)}var oe=v(ee,[["render",ie]]);const P={name:"Resize",props:{sliderWidth:{type:Number,default:20},height:{type:Number,default:400},width:{type:Number,default:400},sliderColor:{type:String,default:"#6f808d"},sliderBgColor:{type:String,default:"#1f2e3a"},sliderBgHoverColor:{type:String,default:"#16222a"}},data(){return{reWidth:this.width,reHeight:this.height,isDragging:!1}},methods:{mobileResizeRow(t){document.body.style.overflow="hidden",document.body.style.overscrollBehaviorY="contain",t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientY,l=this.reHeight,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),s=r.changedTouches[0].clientY;const g=n-s;i=parseInt(l-g),i<=20?e.reHeight=20:e.reHeight=i,e.$emit("draggingRow",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDraggingRow",e.isDragging),document.body.style.overflow="",document.body.style.overscrollBehaviorY="",document.ontouchmove=null,document.ontouchend=null}},resizeRow(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientY,l=this.reHeight,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingRow",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),s=r.clientY;const g=n-s;i=parseInt(l-g),i<=20?e.reHeight=20:e.reHeight=i,e.$emit("draggingRow",e.reHeight)}function d(){e.isDragging=!1,e.$emit("isDraggingRow",e.isDragging),document.onmouseup=null,document.onmousemove=null}},mobileResizeCol(t){t=t||window.event,t.stopPropagation();let n=t.changedTouches[0].clientX,l=this.reWidth,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.ontouchmove=o,document.ontouchend=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.stopPropagation(),s=r.changedTouches[0].clientX;const g=n-s;i=parseInt(l-g),i<=20?e.reWidth=20:e.reWidth=i,e.$emit("draggingCol",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDraggingCol",e.isDragging),document.ontouchmove=null,document.ontouchend=null}},resizeCol(t){t=t||window.event,t.preventDefault(),t.stopPropagation();let n=t.clientX,l=this.reWidth,s=0,i=0;const e=this;this.isDragging=!0,this.$emit("isDraggingCol",this.isDragging),document.onmousemove=o,document.onmouseup=d;function o(r){if(this.time&&Date.now()-this.time<40)return;this.time=Date.now(),r=r||window.event,r.preventDefault(),r.stopPropagation(),s=r.clientX;const g=n-s;i=parseInt(l-g),i<=20?e.reWidth=20:e.reWidth=i,e.$emit("draggingCol",e.reWidth)}function d(){e.isDragging=!1,e.$emit("isDraggingCol",e.isDragging),document.onmouseup=null,document.onmousemove=null}}}},j=()=>{C(t=>({b83f5374:t.sliderBgColor,"331f598b":t.sliderColor,"710ceaf8":t.sliderBgHoverColor}))},k=P.setup;P.setup=k?(t,n)=>(j(),k(t,n)):j;const ne=P,re={class:"resize_body"};function le(t,n,l,s,i,e){return D(),y("div",{class:"resize",style:h({height:i.reHeight+"px",width:i.reWidth+"px"})},[a("div",re,[_(t.$slots,"default")]),a("div",{class:"slider_row",onTouchstartPassive:n[0]||(n[0]=(...o)=>e.mobileResizeRow&&e.mobileResizeRow(...o)),onMousedown:n[1]||(n[1]=(...o)=>e.resizeRow&&e.resizeRow(...o)),style:h({height:l.sliderWidth+"px"})},null,36),a("div",{class:"slider_col",onTouchstartPassive:n[2]||(n[2]=(...o)=>e.mobileResizeCol&&e.mobileResizeCol(...o)),onMousedown:n[3]||(n[3]=(...o)=>e.resizeCol&&e.resizeCol(...o)),style:h({width:l.sliderWidth+"px"})},null,36)],4)}var se=v(ne,[["render",le]]);const ae={components:{DragerCol:A,DragerRow:q,ResizeCol:Q,ResizeRow:oe,Resize:se,CodeEditor:L},data(){return{example:`import {
  DragerCol,
  DragerRow,
  ResizeCol,
  ResizeRow,
  Resize,
} from "vue-resizer";`,example_1:`<!-- Usage -->
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
</Resize>`,install:"npm install vue-resizer",data_1:"50%",data_1_1:"50%",data_2:"50%",data_2_1:"50%",data_3:"320px",data_4:"400px",data_5_1:"320px",data_5_2:"400px",example_7:`<!-- Open the Console of the browser and drag any slider in the above examples, you will see the real-time states -->

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
-->`}},computed:{data_5(){return`${this.data_5_1} * ${this.data_5_2}`}},methods:{draggingCol(t){const n=parseInt(t);this.data_1=n+"%",this.data_1_1=100-n+"%"},draggingRow(t){const n=parseInt(t);this.data_2=n+"%",this.data_2_1=100-n+"%"},resizingCol(t){this.data_3=t+"px"},resizingRow(t){this.data_4=t+"px"},resizingC(t){this.data_5_1=t+"px"},resizingR(t){this.data_5_2=t+"px"},isDragging(t){console.log("Dragging: "+t)}}},ge=X('<a target="_blank" href="https://github.com/justcaliturner/vue-resizer"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#61aeee;color:#fff;position:absolute;top:0;border:0;right:0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>',1),de={class:"container"},ue=a("h1",null,"Vue Resizer",-1),he=a("p",null,"A series of the resizer components for Vue.js",-1),ce=a("br",null,null,-1),pe=a("a",{href:"https://github.com/justcaliturner/vue-resizer",target:"_blank",class:"link"},[a("span",null,"View on Github"),a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-right"},[a("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),a("polyline",{points:"12 5 19 12 12 19"})])],-1),me=a("h2",null,"Examples",-1),fe=a("br",null,null,-1),_e=a("br",null,null,-1),we=a("br",null,null,-1),ve=a("br",null,null,-1),De=a("br",null,null,-1),ye=a("br",null,null,-1),Ce=a("br",null,null,-1),be=a("br",null,null,-1),Re=a("br",null,null,-1),xe=a("br",null,null,-1),ze=a("br",null,null,-1),Pe=a("br",null,null,-1),Se=a("br",null,null,-1),We=a("br",null,null,-1),He=a("h2",null,"Nesting",-1),Be=a("br",null,null,-1),Ne=a("h3",null,"Real-time State and Data",-1);function Ie(t,n,l,s,i,e){const o=w("CodeEditor"),d=w("DragerCol"),r=w("DragerRow"),g=w("ResizeCol"),p=w("ResizeRow"),S=w("Resize");return D(),y(V,null,[ge,a("div",de,[ue,he,u(o,{width:"100%",value:i.install,read_only:!0,languages:[["shell","NPM"]]},null,8,["value"]),ce,u(o,{width:"100%",value:i.example,read_only:!0,font_size:"16px",languages:[["javascript","JS"]]},null,8,["value"]),pe,me,u(d,{class:"example_1",onIsDragging:e.isDragging,onDragging:e.draggingCol,width:"100%"},{left:c(()=>[m(f(i.data_1),1)]),right:c(()=>[m(f(i.data_1_1),1)]),_:1},8,["onIsDragging","onDragging"]),fe,u(o,{font_size:"16px",width:"100%",value:i.example_1,read_only:!0,languages:[["html","template"]]},null,8,["value"]),_e,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_1_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),we,u(r,{class:"example_2",onIsDragging:e.isDragging,onDragging:e.draggingRow,width:"100%"},{top:c(()=>[m(f(i.data_2),1)]),bottom:c(()=>[m(f(i.data_2_1),1)]),_:1},8,["onIsDragging","onDragging"]),ve,u(o,{font_size:"16px",width:"100%",value:i.example_2,read_only:!0,languages:[["html","template"]]},null,8,["value"]),De,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_2_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),ye,u(g,{width:320,class:"example_3",onIsDragging:e.isDragging,onDragging:e.resizingCol},{default:c(()=>[m(f(i.data_3),1)]),_:1},8,["onIsDragging","onDragging"]),Ce,u(o,{font_size:"16px",width:"100%",value:i.example_3,read_only:!0,languages:[["html","template"]]},null,8,["value"]),be,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_3_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),Re,u(p,{width:"100%",class:"example_4",onIsDragging:e.isDragging,onDragging:e.resizingRow},{default:c(()=>[m(f(i.data_4),1)]),_:1},8,["onIsDragging","onDragging"]),xe,u(o,{font_size:"16px",width:"100%",value:i.example_4,read_only:!0,languages:[["html","template"]]},null,8,["value"]),ze,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_4_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),Pe,u(S,{width:320,class:"example_5",onIsDraggingRow:e.isDragging,onIsDraggingCol:e.isDragging,onDraggingRow:e.resizingR,onDraggingCol:e.resizingC},{default:c(()=>[m(f(e.data_5),1)]),_:1},8,["onIsDraggingRow","onIsDraggingCol","onDraggingRow","onDraggingCol"]),Se,u(o,{font_size:"16px",width:"100%",value:i.example_5,read_only:!0,languages:[["html","template"]]},null,8,["value"]),We,u(o,{font_size:"16px",hide_header:!0,width:"100%",value:i.example_5_1,read_only:!0,languages:[["javascript","JS"]]},null,8,["value"]),He,u(S,{width:320},{default:c(()=>[u(r,{height:"100%",width:"100%"},{top:c(()=>[u(d,{height:"100%",width:"100%",leftPercent:30},{left:c(()=>[]),right:c(()=>[]),_:1})]),bottom:c(()=>[u(d,{height:"100%",width:"100%",leftPercent:70},{left:c(()=>[]),right:c(()=>[]),_:1})]),_:1})]),_:1}),Be,u(o,{font_size:"16px",width:"100%",value:i.example_6,read_only:!0,languages:[["html","template"]]},null,8,["value"]),Ne,u(o,{font_size:"16px",wrap_code:!0,width:"100%",value:i.example_7,read_only:!0,languages:[["html","template"]]},null,8,["value"])])],64)}var Te=v(ae,[["render",Ie]]);F(Te).mount("#app");
