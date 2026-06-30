import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PostGrid from '@/components/PostGrid';
import { getUsername, getProfileReadme } from '@/services/github';
import GithubRepos from '@/components/GithubRepos';

export default function Home() {
  return (
		<>
		<section className='pb-10'>
			<h1 className="font-bold text-accent">Hello from {getUsername()}:</h1>
			<Readme />
		</section>
		<section>
			{/* <PostGrid /> */}
			<GithubRepos />
		</section>
		</>
  );
}

async function Readme() {
	const readme = await getProfileReadme();

	return (
		// <p></p>
		<div className='prose'>
			<Markdown
				remarkPlugins={[remarkGfm]}
			>
				{readme}
			</Markdown>
		</div>
	);
}