import React, { useEffect, useState } from "react";
import { Modal, Grid } from "@material-ui/core";

function PokemonStatsModal(props) {
  const [name, setName] = useState();
  const [sprite, setSprite] = useState();
  const [type, setType] = useState();
  const [skills, setSkills] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  useEffect(() => {
    if (props.pokemon !== undefined) {
      setName(props.pokemon.name);
      setSprite(props.pokemon.sprites.other.dream_world.front_default);
      const tipo = props.pokemon.types.map((type) => type.type.name);
      setType(tipo);

      const habilidades = props.pokemon.abilities.map(
        (ability) => ability.ability.name
      );
      setSkills(habilidades);

      setHeight(props.pokemon.height);
      setWeight(props.pokemon.weight);
    }
  }, [props.pokemon]);

  const body = (
    <div className="modalPokeStats">
      <div className="center">
        <img className="pokeIcon" src={sprite} />
      </div>
      <h2 id="simple-modal-title">{name != undefined ? name : <></>}</h2>
      <Grid container direction="column" justify="center" alignItems="center">
        <table>
          <tr>
            <thead>
              <th>Tipo</th>
            </thead>
            <tbody>
              {type != undefined ? (
                type.map((item, index) => <td key={item}>{item}</td>)
              ) : (
                <></>
              )}
            </tbody>
          </tr>
          <tr>
            <thead>
              <th>Habilidades</th>
            </thead>
            <tbody>
              {skills != undefined ? (
                skills.map((item, index) => <td key={item}>{item}</td>)
              ) : (
                <></>
              )}
            </tbody>
          </tr>
          <tr>
            <th>Altura = {height} m</th>
            <th>Peso = {weight} kg</th>
          </tr>
        </table>
      </Grid>

      <PokemonStatsModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open !== undefined ? props.open : false}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default PokemonStatsModal;
