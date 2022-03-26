<template>
  <div class="container">
    <h1>Vue Slider</h1>
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
    <h2>Examples</h2>
    <!-- DragerCol -->
    <DragerCol
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
    </DragerCol>
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
    <!-- DragerRow -->
    <DragerRow
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
    </DragerRow>
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
    <p>They can be nested freely</p>
    <Resize :width="320">
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
  </div>
</template>

<script>
import hljs from "highlight.js";
import CodeEditor from "simple-code-editor";
import DragerCol from "./components/DragerCol.vue";
import DragerRow from "./components/DragerRow.vue";
import ResizeCol from "./components/ResizeCol.vue";
import ResizeRow from "./components/ResizeRow.vue";
import Resize from "./components/Resize.vue";

export default {
  components: {
    DragerCol,
    DragerRow,
    ResizeCol,
    ResizeRow,
    Resize,
    CodeEditor,
  },
  data() {
    return {
      example: `import DragerCol from "vue-slider";
import DragerRow from "vue-slider";
import ResizeCol from "vue-slider";
import ResizeRow from "vue-slider";
import Resize from "vue-slider";
`,
      example_1: `<!-- Usage -->
<DragerCol>
  <template #left>
    <!-- your content -->
  </template>
  <template #right>
    <!-- your content -->
  </template>
</DragerCol>`,
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
      example_2: `<DragerRow>
  <template #top>
    <!-- your content -->
  </template>
  <template #bottom>
    <!-- your content -->
  </template>
</DragerRow>`,
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
</Resize>`,
      install: `npm install vue-slider`,
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
  margin: 60px 0;
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
