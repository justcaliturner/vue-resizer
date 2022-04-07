<template>
  <div
    class="drager_row"
    ref="container"
    :style="{ width: width, height: height }"
  >
    <div class="drager_top" :style="{ height: top + '%' }">
      <div>
        <slot name="top"></slot>
      </div>
    </div>
    <div
      class="slider_row"
      @touchstart.passive="mobileDragRow"
      @mousedown="dragRow"
      :style="{
        height: sliderWidth + 'px',
        marginTop: -sliderWidth / 2 + 'px',
        marginBottom: -sliderWidth / 2 + 'px',
      }"
    ></div>
    <div class="drager_bottom" :style="{ height: 100 - top + '%' }">
      <div>
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DragRow",
  props: {
    topPercent: {
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
      top: this.topPercent,
      isDragging: false,
    };
  },
  methods: {
    mobileDragRow(e) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehaviorY = "contain";
      e = e || window.event;
      e.stopPropagation();
      let oldPos = e.changedTouches[0].clientY;
      let oldPosPercent = this.top;
      let newPos = 0;
      let newPosPercent = 0;
      const containerHeight = this.$refs.container.offsetHeight;
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
        newPos = e.changedTouches[0].clientY;
        const movingDistancePercent = parseFloat(
          (((oldPos - newPos) / containerHeight) * 100).toFixed(3)
        );
        newPosPercent = oldPosPercent - movingDistancePercent;
        if (newPosPercent <= 0) {
          vue.top = 0;
        } else if (newPosPercent >= 100) {
          vue.top = 100;
        } else {
          vue.top = newPosPercent;
        }
        vue.$emit("dragging", vue.top);
      }
      function cancelSliderDrag() {
        vue.isDragging = false;
        vue.$emit("isDragging", vue.isDragging);
        document.body.style.overflow = "";
        document.body.style.overscrollBehaviorY = "";
        document.ontouchmove = null;
        document.ontouchend = null;
      }
    },
    dragRow(e) {
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      let oldPos = e.clientY;
      let oldPosPercent = this.top;
      let newPos = 0;
      let newPosPercent = 0;
      const containerHeight = this.$refs.container.offsetHeight;
      const vue = this;
      this.isDragging = true;
      this.$emit("isDragging", this.isDragging);
      document.onmousemove = sliderDrag;
      document.onmouseup = cancelSliderDrag;
      function sliderDrag(e) {
        if (this.time && Date.now() - this.time < 40) return;
        this.time = Date.now();
        e = e || window.event;
        e.stopPropagation();
        newPos = e.clientY;
        const movingDistancePercent = parseFloat(
          (((oldPos - newPos) / containerHeight) * 100).toFixed(3)
        );
        newPosPercent = oldPosPercent - movingDistancePercent;
        if (newPosPercent <= 0) {
          vue.top = 0;
        } else if (newPosPercent >= 100) {
          vue.top = 100;
        } else {
          vue.top = newPosPercent;
        }
        vue.$emit("dragging", vue.top);
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
.drager_row {
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.drager_row * {
  box-sizing: border-box;
}
.drager_row > div {
  width: 100%;
}
.drager_top {
  padding-bottom: 10px;
}
.drager_top > div {
  height: 100%;
  overflow: hidden;
}
.drager_bottom {
  padding-top: 10px;
}
.drager_bottom > div {
  height: 100%;
  overflow: hidden;
}
.drager_row > .slider_row {
  transition: background 0.2s;
  position: relative;
  z-index: 1;
  cursor: row-resize;
  background: v-bind("sliderBgColor");
}
.drager_row > .slider_row:before {
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
.drager_row > .slider_row:after {
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
.drager_row > .slider_row:hover:before,
.drager_row > .slider_row:hover:after,
.drager_row > .slider_row:active:before,
.drager_row > .slider_row:active:after {
  background-color: v-bind("sliderHoverColor");
}
.drager_row > .slider_row:hover,
.drager_row > .slider_row:active {
  background: v-bind("sliderBgHoverColor");
}
</style>