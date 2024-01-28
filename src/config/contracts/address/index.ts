export const all = {
  5: {
    ZERO: '0x0000000000000000000000000000000000000000',
  },
  1: {
    ZERO: '0x0000000000000000000000000000000000000000',
  },
}

export const addresses = all[import.meta.env.VITE_APP_CHAIN_ID as keyof typeof all]
