const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.GITHUB_USERNAME;

const headers = {
	Authorization: `Bearer ${GITHUB_TOKEN}`,
	Accept: 'application/vnd.github+json',
	'X-GitHub-Api-Version': '2026-03-10',
	'User-Agent': `${USERNAME}-App`,
}

export function getUsername() {
	return USERNAME;
}

export async function getProfileReadme(): Promise<string> {
	const url = `https://api.github.com/repos/${USERNAME}/${USERNAME}/readme`;
	const response = await fetch(
    url,
		{
			headers: {
				...headers,
				Accept: 'application/vnd.github.raw+json',
			},
			// next: {revalidate: 3600}
		}
	);
	if (!response.ok) return '';
	return response.text();
}