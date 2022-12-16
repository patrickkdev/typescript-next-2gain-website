import React  from "react";

import { Button, Typography } from "@mui/material"

import { WhatsApp } from '@mui/icons-material'

const Header = ({ name, description, contact }: { name: string, description: string, contact: string}) => {
    
    return (
        <>
            <div style={ { flexDirection: "column", display: "flex", justifyContent: "center", margin: 20 }}>
                <Typography color="green" variant="subtitle1" gutterBottom alignSelf="center">
                    Aberto agora
                </Typography>
                
                <div style={{alignSelf:"center"}}>
                    <Button variant="contained" size = "large" startIcon={ <WhatsApp /> } style={ { backgroundColor: "#1f6e04" } }>
                        { contact }
                    </Button>
                </div>  
            </div>
        </>
    )
};

export default Header;


{/* <div style={ { paddingTop: 20 } }>
    <Grid container justifyContent="center" spacing={2}>
        <Grid item>
            <IconButton>
                <FastfoodOutlined/>
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton>
                <CiPizza />
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton>
                <GiHamburger />
            </IconButton>
        </Grid>
    </Grid>
</div> */}