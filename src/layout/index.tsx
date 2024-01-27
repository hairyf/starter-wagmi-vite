import type { FunctionComponent, PropsWithChildren } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'
import './index.css'

export function Layout(props: PropsWithChildren) {
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
        {props.children}
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

export function withLayout<T extends FunctionComponent<any>>(Component: T, Custom?: FunctionComponent) {
  function Wither(props: any) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
  return Custom || Wither
}
