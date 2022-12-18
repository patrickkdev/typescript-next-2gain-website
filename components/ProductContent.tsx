import { Button, Card, CardActions, CardContent, Typography, Box } from "@mui/material";
import { Download, ShoppingCart } from "@mui/icons-material";
import { CreatePayment } from '../utils/MercadoPago/CreatePayment'
import React from "react";

import GetWindowSize from "../utils/GetWindowSize";
import { shoppingCart } from "../utils/GetCartData";
import Link from "next/link";
import { stringify } from "querystring";

const ProductContent = ({ product, updateItemCount }:{product:any, updateItemCount: Function}) => {

  const portrait: boolean = GetWindowSize().width < 1000;

  return (
    <>
      {product && <div style={ {paddingBottom: "95px", minHeight: portrait? undefined: "calc(100vh - 50px)", display: "flex", } }>
        <div style={ {minHeight: "calc(100vh - 150px)", display:"flex" ,flexDirection: portrait ? "column" : "row", justifyContent:"space-between", flex:1}}>  
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img alt = {product.attributes.name} src={ product.attributes.image } style={ { maxHeight: portrait? "70vh":undefined, height: portrait ? "auto" : "100%", objectFit: "cover", maxWidth: portrait ? "100%" : "50%" } }>
          </img>

          <Box style={ { justifyContent: "space-between", flex:1, display:"flex", flexDirection:"column"}} >
            <CardContent>
              <div style={ { display: "flex", flexDirection: portrait? "row":"column"} }>
                <div style={ { display: "flex", flex: 1, flexDirection:"column"} }>
                  <Typography variant="h5" fontWeight="bold">
                    { product.attributes.name }
                  </Typography>
                  <Typography gutterBottom variant="h6" fontWeight="italic" color="textPrimary">
                    {product.attributes.type}
                  </Typography>

                </div>
                
                {false &&<div style={ { display: "flex", flex: 1, flexDirection: "column" } }>
                  { product.attributes.precoNormal > 0 ? 
                    <Typography color="#217021" padding={ 0 } align={portrait? "center":"left"} fontWeight="bold" fontStyle="italic">
                      de R$ { product.attributes.precoNormal.toFixed(2) } por:
                    </Typography> : <Typography color="#217021" padding={ 0 } align={portrait? "center":"left"} fontWeight="bold">por apenas:</Typography> 
                  }
                  <Typography margin={ 0 } fontSize="36px" color="#217021" align={portrait? "center":"left"} fontWeight="bold">
                    R$ { product.attributes.precoAtual.toFixed(2) }
                  </Typography>
                </div>}
              </div>
                 
              <Typography color="textSecondary" gutterBottom>
                { product.attributes.description }+ {product.attributes.howItWorks}
              </Typography>
              
              <div style={{aspectRatio: 16/9, display: "flex"}}>
                  {product.attributes.howItWorks != null && <iframe src = {product.attributes.howItWorks} title="tutorial" width="100%" allowFullScreen/>}
              </div>
            </CardContent>
          
            <CardActions sx={ { flexDirection: portrait? "column":"row"} }>
              {product.attributes.downloadLinkPc != null && 
                <Button onClick= {() => window.open(product.attributes.downloadLinkPc, "_blank")} variant="contained" style={ { backgroundColor: "black", height: "60px", width: "100%", margin: 5 } } endIcon={ <Download/> }>
                  Baixar grátis no PC
                </Button>}
              {product.attributes.downloadLinkAndroid != null && 
                <Button onClick= {() => window.open(product.attributes.downloadLinkAndroid, "_blank")} variant="contained" style={ { backgroundColor:"#103085", height: "60px", width: "100%", margin: 5 } } endIcon={ <Download/> }> 
                  Baixar grátis no android
                </Button>}
              {(product.attributes.downloadLinkAndroid == null && product.attributes.downloadLinkPc == null) &&
                <Button disabled variant="contained" style={ { backgroundColor:"#505050", color:"white", height: "60px", width: "100%", margin: 5 } }> 
                  Em breve
                </Button>}
            </CardActions>
          </Box>
        </div>
      </div>}
    </>
  );
};

export default ProductContent;
