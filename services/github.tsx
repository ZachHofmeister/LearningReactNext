const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.GITHUB_USERNAME;

const headers = {
	Authorization: `Bearer ${GITHUB_TOKEN}`,
	Accept: 'application/vnd.github+json',
	'X-GitHub-Api-Version': '2026-03-10',
	'User-Agent': `${USERNAME}-App`,
}

export interface GithubRepo {
	id: number,
	name: string,
	description: string,
	pushed_at: string,
}

export function getUsername() {
	return USERNAME;
}

export async function getProfileReadme(): Promise<string> {
	const url = `https://api.github.com/repos/${USERNAME}/${USERNAME}/readme`;
	const response = await fetch(
		url,
		{
			// modify headers to accept raw data from readme
			headers: {
				...headers,
				Accept: 'application/vnd.github.raw+json',
			},
			next: { revalidate: 3600 }
		}
	);
	if (!response.ok) return '';
	return response.text();
}

export async function getRepos(): Promise<GithubRepo[]> {
	const url = `https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=10`;
	const response = await fetch(
		url,
		{ headers: headers, next: { revalidate: 3600 } }
	);
	if (!response.ok) return []
	return response.json();
}