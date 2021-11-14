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
}