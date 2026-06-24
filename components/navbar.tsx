import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className="hidden md:flex sticky top-0 inset-x-0 z-50 items-center justify-between px-8 transition-all duration-300 bg-background ring-blue-500 ring-inset">
			<Link className="px-4 py-2 text-lg font-bold tracking-tight rounded-full" href={'/'}>Home</Link>
			<ul className="flex items-center gap-1">
				<li className="">
					<Link className="px-4 py-2 rounded-full text-sm font-medium" href={'/'}>Link</Link>
				</li>
				<li className="">
					<Link className="px-4 py-2 rounded-full text-sm font-medium" href={'/'}>Link</Link>
				</li>
				<li className="">
					<Link className="px-4 py-2 rounded-full text-sm font-medium" href={'/'}>Link</Link>
				</li>
				<li className="">
					<Link className="px-4 py-2 rounded-full text-sm font-medium" href={'/'}>Link</Link>
				</li>
			</ul>
			<Link className="px-4 py-2 text-lg font-bold tracking-tight rounded-full bg-emerald-600" href={'/Test'}>Test</Link>
		</nav>
	);
}