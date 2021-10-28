<template>
  <div class="banner">
    <el-carousel :interval="4000" height="1080px">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <div class="bannerImg">
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
        },
        {
          deceration: 'banner4',
          src: require('/src/assets/uploads/4.png'),
          id: 4
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.banner {
  .bannerImg {
    width: 1920px;
  }
}
</style>