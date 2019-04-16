// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(user) {
        $('.user-container').empty()
        let source = $('#user-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(user);
        $('.user-container').append(newHTML);
    }

    _renderFriends(friends) {
        $('.friends-container').empty()
        
        let source = $('#user-friends-template').html();
        console.log(source)
        let template = Handlebars.compile(source);
        let newHTML = template({friends});// תוספת סוגריים בגלל שזה מערך
        console.log(newHTML)
        $('.friends-container').append(newHTML);
    }

    _renderPokemon(pokemon) {
        $('.pokemon-container').empty()
        let source = $('#pokemon-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(pokemon);
        console.log(newHTML)
        $('.pokemon-container').append(newHTML);
    }

    // _renderQuote(quoteInfo) {
    // }
    // _renderPokemon(pokemonInfo) {
    // }
    // _renderMeat(meatText) {
    // }

    render(data){
        this._renderUsers(data.user)
        this._renderFriends(data.friends)
        this._renderPokemon(data.pokemon)

        //invokes all the individual _render methods
    }
}

