<script setup>
// export default {};
definePageMeta({
  middleware: ['auth'],
});
</script>
<template>
  <div class="relative">
    <AppAlert :alert="'Просто не успел. Много чего еще нужно доделать'" />
    <h1 class="text-[2rem] text-center">В разработке</h1>
  </div>
</template>
<style></style>
