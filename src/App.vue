<script setup>
import SearchingBar from './components/SearchingBar.vue'
import TheHeader from './components/TheHeader.vue'
import MovieCardCreator from './components/MovieCardCreator.vue'
import SerieCardCreator from './components/SerieCardCreator.vue';
</script>

<template>

  <div class="top-nav d-flex justify-content-between text-center bg-black align-items-center">
    <TheHeader/>
    <SearchingBar/>
  </div>
  <main class=" bg-dark">
    <div class="d-flex flex-column">
      <h2 class="text-center text-white">Movies</h2>

      <MovieCardCreator class="d-flex flex-row overflowx orizzontal-bar"/>
      <h2 class="text-center text-white">Tv Series</h2>
      <SerieCardCreator class="d-flex flex-row overflowx orizzontal-bar"/>
    </div>

  </main>

</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variables" as *;

</style>
