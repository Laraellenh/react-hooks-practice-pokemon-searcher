import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [pokemon, setPokemon] = useState([])
  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(r=>r.json())
    .then(setPokemon)
  }, [])

const newArrayOfPokemon = pokemon.filter((p)=>
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
function handleAddPoke(newPokemon){
  setPokemon([...pokemon, newPokemon])
}
 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPoke={handleAddPoke} />
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <PokemonCollection pokemon={newArrayOfPokemon}/>
    </Container>
  );
}

export default PokemonPage;
