import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // 输出目录
    outDir: 'dist',
    // 是否生成源映射文件
    sourcemap: false,
    // 指定压缩方式
    minify: 'terser',
    // 警告的分块大小限制（KB）
    chunkSizeWarningLimit: 1000,
    // Terser 压缩选项
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // 库模式构建
    lib: {
      entry: './src/components/index.js',
      name: 'VueResizer',
      formats: ['es', 'umd'],
      fileName: (format) => format === 'es' ? 'index.es.js' : 'index.umd.js'
    },
    // Rollup 配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 模式下为这些外部依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
