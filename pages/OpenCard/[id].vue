<script>
export default {
  data() {
    return {
      card: '',
      isHook: false,
    };
  },
  methods: {
    async realiseAnime() {
      let id = useRoute().params.id;
      let response = await $fetch('/api/anime/realese', {
        query: {
          id: id,
        },
      });
      this.card = response;
      console.log(response);
    },
    time(){
      let duration = 0
      this.card.episodes.forEach(el => {
        duration += el.duration
      });
      return Math.floor((duration / this.card.episodes.length) / 60)
    }
  },
  mounted() {
    this.realiseAnime();
  },
  watch: {
    card: {
      immediate: true,
      handler(newQuestion, oldQuestion){
        if (newQuestion){
          this.isHook = true
        }
      }
    },
  },
};
</script>
<template>
  <div class="wrapper-open-card">
    <div class="open-card" v-if="isHook">
      <nuxt-picture
        :src="'https://anilibria.top/' + card.poster.optimized.src"
        width="400px"
        height="400px"
        sizes="xs:50px md:200px lg:500px"
      />
      <div class="description">
        <h1>{{ card.name.main }}</h1>
        <p class="mb-7">{{ card.name.english }}</p>
        <p class="mb-3">
          {{ card.episodes.length }} эп. по ~
          {{ time() }} мин.
        </p>
        <p class="mb-3">{{ card.notification }}</p>
        <p v-for="item in card.genres">{{ item.name }}</p>
      </div>
    </div>
    <p class="description" v-if="isHook">
      {{ card.description }}
    </p>
    <div class="episods">
      <div v-for="item in card.episodes">
          <img :src="'https://anilibria.top/' + item.preview.optimized.src">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5 0L9 7.5v9z" clip-rule="evenodd"/></svg>
      </div>
    </div>

    <!-- <video controls playsinline autoplay preload="auto" crossorigin="anonymous" width="250" src="https://cache-rfn.libria.fun/videos/media/ts/9314/1/1080/f5d69ce315f635bcbf7ca8ae3341ec66.m3u8?isWithAds=1&countryIso=RU&isAuthorized=0"></video> -->

    <div class="open-card" v-if="!isHook">
      <USkeleton class="h-[400px] w-[300px]" />

      <div class="description">
        <USkeleton class="h-6 w-[50%] mb-5" />
        <USkeleton class="h-4 w-[200px] mb-10" />
        <p class="mb-3">
          <USkeleton class="h-4 w-[200px]" />
        </p>
        <USkeleton class="h-4 w-[200px]" />
      </div>
    </div>
    <p class="description" v-if="!isHook">
      <USkeleton class="h-8 w-[100%]" />
    </p>
  </div> 
</template>
<style>

svg{
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 10px);
}

.episods{
  padding: 40px;
}

.episods div{
  height: 200px;
  width: 300px;
  position: relative;
  cursor: pointer;
}

.open-card img {
  border-radius: 1rem;
}

.wrapper-open-card {
  background-color: #181818;
  border-radius: 10px;
}

.wrapper-open-card .description {
  padding: 20px;
}

h1 {
  font-size: 1.1rem;
}

p:nth-child(2) {
  color: #a5a5a5;
}

.open-card {
  width: 100%;
  display: flex;
  padding: 40px;
}

.open-card .description {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.open-card h1 {
  text-align: left;
}

/* nav ul{
    justify-content: left;
    gap: 17%;
} */
</style>
