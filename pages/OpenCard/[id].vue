<script>
export default {
  data() {
    return {
      card: '',
      isHook: false,
      itemid: "",
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
      this.itemid = this.card.episodes[0].id
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
        :src="'https://anilibria.wtf/' + card.poster.optimized.src"
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
    <div class="episods flex flex-wrap gap-5 mx-5 mb-5" v-if="card.episodes">
      <div class="episod" v-for="(item, i) in card.episodes">
          <nuxt-link to="#player" @click="itemid = item.id">
            <div class="number">{{ i+1 }} серия</div>
            <img class="poster" v-if="item.preview.optimized.src" :src="'https://anilibria.wtf/' + item.preview.optimized.src">
            <div v-else="!item.preview.optimized.src" class="cover w-[100%] h-[168px]"></div>
            <img class=" logo w-[120px]" v-if="!item.preview.optimized.src" src="~/public/logo-without.png">
          </nuxt-link>
        </div>
    </div>
    <div class="wrap-player flex justify-center px-5 relative" v-if="itemid">
      <img class="w-[50px] h-[auto] absolute top-3 left-[70px] bg-black" src="~/public/logo-without.png" alt="">
      <iframe id="player" class="mfp-iframe w-[100%] h-[400px] rounded-[1rem]" scrolling="no" frameborder="0" allowfullscreen="" :src="'https://anilibria.wtf/anime/video/episode/'+itemid"></iframe>
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

@media (max-width: 1134px) {
  .wrap-player img{
    left: 30px;
  }
}

svg{
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 10px);
}

.logo{
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 54px);
  filter: blur(3px);
  opacity: 0.5;
}

.number{
  position: absolute;
  top: calc(50% - 15px);
  left: 0;
  z-index: 1;
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  text-align: center;
}

.cover{
  filter: blur(4px);
  opacity: 0.5;
  background: #494949;
}

.episods{
  padding: 40px;
  background: #212121;
  border-radius: 1rem;
}

.episods .episod{
  width: 300px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid #171717;
}
.episods .episod:hover{
  box-shadow: inset #fff 0px 1px 15px 8px;
  transition: all 300ms;
}

.episods .poster{
  border-radius: 1rem;
  filter: blur(4px);
  opacity: 0.5;
}

.open-card .poster {
  border-radius: 1rem;
}

.wrapper-open-card {
  background-color: #181818;
  border-radius: 10px;
  padding-bottom: 40px;
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
