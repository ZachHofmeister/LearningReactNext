import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='hidden md:flex sticky top-0 inset-x-0 z-50 items-center justify-between px-8 transition-all duration-300 bg-background ring-4 ring-indigo-500 ring-inset'>
			<Link href={'/'}>Home</Link>
			<ul>
				<li>Hello</li>
				<li>Hello</li>
				<li>Hello</li>
			</ul>
			<Link href={'/Test'}>Test</Link>
		</nav>
	);
}