import React from "react";

export const PokemonCard = ({pokemon}) => {
    return (
        <div key={pokemon.name} className="bg-white p-4 rounded-lg shadow-md">
            <img src={pokemon.sprite} alt={pokemon.name} className="w-full h-32 object-contain" />
            <h2 className="text-xl font-bold mt-4">{pokemon.name}</h2>
            <p className="text-gray-600">Tipo: {pokemon.type}</p>
        </div>
    )
}