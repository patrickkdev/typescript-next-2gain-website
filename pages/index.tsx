import React, {useState} from "react";

import { CssBaseline } from "@mui/material"
import { _AppBar, Footer, HomeContent, HeroBanner } from '../components'

import BusinessData from '../utils/GetBusinessData'
import { shoppingCart } from '../utils/GetCartData';

export default function Home() {
  const [cartItems, setCartItems] = useState(shoppingCart.getItems());
  const { data, isLoading, isFetching } = BusinessData();

  if (isLoading){
    return <div>Carregando...</div>;
  }
  
  if (!data){
    return <div>Sem dados</div>;
  }

  return (

    <div style={ { backgroundColor: "#F6F6F6", height: "100%", position: "relative", marginTop: 50 }}>
      
      <CssBaseline />
      
      <_AppBar itemCount={cartItems?.length}/>

      <HeroBanner url={ data?.data.attributes.banner } name={ data?.data.attributes.name } description={ data?.data.attributes.description }/>

      <HomeContent products = {data?.data.attributes.store_products.data} updateItemCount = {setCartItems}/>
      
      <Footer data={ data?.data.attributes } />

    </div>

  )
}