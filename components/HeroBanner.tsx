import React from "react";

import {Typography } from "@mui/material"

const HeroBanner = (props: any) => {
    return (
        <div style={ {
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            height: "60vw",
            maxHeight: "70vh",
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 65%, rgba(0, 0, 0, 1) 100%), url(${props.url})`,
            alignContent: "center",
            backgroundPosition: "center",
            backgroundSize: "cover",
            } }>
            { props.children }
            <div style={ { display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", height: "100%", width: "50%"} }>
                <Typography variant="h1" color="textPrimary" align="center" fontSize="8.5vw" fontFamily={ "fantasy" }>
                    { props.name }
                </Typography>
                <Typography variant="h3" color="textPrimary" align="center" fontSize= "3vw" fontFamily={ "inherit" }>
                    { props.description }
                </Typography>
            </div>
        </div>
        
    
        //backup old banner
        //https://thumbs.dreamstime.com/b/food-banner-pasta-chicken-pumpkin-salad-meat-mushrooms-white-wooden-background-top-view-free-space-text-202154861.jpg
        //https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fA%3D%3D&w=1000&q=80
    );
};

export default HeroBanner;
