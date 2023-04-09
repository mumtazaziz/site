import Link from 'next/link'

export default function Navbar ({ links }: { links: any[] }): JSX.Element {
  return (
    <header>
      Mumtaz Aziz
      {links.map(link => (
        <Link key={link} href={link}>
          {link}
        </Link>
      ))}
    </header>
  )
}
