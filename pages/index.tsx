import React, {useState} from "react";

import { CssBaseline } from "@mui/material"
import { _AppBar, Footer, HomeContent, HeroBanner } from '../components'

import BusinessData from '../utils/GetBusinessData'
import { shoppingCart } from '../utils/GetCartData';
import { ProductModel } from "../content/productModel";

export default function Home() {
  const [cartItems, setCartItems] = useState(shoppingCart.getItems());
  const { data, isLoading, isFetching } = BusinessData();

  const listOfProducts: ProductModel = require('../content/products.json');

  if (isLoading){
    return <div>Carregando...</div>;
  }
  
  if (!data){
    return <div>Sem dados</div>;
  }

  return (

    <div style={ { backgroundColor: "#F6F6F6", height: "100%", position: "relative", marginTop: 55 }}>
      
      <CssBaseline />
      
      <_AppBar itemCount={cartItems?.length}/>

      <HeroBanner url={ data?.banner } name={ data?.name } description={ data?.description }/>

      <HomeContent products = {listOfProducts.products} updateItemCount = {setCartItems}/>
      
      <Footer data={ data } />

    </div>

  )
}