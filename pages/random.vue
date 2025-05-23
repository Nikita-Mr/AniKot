<script>
export default {
  data() {
    return {
      CARD: [],
      isAlert: 0,
    };
  },
  methods: {
    async loadRandom() {
      localStorage.setItem('random', JSON.stringify([{ random: ''}]));
      await $fetch('/api/anime/random').then((el) => {
        this.CARD = el;
        console.log(el);
        localStorage.setItem(
          'random',
          JSON.stringify([{ random: this.CARD }])
        );
      });
    },
  },
  mounted() {
    if (localStorage.getItem('random')) {
      let response = JSON.parse(localStorage.getItem('random'));
      this.CARD = response[0].random;
    }
  },
};
</script>
<template>
  <div class="wrapp-random mb-5 relative">
    <div class="alert flex justify-end gap-3 absolute right-0">
      <div class="w-[30px] h-[30px] text-[30px] border-solid border-[2px] border-[#717171] p-5 text-red-600 flex justify-center items-center cursor-pointer" @click="isAlert = !isAlert">!</div>
      <p :class="{'opacity-1 w-[300px] text-[11px]': isAlert, 'opacity-0 w-0 transition-all text-[11px]': !isAlert}"  v-if="isAlert">
        Для обновления рандом тайтлов может потребоваться несколько кликов. Приносим прощения это не наша проблема, а API сервера 
      </p>
    </div>
    <button class="random block m-[auto]" @click="loadRandom()">
      Рандомайз
    </button>
  </div>
  <div class="anime">
    <AppCard
      v-for="item in CARD"
      :index="i"
      :id="item.id"
      :title="item.name.main"
      :subtitle="item.name.english"
      :age_rating="item.age_rating.label"
      :description="item.description"
      :epizodes="item.episodes_total"
      :average_duration_of_episode="item.average_duration_of_episode"
      :genres="item.genres"
      :notification="item.notification"
      :poster="item.poster.optimized.src"
    ></AppCard>
  </div>
</template>
<style>
.random:hover {
  transform: scale(110%);
  transition: all 300ms;
}
.random {
  width: 30%;
  padding: 5px 10px;
  border: 1px solid rgb(var(--color-gray-700) / var(--tw-ring-opacity, 1));
  border-radius: 1rem;
  background: #181818;
  transition: all 300ms;
}
</style>
