<script>
export default {
  props: {
    alert: Text,
  },
  data() {
    return {
      isAlert: 0,
    };
  },
};
</script>
<template>
  <div class="alert flex justify-end gap-3 absolute right-0">
    <div
      class="w-[30px] h-[30px] text-[30px] border-solid border-[2px] border-[#717171] p-5 text-red-600 flex justify-center items-center cursor-pointer"
      @click="isAlert = !isAlert"
    >
      !
    </div>
    <p
      :class="{
        'opacity-1 w-[300px] text-[11px]': isAlert,
        'opacity-0 w-0 transition-all text-[11px]': !isAlert,
      }"
      v-if="isAlert"
    >
      {{ alert }}
    </p>
  </div>
</template>
