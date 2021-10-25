import React, { useState, useEffect } from "react";
import useForm from "../hooks/useForm";

import api from "../service/api";
import ListData from "../components/listData";

import "./style.css";

import { Container, TextField, Button } from "@material-ui/core";

export default () => {
  const [pokelist, setPokelist] = useState();
  const [pokesearch, setPokesearch] = useState("/pokemon");
  const [pokedata, setPokedata] = useState();

  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const enviarContato = () => {
    console.log(values.name);
    searchPokemonValidate(values.name);
  };

  useEffect(() => {
    api.get(pokesearch).then((response) => {
      setPokelist(response.data);
    });
  }, []);

  function changePokemons(pageLink) {
    api.get(pageLink).then((response) => {
      setPokelist(response.data);
    });
  }

  function searchPokemon(name) {
    api.get(`/pokemon/${name}`).then((response) => {
      setPokedata(response.data);
    });
  }
  function searchPokemonValidate(name) {
    console.log(typeof name);
    if (typeof name != undefined || typeof name != null) {
      api.get(`/pokemon/${name}`).then((response) => {
        if (response.data) {
          console.log("achou");
          setPokedata(response.data);
          handleOpen();
        }
      });
    }
  }

  return (
    <>
      <div className="centerLogo">
        <img src={"https://img.icons8.com/color/452/pokedex.png"}></img>
      </div>
      <Container className="container">
        <div className="box">
          <form onSubmit={handleSubmit(enviarContato)}>
            <TextField
              id="standard-basic"
              label="Nome do pokemon"
              fullWidth
              name="name"
              onChange={handleChange}
            />
            <div className="buttonSearch">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{
                  marginTop: 10,
                  textAlign: "center",
                  paddingLeft: "25%",
                  paddingRight: "25%",
                  position: "relative"
                }}
              >
                {loading ? "PROCURANDO..." : "PROCURAR"}
              </Button>
            </div>
          </form>
          <div>
            <ul>
              {pokelist !== undefined ? (
                <ListData
                  pokemon={pokelist}
                  pokedata={pokedata}
                  open={open}
                  {...{
                    changePokemons,
                    searchPokemon,
                    handleOpen,
                    handleClose
                  }}
                ></ListData>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};
