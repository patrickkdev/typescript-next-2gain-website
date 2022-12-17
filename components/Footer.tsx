import React from "react";

import { Typography } from "@mui/material";
import GetWindowSize from "../utils/GetWindowSize";

const Footer = ({ data } : {data:any} ) => {

  const windowSize = GetWindowSize();
  const portrait: boolean = windowSize.width < 400;

  return (
    <footer style={ { position: "absolute", bottom: 0, width: "100%" } }>
      {data && <div style={ { display: "flex", backgroundColor: "black", flexDirection: portrait? "column":"row", padding: 15 } }>
        {!portrait && <div style={ { display: "flex", flex: 1.5, flexDirection: "column" } }>
          <Typography variant = "h6" color = "white" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="subtitle1" color = "white" >
            {data.description}
          </Typography>
        </div>}
        <div style={ { display: "flex", flex: 1, backgroundColor: "black", flexDirection: "column" } }>
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