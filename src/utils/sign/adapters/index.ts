import { _signEthereumMessage } from "./eth";
import { _signSolanaMessage } from "./solana";


export default class Sign {

    signEthereurmMessage(message: string, privateKey: string) {
        return _signEthereumMessage(message, privateKey);
    }

    signSolanaMessage(message: string, privateKey: string) {
        return _signSolanaMessage(message, privateKey);
    }

}