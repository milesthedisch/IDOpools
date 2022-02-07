import React, { useState } from "react";
import ApeLogo from "./Icons/ApeLogo";
import { Box, Container, Typography, Paper } from "@mui/material";

const LandingPageSection = (props) => {
  const [elevation, setElevation] = useState(1);
  return (
    <Paper
      onMouseEnter={() => {
        setElevation(14);
      }}
      onMouseLeave={() => {
        setElevation(1);
      }}
      elevation={elevation}
      sx={{
        maxWidth: "650px",
        float: props.float,
        margin: "40px",
        padding: "25px",
        borderRadius: "10px",
      }}
    >
      <Typography color="#0453F1" fontSize="40px">
        {props.title}
      </Typography>
      <Typography>{props.children}</Typography>
    </Paper>
  );
};

const LandingPage = () => {
  return (
    <Container
      sx={{
        marginTop: "60px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Box
          sx={{
            display: "flex",
            marginBottom: "100px",
            marginTop: "30px",
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ApeLogo
            sx={{color: "#000", width:"290.732",
            height:"322.033",alignSelf: "flex-end" }}
          />
          <Box sx={{ maxWidth: "600px", alignSelf: "flex-end" }}>
            <Typography color="#0453F1" fontSize="65px">
              APE FUEL
            </Typography>
            <Typography fontSize="30px">
              Lending pools that acts as a liquidity provider for traders that
              want to participate in IDO's
            </Typography>
          </Box>
        </Box>
        <Box>
          <LandingPageSection
            float="left"
            title="Stake Launchpad Tokens and Earn Venture Yield"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo venenatis interdum. Donec iaculis turpis sit amet neque
            condimentum, vel imperdiet ante condimentum. Suspendisse id purus
            sit amet nisl convallis ultrices. Sed condimentum pulvinar quam,
            placerat tincidunt neque mattis quis. Vivamus aliquet consectetur
            urna, id finibus turpis viverra a. Suspendisse eu tristique nunc, at
            luctus lorem. Duis vitae placerat arcu, porta faucibus nunc.
            Phasellus sed risus laoreet, condimentum justo et, convallis mi. In
            pretium urna a metus egestas, sit amet facilisis nisl ullamcorper.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nasceturnisl matti
          </LandingPageSection>
          <LandingPageSection
            float="right"
            title="Use Pool's Launchpad tokens to unlock Highier Tiers during IDO's"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo venenatis interdum. Donec iaculis turpis sit amet neque
            condimentum, vel imperdiet ante condimentum. Suspendisse id.t amet
            neque condimentum, vel imperdiet ante condimentum. Suspendisse
            Suspendisse Suspendisse Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum commodo venenatis interdum. Donec
            iaculis turpis sit amet neque condimentum, vel imperdiet ante
            condimentum. Suspendisse id.t amet neque condimentum, vel imperdiet
            ante condimentum. Suspendisse
          </LandingPageSection>
          <LandingPageSection
            float="left"
            title="Use APE FUEL to unlock Highier Tiers during IDO's"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo venenatis interdum. Donec iaculis turpis sit amet neque
            condimentum, vel imperdiet ante condimentum. Suspendisse id.t amet
            neque condimentum, vel imperdiet ante condimentum. Suspendisse
            Suspendisse Suspendisse Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum commodo venenatis interdum. Donec
            iaculis turpis sit amet neque condimentum, vel imperdiet ante
            condimentum. Suspendisse id.t amet neque condimentum, vel imperdiet
            ante condimentum. Suspendisse
          </LandingPageSection>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
