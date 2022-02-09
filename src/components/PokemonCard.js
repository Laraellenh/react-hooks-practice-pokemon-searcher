import React, {useState} from "react";
import { Card } from "semantic-ui-react";
import PokemonCollection from "./PokemonCollection";

function PokemonCard({pokemon}) {

function handleClick(){
  setShowFront((showFront)=> !showFront)
}
const { name, hp, sprites } = pokemon;

  const [showFront, setShowFront] = useState(true)
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt={name} src={showFront ? sprites.front : sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
