import { usePokemon } from "../../hooks"

export const Card = () => {
  const { pokemons } = usePokemon();
  return (
    <div className="text-white bg-gray-800 grid gap-3 grid-cols-4">
      {
        pokemons.map(pokemon => (
          <div className="p-3" key={pokemon.name}>
            {pokemon.name}
          </div>
        ))
      }
    </div>
  )
}
