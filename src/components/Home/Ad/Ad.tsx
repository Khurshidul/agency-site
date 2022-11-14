import React from "react";
import { Box, Grid } from "@mui/material";
import watch from "../../../images/watch.jpg";
import "./Ad.css";
interface PropTypes {}

const Ad: React.FC<PropTypes> = () => {
  return (
    <Grid container className="ad">
      <Grid lg={6} xs sm={8} className="ad1-grid1">
        <h3 id="ad-title">
          We Are <br /> Creative
        </h3>
      </Grid>
      <Grid lg={6} xs sm={4} className="ad1-grid2">
        <img id="watch" src={watch} alt="" />
      </Grid>
    </Grid>
  );
};

export default Ad;
