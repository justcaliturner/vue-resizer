<template>
  <div class="resize_col" :style="{ width: reWidth + 'px', height: height }">
    <div class="resize_col_body">
      <slot></slot>
    </div>
    <div
      class="slider_col"
      @touchstart.passive="mobileResizeCol"
      @mousedown="resizeCol"
      :style="{
        width: sliderWidth + 'px',
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "ResizeCol",
  props: {
    sliderWidth: {
      type: Number,
      default: 20,
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: String,
      default: "400px",
    },
    sliderColor: {
      type: String,
      default: "#6f808d",
    },
    sliderBgColor: {
      type: String,
      default: "#1f2e3a",
    },
    sliderHoverColor: {
      type: String,
      default: "#6f808d",
    },
    sliderBgHoverColor: {
      type: String,
      default: "#16222a",
    },
  },
  data() {
    return {
      reWidth: this.width,
      isDragging: false,
    };
  },
  methods: {
    mobileResizeCol(e) {
      e = e || window.event;
      e.stopPropagation();
      let oldPos = e.changedTouches[0].clientX;
      let oldWidth = this.reWidth;
      let newPos = 0;
      let newWidth = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDragging", this.isDragging);
      document.ontouchmove = sliderDrag;
      document.ontouchend = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.stopPropagation();
        newPos = e.changedTouches[0].clientX;
        const movingDistance = oldPos - newPos;
        newWidth = parseInt(oldWidth - movingDistance);
        if (newWidth <= 20) {
          vue.reWidth = 20;
        } else {
          vue.reWidth = newWidth;
        };
        vue.$emit("dragging", vue.reWidth);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDragging", vue.isDragging);
        document.ontouchmove = null;
        document.ontouchend = null;
      }
    },
    resizeCol(e) {
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      let oldPos = e.clientX;
      let oldWidth = this.reWidth;
      let newPos = 0;
      let newWidth = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDragging", this.isDragging);
      document.onmousemove = sliderDrag;
      document.onmouseup = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();
        newPos = e.clientX;
        const movingDistance = oldPos - newPos;
        newWidth = parseInt(oldWidth - movingDistance);
        if (newWidth <= 20) {
          vue.reWidth = 20;
        } else {
          vue.reWidth = newWidth;
        };
        vue.$emit("dragging", vue.reWidth);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDragging", vue.isDragging);
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
  },
};
</script>
<style>
.resize_col {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: 20px;
}
.resize_col * {
  box-sizing: border-box;
}
.resize_col_body {
  width: 100%;
  height: 100%;
}
.resize_col > .slider_col {
  transition: background 0.2s;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  cursor: col-resize;
  height: 100%;
  background: v-bind("sliderBgColor");
}
.resize_col > .slider_col:before {
  transition: background-color 0.2s;
  position: absolute;
  top: 50%;
  left: 31%;
  transform: translateY(-50%);
  content: "";
  display: block;
  width: 1px;
  height: 24%;
  min-height: 30px;
  max-height: 70px;
  background-color: v-bind("sliderColor");
}
.resize_col > .slider_col:after {
  transition: background-color 0.2s;
  position: absolute;
  top: 50%;
  right: 31%;
  transform: translateY(-50%);
  content: "";
  display: block;
  width: 1px;
  height: 24%;
  min-height: 30px;
  max-height: 70px;
  background-color: v-bind("sliderColor");
}
.resize_col > .slider_col:hover:before,
.resize_col > .slider_col:hover:after,
.resize_col > .slider_col:active:before,
.resize_col > .slider_col:active:after {
  background-color: v-bind("sliderHoverColor");
}
.resize_col > .slider_col:hover,
.resize_col > .slider_col:active {
  background: v-bind("sliderBgHoverColor");
}
</style>