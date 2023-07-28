import { useEffect } from "react";
import { usePokemon } from "../../hooks"
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export const PokemonPage = () => {
  // const [next, setNext] = useState(0);
  
  // const handleNext = () => {
  //   setNext(page + 1)
  // }

  const { onSetPokemons, isLoading } = usePokemon();



  useEffect(() => {
    onSetPokemons()
  }, [])
  
  return (
    <>
      <div className="text-6xl uppercase underline text-center mt-5">Pokemon App</div>
      <br/>
      <div className="flex flex-col justify-between items-center">
        <h3 className="text-blue-600">is Loading: {isLoading  ? '....true' : '...false'}</h3>
        <br/>
        <Card className=  "block ml-2"/>
        <Button className=  "block"/>
      </div>

    </>
  )
}
