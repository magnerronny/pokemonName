import { usePokemon } from "../../hooks"

export const Button = () => {
  const { page, onSetPokemons, isLoading } = usePokemon();
  return (
    <button
      className="mt-10 rounded-md border-4 ml-50 text-center border-rose-600 bg-slate-800 hover:bg-slate-700 text-blue-400 p-5"
        disabled = {isLoading}
        onClick={() => onSetPokemons(page)}
      >
        Next
      </button>
  )
}
