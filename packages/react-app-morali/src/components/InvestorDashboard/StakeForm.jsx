import * as React from "react";
import { Paper, Button, Slider, Box } from "@mui/material";
import { useStakeTokens } from "../../hooks/useStakeTokens2";
import { utils } from "ethers";

export const StakeForm = ({ token }) => {
  const { address } = token;
  const [amount, setValue] = React.useState(30);

  //   const { stakeTokens, stakeTokensState } = useStakeTokens(address);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const handleStakeSubmit = () => {
  //     const amountAsWei = utils.parseEther(amount.toString());
  //     return stakeTokens(amountAsWei);
  //   };
  return (
    <Paper sx={{ margin: "20px", padding: "20px" }}>
      <Slider aria-label="Volume" amount={amount} onChange={handleChange} />
      <Button>Stake</Button>
    </Paper>
  );
};
