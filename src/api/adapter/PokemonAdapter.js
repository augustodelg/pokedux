export const pokemonsApiDetailedAdapter = (pokemonsApi) => {
    const pokemonFormat = {
        id: pokemonsApi.id,
        name: pokemonsApi.name,
        image: pokemonsApi.sprites.other.home.front_default,
        types: pokemonsApi.types,
        isFavorite: false
      }
      return pokemonFormat;
}