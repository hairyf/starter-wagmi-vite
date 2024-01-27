import viteLogo from '/vite.svg'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { withLayout } from '../layout'
import reactLogo from '../assets/react.svg'
import { useAccount } from 'wagmi'
import { getContract } from '@/utils'
import { contracts } from '@/config'

import './index.css'

function Page() {
  const { address, isConnected } = useAccount()
  async function transfer() {
    const erc20 = getContract(contracts.ERC20)
    const transaction = await erc20.transfer(address!, 0)
    await transaction.wait()
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React + Wagmi + Rainbowkit</h2>
      <div className="card">
        <div className="flex-center">
          <ConnectButton />
        </div>
        {isConnected && (
          <div className="flex-center mt-12px">
            <button onClick={transfer}>Transfer</button>
          </div>
        )}
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default withLayout(Page)
