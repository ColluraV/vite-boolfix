<script >
import { store } from '../store'
export default {

    data() {
        return {
            store,
        };
    },
    methods: {

    }

};


</script>

<template>
    <div class="container " v-for="carta in store.movies">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{carta.title}}</h5>
                <p class="card-text">Original Title: {{carta.original_title}}</p>
                <p class="card-text">Lingua Originale: {{carta.original_language}} </p>
                <p class="card-text">Voto: {{ carta.vote_average }} / 10</p>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variables" as *;
</style>
