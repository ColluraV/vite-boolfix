<script setup>
import SearchingBar from './components/SearchingBar.vue'
import TheHeader from './components/TheHeader.vue'
import CardCreator from './components/CardCreator.vue'
</script>

<template>
  <TheHeader/>
  <div>
    <SearchingBar/>
  </div>
  <main>
     <CardCreator/>
  </main>

</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variables" as *;

</style>
