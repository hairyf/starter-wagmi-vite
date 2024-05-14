/* eslint-disable no-console */
/* eslint-disable react-dom/no-missing-button-type */
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { getEthersContract } from 'wagmi-ethers-adapters/ethers-v6'
import { withLayout } from '../layout'
import { contracts } from '@/config'

function Page() {
  const { address, isConnected } = useAccount()
  async function transfer() {
    const erc20 = getEthersContract(contracts.ERC20)
    const transaction = await erc20.transfer(address!, 0)
    console.log(transaction)
  }
  return (
    <>
      <div className="flex-center">
        <ConnectButton />
      </div>
      {isConnected && (
        <div className="flex-center mt-12px">
          <button onClick={transfer}>Transfer By ERC20</button>
        </div>
      )}
    </>
  )
}

export default withLayout(Page)
