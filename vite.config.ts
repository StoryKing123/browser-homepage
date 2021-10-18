import { defineConfig } from "vite";

import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        proxy: {
            "/baiduapi": {
                target: "https://www.baidu.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/baiduapi/, ""),
            },
        },
    },
    plugins: [reactRefresh()],
});
