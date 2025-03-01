<script>
export default {
  props:{
      category: String
  },
  data(){
    return {
        CARD: [],
        findCtgr:{
          "Фильмы": "MOVIE",
          "Сериалы": "TV",
          "OVA": "OVA",
          "Спец выпуски": "SPECIAL",
        }
    }
  },
  methods:{
    async loadAnime(){
      let response = await $fetch("/api/anime",{
        query:{
          type: this.findCtgr[this.category],
          limit: "15",
          page: "1",
          isSearch: false,
        }
      }) 
      this.CARD = response.data
      console.log(response)
    }
  },
  mounted(){
    this.loadAnime()
  }
};
</script>
<template>
  <div class="carusel-block">
    <h2><nuxt-link :to="'/OpenCategory/'+findCtgr[category].toLowerCase()">{{ category }}</nuxt-link></h2>
    <div class="carusel-wrap">
      <div class="carusel">
        <AppCard v-for="(item, i) in CARD"
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
    </div>
  </div>
</template>
<style>

.carusel-block{
  margin-bottom: 2rem;
}

h2 {
  padding: 0 0 20px 20px;
  font-size: 20px;
}

.card {
  flex: none;
}

.carusel-wrap {
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
  padding: 30px 0
}

.carusel {
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  padding: 0px 20px;
}
</style>
