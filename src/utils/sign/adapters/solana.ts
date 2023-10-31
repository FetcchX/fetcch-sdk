import nacl from "tweetnacl";

export const _signSolanaMessage = async (message: string, privateKey: string) => {
    const messageBytes = new TextEncoder().encode(message);

    const signature = nacl.sign.detached(messageBytes, new TextEncoder().encode(privateKey));
    return signature;
};


