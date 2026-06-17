import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='p-10'>
			<Link href={'/'}>Home</Link>
			<Link href={'/Test'}>Test</Link>
		</nav>
	);
}