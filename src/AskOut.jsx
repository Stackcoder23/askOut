import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import askGif from "./ask.gif";
import yayyGif from './yayy.gif';
import { useLocation } from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const getRandomPosition = (position) => ({
  top:
    position == null
      ? `${Math.random() * 80}vh`
      : `${(position.top + Math.random()) * 50}vh`,
  left:
    position == null
      ? `${Math.random() * 80}vw`
      : `${position.left + Math.random() * 50}vw`,
});

const AskOut = () => {
  const docId = useLocation().state.docId;
  const [position, setPosition] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [yes, setYes] = useState(false);

  const handleHover = () => {
    setPosition(getRandomPosition());
  };
  const handleYes = async () => {
    try {
      await updateDoc(doc(db, "responses", docId), {
        answer: "yes",
      });
      setYes(true);
      console.log("Answer added to document");
    } catch (error) {
      console.error("Error updating document: ", error.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <img src={yes ? yayyGif : askGif} />
      {yes ? (
        <Typography fontSize={25} color={"red"}>Awww... Thank You</Typography>
      ) : (
        <>
          <Typography fontSize={25} color={"red"}>
            Will You Go out With Me?
          </Typography>
          <Container
            sx={{
              width: isMobile ? "100%" : "20%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={handleYes} variant="contained">
              Yes
            </Button>
            <Button
              sx={{ transition: "all 0.3s ease" }}
              style={position && { position: "absolute", ...position }}
              onMouseOver={handleHover}
              onClick={handleHover}
              variant="contained"
            >
              No
            </Button>
          </Container>
        </>
      )}
    </div>
  );
};

export default AskOut;
