import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "./Hero Product Debit Card.png";
import credit from "./Hero Product Carte virtuelle.png";
import Radio from '@mui/material/Radio';
import r, { useState } from 'react';

const UncheckableRadioButton = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (event: any) => {
    const value = event.target.value;
    if (selectedValue === value) {
      setSelectedValue(null);
    } else {
      setSelectedValue(value);
    }
  };

}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const imageStyle = {
  width: "120px", // or any other styles you need
  height: "auto",
};


const card1 = (
  <React.Fragment>
    <CardContent>
        //<Radio
      style={{position:'absolute', top: "150px", right: "950px"}}
      value="a"
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
    />

    
      <img src={logo} style={imageStyle} alt="Logo" />
      <Typography variant="h5" component="div">
        Carte de débit
      </Typography>
      <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
        Tous vos paiments débités <br /> immediatement sur votre compte.
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
    <React.Fragment>
      <CardContent>
      <Radio
      style={{position:'absolute', top: "150px", right: "645px"}}
      value="a"
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
    />
        <img src={credit} style={imageStyle} alt="Logo" />
        <Typography variant="h5" component="div">
          Carte de débit
        </Typography>
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          Votre paiment débité de votre <br />compte en 30 à 60 jours.
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card3 = (
    <React.Fragment>
      <CardContent>
      <Radio
      style={{position:'absolute', top: "510px", right: "950px"}}
      value="a"
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
    />
        <img src={logo} style={imageStyle} alt="Logo" />
        <Typography variant="h5" component="div">
          Physique
        </Typography>
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          Tout type de paiment <br />et retraits.
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card4 = (
    <React.Fragment>
      <CardContent>
      <Radio
      style={{position:'absolute', top: "510px", right: "645px"}}
      value="a"
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
    />
        <img src={credit} style={imageStyle} alt="Logo" />
        <Typography variant="h5" component="div">
          Virtuelle
        </Typography>
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          Paiments en ligne.
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const Titre: React.CSSProperties= {
   
        left: "0",
        padding: "45px 0 10px 0",
        fontWeight: "bold",
        textAlign: "left",
        fontSize: "30px",
  };

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 400}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <div style={Titre}>Gamme</div>
        <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
        <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
        <Card variant="outlined" style={{width: "17rem", height: "16rem", alignContent: "center"}}>{card1}</Card>
        <Card variant="outlined" style={{width: "17rem", height: "16rem", alignContent: "center"}}>{card2}</Card>
       </div>
       </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <div style={Titre}>Type de carte</div>
        <div style={{display: "flex", flexDirection: "row", gap: "30px"}}>
        <Card variant="outlined" style={{width: "17rem", height: "16rem", alignContent: "center"}}>{card3}</Card>
        <Card variant="outlined" style={{width: "17rem", height: "16rem", alignContent: "center"}}>{card4}</Card>
        </div>
        </div>
       
    </Box>
  );
  
}

