<script>
export default {};
</script>
<template>
  <AppHeader></AppHeader>
  <div class="wrapper">
    <slot> </slot>
  </div>
  <AppFooter></AppFooter>
</template>
<style>
.wrapper {
  padding: 100px 60px;
}

</style>
