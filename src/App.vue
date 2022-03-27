<template>
  <a target="_blank" href="https://github.com/justcaliturner/vue-resizer"
    ><svg
      width="80"
      height="80"
      viewBox="0 0 250 250"
      style="
        fill: #61aeee;
        color: #fff;
        position: absolute;
        top: 0;
        border: 0;
        right: 0;
      "
    >
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path
        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
        fill="currentColor"
        style="transform-origin: 130px 106px"
        class="octo-arm"
      ></path>
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill="currentColor"
        class="octo-body"
      ></path></svg
  ></a>

  <div class="container">
    <h1>Vue Resizer</h1>
    <p>A series of the resizer components for Vue.js</p>
    <CodeEditor
      width="100%"
      :value="install"
      :read_only="true"
      :languages="[['shell', 'NPM']]"
    />
    <br />
    <CodeEditor
      width="100%"
      :value="example"
      :read_only="true"
      font_size="16px"
      :languages="[['javascript', 'JS']]"
    />
    <a
      href="https://github.com/justcaliturner/vue-resizer"
      target="_blank"
      class="link"
    >
      <span>View on Github</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-right"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
    <h2>Examples</h2>
    <!-- DragCol -->
    <DragCol
      class="example_1"
      @isDragging="isDragging"
      @dragging="draggingCol"
      width="100%"
    >
      <template #left>
        <!-- your content -->
        {{ data_1 }}
      </template>
      <template #right>
        <!-- your content -->
        {{ data_1_1 }}
      </template>
    </DragCol>
    <br />
    <CodeEditor
      font_size="16px"
      width="100%"
      :value="example_1"
      :read_only="true"
      :languages="[['html', 'template']]"
    />
    <br />
    <CodeEditor
      font_size="16px"
      :hide_header="true"
      width="100%"
      :value="example_1_1"
      :read_only="true"
      :languages="[['javascript', 'JS']]"
    />
    <br />
    <!-- DragRow -->
    <DragRow
      class="example_2"
      @isDragging="isDragging"
      @dragging="draggingRow"
      width="100%"
    >
      <template #top>
        <!-- your content -->
        {{ data_2 }}
      </template>
      <template #bottom>
        <!-- your content -->
        {{ data_2_1 }}
      </template>
    </DragRow>
    <br />
    <CodeEditor
      font_size="16px"
      width="100%"
      :value="example_2"
      :read_only="true"
      :languages="[['html', 'template']]"
    />
    <br />
    <CodeEditor
      font_size="16px"
      :hide_header="true"
      width="100%"
      :value="example_2_1"
      :read_only="true"
      :languages="[['javascript', 'JS']]"
    />
    <br />
    <ResizeCol
      :width="320"
      class="example_3"
      @isDragging="isDragging"
      @dragging="resizingCol"
    >
      <!-- your content -->
      {{ data_3 }}
    </ResizeCol>
    <br />
    <CodeEditor
      font_size="16px"
      width="100%"
      :value="example_3"
      :read_only="true"
      :languages="[['html', 'template']]"
    />
    <br />
    <CodeEditor
      font_size="16px"
      :hide_header="true"
      width="100%"
      :value="example_3_1"
      :read_only="true"
      :languages="[['javascript', 'JS']]"
    />
    <br />
    <ResizeRow
      width="100%"
      class="example_4"
      @isDragging="isDragging"
      @dragging="resizingRow"
    >
      <!-- your content -->
      {{ data_4 }}
    </ResizeRow>
    <br />
    <CodeEditor
      font_size="16px"
      width="100%"
      :value="example_4"
      :read_only="true"
      :languages="[['html', 'template']]"
    />
    <br />
    <CodeEditor
      font_size="16px"
      :hide_header="true"
      width="100%"
      :value="example_4_1"
      :read_only="true"
      :languages="[['javascript', 'JS']]"
    />
    <br />
    <Resize
      :width="320"
      class="example_5"
      @isDraggingRow="isDragging"
      @isDraggingCol="isDragging"
      @draggingRow="resizingR"
      @draggingCol="resizingC"
    >
      <!-- your content -->
      {{ data_5 }}
    </Resize>
    <br />
    <CodeEditor
      font_size="16px"
      width="100%"
      :value="example_5"
      :read_only="true"
      :languages="[['html', 'template']]"
    />
    <br />
    <CodeEditor
      font_size="16px"
      :hide_header="true"
      width="100%"
      :value="example_5_1"
      :read_only="true"
      :languages="[['javascript', 'JS']]"
    />
    <!-- Nesting -->
    <h2>Nesting</h2>
    <Resize :width="320">
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
    </Resize>
    <br />
    <CodeEditor
      font_size="16px"
      width="100%"
      :value="example_6"
      :read_only="true"
      :languages="[['html', 'template']]"
    />
    <h3>Real-time State and Data</h3>
    <CodeEditor
      font_size="16px"
      :wrap_code="true"
      width="100%"
      :value="example_7"
      :read_only="true"
      :languages="[['html', 'template']]"
    />
    <a
      href="https://github.com/justcaliturner/vue-resizer"
      target="_blank"
      class="link"
      style="margin-top: 40px"
    >
      <span>View on Github</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-right"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
  </div>
</template>

<script>
import hljs from "highlight.js";
import CodeEditor from "simple-code-editor";
import {
  DragCol,
  DragRow,
  ResizeCol,
  ResizeRow,
  Resize,
} from "./components/index.js";

export default {
  components: {
    DragCol,
    DragRow,
    ResizeCol,
    ResizeRow,
    Resize,
    CodeEditor,
  },
  data() {
    return {
      example: `import {
  DragCol,
  DragRow,
  ResizeCol,
  ResizeRow,
  Resize,
} from "vue-resizer";`,
      example_1: `<!-- Usage -->
<DragCol>
  <template #left>
    <!-- your content -->
  </template>
  <template #right>
    <!-- your content -->
  </template>
</DragCol>`,
      example_1_1: `// Props
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
`,
      example_2: `<DragRow>
  <template #top>
    <!-- your content -->
  </template>
  <template #bottom>
    <!-- your content -->
  </template>
</DragRow>`,
      example_2_1: `props: {
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
}`,
      example_3: `<ResizeCol>
    <!-- your content -->
</ResizeCol>`,
      example_3_1: `props: {
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
}`,
      example_4: `<ResizeRow>
    <!-- your content -->
</ResizeRow>`,
      example_4_1: `props: {
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
}`,
      example_5: `<Resize>
    <!-- your content -->
</Resize>`,
      example_5_1: `props: {
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
  },`,
      example_6: `<Resize>
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
</Resize>`,
      install: `npm install vue-resizer`,
      // show datd
      data_1: "50%",
      data_1_1: "50%",
      data_2: "50%",
      data_2_1: "50%",
      data_3: "320px",
      data_4: "400px",
      data_5_1: "320px",
      data_5_2: "400px",
      // Real-time State and Data
      example_7: `<!-- Open the Console of the browser and drag any slider in the above examples, you will see the real-time states -->

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
-->`,
    };
  },
  computed: {
    data_5() {
      return `${this.data_5_1} * ${this.data_5_2}`;
    },
  },
  methods: {
    // dragging
    draggingCol(data) {
      const value = parseInt(data);
      this.data_1 = value + "%";
      this.data_1_1 = 100 - value + "%";
    },
    draggingRow(data) {
      const value = parseInt(data);
      this.data_2 = value + "%";
      this.data_2_1 = 100 - value + "%";
    },
    resizingCol(data) {
      this.data_3 = data + "px";
    },
    resizingRow(data) {
      this.data_4 = data + "px";
    },
    resizingC(data) {
      this.data_5_1 = data + "px";
    },
    resizingR(data) {
      this.data_5_2 = data + "px";
    },
    isDragging(data) {
      console.log("Dragging: " + data);
    },
  },
};
</script>

<style>
body {
  margin-top: 40px;
  font-family: sans-serif;
  background: #04111b;
}
h1 {
  font-size: 40px;
  text-align: center;
  color: #fff;
}
h2 {
  margin-top: 80px;
  font-size: 30px;
  text-align: center;
  color: #fff;
}
h3 {
  margin-top: 80px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}
p {
  text-align: center;
  color: #9db0c2;
  margin-bottom: 40px;
}
.link {
  transition: color 0.2s;
  color: #6a8299;
  text-align: center;
  display: block;
  text-decoration: none;
  margin: 30px 0;
}
.link > span {
  transition: margin-right 0.2s;
  margin-right: 6px;
  vertical-align: top;
  display: inline-block;
  line-height: 20px;
}
.link > svg {
  vertical-align: top;
}
.link:hover {
  color: #c1d0df;
}
.link:hover > span {
  margin-right: 10px;
}
.container {
  box-sizing: border-box;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
}
.drager_col,
.drager_row,
.resize_col,
.resize_row,
.resize {
  border-radius: 12px;
}
.resize * {
  border-radius: 0;
}
/* example_1 */
.example_1 .drager_left {
  overflow: hidden;
  position: relative;
}
.example_1 .drager_right {
  overflow: hidden;
  position: relative;
}
.example_1 .drager_left > div {
  height: auto;
  font-size: 24px;
  font-weight: bold;
  color: #648192;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.example_1 .drager_right > div {
  height: auto;
  font-size: 24px;
  font-weight: bold;
  color: #89a0af;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* example_2 */
.example_2 .drager_top {
  overflow: hidden;
  position: relative;
}
.example_2 .drager_bottom {
  overflow: hidden;
  position: relative;
}
.example_2 .drager_top > div {
  height: auto;
  font-size: 24px;
  font-weight: bold;
  color: #648192;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.example_2 .drager_bottom > div {
  height: auto;
  font-size: 24px;
  font-weight: bold;
  color: #89a0af;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* example_3 */
.example_3 .resize_col {
  overflow: hidden;
}
.example_3 .resize_col_body {
  height: auto;
  width: auto;
  font-size: 24px;
  font-weight: bold;
  color: #89a0af;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* example_4 */
.example_4 .resize_row {
  overflow: hidden;
}
.example_4 .resize_row_body {
  height: auto;
  width: auto;
  font-size: 24px;
  font-weight: bold;
  color: #89a0af;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* example_5 */
.example_5 .resize {
  overflow: hidden;
}
.example_5 .resize_body {
  height: auto;
  width: 160px;
  font-size: 20px;
  font-weight: bold;
  color: #89a0af;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
