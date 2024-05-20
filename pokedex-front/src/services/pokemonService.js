import axios from "axios";

const BaseURL = 'https://pokeapi.co/api/v2/';
const pokemonURL = 'pokemon/';

export const getPokemons = async () => {
    let allPokemon = [];
    let nextUrl = `${BaseURL}${pokemonURL}?limit=100`;
    
    try {
        while (nextUrl) {
            const response = await axios.get(nextUrl);
            const { results, next } = response.data;
            
            const pokemonDetails = await Promise.all(results.map(async (pokemon) => {
                const pokemonDetail = await axios.get(pokemon.url);
                return {
                    id: pokemonDetail.data.id,
                    name: pokemonDetail.data.name,
                    type: pokemonDetail.data.types.map(typeInfo => typeInfo.type.name).join('/'),
                    sprite: pokemonDetail.data.sprites.front_default
                };
            }));

            allPokemon = [...allPokemon, ...pokemonDetails];
            
            // Actualiza la URL de la próxima página
            nextUrl = next;
        }
        
        return allPokemon;
    } catch (error) {
        console.error('Error al obtener los Pokémon: ', error);
        throw new Error('Error al obtener los Pokémon:', error);
    }
};
