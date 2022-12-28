import { Button, Typography, Container, Grid } from "@mui/material";
import { Download } from "@mui/icons-material";
import React from "react";

import GetWindowSize from "../utils/GetWindowSize";
import { CSSProperties } from "react";
import { Product } from "../content/productModel";

const ProductContent = ({ product, updateItemCount }:{product: Product, updateItemCount: Function}) => {

  const portrait: boolean = GetWindowSize().width < 1000;

  const gridItemStyle: CSSProperties = {
    backgroundColor: "#404040",
    color: "black",
    padding: "12px",
    borderRadius: "15px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "5px 5px 15px grey"
  }

  const gridItemTitleStyle: CSSProperties = {
    color: "white",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "12px"
  }

  const gridItemSubTitleStyle: CSSProperties = {
    color: "white",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: 400
  }

  return (
    <>
      {product && <div style={ {paddingBottom: "100px", minHeight: portrait? undefined: "calc(100vh - 50px)", display: "flex", justifyContent: "center"} }>
        
          <Container maxWidth="md" style={{marginTop: "32px", textAlign:"center", alignItems: "center", padding: "12px"}}>
            <Typography gutterBottom variant="h5" fontWeight="bold" marginBottom={"24px"}>
              { product.title }
            </Typography>
            { product.description.split(". ").map(paragraph => (
                <Typography align="left" key={0} color="textSecondary" fontWeight={700} marginBottom={"12px"}>
                  - {paragraph}
                </Typography>
            )) }
            {product.bestFeatures.length > 0 &&<Typography gutterBottom variant="h5" fontWeight="bold" marginTop="20px">
              Melhores caracteristicas
            </Typography>}
            <Grid container sx={{marginBottom: "20px"}}>
              {product.bestFeatures.map((feature) => (
                <Grid item key={product.bestFeatures.indexOf(feature)} sx={{padding: "6px"}} xs={12} sm={( product.bestFeatures.length % 2 != 0 && 
                                                                                                            product.bestFeatures.indexOf(feature) == 
                                                                                                            product.bestFeatures.length -1)? 12: 6}>
                  <div style={gridItemStyle}>
                    <h3 style={gridItemTitleStyle}>{feature.title}</h3>
                    <h5 style={gridItemSubTitleStyle}>{feature.subtitle}</h5>
                  </div>
                </Grid>
              ))}
            </Grid>
            {product.videoUrl != "" && <Typography variant="h5" fontWeight="bold">
              Como usar:
            </Typography> }
            <div style={{width: "100%", height: "100%", aspectRatio: 16/9, display: "flex", padding: "12px"}}>
                {product.videoUrl != "" && <iframe src = {product.videoUrl} title="tutorial" width="100%" allowFullScreen/>}
            </div>

            <div style={{display: "flex"}}>
              {product.downloadLinkPC != "" && 
                <Button onClick= {() => window.open(product.downloadLinkPC, "_blank")} variant="contained" style={ { backgroundColor: "black", height: "60px", width: "100%", margin: 5 } } endIcon={ <Download/> }>
                  Baixar no PC
                </Button>}
              {product.downloadLinkAndroid != "" && 
                <Button onClick= {() => window.open(product.downloadLinkAndroid, "_blank")} variant="contained" style={ { backgroundColor:"#103085", height: "60px", width: "100%", margin: 5 } } endIcon={ <Download/> }> 
                  Baixar no Android
                </Button>}
              {(product.downloadLinkAndroid == "" && product.downloadLinkPC == "") &&
                <Button disabled variant="contained" style={ { backgroundColor:"#505050", color:"white", height: "60px", width: "100%", margin: 5 } }> 
                  Em breve
                </Button>}
            </div>
          </Container>
      </div>}
    </>
  );
};

export default ProductContent;
