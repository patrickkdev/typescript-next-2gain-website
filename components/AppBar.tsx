import React from "react";
import Link from 'next/link'

import { AppBar, Badge, IconButton, Toolbar } from "@mui/material"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { Home } from "@mui/icons-material";

const _AppBar = ({itemCount}:{itemCount: number}) => {

    return (
        <>
            <AppBar position="fixed" sx = {{backgroundColor: "black"}}>
                <Toolbar>
                    <Link href={"/"}>
                        <IconButton style = {{color: "inherit"}}>
                            <Home />
                        </IconButton>
                    </Link>
                    <div style={ { display: "flex", flex: "1", backgroundColor: "red" } }/>
                    <div style={ { display: "flex", flex: "1", backgroundColor: "red" } }/>
                    {false && <Link href={"/cart/0"}>
                        <IconButton style = {{color: "inherit"}}>
                            <Badge badgeContent={itemCount} color="error">
                                <AiOutlineShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>}
                </Toolbar>
            </AppBar>
        </>
  );
};

export default _AppBar;
