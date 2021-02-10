//REPLICHIAMO NETFLIX
var app = new Vue({
    el:'#app',
    data:{
        apiKey:'e0b316189ed62d429752927965d22a18',
        query:'',
        lang:'it-IT'
    },
    methods:{
        search(){
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: this.apiKey,
                    query: this.query,
                    language: this.lang
                }
            })
            .then((result) => {
                console.log(result.data.results);
            })
            .catch((error) => alert('errori'));
        }
    }
});