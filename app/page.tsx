import Image from "next/image";

function Post() {
	  return (
		<div className="w-1/2">
			<Image src="/annunciation.jpeg" alt="the annunciation" width={200} height={200}></Image>
		</div>
	  );
}

export default function Home() {
  return (
	<div>
		<h1 className="text-4xl font-bold text-center">Hello World</h1>
		<Post />
	</div>
  );
}