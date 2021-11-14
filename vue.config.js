<<<<<<< HEAD
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
=======
module.exports = {
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
>>>>>>> 6910d57b30bb80962e9186d09ca1a89fb6f52181
}