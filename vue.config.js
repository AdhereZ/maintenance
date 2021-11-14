module.exports = {
  publicPath: '/',
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
  //跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://106.12.19.82:9000',
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
}