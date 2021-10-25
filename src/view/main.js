import React, { Component, useState, useEffect } from "react";
import useForm from "../hooks/useForm";

import Stats from "../components/stats";
import WhithoutStats from "../components/withoutStats";

import api from "../service/api";

import "./style.css";

import { TextField, Button, Container } from "@material-ui/core";

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const [responsable, setResponsable] = useState({ none: "none" });
  const [finded, setFinded] = useState(false);

  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values.name);

    api.get(`/pokemon/${values.name}`).then((response) => {
      if (response.data) {
        setResponsable(response.data);
        setFinded(true);
      }
    });
  };

  useEffect(() => {
    console.log(responsable);
  }, [responsable]);

  return (
    <>
      <Container className="container">
        <div className="box">
          <div>
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
              {finded ? (
                <Stats pokemon={responsable} />
              ) : (
                <>
                  <WhithoutStats />
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
