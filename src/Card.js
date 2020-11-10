import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import './Card.css'
import { Link } from 'react-router-dom';
// import Detail from './Detail';
import withStyles from 'react-jss';

const styles = {
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "0.7rem",
        fontSize: "4rem",
        fontFamily: "serif",
        fontWeight: "normal",
    }, 
    paragraph: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        marginBottom: "3rem",
        marginTop: ".1rem"
    },
    container: {
        display: "grid",
        justifyItems: "center",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 5fr))",
        gridGap: ".5rem",
        alignItems: "center",
        marginBottom: "1rem",
        '& a': {
            color: "black",
            textDecoration: "none"
        }
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
        '& img': {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "330px",
            width: "330px",
            backgroundColor:" #eceff1",
            borderRadius: "3px",
        },
        '& h2': {
            marginTop: "1.5rem",
            marginBottom: ".75rem"
        }
    },
}

function Card(props) {
    const {classes} = props;
    const [characters, setCharacters] = useState([ ])

    useEffect(()=> {
        async function getCharaters() {
            const response = await Axios.get('https://www.breakingbadapi.com/api/characters/');
            const data = response.data;
            setCharacters(data)
        }
        getCharaters();
      }, [])

    return (
        <>
            <h1 className={classes.title}>Breaking Bad</h1>
            <p className={classes.paragraph}>
                There is List of Breaking Bad Characters, 
                Each character containe more detail, 
                If you interested hit character, 
                it will leads you to the more details :)
            </p>

            <div className={classes.container}>
                {characters.map( character => (
                    <Link to={`/details/${character.char_id}`} >  
                        <div className={classes.card} key={character.char_id}>
                            <div>
                                <img src={character.img} alt={character.name} />
                            </div>
                            <h2>{character.name}</h2>
                            <br/>

                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default withStyles(styles)(Card);
