import Post from './posts'

export default function Home() {
  return (
	<section>
		<h1 className="font-bold">Hello World</h1>
		<Post />
		<Post />
		<Post />
	</section>
  );
}