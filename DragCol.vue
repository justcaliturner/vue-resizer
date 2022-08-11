<template>
  <div
    class="drager_col"
    ref="container"
    :style="{ width: width, height: height }"
  >
    <div class="drager_left" :style="{ width: left + '%' }">
      <div>
        <slot name="left"></slot>
      </div>
    </div>
    <div
      class="slider_col"
      @touchstart.passive="mobileDragCol"
      @mousedown="dragCol"
      :style="{
        width: sliderWidth + 'px',
        marginLeft: -sliderWidth / 2 + 'px',
        marginRight: -sliderWidth / 2 + 'px',
      }"
    ></div>
    <div class="drager_right" :style="{ width: 100 - left + '%' }">
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DragCol",
  props: {
    leftPercent: {
      type: Number,
      default: 50,
    },
    sliderWidth: {
      type: Number,
      default: 20,
    },
    width: {
      type: String,
      default: "400px",
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
      left: this.leftPercent,
      isDragging: false,
    };
  },
  methods: {
    mobileDragCol(e) {
      e = e || window.event;
      e.stopPropagation();
      let oldPos = e.changedTouches[0].clientX;
      let oldPosPercent = this.left;
      let newPos = 0;
      let newPosPercent = 0;
      const containerWidth = this.$refs.container.offsetWidth;
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
        const movingDistancePercent = parseFloat(
          (((oldPos - newPos) / containerWidth) * 100).toFixed(3)
        );
        newPosPercent = oldPosPercent - movingDistancePercent;
        if (newPosPercent <= 0) {
          vue.left = 0;
        } else if (newPosPercent >= 100) {
          vue.left = 100;
        } else {
          vue.left = newPosPercent;
        }
        vue.$emit("dragging", vue.left);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDragging", vue.isDragging);
        document.ontouchmove = null;
        document.ontouchend = null;
      }
    },
    dragCol(e) {
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      let oldPos = e.clientX;
      let oldPosPercent = this.left;
      let newPos = 0;
      let newPosPercent = 0;
      const containerWidth = this.$refs.container.offsetWidth;
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
        const movingDistancePercent = parseFloat(
          (((oldPos - newPos) / containerWidth) * 100).toFixed(3)
        );
        newPosPercent = oldPosPercent - movingDistancePercent;
        if (newPosPercent <= 0) {
          vue.left = 0;
        } else if (newPosPercent >= 100) {
          vue.left = 100;
        } else {
          vue.left = newPosPercent;
        }
        vue.$emit("dragging", vue.left);
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
.drager_col {
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
}
.drager_col * {
  box-sizing: border-box;
}
.drager_col > div {
  height: 100%;
}
.drager_left {
  padding-right: 10px;
}
.drager_left > div {
  height: 100%;
  overflow: hidden;
}
.drager_right {
  padding-left: 10px;
}
.drager_right > div {
  height: 100%;
  overflow: hidden;
}
.drager_col > .slider_col {
  transition: background 0.2s;
  position: relative;
  z-index: 1;
  cursor: col-resize;
  background: v-bind("sliderBgColor");
}
.drager_col > .slider_col:before {
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
.drager_col > .slider_col:after {
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
.drager_col > .slider_col:hover:before,
.drager_col > .slider_col:hover:after,
.drager_col > .slider_col:active:before,
.drager_col > .slider_col:active:after {
  background-color: v-bind("sliderHoverColor");
}
.drager_col > .slider_col:hover,
.drager_col > .slider_col:active {
  background: v-bind("sliderBgHoverColor");
}
</style>