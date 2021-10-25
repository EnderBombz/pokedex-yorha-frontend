import React, { useState, useEffect } from "react";

function Stats(props) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    console.log(props.pokemon.types);
    console.log(props.pokemon.types.length);

    console.log(props.pokemon.types[0].type.name);

    const tipo = props.pokemon.types.map((type) => type.type.name);
    console.log(tipo);
    //setTypes(props.pokemon.types.map(type => type.name))
  }, []);

  return (
    <>
      <div className="center">
        <img
          className="pokeIcon"
          src={props.pokemon.sprites.other.dream_world.front_default}
        />
      </div>
      <h1>{props.pokemon.name}</h1>
    </>
  );
}

export default Stats;
