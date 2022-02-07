import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  Button,
  Typography,
  Accordion,
  Divider,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Address from "../Address/Address";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ERC20Balance from "../ERC20Balance";
import NativeTransactions from "../NativeTransactions/NativeTransactions";

const SimpleAccordion = () => {
  return (
    <div>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Recent transactions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <NativeTransactions />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ERC20 Token Blances</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ERC20Balance />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const SideMenu = () => {
  return (
    <Box
      sx={{
        justifyContent: "space-between",
        width: "670px",
        margin: "30px",
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ width: "600" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h3">Wallet assets</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">DAO: 358423</Typography>
          <Typography variant="h6">Your share: 10 000</Typography>
          <Typography variant="h6">(LP Share): 30 000</Typography>
        </Box>
        <Paper
          sx={{
            width: "300px",
            marginRight: "0px",
            marginLeft: "auto",
            marginTop: "0px",
            marginBottom: "auto",
          }}
          elevation={6}
        >
          <Typography>
            Registered Wallet Address 0xf39f d6e51aad88f6f4b92266{" "}
          </Typography>
          <Typography variant="h6">Winings</Typography>
          <Typography></Typography>
          <Button fullWidth={true} variant="contained">
            WITHDRAW IDO WININGS
          </Button>
        </Paper>
      </Box>
      <Typography variant="h4">Transcation History</Typography>
      <SimpleAccordion />
    </Box>
  );
};

const LiquidityPools = () => {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Typography align="center" variant="h4">
        Enabled Launchpads
      </Typography>

      <Box sx={{display: "flex", flexDirection: "row", minWidth: "600px", spacing: "20px", alignItems: "center", justifyContent: "center"}}>
        <Paper sx={{margin: "30px", padding: "10px"}}>
          <Typography variant="h4" align="center">
            Moon Edge
          </Typography>
          <Button variant="contained" disabled fullWidth={true}>
            Full allocation reached
          </Button>
          <img src="https://moonedge.finance/_nuxt/img/moonedge-logo-sm.09369a5.svg" />
          <List sx={{ minHeight: "150px" }}>
            <ListItem>
              <ListItemText>Pool address:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Tier:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>LP Share:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Your Share:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Pool size:</ListItemText>
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{margin: "30px", padding: "10px"}}>
          <Typography variant="h4" align="center">
            Moon Edge
          </Typography>
          <Button variant="contained" disabled fullWidth={true}>
            Full allocation reached
          </Button>
          <img src="https://moonedge.finance/_nuxt/img/moonedge-logo-sm.09369a5.svg" />
          <List sx={{ minHeight: "150px" }}>
            <ListItem>
              <ListItemText>Pool address:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Tier:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>LP Share:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Your Share:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Pool size:</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

const Overview = () => {
  return (
    <Box
      sx={{ minWidth: "100%", backgroundColor: "#F2F2F2", display: "flex", flexDirection: "row" }}
    >
      <SideMenu />
      <LiquidityPools />
    </Box>
  );
};

export default Overview;
