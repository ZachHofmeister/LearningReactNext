import Image from "next/image";

function Post() {
	  return (
		<a className="" href="/">
			<div className="rounded-[1em] overflow-hidden h-full bg-background border border-solid border-foreground text-foreground transition ease-in-out duration-250 hover:border-foreground hover:shadow-[0_0_3px_1px_var(--foreground)]">
				<div className="relative w-full h-40">
					<Image className="object-cover" src="/annunciation.jpeg" alt="the annunciation" fill={true}></Image>
				</div>
				<div className="p-5 box-border">
					<h2 className="text-2xl font-semibold">My Post</h2>
					<p className="text-sm">Published 06/14/2026 by Zach Hofmeister</p>
					<p>
						here is the blurb
						<strong>...</strong>
					</p>
				</div>
			</div>
		</a>
	  );
}

export default function PostGrid() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</section>
	);
}