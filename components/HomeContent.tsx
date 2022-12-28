import React from "react";
import Link from "next/link"
import {Typography, Grid, Button, Card, Container, CardMedia, CardContent, CardActions} from "@mui/material"

import { Download } from "@mui/icons-material";
import { shoppingCart } from "../utils/GetCartData";
import { Product } from "../content/productModel";

const HomeContent = ({ products, updateItemCount }: { products: Product[], updateItemCount: Function }) => {
    
    var software: any = [];
    var others: any = [];

    if (products) {
        products.forEach(product => {
            if (product.category == "Ferramentas") { software.push(product); }
            else { 
                others.push(product); 
            }
        });
    }

    console.log(products)
    console.log(others)


    return (
        <main style={ { minHeight: "calc(100vh - 150px)", overflow: "hidden", display: "block", position: "relative", paddingBottom:"90px"} }>
            {products && <Container maxWidth="lg" sx={ { padding: 1, flex:1, display:"flex", flexDirection: "column" } }>
                <ProductGrid updateItemCount = {updateItemCount} products={ software } category="Ferramentas"/>
                { others.length > 0 && <ProductGrid updateItemCount = {updateItemCount} products={ others } category="Planihas" /> }
            </Container>}
        </main>
    );
};

const ProductGrid = ({products, category, updateItemCount}:{products: Product[], category: string, updateItemCount: Function}) => {

    return (
        <div>
            <Typography gutterBottom variant="h4" fontWeight="bold" margin={2} color="textPrimary">
                {category}
            </Typography>            
            <Grid container spacing={ 2 } justifySelf="center" justifyContent="center">
                { products.map((product: Product) => (
                    <Grid item key={ products.indexOf(product) } xs={ 12 } sm={ 6 } md={ 6 } sx={ { padding: "20px 0" } }>
                            <Card elevation={10} sx={{height: "100%", flexDirection: "column"}}>
                                <Link href={"/product/" + products.indexOf(product).toString()}>
                                    <CardMedia
                                        image={product.imageUrl}
                                        title='Image Title'
                                        style={{paddingTop: "70%"}}/>
                                <CardContent>
                                        <div style={{height:90}}>
                                            <Typography gutterBottom variant="h6">
                                                {product.title}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                {product.description}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Link>     
                                <CardActions sx={ { paddingTop: 0}}>
                                    <Button href={"/product/" + products.indexOf(product).toString()} variant="contained" style={ { margin: 2, height: "60px", display: "flex", flex: 1, backgroundColor: "#215085" } }>Conhecer</Button>
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