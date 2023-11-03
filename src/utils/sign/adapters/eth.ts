import { ethers } from "ethers";

export const _signEthereumMessage = async (message: string, privateKey: string): Promise<string> => {
    const wallet = new ethers.Wallet(privateKey);
    const signature = await wallet.signMessage(message);
    return signature;
}
