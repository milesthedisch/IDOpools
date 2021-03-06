import React, { useEffect } from "react";
import ERC20Balance from "../ERC20Balance";
import DEX from "../DEX/DEX";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import BridgeWidget from "components/Common/BridgeWidget";
// import { WalletBalance } from "./LaunchPadBalance";
import { useWeb3Contract } from "react-moralis";
import { Button, Slider } from "@mui/material";
// import ContractResolver from "../Contract/Contract";
// import MoonEdge from "./moonedge_32.png";
import LogoMakerDAO from "../Icons/LogoMakerDAO";
import { useEthers } from "@usedapp/core";
import Wallet from "../Wallet/Wallet";
import { constants } from "ethers";
import { StakeForm } from "./StakeForm";
import { useMoralis } from "react-moralis";

const AvailablePools = () => {
  const { chainId } = useEthers();
  const { web3 } = useMoralis();
  return (
    <Paper sx={{ margin: "30px", padding: "20px" }}>
      <Button contained></Button>
      <Typography variant="h3">Available pools</Typography>
      <Paper>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <LogoMakerDAO
            sx={{ align: "center", width: "100px", height: "70px" }}
          />
          <List>
            <ListItem>
              <ListItemText>Contribution:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Pool stake:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Estimated APR:</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Divider />
      </Paper>
    </Paper>
  );
};

const Overview = () => {
  return (
    <Box sx={{width: "100%",margin:"20px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <StakeForm sx={{margin:"20px",}}
        token={{ address: "0x5798D8AD586d09AF26f06424cB566c1aB4778410" }}
      />
      <Box sx={{display: "flex", margin:"20px",flexDirection: "row"}}>
      <Wallet />
        <DEX chain="polygon" />
        <BridgeWidget />
      </Box>
      <AvailablePools />
      <AvailablePools />
      <Box sx={{ display: "flex", padding: "10px" }}>
        <ERC20Balance />
      </Box>
      <Box sx={{ display: "flex", padding: "10px" }}>
        <ERC20Balance />
      </Box>
    </Box>
  );
};

export default Overview;

{
  // /* <WalletBalance /> */
}
{
  /* <StakeTokens/> */
}
{
  /* <ContractResolver/> */
}
{
  /* <Box sx={{ display: "flex", padding: "10px" }}>
    <ERC20Balance />
    <DEX chain="polygon" />
  </Box> */
}
{
  /* <BridgeWidget /> */
}
