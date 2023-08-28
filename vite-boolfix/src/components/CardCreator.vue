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
    <div class="container " >
        <div class="" v-for="carta in store.movies">

            <div class="card" style="width: 18rem;">
            <img class="card-img-top" alt=""
            v-bind:src="`https://image.tmdb.org/t/p/original/`+ carta.poster_path">
            <div class="card-body">
                <h5 class="card-title">{{carta.title}}</h5>
                <p class="card-text">Original Title: {{carta.original_title}}</p>
                <p class="card-text">Lingua Originale: {{carta.original_language}} </p>
                <p class="card-text">Voto: {{ carta.vote_average }} / 10</p>
                
            </div>
        </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../src/styles/partials/variables" as *;
</style>
