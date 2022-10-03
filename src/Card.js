import React, { useState, useEffect } from "react";
// import './Card.css'
import { Link } from "react-router-dom";
import { getCharactersList } from "./apiCalls";

// import Detail from './Detail';
import withStyles from "react-jss";

const styles = {
  headerContainer: {
    background:
      "linear-gradient(90deg, rgba(4,36,17,1) 0%, rgba(4,33,26,0.9304096638655462) 50%, rgba(4,36,17,1) 100%)",
    padding: "4rem 0 2rem",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0.7rem",
    fontSize: "4rem",
    fontFamily: "serif",
    fontWeight: "normal",
    color: "white",
  },
  paragraph: {
    textAlign: "center",
    fontSize: "1.5rem",
    marginBottom: "3rem",
    marginTop: "0.1rem",
    width: "70vw",
    margin: "auto",
    color: "white",
  },
  search: {
    padding: "14px",
    width: "40%",
    border: "1px solid gray",
    borderRadius: "5px",
    display: "flex",
    margin: "4rem auto",
    // "& :focus": {
    outline: "none",
    // },
  },
  container: {
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gridGap: "0.5rem",
    alignItems: "center",
    marginBottom: "1rem",
    marginTop: "6rem",
    maxWidth: "1200px",
    margin: "auto",
    "& a": {
      color: "black",
      textDecoration: "none",
    },
  },
  card: {
    width: "330px",
    // padding: "12px",
    // margin: "1rem",
    marginTop: ".5rem",
    marginBottom: ".5rem",
    boxShadow: "7px 10px 12px -5px rgb(0,0,0,0.56)",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "3px",
    "& img": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "330px",
      width: "330px",
      backgroundColor: " #eceff1",
      borderRadius: "3px",
    },
    "& h2": {
      marginTop: "1.5rem",
      marginBottom: ".75rem",
    },
  },
};

function Card(props) {
  const { classes } = props;
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCharaters = async () => {
      const response = await getCharactersList(search);
      const data = response.data;
      setCharacters(data);
    };

    getCharaters();
  }, [search]);

  return (
    <>
      <section className={classes.headerContainer}>
        <h1 className={classes.title}>Breaking Bad</h1>
        <p className={classes.paragraph}>
          There is List of Breaking Bad Characters, Each character containe more detail, If you
          interested hit character, it will leads you to the more details :)
        </p>

        <input
          className={classes.search}
          type="text"
          placeholder="Search Characater"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <div className={classes.container}>
        {characters.map((character) => (
          <Link to={`/details/${character.char_id}`}>
            <div className={classes.card} key={character.char_id}>
              <div>
                <img src={character.img} alt={character.name} />
              </div>
              <h2>{character.name}</h2>
              <br />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default withStyles(styles)(Card);
