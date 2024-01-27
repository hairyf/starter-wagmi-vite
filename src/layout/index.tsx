import type { FunctionComponent, PropsWithChildren } from 'react'

export function Layout(props: PropsWithChildren) {
  return (
    <div className="1231">
      {props.children}
    </div>
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
