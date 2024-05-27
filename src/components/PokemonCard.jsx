import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={pokemon.image} alt={pokemon.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pokemon.name}</div>
        <p className="text-gray-700 text-base">
          Types: {pokemon.types.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
