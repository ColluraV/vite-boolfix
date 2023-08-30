import axios from "axios";
import { reactive } from "vue";

export const store = reactive({

    searchtype:"",
    movies:[],
    series:[],
});

export function filterCards(){

        let url= `https://api.themoviedb.org/3/search/movie?api_key=0e6e1204e5ce59257a879d34cc0f9cb7&query=${store.searchtype}`;
        
        axios.get(url).then((response) => {
        store.movies=(response.data.results);
    
        });
        
        url= `https://api.themoviedb.org/3/search/tv?api_key=0e6e1204e5ce59257a879d34cc0f9cb7&query=${store.searchtype}`;
        
        axios.get(url).then((response) => {
        store.series=(response.data.results);
    
        }); 

};

export function discoverMovies(){
        
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0e6e1204e5ce59257a879d34cc0f9cb7&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`).then((response) => {
        store.movies=(response.data.results);

});
};

export function discoverSeries(){
        
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=0e6e1204e5ce59257a879d34cc0f9cb7&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`).then((response) => {
        store.series=(response.data.results);

});
};

export function takeFlags(lang){
        if(lang == "en"){
            lang= "gb"};
            if(lang == "ja"){
            lang= "jp"};
            if(lang == "ko"){
            lang= "kr"};
            if(lang == "zh"){
            lang= "cn"};
            if(lang == "da"){
            lang= "dk"};
            if(lang == "hi"){
                lang= "in"};
            if(lang == "cs"){
            lang= "cz"};
            if(lang == "he"){
                lang= "il"};


    return `https://flagsapi.com/`+ lang.toUpperCase()+`/flat/64.png`  
    };