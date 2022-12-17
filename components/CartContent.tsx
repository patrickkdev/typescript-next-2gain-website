import Link from 'next/link'
import React, {useState} from 'react'

import GetWindowSize from '../utils/GetWindowSize'
import { shoppingCart } from '../utils/GetCartData'
import { CreatePayment } from '../utils/MercadoPago/CreatePayment'

import { Button, IconButton, Paper, Typography } from '@mui/material'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const CartContent = ({itemsInCart, updateCartItems}:{itemsInCart:any[], updateCartItems: Function}) => {
    const [cartPrice, setCartPrice] = useState(0);
    
    const portrait: boolean = GetWindowSize().width < 1000;

    const deliveryCost: number = 5
    
    React.useEffect(() => {
        var price = 0;
        itemsInCart.forEach(item => {price += item.attributes.precoAtual * item.quantity});
        setCartPrice(price);
    }, [itemsInCart]);

    return (
        <div>
            {itemsInCart && <Paper elevation={5} style={{display:"flex", flexDirection: portrait? "column":"row", minHeight: "calc(100vh - 55px)",}}>
                <div style = {{
                        flex:1,
                        padding: "10px",
                        marginRight: portrait? undefined:"35%",
                        justifyContent:"center",
                    }}>
                    <h4
                    style={{textAlign:"center"}}>
                        Itens no carrinho
                    </h4>
                    {itemsInCart.map((item) => {
                        return (
                            <Paper key={itemsInCart.indexOf(item)} sx={{paddingRight: "10px", flex: 1, display:"flex", height: "100px", flexDirection:"row", backgroundColor: "#F9F9F9", marginBottom: "10px", alignItems:"space-between"}} elevation = {10}>
                                <Link href={"/product/" + item.id} style={{flex: 1, display:"flex", height: "100px", flexDirection:"row"}}>
                                    <div style={{height:"100%", width: "100px", backgroundImage:`url(${item.attributes?.image})`,
                                                    backgroundPosition:"center", backgroundSize:"cover"}}>
                                    </div>  
                                    <div style={{justifyContent: "center", padding: "10px", flex: 1, display:"flex", flexDirection:"column", overflow:"hidden"}}>
                                        <Typography fontSize={16} fontWeight={"bold"} color={"#217021"}>
                                                {item.attributes?.name}</Typography>
                                        <Typography fontSize={20} color={"textSecondary"}> R${(item.attributes?.precoAtual * item.quantity as number).toFixed(2)}</Typography>
                                    </div>
                                </Link>                
                                <div style={{display:"flex", height:"100%", flexDirection: "row", alignItems:"center"}}>
                                    <IconButton style = {{height: 50, width: 50,alignSelf:"center"}} onClick={() => {shoppingCart.remove(item, updateCartItems)}}>
                                        <AiFillMinusCircle style={{height: 30, width: 30}}/>
                                    </IconButton>

                                    <Typography align={"center"} textAlign={"center"} fontSize={16} fontWeight="bold">{item.quantity}</Typography>
                                    
                                    <IconButton style = {{height: 50, width: 50, alignSelf:"center"}} onClick={() => {shoppingCart.add(item, updateCartItems)}}>
                                        <AiFillPlusCircle style={{height: 30, width: 30}}/>
                                    </IconButton>
                                </div>  
                            </Paper>
                            );
                        })
                    }
                </div>
                <div style = {{
                            height:portrait? undefined: "100vh",
                            width: portrait? "100%":"35%",
                            padding: "10px",
                            paddingBottom:"10px",
                            justifyContent: "center",
                            flexDirection: "column",
                            textAlign:"center",
                            alignItems:"center",
                            position: portrait? undefined:"fixed",
                            right:0,}}>
                    <h4>Detalhes
                    </h4>
                    <Paper elevation = {10} style={{padding: "10px", flex:1, display:"flex", flexDirection:"column"}}>
                        <Typography fontSize={16} fontWeight= {"bold"} color={"textPrimary"} gutterBottom>Preço</Typography>
                        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
                            <Typography fontSize={14} color={"textSecondary"}>Produtos: </Typography>
                            <Typography fontSize={14} color={"textSecondary"}>R$ {cartPrice.toFixed(2)}</Typography>
                        </div>
                        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
                            <Typography fontSize={14} color={"textSecondary"}>Entrega:</Typography>
                            <Typography fontSize={14} color={"textSecondary"}>R$ 5.00</Typography>
                        </div>
                        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
                            <Typography fontSize={14} color={"textSecondary"}>Desconto</Typography>
                            <Typography fontSize={14} color={"textSecondary"}>-R$ 0.00</Typography>
                        </div>
                        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
                            <Typography fontSize={14} color={"textPrimary"}>Total:</Typography>
                            <Typography fontSize={14} color={"textPrimary"}>R$ {(cartPrice + deliveryCost).toFixed(2)}</Typography>
                        </div>
                    </Paper>
                    <Paper elevation = {10} style={{marginTop: "10px", padding: "10px", flex:1, display:"flex", flexDirection:"column"}}>
                        <Typography fontSize={16} fontWeight= {"bold"} color={"textPrimary"} gutterBottom>Entrega</Typography>
                        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
                            <Typography fontSize={14} color={"textSecondary"}>Rua: </Typography>
                            <Typography fontSize={14} color={"textSecondary"}>Eduardo Aymores Jones</Typography>
                        </div>
                        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
                            <Typography fontSize={14} color={"textSecondary"}>Número:</Typography>
                            <Typography fontSize={14} color={"textSecondary"}>59</Typography>
                        </div>
                        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
                            <Typography fontSize={14} color={"textSecondary"}>Bairro:</Typography>
                            <Typography fontSize={14} color={"textSecondary"}>Cascalho</Typography>
                        </div>
                        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
                            <Typography fontSize={14} color={"textSecondary"}>CEP:</Typography>
                            <Typography fontSize={14} color={"textSecondary"}>34.000-000</Typography>
                        </div>
                    </Paper>
                    <Button onClick= {() => {CreatePayment(itemsInCart).then((data)=>{window.open(data.init_point, "_blank")})}} variant="contained" sx={{width:"100%", height: 50, marginTop:"10px"}}>
                        <Typography fontSize={16} color={"white"}>Pagamento</Typography>
                    </Button>
                </div>
            </Paper>}
        </div>
    );
}

export default CartContent