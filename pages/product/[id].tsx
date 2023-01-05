import React, {useState} from 'react'
import {useRouter} from 'next/router'

import { _AppBar, Footer, ProductContent } from '../../components'
import { CssBaseline } from "@mui/material"

import BusinessData from '../../utils/GetBusinessData';
import {shoppingCart} from '../../utils/GetCartData'
import { Product, ProductModel } from '../../content/productModel';
import { Business } from '../../content/businessModel';

const Product = () => {

    const [cartItems, setCartItems] = useState(shoppingCart.getItems())
    
    const router = useRouter();
    
    const data: Business = require('../../content/business.json')

    const listOfProducts: ProductModel = require('../../content/products.json');
    
    const id = router.query.id? parseInt(router.query.id as string, 10) : parseInt("0");
    
    const product: Product = listOfProducts.products[id];
    
    return (

        <div style={ { backgroundColor: "#F6F6F6", height:"100%", position:"relative", marginTop: 55 } }>
            <CssBaseline />

            <_AppBar itemCount={cartItems?.length}/>
            
            <ProductContent product={ product } updateItemCount = {setCartItems} />
            
            <Footer data={ data } />
        </div>

    );
}

export default Product
