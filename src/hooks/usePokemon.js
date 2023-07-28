import { useDispatch, useSelector } from "react-redux"
import { instance } from "../api";
import { setPokemon, startLoadingPokemons } from "../store/slice";

export const usePokemon = () => {

  const { pokemons, isLoading, page } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();
  
  const onSetPokemons = async(counter = 0) => {
    
    dispatch( startLoadingPokemons() );
    const {data} = await instance.get(`pokemon?limit=20&offset=${counter}`);
    dispatch(setPokemon({pokemons: data.results, page: counter + 1 }))
  }

  return {
    //* Propiedades
    pokemons,
    isLoading,
    page,
    //* metodos,
    onSetPokemons

  }
}
