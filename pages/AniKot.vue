<script lang="js">
export default {
  data() {
    return {
      search: "",
      card:[]
    };
  },
  methods:{
    async loadSearch(){
      let response = await $fetch("/api/anime/search",{
        query:{
          search: this.search
        }
      })
      this.card = response
      this.storage()
      console.log(response)
    },
    storage(){
      if (this.search){
        localStorage.setItem("anime", JSON.stringify([{"card": this.card, "search": this.search}]));
      }
      else if (!this.search){
        if (localStorage.getItem("anime")){
          let response = JSON.parse(localStorage.getItem("anime"))
          console.log(response[0])
          this.card = response[0].card
          this.search = response[0].search
        }
      }
    }
  },
  mounted(){
    this.storage()
  },
    watch:{
      search:{
        immediate: true,
        handler(newQuestion, oldQuestion){
          if (newQuestion){
            this.loadSearch()
          }
          if (!newQuestion){
            this.card = []
          }
          if(oldQuestion && !newQuestion){
            localStorage.setItem("anime", JSON.stringify([{"card": [], "search": ''}]));
          }
        }
      },
      // card: {
      //   handler(newQuestion, oldQuestion){
      //     if (newQuestion != []){
      //       this.storage()
      //     }
      //   }
      // }
    }
};
</script>
<template>
  <div class="search mb-5">
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      size="sm"
      color="white"
      trailing
      placeholder="Поиск..."
      v-model="search"
      @change="loadSearch()"
    />
  </div>

  <div class="anime mb-8" v-if="card && search">
    <AppCard
      v-for="item in card"
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

  <AppCarusel v-if="!search" :category="'Фильмы'"></AppCarusel>
  <AppCarusel v-if="!search" :category="'Сериалы'"></AppCarusel>
  <AppCarusel v-if="!search" :category="'OVA'"></AppCarusel>
  <AppCarusel v-if="!search" :category="'Спец выпуски'"></AppCarusel>
</template>
<style>
.anime {
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

input {
  background-color: #181818 !important;
  width: 100% !important;
  padding: 10px !important;
  color: #fff !important;
}

.dark\:focus\:ring-primary-400:focus:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(#fff) / var(--tw-ring-opacity, 1) !important;
}

.search .relative {
  width: 50%;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
