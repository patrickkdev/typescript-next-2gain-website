import React from "react";

import { Typography } from "@mui/material";

const Footer = ({ data } : {data:any} ) => {
  return (
    <footer style={ { position: "absolute", bottom: 0, width: "100%" } }>
      {data && <div style={ { display: "flex", backgroundColor: "black", flexDirection: "row", padding: 15 } }>
        <div style={ { display: "flex", flex: 0.7, flexDirection: "column" } }>
          <Typography variant = "h6" color = "white" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="subtitle1" color = "white" >
            {data.description}
          </Typography>
        </div>
        <div style={ { display: "flex", flex: 0.3, backgroundColor: "black", flexDirection: "column" } }>
          <Typography variant="h6" color="white" gutterBottom>
            Contato:
          </Typography>
          <Typography variant="subtitle1" color="white" >
            {data.contactNumber}
          </Typography>
        </div>
      </div>}
    </footer>
    )
};

export default Footer;