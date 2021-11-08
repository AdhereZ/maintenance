module.exports = {
  publicPath: './',
  css: {
      loaderOptions: {
        css: {},
        postcss: {
      plugins: [
        require("postcss-px2rem")({
          remUnit: 192
        })
      ]
    }
      }
  },
  // 设置别名
  configureWebpack: {
    resolve: {
      alias: {
        "assets": '@/assets',
        "common": '@/common',
        "components": '@/components',
        "views": '@/views',
        "network": '@/network',
      }
    }
  },
}