import { defineConfig } from "vite";
import components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: "less",
        }),
      ],
      dts: false,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
