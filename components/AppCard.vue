<script>
export default {
  props: {
    id: Number,
    index: Number,
    title: String,
    subtitle: String,
    age_rating: String,
    description: String,
    epizodes: Number,
    average_duration_of_episode: Number,
    genres: Array,
    notification: String,
    poster: String,
  },
  data() {
    return {
      isHook: false,
    };
  },
  watch: {
    title: {
      immediate: true,
      handler(newQuestion, oldQuestion) {
        if (newQuestion) {
          this.isHook = true;
        }
      },
    },
  },
};
</script>
<template>
  <nuxt-link :to="'/OpenCard/' + id" v-if="isHook">
    <div class="card">
      <div class="img">
        <nuxt-picture
          :src="'https://anilibria.wtf' + poster"
          width="200px"
          height="200px"
          sizes="xs:50px md:200px lg:500px"
        />
      </div>
      <div class="descroption">
        <h3 class="title">{{ title }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </nuxt-link>

  <nuxt-link :to="'/OpenCard/' + id" v-if="!isHook">
    <div class="card">
      <div class="img">
        <USkeleton class="h-[300px] w-[100%]" />
      </div>
      <div class="descroption">
        <USkeleton class="h-6 w-[100%] mb-3"/>
        <p>
          <USkeleton class="h-12 w-[100%]" />
        </p>
      </div>
    </div>
  </nuxt-link>
</template>
<style>


a {
  flex: none;
}

.card img {
  border-radius: 1rem 1rem 0 0;
  width: 250px !important;
  height: 300px;
}

.card:hover {
  transform: scale(110%);
  transition: all 100ms;
}

.card {
  cursor: pointer;
  display: block;
  max-width: 250px;
  max-height: 460px;
  width: 100vw;
  height: 100vh;
  color: #fff;
  background: #181818;
  border-radius: 1rem;
}

h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.1rem;
}

.descroption {
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.descroption p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 13px;
  color: #a5a5a5;
}
</style>
