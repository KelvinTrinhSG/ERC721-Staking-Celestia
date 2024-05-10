import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x806fe08Ed3Fef10737AA5b2EA4365891DB6f0174";
const rewardTokenContractAddress = "0xD2100467CBCd5EabEBEa73b28987FC1b9D385B6a";
const stakingContractAddress = "0x278398Ee8374C85EC3221B145e8e4A382bfb87C4";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});