"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
	{id: 1, url: "/", text: "Link1"},
	{id: 2, url: "/", text: "Link2"},
	{id: 3, url: "/", text: "Link3"},
	{id: 4, url: "/", text: "Link4"},
]

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 0);
		onScroll();
		//call onScroll when scroll happens, passive tells browser not to wait longer
		window.addEventListener('scroll', onScroll, {passive: true});
		//will be called when component unmounts to remove listener
		return () => window.removeEventListener('scroll', onScroll);
	}, []); //empty dependency array, means this will only happen once

	return (
		<>
		{/* ---------- TOP NAVBAR ---------- */}
		<nav className={`flex sticky top-0 z-50 items-center justify-between px-5 md:px-8 py-2 transition-all duration-300 bg-background ${
			scrolled ? 'h-14 md:h-16 shadow-sm border-b-gray-200'
				: 'h-14 md:h-20 border-b-transparent'
		}`}>
			<Link className="px-4 py-2 text-lg font-bold tracking-tight rounded-full" href={'/'}>Home</Link>
			<ul className="hidden md:flex items-center gap-1">
				{links.map(link => (
					<li key={link.id} className="">
						<Link className="px-4 py-2 rounded-full text-sm font-medium" href={link.url}>{link.text}</Link>
					</li>
				))}
			</ul>
			<Link className="hidden md:inline px-4 py-2 text-md font-semibold rounded-full bg-emerald-600 transition-all duration:300 hover:bg-emerald-800" href={'/Test'}>Contact Me</Link>
		</nav>
		{/* ---------- MOBILE BOTTOM NAVBAR ---------- */}
		<nav
			className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background border-t-gray-200 flex items-stretch justify-center"
			style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
		>
			<Link className="px-4 py-2.5 rounded-full text-sm font-medium" href={'/'}>Link</Link>
			<Link className="px-4 py-2.5 rounded-full text-sm font-medium" href={'/'}>Link</Link>
			<Link className="px-4 py-2.5 rounded-full text-sm font-medium" href={'/'}>Link</Link>
			<Link className="px-4 py-2.5 rounded-full text-sm font-medium" href={'/'}>Link</Link>
			<Link className="-mt-6 w-12 h-12 rounded-full justify-center text-xs font-semibold bg-emerald-600 active:scale-95 transition-transform hover:bg-emerald-800" href={'/Test'}>Start</Link>
		</nav>
		</>
	);
}