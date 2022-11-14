import React from "react";
import { Box, Grid } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import slide from "../../../images/slide-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Slide.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
interface PropTypes {}

const Slide: React.FC<PropTypes> = () => {
  return (
    <Box className="slide-section">
      <Grid container>
        <Grid lg={6}>
          <img id="slide-img" src={slide} alt="" />
        </Grid>
        <Grid lg={6} className="slide-grid">
          <Box>
            <h3 id="ctv-agency">we are</h3>
            <h3 id="ctv-agency">creative agency</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
              <br />
              <br />
              <span>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </span>
            </p>
            <button className="button-click3">Click Here</button>
          </Box>
        </Grid>
      </Grid>
      <Grid container className="media-section">
        <Grid lg={6} className="media-grid-1">
          <h5 id="slide-lorem-title">Lorem ipsum dolor sit amet</h5>
          <Box className="all-media">
            <div className="medias">
              <div>
                <FontAwesomeIcon
                  className="media-icon"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h4>EMAIL</h4>
                <small>free@psdfreebies.com</small>
              </div>
            </div>

            <div className="medias">
              <div>
                <FontAwesomeIcon
                  className="media-icon"
                  icon={faMobileScreen}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h4>Call Us</h4>
                <small>
                  +123 456 7890 <br />
                  +123 456 7890
                </small>
              </div>
            </div>

            <div className="medias">
              <div>
                <FontAwesomeIcon
                  className="media-icon"
                  icon={faMapLocation}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h4>ADDRESS</h4>
                <small>
                  123, Main Road, New City,
                  <br /> My Country 123456
                </small>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid lg={6} className="media-grid-2">
          <h4>Say Hello !</h4>
          <form action="">
            <div className="form">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="enter your name"
              />
            </div>
            <div className="form">
              <label htmlFor="name">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="enter your email"
              />
            </div>
            <div className="form">
              <label htmlFor="name">Phone</label>
              <input
                id="phone"
                type="number"
                name="pnone"
                placeholder="enter your phone number"
              />
            </div>

            <div className="form">
              <label htmlFor="message">
                Message
                <TextareaAutosize
                  id="message"
                  aria-label="minimum height"
                  minRows={5}
                  //   placeholder="Minimum 3 rows"
                />
              </label>
            </div>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Slide;
