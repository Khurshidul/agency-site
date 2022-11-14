import React from "react";
import { Box, Grid } from "@mui/material";
import "./Banner.css";
interface PropTypes {}
const Banner: React.FC<PropTypes> = () => {
  return (
    <Box className="banner-bg">
      <Grid container>
        <Grid lg={6}></Grid>
        <Grid lg={6}>
          <Box className="agency-banner">
            <h1 className="creative-agency">We Are Creative Agency</h1>

            <p id="banner-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ducimus soluta unde officia fugiat voluptate rem iure
              possimus illum alias asperiores numquam quia, nostrum quisquam aut
              quae, neque, at consequuntur!
            </p>
            <button className="button-click">Click Here</button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
