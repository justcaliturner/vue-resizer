# vue-resizer
A series of the resizer components for Vue.js

[For all the usages please check the website](vue-resizer.vicuxd.com)

Example:

```html
<!-- Usage -->
<DragerCol>
  <template #left>
    <!-- your content -->
  </template>
  <template #right>
    <!-- your content -->
  </template>
</DragerCol>
```

```js
// Props
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
```