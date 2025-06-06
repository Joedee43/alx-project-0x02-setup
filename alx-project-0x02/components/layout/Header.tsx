import Link from "next/link"
export default function Header() {
  return (
    <div>
        {/* <h1>The header</h1> */}
        <nav className="flex space-x-4">
          <Link href="/home">
            Home
          </Link>
          <Link href="/about">
           About
          </Link>
        </nav>
    </div>
  )
}
