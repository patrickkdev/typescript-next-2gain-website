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

    <div style={ { backgroundColor: "#F6F6F6", height: "100%", position: "relative", marginTop: 55 }}>
      
      <CssBaseline />
      
      <_AppBar itemCount={cartItems?.length}/>

      <HeroBanner url={ data?.banner } name={ data?.name } description={ data?.description }/>

      <HomeContent products = {data?.products} updateItemCount = {setCartItems}/>
      
      <Footer data={ data } />

    </div>

  )
}