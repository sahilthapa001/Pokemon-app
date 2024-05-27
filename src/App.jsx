import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const data = await response.json();
      const pokemonsData = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();

          return {
            name:
              pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1),
            url: pokemonData.url,
            image: pokemonData.sprites.front_default,
            types: pokemonData.types.map((type) => type.type.name),
          };
        })
      );
      setPokemons(pokemonsData);
      setFilteredPokemons(pokemonsData);
    };

    fetchPokemons();
  }, []);

  const handleSearch = (keyword) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold my-4">Pokemon List</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
