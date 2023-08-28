<script>
import {store, filterCards} from '../store'

export default{

    data(){
        return{
           store,
        };
    },
    methods:{
        filterCards,
    }

};




</script>

<template>

    <div>
        <form @submit.prevent="filterCards" action="">
                    <input type="text" v-model="store.searchtype">
                    <button @click="filterCards">Cerca</button>
        </form>


    </div>

</template>

<style lang="scss" scoped>

    @use "../src/styles/partials/variables" as *;

</style>