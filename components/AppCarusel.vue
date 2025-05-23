<script>
export default {
  props: {
    category: String,
  },
  data() {
    return {
      CARD: [],
      findCtgr: {
        Фильмы: 'MOVIE',
        Сериалы: 'TV',
        OVA: 'OVA',
        'Спец выпуски': 'SPECIAL',
      },
    };
  },
  methods: {
    async loadAnime() {
      let response = await $fetch('/api/anime', {
        query: {
          type: this.findCtgr[this.category],
          limit: '15',
          page: '1',
          isSearch: false,
        },
      });
      this.CARD = response.data;
      console.log(response);
    },
    scrollCarousel(distance) {
      if (this.$refs.carousel) {
        this.$refs.carousel.scrollBy({ left: distance, behavior: 'smooth' });
      }
    },
  },
  mounted() {
    this.loadAnime();
  },
};
</script>
<template>
  <div class="carusel-block">
    <h2>
      <nuxt-link :to="'/OpenCategory/' + findCtgr[category].toLowerCase()">{{
        category
      }}</nuxt-link>
    </h2>
    <div class="carusel-wrap relative">
      <div
        class="area area-prev left-0 rounded-tr-[100%] rounded-br-[100%]"
        v-if="CARD[0]"
      >
        <div class="prev" @click="scrollCarousel(-500)">
          <div class="line rotate-[-45deg]"></div>
          <div class="line rotate-45"></div>
        </div>
      </div>
      <div class="carusel" ref="carousel">
        <AppCard
          v-for="(item, i) in CARD"
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
      <div
        class="area area-next right-0 rounded-tl-[100%] rounded-bl-[100%]"
        v-if="CARD[0]"
      >
        <div class="next" @click="scrollCarousel(500)">
          <div class="line rotate-45"></div>
          <div class="line rotate-[-45deg]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.area {
  width: 200px;
  height: 460px;
  background: transparent;
  position: absolute;
  top: calc(50% - 230px);
  z-index: 1;
}

.area-prev:hover .prev {
  opacity: 1;
  visibility: visible;
  transition: all 300ms;
}
.area-next:hover .next {
  opacity: 1;
  visibility: visible;
  transition: all 300ms;
}

.line {
  background-color: #fff;
  width: 10px;
  height: 2px;
}

/* .carusel-wrap:hover .prev,
.carusel-wrap:hover .next {
  opacity: 1;
  visibility: visible;
  transition: all 300ms;
} */

.prev:hover,
.next:hover {
  width: 35px;
}

.prev {
  opacity: 0;
  visibility: hidden;
  transition: all 300ms;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: calc(50% - 230px);
  height: 460px;
  width: 25px;
  z-index: 1;
  background: rgb(102 102 102 / 34%);
  border-radius: 0 0.5rem 0.5rem 0;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
}

.next {
  opacity: 0;
  visibility: hidden;
  transition: all 300ms;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: calc(50% - 230px);
  height: 460px;
  width: 25px;
  z-index: 1;
  background: rgb(102 102 102 / 34%);
  border-radius: 0.5rem 0 0 0.5rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
}

.carusel-block {
  margin-bottom: 2rem;
}

h2:hover{
  transition: all 300ms;
  /* font-size: 25px; */
  transform: scale(120%);
  /* padding-bottom: 15px; */
}

h2 {
  padding: 0 0 20px 20px;
  transition: all 300ms;
  font-size: 20px;
  display: inline-block;
}

.card {
  flex: none;
}

.carusel-wrap {
  width: 100%;
  padding: 30px 0;
  overflow: hidden;
}

.carusel {
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  scrollbar-width: none;
  overflow-x: scroll;
  padding: 25px 20px;
}
</style>
