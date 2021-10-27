<template>
  <div class="container">
    <div class="innerWrapper">
      <span class="title">{{ title }}</span>
      <slot name="content"></slot>
      <slot name="operation"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang='less' scoped>
.container {
  min-height: 200px;
  padding: 22px;
  background: white;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}
.innerWrapper {
  border-left: 1px solid #e3e3e3;
  border-top: 1px solid #e3e3e3;
  position: relative;
  flex: 1;
  padding-top: 40px;
}
.title {
  position: absolute;
  background: white;
  font-size: 28px;
  top: -20px;
  left: 20px;
  font-weight: bold;
}
</style>