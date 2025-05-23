<script setup>
const route = useRoute()
</script>
<template>
  <div>
    <nav>
      <img class="w-[60px]" src="~/public/logo-without.png" alt="" />
      <ul>
        <li :class="{ active: route.name == 'AniKot' }">
          <nuxt-link to="/AniKot">Аниме</nuxt-link>
        </li>
        <li :class="{ active: route.name == 'random' }">
          <nuxt-link to="/random">Рандомайзер</nuxt-link>
        </li>
        <li :class="{ active: route.name == 'find' }">
          <nuxt-link to="/find">Поиск по описанию</nuxt-link>
        </li>
      </ul>
      <nuxt-link
        :class="{
          'outline outline-2 outline-offset-[3px] outline-[#ada4a4] rounded-full flex':
            route.name == 'cabinet',
          'flex ': route.name != 'cabinet',
        }"
        to="/Cabinet"
      >
        <UAvatar
          size="md"
          src="https://i.pinimg.com/736x/b1/8b/49/b18b497cbd77eb4134bcbe3caa8d474c.jpg"
          alt="Avatar"
        />
      </nuxt-link>
    </nav>
  </div>
</template>
<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 60px;
  background-color: #181818;
  color: #e0e0e0;
  border-bottom: 1px solid #717171;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

li {
  position: relative;
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

ul li::after {
  content: '';
}

.active::after {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  background: #fff;
  width: 100%;
  animation: active forwards linear 100ms;
}

@keyframes active {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
