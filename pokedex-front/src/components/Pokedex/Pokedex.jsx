import React, { useEffect, useState } from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import './pokedex.css';
import { getPokemons } from "../../services/pokemonService";
// const pokemonList = [
//     { id: 1, name: "Bulbasaur", type: "Planta/Veneno", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
//     { id: 2, name: "Ivysaur", type: "Planta/Veneno", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
//     { id: 3, name: "Venusaur", type: "Planta/Veneno", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
//     // Añade más Pokémon según sea necesario
// ];

export const Pokedex = () => {
    const [findBar, setFindBar] = useState('');
    const [pokemonList, setPokemonList] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(20);


    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const fetchedPokemons = await getPokemons();
                setPokemonList(fetchedPokemons);
            } catch (error) {
                console.error('Error al obtener los Pokemons:', error);
            }

        }
        fetchPokemons();

    }, [page, perPage]);

    console.log(pokemonList)
    const handleChangeFindBar = (e) => {
        setFindBar(e.target.value);
    };

    // const filteredPokemon = pokemonList.filter(pokemon =>
    //     pokemon.name.toLowerCase().includes(findBar.toLowerCase())
    // );

    return (
        <>
            <header className="bg-red-600 text-white p-2">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">Pokédex</h1>
                </div>
            </header>

            <div className="container mx-auto mt-3">
                <div className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Buscar Pokémon..."
                        className="w-full max-w-lg p-2 border border-gray-300 rounded-lg"
                        value={findBar}
                        onChange={handleChangeFindBar}
                    />
                </div>
            </div>

            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        pokemonList.map(pokemon => (
                            <PokemonCard pokemon={pokemon}></PokemonCard>
                        ))
                    }
                </div>
            </div>
        </>
    );
};
