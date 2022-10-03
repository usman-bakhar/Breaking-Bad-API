import React, { useEffect, useState } from "react";
import { getCharactersDetail } from "./apiCalls";

import withStyles from "react-jss";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "2rem 0rem 5rem",
  },
  detail: {
    fontSize: "2.5rem",
    fontFamily: "serif",
    fontWeight: "normal",
    "& img": {
      display: "flex",
      justifyContent: "center",
      alignTtems: "center",
      height: "600px",
      width: "600px",
      backgroundColor: " #eceff1",
      borderRadius: "3px",
      marginBottom: "1rem",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
};

function Detail(props) {
  const { classes } = props;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getDetails() {
      const response = await getCharactersDetail(props.match.params.id);
      const data = response.data;
      setDetails(data);
    }
    getDetails();
  }, [props.match.params.id]);

  return (
    <div className={classes.container}>
      {details.map((detail) => (
        <div className={classes.detail}>
          <h1> {detail.name} </h1>
          <img src={detail.img} alt={detail.name} />
          <div>
            <span>NickName:</span> {detail.nickname}
          </div>
          <div>
            <span>category:</span> {detail.category}
          </div>
          <div>
            <span>Status:</span> {detail.status}
          </div>
          <div>
            <span>Status:</span> {detail.birthday}
          </div>
        </div>
      ))}
    </div>
  );
}

export default withStyles(styles)(Detail);
