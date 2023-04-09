import Navbar from './navbar'
import Footer from './footer'
import type { ReactNode } from 'react'

export default function Layout ({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <Navbar links={[]} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
