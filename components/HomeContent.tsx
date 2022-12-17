import React from "react";
import Link from "next/link"
import {Typography, Grid, Button, Card, Container, CardMedia, CardContent, CardActions} from "@mui/material"

import { Download, ShoppingCart } from "@mui/icons-material";
import { shoppingCart } from "../utils/GetCartData";

const HomeContent = ({ products, updateItemCount }: { products: [any], updateItemCount: Function }) => {
    
    var software: any = [];
    var others: any = [];

    if (products) {
        products.forEach(element => {
            if (element.attributes.category == "Opções Binárias") { software.push(element); }
            else { others.push(element); }
        });
    }

    return (
        <main style={ { minHeight: "calc(100vh - 200px)", overflow: "hidden", display: "block", position: "relative", paddingBottom:"100px"} }>
            {products && <Container maxWidth="lg" sx={ { padding: 1 } }>
                <ProductGrid updateItemCount = {updateItemCount} products={ software } category="Opções Binárias"/>
                { others.length > 0 && <ProductGrid updateItemCount = {updateItemCount} products={ others } category="Outros" /> }
            </Container>}
        </main>
    );
};

const ProductGrid = ({products, category, updateItemCount}:{products: [any], category: string, updateItemCount: Function}) => {
    return (
        <div>
            <Typography gutterBottom variant="h4" fontWeight="bold" margin={2} color="textPrimary">
                {category}
            </Typography>            
            <Grid container spacing={ 2 } justifySelf="center" justifyContent="center">
                { products.map((product: any) => (
                    <Grid item key={ product.id } xs={ 12 } sm={ 6 } md={ 4 } sx={ { padding: "20px 0" } }>
                            <Card elevation={10} sx={{height: "100%", flexDirection: "column"}}>
                                <Link href={"/product/" + product.id.toString()}>
                                    <CardMedia
                                        image={ product.attributes.image }
                                        title='Image Title'
                                        style={ {paddingTop: "100%"} }/>
                                <CardContent>
                                        <div style={{height:90}}>
                                            <Typography gutterBottom variant="h6">
                                                {product.attributes.name}
                                            </Typography>
                                            <Typography color="textSecondary">
                                            { product.attributes.description.substring(0, 55) == product.attributes.description? product.attributes.description : product.attributes.description.substring(0, 55) + "..."}
                                            </Typography>
                                        </div>
                                        {false && <div style={{alignSelf:"center", justifySelf:"center"}}>
                                            { product.attributes.precoNormal > 0 ? <Typography color="#1f6e04" padding={ 0 } variant="h6" align="center" fontWeight="bold" fontStyle="italic">
                                                de R$ { product.attributes.precoNormal.toFixed(2) } por:
                                            </Typography> : <Typography color="#1f6e04" padding={ 0 } variant="h6" align="center" fontWeight="bold">por apenas:</Typography> }
                                        <Typography color="#1f6e04" variant="h4" align="center" fontWeight="bold" alignSelf="center">
                                                R$ { product.attributes.precoAtual.toFixed(2)}
                                            </Typography>
                                        </div>}
                                    </CardContent>
                                </Link>     
                                <CardActions sx={ { paddingTop: 0}}>
                                    <Button href={"/product/" + product.id.toString()} variant="contained" style={ { margin: 2, height: "60px", display: "flex", flex: 1, backgroundColor: "#215085" } }>Conhecer</Button>
                                    {false && <Button onClick={() => {shoppingCart.add(product, updateItemCount)}} variant="contained" style={ { margin: 2, height: "60px", display: "flex", flex: 1, backgroundColor: "#217021" } } endIcon={ <Download/>}>BAIXAR</Button>}
                                </CardActions>
                            </Card>
                    </Grid>
                )) }
            </Grid>
        </div>
    );
}

export default HomeContent;