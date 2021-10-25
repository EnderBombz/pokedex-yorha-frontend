import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText, IconButton } from "@material-ui/core";

import PokeStats from "../components/modal";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function ListData(props) {
  const [list, setList] = useState([]);
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(true);

  useEffect(() => {
    getResults();
  }, [props.pokemon]);

  function getResults() {
    props.pokemon.next !== null ? setNext(false) : setNext(true);
    props.pokemon.previous !== null ? setPrevious(false) : setPrevious(true);
    const list = props.pokemon.results.map((results) => results.name);
    setList(list);
  }

  function getNext() {
    let link = props.pokemon.next;
    let route = link.slice(-27);
    props.changePokemons(route);
    setNext(true);
  }
  function getPrevious() {
    let link = props.pokemon.previous;
    let route = link.slice(-27);
    props.changePokemons(route);
    setPrevious(true);
  }

  return (
    <>
      {list != undefined ? (
        <>
          <PokeStats
            open={props.open}
            pokemon={props.pokedata}
            handleOpen={props.handleOpen}
            handleClose={props.handleClose}
          />

          <List component="nav" aria-label="contacts">
            {list.map((item, index) => (
              <ListItem button key={item}>
                <ListItemText
                  primary={item}
                  onClick={() => {
                    props.handleOpen();
                    props.searchPokemon(item);
                  }}
                />
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <></>
      )}
      <div className="pages">
        <IconButton
          disabled={previous}
          onClick={() => {
            getPrevious();
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          disabled={next}
          onClick={() => {
            getNext();
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </>
  );
}

export default ListData;
