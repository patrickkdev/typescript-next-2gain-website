import React, {useState} from 'react'
import {useRouter} from 'next/router'

import { _AppBar, Footer, ProductContent } from '../../components'
import { CssBaseline } from "@mui/material"

import BusinessData from '../../utils/GetBusinessData';
import {shoppingCart} from '../../utils/GetCartData'

const Product = () => {

    const [cartItems, setCartItems] = useState(shoppingCart.getItems())
    
    const router = useRouter();
    
    const { data, isLoading, isFetching } = BusinessData();
    
    const id = router.query.id? parseInt(router.query.id as string, 10) : parseInt("0");
    
    if (isLoading || router.query.id == undefined) {
        return <div>Carregando...</div>;
    }
    
    if (!data) {
        return <div>Sem dados</div>;
    }
    
    const product: any = data?.data.attributes.store_products.data.find((element: any) => element.id == id);
    
    return (

        <div style={ { backgroundColor: "#F6F6F6", height:"100%", position:"relative", marginTop: 50 } }>
            <CssBaseline />

            <_AppBar itemCount={cartItems?.length}/>
            
            <ProductContent product={ product } updateItemCount = {setCartItems} />
            
            <Footer data={ data?.data.attributes } />
        </div>

    );
}

export default Product
