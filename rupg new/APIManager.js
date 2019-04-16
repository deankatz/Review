//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    getData() {
        return this.data
    }

  //const fetch=randomUserGenerator()-can i do this with fetch and then without the "success-result"?!?

    randomUserGenerator() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: result => {//does it have to be result, is this like return or is it a parameter ?
               
                this.data.user = {
                    picture: result.results[0].picture["large"],//result here is neccesry ?
                    firstName: result.results[0].name["first"],
                    lastName: result.results[0].name["last"],
                    state: result.results[0].location["state"],
                    city: result.results[0].location["city"]
            }
          }
        })
    }
    randomFriendsGenerator() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=6',
            dataType: 'json',
            success: result => {

                this.data.friends = []
                for (let i in result.results) {
                    this.data.friends.push(
                        result.results[i].name["first"] + " " + result.results[i].name["last"]       
                    )
                }
            }
        })
    }    
    randomPokemonAPI() {
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random()*964)}`,
            dataType: 'json',
            success: result => {
                
                this.data.pokemon = {
                    picture: result.sprites["front_default"],
                    name: result["name"]
                }
            }
        })
    }
    loadData(){
       this.randomUserGenerator()
       this.randomFriendsGenerator()
       this.randomPokemonAPI()
    }
}
 
    // PokeAPI
    // This API is for querying all things pokemon - from cities in the poke-verse, to different berries, and the pokemon themselves
    // You'll need to query for a random Pokemon from this API.
    // From the pokemon object you'll need an image of the pokemon, and the name of the pokemon.
    // Hint/Fun Fact: there are currently 949 Pokemon recorded (but we know who the cool ones are...)
    // Another Hint: Sprites are commonly known as images or computer graphics
    
