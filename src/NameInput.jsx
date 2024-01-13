import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const NameInput = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'responses'), { name });
      navigate('/askHerOut', { state: { docId: docRef.id }});
    } catch (error) {
      console.error('Error adding document: ', error.message);
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
        gap: 50,
      }}
    >
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <Button disabled={!name.length > 0} onClick={handleSubmit} variant="contained">Submit</Button>
    </div>
  );
};

export default NameInput;
