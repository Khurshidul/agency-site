import React from "react";
import "./Ad2.css";
import { Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
interface PropTypes {}

const Ad2: React.FC<PropTypes> = () => {
  return (
    <Box className="ad2">
      <Grid container spacing={2}>
        <Grid lg={4}>
          <h2 id="make-awsome">What</h2>
          <h2 id="make-awsome1">Makes us</h2>
          <h2 id="make-awsome2">Awesome?</h2>
          <button id="click-here2">CLICK HERE</button>
        </Grid>
        <Grid className="ad-section2" lg={8}>
          <div>
            <FontAwesomeIcon className="ad2-icons" icon={faFlag} />
            <br />
            <h6>
              we are
              <br />
              creative
            </h6>
          </div>
          <div>
            <FontAwesomeIcon className="ad2-icons" icon={faDesktop} />
            <br />
            <h6>
              we are
              <br /> Better
            </h6>
          </div>
          <div>
            <FontAwesomeIcon className="ad2-icons" icon={faUser} />
            <br />
            <h6>
              we are
              <br /> Best
            </h6>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid lg={4}></Grid>
        <Grid lg={8}>
          <Box className="ad2-paragraphs">
            <small>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquiminim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliqui
            </small>
            <small>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquiminim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliqui
            </small>
            <small>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquiminim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliqui
            </small>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ad2;
