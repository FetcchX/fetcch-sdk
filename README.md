# fetcch.ts

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Fetcch is the first pull payments layer for blockchain, this SDK will enable anyone to

## Features


- create/get/update multichain identities
- create/get/resolve crosschain transaction requests (pull payments)
- create/get/add/remove contacts from circles (address books)
- utility functions for signatures, encoding, decoding etc
- ✨Magic ✨

fetcch.ts is a lightweight library that enables developer to use Fetcch in a more easier way.

## Important Links
- [Website](https://fetcch.xyz)
- [Docs](https://docs.fetcch.xyz)
- [SDK Docs](https://docs.fetcch.xyz)

## Installation

```sh
npm i @fetcch/sdk

yarn add @fetcch/sdk

pnpm i @fetcch/sdk
```

## Usage

### Initialize

```ts
import Fetcch from "@fetcch/sdk"

const fetcch = new Fetcch("SECRET_KEY")

const identity = fetcch.identity.create(IDENTITY_DATA)

const request = fetcch.request.create(REQUEST_DATA)

const circle = fetcch.addressBook.create(ADDRESS_BOOK_DATA)
```

For more info, checkout our [Docs](https://docs.fetcch.xyz)