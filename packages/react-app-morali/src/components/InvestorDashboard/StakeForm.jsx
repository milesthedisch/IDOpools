import * as React from "react";
import { Typography, Paper, Button, Slider, Box } from "@mui/material";
// import { useStakeTokens } from "../../hooks/useStakeTokens2";
import { utils } from "ethers";
import { useContractLoader } from "eth-hooks";
import { useMoralis, useChain, useWeb3ExecuteFunction } from "react-moralis";
import { useContractConfig } from "hooks/useContractConfig";
import {
  useContractReader,
  useEthersContext,
  useUserProviderAndSigner,
  useGasPrice,
} from "eth-hooks";
import Transactor from "helpers/Transactor";
import LaunchPadVaultABI from "./mumbai_LaunchPadVault.json";

export const StakeForm = ({ token }) => {
  const { chainId, Moralis } = useMoralis();
  const { chain } = useChain();
  const contractProcessor = useWeb3ExecuteFunction();
  const [amount, setValue] = React.useState(30);
  const contractConfig = useContractConfig();
  // const LaunchPadVault = useContractLoader(contractConfig).deployedContracts;

  // If you want to make 🔐 write transactions to your contracts, use the userSigner:
  // const writeContracts = useContractLoader(account, contractConfig);
  // const { stakeTokens, stakeTokensState } = useStakeTokens(address);
  // const LaunchPadVault = useContractExistsAtAddress(
  //   "0x5C49378481A526F95353354FBeDD14Ca21CdA05c"
  // );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Vault");
  };

  let options = {
    contractAddress: "0x5C49378481A526F95353354FBeDD14Ca21CdA05c",
    functionName: "stakers",
    abi: LaunchPadVaultABI,
    params: [],
  };
  // const userSigner = useUserProviderAndSigner(web3);
  const gasPrice = useGasPrice(80001, "average", 2);
  async function Stake(amount) {
    await contractProcessor.fetch({
      params: options,
      msgValue: utils.parseEther(amount.toString()),
    });
  }
  const handleClick = () => {};

  // const handleStakeSubmit = () => {
  //   const amountAsWei = utils.parseEther(amount.toString());
  //   return stakeTokens(amountAsWei);
  // };

  return (
    <Paper sx={{ margin: "20px", padding: "20px", marginTop: "90px", minHeight: "300px", alignItems: "center", display:"flex", justifyContent:"center", flexDirection: "column" }}>
      <Typography variant="h6">Stake DAO</Typography>
      <Box sx={{height: "100px"}}>
    <Typography variant="h2">Avaialble to stake: </Typography>
      </Box>
      <Slider aria-label="Volume" amount={amount} onChange={handleChange} sx={{maxWidth: "70vw"}} />
      <Typography variant="h7">{amount} / 100</Typography>
      <Button
        variant="contained"
        sx={{ width: "300px" }}
        onClick={() => {
          Stake(100);
        }}
      >
        Stake
      </Button>
    </Paper>
  );
};
