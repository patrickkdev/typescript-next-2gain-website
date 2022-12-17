import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {shoppingCart} from '../../utils/GetCartData'
import BusinessData from '../../utils/GetBusinessData';

import { _AppBar, Footer, CartContent } from '../../components';
import { CssBaseline } from '@mui/material';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(shoppingCart.getItems());

  const router = useRouter();
  const userId = router.query.userId? parseInt(router.query.userId as string, 10) : parseInt("0");

  const {data, isLoading, isFetching} = BusinessData();

  if (isLoading || router.query.userId == undefined)
  {
    return <div>Carregando..</div>;
  }

  if (!data){
    return <div>Sem dados</div>;
  }

  return (
    <div style={ { backgroundColor: "#F6F6F6", height:"100%", position:"relative", marginTop: 55 } }>
      <CssBaseline />

      <_AppBar itemCount={cartItems?.length}/>
      
      <CartContent itemsInCart={cartItems} updateCartItems= {setCartItems}/>

      {/* <Footer data={data?.data.attributes}/> */}
    </div>
  )
}

export default CartPage