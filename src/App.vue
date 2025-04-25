<script setup>
import HomeIntro from './components/HomeIntro.vue'
</script>

<template>
  <header class="min-h-screen flex items-center">
    <div class="w-full">
      <HomeIntro />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.wrapper {
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
