import DragCol from "./DragCol.vue";
import DragRow from "./DragRow.vue";
import ResizeCol from "./ResizeCol.vue";
import ResizeRow from "./ResizeRow.vue";
import Resize from "./Resize.vue";

// 导出所有组件
export {
    DragCol,
    DragRow,
    ResizeCol,
    ResizeRow,
    Resize
};

// 创建默认导出，支持 Vue 插件系统
export default {
    install(app) {
        // 注册所有组件
        const components = {
            DragCol,
            DragRow,
            ResizeCol,
            ResizeRow,
            Resize
        };
        
        // 遍历组件并注册
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        });
    }
};

// 组件版本信息
export const version = '0.0.0';
