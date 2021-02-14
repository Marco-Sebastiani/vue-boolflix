//REPLICHIAMO NETFLIX
var app = new Vue({
    el:'#app',
    data:{
        apiKey:'e0b316189ed62d429752927965d22a18',
        query:'',
        lang:'it-IT',
        arrayFilms: [],
        arrayFlags: ['de', 'en', 'es', 'fr', 'it', 'pt','ru', 'zh', 'ja']
    },
    methods:{
        search(){
            this.arrayFilms.splice(0);
            //QUI EFFETTUO LA CHIAMATA API PER I FILM
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: this.apiKey,
                    query: this.query,
                    language: this.lang
                }
            })
            .then((result) => {
                this.arrayFilms.push(...result.data.results);
                this.query = '';
            })
            .catch((error) => alert('errori'));

            //QUI EFFETTUO LA CHIAMATA API PER LE SERIE
            
            axios
            .get('https://api.themoviedb.org/3/search/tv',{
                params: {
                    api_key: this.apiKey,
                    query: this.query,
                    language: this.lang
                }
            })
            .then((result) => {
                this.arrayFilms = this.arrayFilms.concat(result.data.results);

                this.query = '';
            })
            .catch((error) => alert('errori'));
        },
        generaBandiera(index) {
            return this.arrayFlags.includes(index);
        },
        generaStella(film) {
            return Math.ceil( film.vote_average / 2 );
        }
    }   
});