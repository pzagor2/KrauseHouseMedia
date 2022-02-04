import { ethers, Signer } from "ethers";

const getMaticContract = (signer: Signer) => {
  const abi = [
    "function balanceOf(address _owner) view returns (uint256 balance)",
    "function transfer(address _to, uint256 _value) returns (bool)",
  ];

  const contractAddress = "0x0000000000000000000000000000000000001010";

  const contract = new ethers.Contract(contractAddress, abi, signer);

  return contract;
};

export default getKrauseContract;
