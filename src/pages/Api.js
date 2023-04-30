import { useState, useEffect } from "react";


function Api() {
  const [pokemon, setPokemon] = useState('');
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false);



  async function handlePokemonSearch(e){
    e.preventDefault()
    let lowerCaseSearchVal = searchValue.toLowerCase();
    try{
      const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${lowerCaseSearchVal}`)
      .then(response => response.json());
      setPokemon(response);
      setError(false)
      setSearchValue('')
    } catch(err){
      console.log(err);
      setError(true)
    }
  }

  async function defaultPokemon(){
    let defaultPokemon = 'charizard'
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${defaultPokemon}`)
      .then(response => response.json());
      setPokemon(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    defaultPokemon()
  }, [])


  return (
    <main className='flex flex-col items-center justify-center mt-20'>
      <form onSubmit={handlePokemonSearch}className="flex gap-4">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="border-b focus:outline-none" placeholder="search pokemon"/>
        <button type='submit' className="px-3 bg-black hover:bg-zinc-700 text-white rounded-lg">Search</button>
      </form>

      { error && <h1 className="mt-4 text-red-500">Could not find that pokemon, double check your spelling!</h1>}

      {pokemon && !error &&
      <div className="mt-8 flex flex-col justify-center items-center lg:w-96">
        <h1 className="text-3xl font-extrabold">{pokemon.species.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.species.name} className="w-40" />
        <h2 className="font-bold">Base XP: <span className="font-medium">{pokemon.base_experience}</span></h2>
      </div>
      }

      
    </main>
  )
}

export default Api