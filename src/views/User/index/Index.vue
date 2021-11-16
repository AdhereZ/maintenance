<template>
  <div class="banner">
    <el-carousel :interval="4000" height="720px" class="bannerImg">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <div>
          <img :src="item.src" :alt="item.deceration">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          deceration: 'banner1',
          src: require('/src/assets/uploads/1.png'),
          id: 1
        },
        {
          deceration: 'banner2',
          src: require('/src/assets/uploads/2.png'),
          id: 2
        },
        {
          deceration: 'banner3',
          src: require('/src/assets/uploads/3.jpg'),
          id: 3
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.banner {
  margin-top: 60px;
  .bannerImg {
    width: 1280px;
    margin: 0 auto;
    img {
      height: 720px;
    }
    /deep/ .el-carousel__button {
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
  }
}
</style>