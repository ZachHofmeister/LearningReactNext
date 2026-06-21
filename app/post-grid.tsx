import Image from "next/image";

const posts = [{
		id: 0,
		title: 'My Post',
		author: 'Zach Hofmeister',
		date: '6/20/26',
		desc: 'This is an example of a post',
		image: {
			url: '/annunciation.jpeg',
			alt: 'The Annunciation',
		}
	}, {
		id: 1,
		title: 'My Post',
		author: 'Zach Hofmeister',
		date: '6/20/26',
		desc: 'This is an example of a post',
		image: {
			url: '/annunciation.jpeg',
			alt: 'The Annunciation',
		}
	}, {
		id: 2,
		title: 'My Post',
		author: 'Zach Hofmeister',
		date: '6/20/26',
		desc: 'This is an example of a post',
		image: {
			url: '/annunciation.jpeg',
			alt: 'The Annunciation',
		}
	}, {
		id: 3,
		title: 'My Post',
		author: 'Zach Hofmeister',
		date: '6/20/26',
		desc: 'This is an example of a post',
		image: {
			url: '/annunciation.jpeg',
			alt: 'The Annunciation',
		}
	}, {
		id: 4,
		title: 'My Post',
		author: 'Zach Hofmeister',
		date: '6/20/26',
		desc: 'This is an example of a post',
		image: {
			url: '/annunciation.jpeg',
			alt: 'The Annunciation',
		}
	}, {
		id: 5,
		title: 'My Post',
		author: 'Zach Hofmeister',
		date: '6/20/26',
		desc: 'This is an example of a post',
		image: {
			url: '/annunciation.jpeg',
			alt: 'The Annunciation',
		}
	},
]

interface PostProps {
	title: string;
	author: string;
	date: string;
	desc?: string;
	image: {
		url: string;
		alt: string;
	}
}

function Post({title, author, date, desc, image}: PostProps) {
	  return (
		<a className="" href="/">
			<div className="rounded-[1em] overflow-hidden h-full bg-background border border-solid border-foreground text-foreground transition ease-in-out duration-250 hover:border-foreground hover:shadow-[0_0_3px_1px_var(--foreground)]">
				<div className="relative w-full h-40">
					<Image className="object-cover" src={image.url} alt={image.alt} fill={true}></Image>
				</div>
				<div className="p-5 box-border">
					<h2 className="text-2xl font-semibold">{title}</h2>
					<p className="text-sm">Published {date} by {author}</p>
					<p>
						{desc}
						<strong>...</strong>
					</p>
				</div>
			</div>
		</a>
	  );
}

export default function PostGrid() {
	// JSX components inside map need key props defined!
	const listPosts = posts.map(post => <Post key={post.id} {...post}/>);
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
			{listPosts}
		</section>
	);
}