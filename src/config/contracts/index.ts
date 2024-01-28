import * as abis from './abis'
import { addresses } from './address'

export const contracts = {
  ERC20: { abi: abis.ERC20Fragment, address: addresses.ZERO },
}

export * from './abis'
