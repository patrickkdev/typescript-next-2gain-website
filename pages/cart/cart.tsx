import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {shoppingCart} from '../../utils/GetCartData'
import BusinessData from '../../utils/GetBusinessData';

import { _AppBar, CartContent } from '../../components';
import { CssBaseline } from '@mui/material';
import { Business } from '../../content/businessModel';

const CartPage = () => {
  const [cartItems, setCartItems] = useState(shoppingCart.getItems());

  const data: Business = require('../../content/business.json')

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