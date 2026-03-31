import Link from 'next/link'


export default function LogoDefault() {
  return (
    <>
    <Link href='/'>
        <figure className="w-44 overflow-hidden">
        <img src='/assets/images/logo-small.png' alt="logo" className="w-full h-auto" />
        </figure>
    </Link>
    </>
  )
}
