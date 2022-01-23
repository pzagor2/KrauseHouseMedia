import { ethers, Signer } from "ethers";

const getKrauseContract = (signer: Signer) => {
  const abi = [
    "function balanceOf(address _owner) view returns (uint256 balance)",
    "function transfer(address _to, uint256 _value) returns (bool)",
  ];

  const contractAddress = "0x9F6F91078A5072A8B54695DAfA2374Ab3cCd603b";

  const contract = new ethers.Contract(contractAddress, abi, signer);

  return contract;
};

export default getKrauseContract;
