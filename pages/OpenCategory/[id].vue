<script>
export default {
  data() {
    return {
      CARD: [],
      current_page: 1,
      total_pages: 1, 
      findCtgr:{
          "movie": "Фильмы",
          "tv": "Сериалы",
          "ova": "OVA",
          "special": "Спец выпуски",
        }
    };
  },
  methods: {
    async loadAnime() {
      let category = useRoute().params.id.toUpperCase();
      let response = await $fetch('/api/anime', {
        query: {
          limit: '50',
          page: this.current_page,
          type: category,
        },
      });
      this.CARD = response.data;
      this.total_pages = response.meta.pagination.total_pages
      // this.storage()
      console.log(response.meta)
    },
    // storage(){
    //   if (this.current_page > 1){
    //     localStorage.setItem("pagination", this.current_page)
    //   }else if (localStorage.getItem("pagination")){
    //     console.log(localStorage.getItem("pagination"))
    //     this.current_page = localStorage.getItem("pagination")
    //   }
    // }
  },
  mounted() {
    this.loadAnime();
  },
  watch:{
    current_page: {
      handler(newQuestion, oldQuestion){
        if (newQuestion){
          this.loadAnime()
        }
      }
    }
  }
};

</script>
<template>
  <h1>{{ findCtgr[useRoute().params.id] }}</h1>
  <div class="anime mb-8">
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
  <div class="pagination">
    <UPagination v-model="current_page" :page-count="1" :total="total_pages" />
  </div>
</template>
<style>
.pagination button {
  background-color: #181818 !important;
  color: #fff !important;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 2.5rem !important;
}
.anime {
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
