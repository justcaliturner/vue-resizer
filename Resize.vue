<template>
  <div
    class="resize"
    :style="{
      height: reHeight + 'px',
      width: reWidth + 'px',
    }"
  >
    <div class="resize_body">
      <slot></slot>
    </div>
    <div
      class="slider_row"
      @touchstart.passive="mobileResizeRow"
      @mousedown="resizeRow"
      :style="{
        height: sliderWidth + 'px',
      }"
    ></div>
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
  name: "Resize",
  props: {
    sliderWidth: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 400,
    },
    width: {
      type: Number,
      default: 400,
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
      reHeight: this.height,
      isDragging: false,
    };
  },
  methods: {
    mobileResizeRow(e) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehaviorY = "contain";
      e = e || window.event;
      e.stopPropagation();
      let oldPos = e.changedTouches[0].clientY;
      let oldHeight = this.reHeight;
      let newPos = 0;
      let newHeight = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDraggingRow", this.isDragging);
      document.ontouchmove = sliderDrag;
      document.ontouchend = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.stopPropagation();
        newPos = e.changedTouches[0].clientY;
        const movingDistance = oldPos - newPos;
        newHeight = parseInt(oldHeight - movingDistance);
        if (newHeight <= 20) {
          vue.reHeight = 20;
        } else {
          vue.reHeight = newHeight;
        };
        vue.$emit("draggingRow", vue.reHeight);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDraggingRow", vue.isDragging);
        document.body.style.overflow = "";
        document.body.style.overscrollBehaviorY = "";
        document.ontouchmove = null;
        document.ontouchend = null;
      }
    },
    resizeRow(e) {
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      let oldPos = e.clientY;
      let oldHeight = this.reHeight;
      let newPos = 0;
      let newHeight = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDraggingRow", this.isDragging);
      document.onmousemove = sliderDrag;
      document.onmouseup = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.preventDefault();
        e.stopPropagation();
        newPos = e.clientY;
        const movingDistance = oldPos - newPos;
        newHeight = parseInt(oldHeight - movingDistance);
        if (newHeight <= 20) {
          vue.reHeight = 20;
        } else {
          vue.reHeight = newHeight;
        };
        vue.$emit("draggingRow", vue.reHeight);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDraggingRow", vue.isDragging);
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
    mobileResizeCol(e) {
      e = e || window.event;
      e.stopPropagation();
      let oldPos = e.changedTouches[0].clientX;
      let oldWidth = this.reWidth;
      let newPos = 0;
      let newWidth = 0;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDraggingCol", this.isDragging);
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
        vue.$emit("draggingCol", vue.reWidth);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDraggingCol", vue.isDragging);
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
      this.$emit("isDraggingCol", this.isDragging);
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
        vue.$emit("draggingCol", vue.reWidth);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDraggingCol", vue.isDragging);
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
  },
};
</script>
<style>
.resize {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 20px 20px 0;
}
.resize * {
  box-sizing: border-box;
}
.resize_body {
  width: 100%;
  height: 100%;
}
.resize > .slider_row {
  transition: background 0.2s;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  cursor: row-resize;
  background: v-bind("sliderBgColor");
}
.resize > .slider_col {
  transition: background 0.2s;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  cursor: col-resize;
  height: 100%;
  background: v-bind("sliderBgColor");
}
.resize > .slider_col:before {
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
.resize > .slider_col:after {
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
.resize > .slider_col:hover:before,
.resize > .slider_col:hover:after,
.resize > .slider_col:active:before,
.resize > .slider_col:active:after {
  background-color: v-bind("sliderHoverColor");
}
.resize > .slider_col:hover,
.resize > .slider_col:active {
  background: v-bind("sliderBgHoverColor");
}
.resize > .slider_row:before {
  transition: background-color 0.2s;
  position: absolute;
  left: 50%;
  top: 31%;
  transform: translateX(-50%);
  content: "";
  display: block;
  height: 1px;
  width: 24%;
  min-width: 30px;
  max-width: 70px;
  background-color: v-bind("sliderColor");
}
.resize > .slider_row:after {
  transition: background-color 0.2s;
  position: absolute;
  left: 50%;
  bottom: 31%;
  transform: translateX(-50%);
  content: "";
  display: block;
  height: 1px;
  width: 24%;
  min-width: 30px;
  max-width: 70px;
  background-color: v-bind("sliderColor");
}
.resize > .slider_row:hover:before,
.resize > .slider_row:hover:after,
.resize > .slider_row:active:before,
.resize > .slider_row:active:after {
  background-color: v-bind("sliderHoverColor");
}
.resize > .slider_row:hover,
.resize > .slider_row:active {
  background: v-bind("sliderBgHoverColor");
}
</style>