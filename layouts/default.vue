<template>
  <div>
    <div class="wrapper">
      <TheHeader class="web-header"/>
      <NuxtPage class="web-body"/>
      <TheFooter class="web-footer"/>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center
}
.web-header {
  height: 70px;
}
.web-body {
  flex: 1;
}
.web-footer {
  height: 100px;
}
</style>
