import React, {useState} from "react";

import { CssBaseline } from "@mui/material"
import { _AppBar, Footer, HomeContent, HeroBanner } from '../components'

import { shoppingCart } from '../utils/GetCartData';
import { ProductModel } from "../content/productModel";
import { Business } from "../content/businessModel";
import Head from "next/head";

export default function Home() {
  const [cartItems, setCartItems] = useState(shoppingCart.getItems());
  
  const data: Business = require('../content/business.json')

  const listOfProducts: ProductModel = require('../content/products.json');

  return (

    <div style={ { backgroundColor: "#F6F6F6", height: "100%", position: "relative", marginTop: 55 }}>
      
      <CssBaseline />
      <Head>
        <title>
          2Gain Traders
        </title>
        <_AppBar itemCount={cartItems?.length}/>
        <HeroBanner url={ data?.banner } name={ data?.name } description={ data?.description }/>
      </Head>
      <HomeContent products = {listOfProducts.products} updateItemCount = {setCartItems}/>
      
      <Footer data={ data } />

    </div>

  )
}