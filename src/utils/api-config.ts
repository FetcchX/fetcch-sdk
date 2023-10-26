export default class Apis {
    static baseURL: string = "https://staging-api.fetcch.xyz/v1/";
  
    
    // Identity
    static wGetIdentityEndpoint: string = `${Apis.baseURL}identity`;
    static wIdentityGenerateMessageEndpoint: string = `${Apis.baseURL}identity/generate-message`;
    static findAddressByIdentityIdEndpoint: string = `${Apis.baseURL}identity/find-address`;
    static wGenearteMerkleProofEndpoint: string = `${Apis.baseURL}identity/generate-merkle-proof`;
  
    // Payment-Request
    static wPaymentRequestEndpoint: string = `${Apis.baseURL}transaction-request`;
    static wPaymentRequestGenerateMessageEndpoint: string = `${Apis.baseURL}transaction-request/generate-message`;
  
    // Payments
    static wBuildTransactionEndpoint: string = `${Apis.baseURL}payment/build-transaction`;
    static wDryBuildTransactionEndpoint: string = `${Apis.baseURL}payment/dry-build-transaction`;
  
    // AddressBook
    static wAddressBookEndpoint: string = `${Apis.baseURL}address-book`;
    static wAddressBookGenerateMessageEndpoint: string = `${Apis.baseURL}address-book/generate-message`;
    static wGenerateAddressBookRequestMessageEndpoint: string = `${Apis.baseURL}address-book/request/generate-message`;
    static wAddressBookRequestEndpoint: string = `${Apis.baseURL}address-book/request`;
  
    // Login
    static wGenerateAuthenticationMessageEndpoint: string = `${Apis.baseURL}authentication/generate-message`;
    static wAuthenticationEndpoint: string = `${Apis.baseURL}authentication/`;

    // Provider
    static wProviderEndpoint: string = `${Apis.baseURL}provider`;

  }
  