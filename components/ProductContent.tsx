import { Button, CardActions, CardContent, Typography, Box } from "@mui/material";
import { Download } from "@mui/icons-material";
import React from "react";

import GetWindowSize from "../utils/GetWindowSize";

const ProductContent = ({ product, updateItemCount }:{product:any, updateItemCount: Function}) => {

  const portrait: boolean = GetWindowSize().width < 1000;

  return (
    <>
      {product && <div style={ {paddingBottom: "95px", minHeight: portrait? undefined: "calc(100vh - 50px)", display: "flex", } }>
        <div style={ {minHeight: "calc(100vh - 150px)", display:"flex" ,flexDirection: portrait ? "column" : "row", justifyContent:"space-between", flex:1}}>  
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img alt = {product.name} src={ product.image } style={ { maxHeight: portrait? "70vh":undefined, height: portrait ? "auto" : "100%", objectFit: "cover", maxWidth: portrait ? "100%" : "50%" } }>
          </img>

          <Box style={ { justifyContent: "space-between", flex:1, display:"flex", flexDirection:"column"}} >
            <CardContent>
              <div style={ { display: "flex", flexDirection: portrait? "row":"column"} }>
                <div style={ { display: "flex", flex: 1, flexDirection:"column"} }>
                  <Typography variant="h5" fontWeight="bold">
                    { product.name }
                  </Typography>
                  <Typography gutterBottom variant="h6" fontWeight="italic" color="textPrimary">
                    {product.type}
                  </Typography>

                </div>
                
                {false &&<div style={ { display: "flex", flex: 1, flexDirection: "column" } }>
                  { product.precoNormal > 0 ? 
                    <Typography color="#217021" padding={ 0 } align={portrait? "center":"left"} fontWeight="bold" fontStyle="italic">
                      de R$ { product.precoNormal.toFixed(2) } por:
                    </Typography> : <Typography color="#217021" padding={ 0 } align={portrait? "center":"left"} fontWeight="bold">por apenas:</Typography> 
                  }
                  <Typography margin={ 0 } fontSize="36px" color="#217021" align={portrait? "center":"left"} fontWeight="bold">
                    R$ { product.precoAtual.toFixed(2) }
                  </Typography>
                </div>}
              </div>
                 
              <Typography color="textSecondary" gutterBottom>
                { product.description }
              </Typography>
            </CardContent>
          
            <CardActions sx={ { flexDirection: portrait? "column":"row"} }>
              {product.downloadLinkPC != "" && 
                <Button onClick= {() => window.open(product.downloadLinkPC, "_blank")} variant="contained" style={ { backgroundColor: "black", height: "60px", width: "100%", margin: 5 } } endIcon={ <Download/> }>
                  Baixar grátis no PC
                </Button>}
              {product.downloadLinkAndroid != "" && 
                <Button onClick= {() => window.open(product.downloadLinkAndroid, "_blank")} variant="contained" style={ { backgroundColor:"#103085", height: "60px", width: "100%", margin: 5 } } endIcon={ <Download/> }> 
                  Baixar grátis no android
                </Button>}
              {(product.downloadLinkAndroid == "" && product.downloadLinkPC == "") &&
                <Button disabled variant="contained" style={ { backgroundColor:"#505050", color:"white", height: "60px", width: "100%", margin: 5 } }> 
                  Em breve
                </Button>}
            </CardActions>
            <div style={{aspectRatio: 16/9, display: "flex"}}>
                {product.tutorial != "" && <iframe src = {product.tutorial} title="tutorial" width="100%" allowFullScreen/>}
            </div>
          </Box>
        </div>
      </div>}
    </>
  );
};

export default ProductContent;
