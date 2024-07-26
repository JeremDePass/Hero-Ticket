import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Card from './Card.tsx'
import logo from "./Hero Product Debit Card.png";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Ensure you have @mui/icons-material installed

const linkStyle = {
  textDecoration: 'none',
  color: 'black', // Set the font color
 
  fontSize: '18px', // Change the font size if needed
};

const underlineStyle = {
  borderBottom: '1.5px white', // Set the underline color
  paddingBottom: '2px', // Adjust the padding to position the underline
};



const buttonStyle: React.CSSProperties = {
  display: "flex",
  padding: "8px 235px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  color: "white",
  borderRadius: "8px",
  border: "1px solid var(--grey-grey-700, #000)",
  background: "var(--grey-grey-600, #1D1E21)",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
  margin: "25px"
}

function App() {

  const imageStyle = {
    width: "120px", // or any other styles you need
    height: "auto",
  };

  return (
    <div>
      <div>
        <Card>
        </Card>
      </div>
      <button type="button" style={buttonStyle}>
            Suivant
          </button>
          
          <li style={{ listStyle: 'none' }}>
        <a href="https://example.com" style={linkStyle} title="back">
          <ArrowBackIcon style={{ marginRight: '5px' }} />
          <span style={underlineStyle}>Retour</span>
        </a>
      </li>
    </div>
  );
}

export default App;
