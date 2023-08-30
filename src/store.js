import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    searchtype:"",
    movies:[]
})

export function filterCards(){

        let url= `https://api.themoviedb.org/3/search/movie?api_key=0e6e1204e5ce59257a879d34cc0f9cb7&query=${store.searchtype}`

        axios.get(url).then((response) => {

        store.movies=(response.data.results);
        console.log(url);
        console.log(store.movies);
    
        }); 

}