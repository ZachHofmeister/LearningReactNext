import Image from "next/image";
import { GithubRepo, getRepos } from "@/services/github";

function RepoTile(repo: GithubRepo) {
	const placeholderImageUrl = '/annunciation.jpeg';
	return (
		<div className="rounded-[1em] overflow-hidden h-full bg-background border border-solid border-foreground text-foreground transition ease-in-out duration-250 hover:border-foreground hover:shadow-[0_0_3px_1px_var(--foreground)]">
			<div className="relative w-full h-40">
				<Image className="object-cover" src={placeholderImageUrl} alt={placeholderImageUrl} fill={true}></Image>
			</div>
			<div className="p-5 box-border">
				<h2 className="text-2xl font-semibold">{repo.name}</h2>
				<p className="text-sm">Last pushed at {repo.pushed_at}</p>
				<p>
					{repo.description}
				</p>
			</div>
		</div>
	);
}

export default async function GithubRepos() {
	const repos = await getRepos();
	const listRepoTiles = repos.map(repo => <RepoTile key={repo.id} {...repo}/>);

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			{listRepoTiles}
		</section>
	);
}