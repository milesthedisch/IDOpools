import { useEffect, useState } from "react"
import { useContractFunction, useEthers } from "@usedapp/core"
import LaunchPadVault from "../contracts/LaunchPadVault.json"
// import Erc20 from "../contracts/ERC20.json"
import { utils, constants } from "ethers"
import { Contract } from "@ethersproject/contracts"

export const useStakeTokens = () => {
    const {chainId} = "80001"
    const {abi} = LaunchPadVault
    const launchPadVaultAddress = "0xbc3c6E4117f426d24EB35d0c44916Dd152967f02"
    const launchPadVaultInterface = new utils.Interface(abi)
    
    const launchPadVaultContract = new Contract({
        launchPadVaultAddress,
        launchPadVaultInterface
    })

    const { send: stakeTokens, state: stakeTokensState } =
    useContractFunction(launchPadVaultContract, "stakeTokens", {
      transactionName: "Stake tokens",
    })

    
    return {stakeTokens, stakeTokensState}
};
